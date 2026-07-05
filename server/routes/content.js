import express from 'express';
import {
  getProjects, createProject, updateProject, deleteProject,
  getBlogs, createBlog, updateBlog, deleteBlog,
  getTestimonials, createTestimonial, updateTestimonial, deleteTestimonial,
  getServices, createService, updateService, deleteService,
  getCareers, createCareer, updateCareer, deleteCareer,
  getTeam, createTeamMember, updateTeamMember, deleteTeamMember,
  getLeads, createLead, updateLeadStatus, deleteLead, exportLeadsCSV,
  getSeoSettings, updateSeoSettings,
  getSettings, updateSettings,
  getFaqs, createFaq, updateFaq, deleteFaq,
  getHomeSections, updateHomeSection
} from '../controllers/content.js';
import { protect, checkRoles } from '../middleware/auth.js';

const router = express.Router();

// ==========================================
// PUBLIC GET CHANNELS
// ==========================================
router.get('/projects', getProjects);
router.get('/blogs', getBlogs);
router.get('/testimonials', getTestimonials);
router.get('/services', getServices);
router.get('/careers', getCareers);
router.get('/team', getTeam);
router.get('/seo', getSeoSettings);
router.get('/settings', getSettings);
router.get('/faqs', getFaqs);
router.get('/home-sections', getHomeSections);
router.post('/leads', createLead); // Public contact form capture

// ==========================================
// PROTECTED MUTATION CHANNELS
// ==========================================

// Projects CRUD
router.post('/projects', protect, checkRoles('super_admin', 'admin', 'editor'), createProject);
router.route('/projects/:id')
  .put(protect, checkRoles('super_admin', 'admin', 'editor'), updateProject)
  .delete(protect, checkRoles('super_admin', 'admin'), deleteProject);

// Blogs CRUD
router.post('/blogs', protect, checkRoles('super_admin', 'admin', 'editor'), createBlog);
router.route('/blogs/:id')
  .put(protect, checkRoles('super_admin', 'admin', 'editor'), updateBlog)
  .delete(protect, checkRoles('super_admin', 'admin'), deleteBlog);

// Testimonials CRUD
router.post('/testimonials', protect, checkRoles('super_admin', 'admin', 'editor'), createTestimonial);
router.route('/testimonials/:id')
  .put(protect, checkRoles('super_admin', 'admin', 'editor'), updateTestimonial)
  .delete(protect, checkRoles('super_admin', 'admin'), deleteTestimonial);

// Services CRUD
router.post('/services', protect, checkRoles('super_admin', 'admin'), createService);
router.route('/services/:id')
  .put(protect, checkRoles('super_admin', 'admin'), updateService)
  .delete(protect, checkRoles('super_admin', 'admin'), deleteService);

// Careers CRUD
router.post('/careers', protect, checkRoles('super_admin', 'admin'), createCareer);
router.route('/careers/:id')
  .put(protect, checkRoles('super_admin', 'admin'), updateCareer)
  .delete(protect, checkRoles('super_admin', 'admin'), deleteCareer);

// Team Members CRUD
router.post('/team', protect, checkRoles('super_admin', 'admin'), createTeamMember);
router.route('/team/:id')
  .put(protect, checkRoles('super_admin', 'admin'), updateTeamMember)
  .delete(protect, checkRoles('super_admin', 'admin'), deleteTeamMember);

// Leads & CRM Management
router.get('/leads/export', protect, checkRoles('super_admin', 'admin'), exportLeadsCSV);
router.get('/leads', protect, checkRoles('super_admin', 'admin'), getLeads);
router.route('/leads/:id')
  .put(protect, checkRoles('super_admin', 'admin'), updateLeadStatus)
  .delete(protect, checkRoles('super_admin'), deleteLead); // Super Admin delete permission only

// SEO configuration
router.put('/seo/:page', protect, checkRoles('super_admin', 'admin'), updateSeoSettings);

// Global settings configurations
router.put('/settings', protect, checkRoles('super_admin', 'admin'), updateSettings);

// Home Sections layout configurations
router.put('/home-sections/:key', protect, checkRoles('super_admin', 'admin'), updateHomeSection);

// FAQs CRUD
router.post('/faqs', protect, checkRoles('super_admin', 'admin'), createFaq);
router.route('/faqs/:id')
  .put(protect, checkRoles('super_admin', 'admin'), updateFaq)
  .delete(protect, checkRoles('super_admin', 'admin'), deleteFaq);

export default router;
