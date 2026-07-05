import { prisma } from '../config/db.js';

// ==========================================
// PROJECTS CONTROLLER
// ==========================================
export const getProjects = async (req, res) => {
  try {
    const list = await prisma.project.findMany({ orderBy: { createdAt: 'desc' } });
    res.json({ success: true, projects: list });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const createProject = async (req, res) => {
  try {
    const proj = await prisma.project.create({ data: req.body });
    res.status(201).json({ success: true, project: proj });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const updateProject = async (req, res) => {
  try {
    const updateData = { ...req.body };
    delete updateData.id;
    delete updateData._id;
    delete updateData.createdAt;
    delete updateData.updatedAt;

    const proj = await prisma.project.update({
      where: { id: req.params.id },
      data: updateData
    });
    res.json({ success: true, project: proj });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const deleteProject = async (req, res) => {
  try {
    await prisma.project.delete({ where: { id: req.params.id } });
    res.json({ success: true, message: 'Project removed.' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ==========================================
// BLOGS CONTROLLER
// ==========================================
export const getBlogs = async (req, res) => {
  try {
    const list = await prisma.blog.findMany({ orderBy: { createdAt: 'desc' } });
    res.json({ success: true, blogs: list });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const createBlog = async (req, res) => {
  try {
    const blog = await prisma.blog.create({ data: req.body });
    res.status(201).json({ success: true, blog });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const updateBlog = async (req, res) => {
  try {
    const updateData = { ...req.body };
    delete updateData.id;
    delete updateData._id;
    delete updateData.createdAt;
    delete updateData.updatedAt;

    const blog = await prisma.blog.update({
      where: { id: req.params.id },
      data: updateData
    });
    res.json({ success: true, blog });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const deleteBlog = async (req, res) => {
  try {
    await prisma.blog.delete({ where: { id: req.params.id } });
    res.json({ success: true, message: 'Blog post removed.' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ==========================================
// TESTIMONIALS CONTROLLER
// ==========================================
export const getTestimonials = async (req, res) => {
  try {
    const list = await prisma.testimonial.findMany({ orderBy: { createdAt: 'desc' } });
    res.json({ success: true, testimonials: list });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const createTestimonial = async (req, res) => {
  try {
    const test = await prisma.testimonial.create({ data: req.body });
    res.status(201).json({ success: true, testimonial: test });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const updateTestimonial = async (req, res) => {
  try {
    const updateData = { ...req.body };
    delete updateData.id;
    delete updateData._id;
    delete updateData.createdAt;
    delete updateData.updatedAt;

    const test = await prisma.testimonial.update({
      where: { id: req.params.id },
      data: updateData
    });
    res.json({ success: true, testimonial: test });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const deleteTestimonial = async (req, res) => {
  try {
    await prisma.testimonial.delete({ where: { id: req.params.id } });
    res.json({ success: true, message: 'Testimonial removed.' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ==========================================
// SERVICES CONTROLLER
// ==========================================
export const getServices = async (req, res) => {
  try {
    const list = await prisma.service.findMany({ orderBy: { createdAt: 'asc' } });
    res.json({ success: true, services: list });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const createService = async (req, res) => {
  try {
    const srv = await prisma.service.create({ data: req.body });
    res.status(201).json({ success: true, service: srv });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const updateService = async (req, res) => {
  try {
    const updateData = { ...req.body };
    delete updateData.id;
    delete updateData._id;
    delete updateData.createdAt;
    delete updateData.updatedAt;

    const srv = await prisma.service.update({
      where: { id: req.params.id },
      data: updateData
    });
    res.json({ success: true, service: srv });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const deleteService = async (req, res) => {
  try {
    await prisma.service.delete({ where: { id: req.params.id } });
    res.json({ success: true, message: 'Service removed.' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ==========================================
// CAREERS CONTROLLER
// ==========================================
export const getCareers = async (req, res) => {
  try {
    const list = await prisma.career.findMany({ orderBy: { createdAt: 'desc' } });
    res.json({ success: true, careers: list });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const createCareer = async (req, res) => {
  try {
    const car = await prisma.career.create({ data: req.body });
    res.status(201).json({ success: true, career: car });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const updateCareer = async (req, res) => {
  try {
    const updateData = { ...req.body };
    delete updateData.id;
    delete updateData._id;
    delete updateData.createdAt;
    delete updateData.updatedAt;

    const car = await prisma.career.update({
      where: { id: req.params.id },
      data: updateData
    });
    res.json({ success: true, career: car });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const deleteCareer = async (req, res) => {
  try {
    await prisma.career.delete({ where: { id: req.params.id } });
    res.json({ success: true, message: 'Career role removed.' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ==========================================
// TEAM CONTROLLER
// ==========================================
export const getTeam = async (req, res) => {
  try {
    const list = await prisma.teamMember.findMany({ orderBy: { order: 'asc' } });
    res.json({ success: true, team: list });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const createTeamMember = async (req, res) => {
  try {
    const tm = await prisma.teamMember.create({ data: req.body });
    res.status(201).json({ success: true, teamMember: tm });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const updateTeamMember = async (req, res) => {
  try {
    const updateData = { ...req.body };
    delete updateData.id;
    delete updateData._id;
    delete updateData.createdAt;
    delete updateData.updatedAt;

    const tm = await prisma.teamMember.update({
      where: { id: req.params.id },
      data: updateData
    });
    res.json({ success: true, teamMember: tm });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const deleteTeamMember = async (req, res) => {
  try {
    await prisma.teamMember.delete({ where: { id: req.params.id } });
    res.json({ success: true, message: 'Team member profile removed.' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ==========================================
// LEADS CONTROLLER (CRM)
// ==========================================
export const getLeads = async (req, res) => {
  try {
    const list = await prisma.lead.findMany({ orderBy: { createdAt: 'desc' } });
    res.json({ success: true, leads: list });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const createLead = async (req, res) => {
  try {
    const { email, source } = req.body;

    // Prevent duplicate newsletter subscriptions
    if (source === 'newsletter' && email) {
      const existing = await prisma.lead.findFirst({
        where: { email, source: 'newsletter' }
      });
      if (existing) {
        return res.status(400).json({ success: false, message: 'This email address is already subscribed to our newsletter.' });
      }
    }

    const now = new Date();
    const formattedDate = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || '';

    const lead = await prisma.lead.create({
      data: {
        ...req.body,
        ip,
        date: formattedDate,
        status: 'unread'
      }
    });
    
    res.status(201).json({ success: true, lead });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const updateLeadStatus = async (req, res) => {
  try {
    const lead = await prisma.lead.update({
      where: { id: req.params.id },
      data: { status: req.body.status }
    });
    res.json({ success: true, lead });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const deleteLead = async (req, res) => {
  try {
    await prisma.lead.delete({ where: { id: req.params.id } });
    res.json({ success: true, message: 'Lead entry deleted.' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const exportLeadsCSV = async (req, res) => {
  try {
    const leads = await prisma.lead.findMany({ orderBy: { createdAt: 'desc' } });
    
    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', 'attachment; filename=leads_export.csv');
    
    let csv = 'Name,Email,Company,Service,Message,Source,Date,Status\n';
    leads.forEach(l => {
      const cleanMsg = (l.message || '').replace(/"/g, '""').replace(/\n/g, ' ');
      csv += `"${l.name}","${l.email}","${l.company || ''}","${l.service || ''}","${cleanMsg}","${l.source}","${l.date}","${l.status}"\n`;
    });
    
    res.status(200).send(csv);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ==========================================
// SEO CONTROLLER
// ==========================================
export const getSeoSettings = async (req, res) => {
  try {
    const list = await prisma.seoSettings.findMany({});
    res.json({ success: true, seoSettings: list });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const updateSeoSettings = async (req, res) => {
  const { title, description, keywords } = req.body;
  try {
    const seo = await prisma.seoSettings.upsert({
      where: { page: req.params.page },
      update: { title, description, keywords },
      create: { page: req.params.page, title, description, keywords }
    });
    res.json({ success: true, seoSettings: seo });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ==========================================
// SETTINGS CONTROLLER
// ==========================================
export const getSettings = async (req, res) => {
  try {
    let settings = await prisma.systemSettings.findUnique({ where: { key: 'global' } });
    if (!settings) {
      settings = {
        agencyName: 'CoreBuild Solutions',
        contactEmail: 'partner@corebuildsolutions.in',
        contactPhone: '+1 (800) 555-0199',
        whatsappNumber: '+18005550199',
        address: 'Level 42, Vercel Tower, 100 Hudson Street, New York, NY 10013',
        socialLinks: { twitter: '', linkedin: '', github: '', instagram: '' }
      };
    }
    res.json({ success: true, settings });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const updateSettings = async (req, res) => {
  try {
    const updateData = { ...req.body };
    delete updateData.id;
    delete updateData._id;
    delete updateData.key;
    delete updateData.createdAt;
    delete updateData.updatedAt;

    const settings = await prisma.systemSettings.upsert({
      where: { key: 'global' },
      update: updateData,
      create: { key: 'global', ...updateData }
    });
    res.json({ success: true, settings });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ==========================================
// FAQS CONTROLLER
// ==========================================
export const getFaqs = async (req, res) => {
  try {
    const list = await prisma.faqItem.findMany({ orderBy: { order: 'asc' } });
    res.json({ success: true, faqs: list });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const createFaq = async (req, res) => {
  try {
    const faq = await prisma.faqItem.create({ data: req.body });
    res.status(201).json({ success: true, faq });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const updateFaq = async (req, res) => {
  try {
    const updateData = { ...req.body };
    delete updateData.id;
    delete updateData._id;
    delete updateData.createdAt;
    delete updateData.updatedAt;

    const faq = await prisma.faqItem.update({
      where: { id: req.params.id },
      data: updateData
    });
    res.json({ success: true, faq });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const deleteFaq = async (req, res) => {
  try {
    await prisma.faqItem.delete({ where: { id: req.params.id } });
    res.json({ success: true, message: 'FAQ accordion removed.' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ==========================================
// HOME SECTIONS CONTROLLER
// ==========================================
export const getHomeSections = async (req, res) => {
  try {
    const list = await prisma.homeSection.findMany({});
    res.json({ success: true, homeSections: list });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const updateHomeSection = async (req, res) => {
  const { content } = req.body;
  try {
    const homeSection = await prisma.homeSection.upsert({
      where: { key: req.params.key },
      update: { content },
      create: { key: req.params.key, content }
    });
    res.json({ success: true, homeSection });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
