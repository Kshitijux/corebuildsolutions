import express from 'express';
import { 
  loginUser, 
  logoutUser,
  registerUser, 
  getUsers, 
  updateUserRole, 
  deleteUser,
  getCurrentUser,
  changePassword
} from '../controllers/auth.js';
import { protect, checkRoles } from '../middleware/auth.js';

const router = express.Router();

router.post('/login', loginUser);
router.post('/logout', logoutUser);
router.get('/me', protect, getCurrentUser);
router.put('/change-password', protect, changePassword);

router.post('/register', protect, checkRoles('super_admin'), registerUser);
router.get('/users', protect, checkRoles('super_admin'), getUsers);
router.route('/users/:id')
  .put(protect, checkRoles('super_admin'), updateUserRole)
  .delete(protect, checkRoles('super_admin'), deleteUser);

export default router;
