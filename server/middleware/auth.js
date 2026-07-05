import jwt from 'jsonwebtoken';
import { prisma } from '../config/db.js';

export const protect = async (req, res, next) => {
  let token;

  // 1. Check HTTP-only cookies
  if (req.cookies && req.cookies.token) {
    token = req.cookies.token;
  }
  // 2. Check Authorization header
  else if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return res.status(401).json({ success: false, message: 'Not authorized, no session token provided.' });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'fallback_secret_key_12345');

    // Get user from token and attach to request
    req.user = await prisma.user.findUnique({ where: { id: decoded.id } });
    if (!req.user) {
      return res.status(401).json({ success: false, message: 'User not found in system.' });
    }

    next();
  } catch (error) {
    console.error(`Auth token error: ${error.message}`);
    return res.status(401).json({ success: false, message: 'Not authorized, session expired or invalid.' });
  }
};

// Role authorization gate
export const checkRoles = (...roles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ success: false, message: 'Not authenticated.' });
    }
    
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ 
        success: false, 
        message: `Forbidden: Role '${req.user.role}' lacks permissions for this action.` 
      });
    }
    
    next();
  };
};
