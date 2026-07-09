import React, { useState, useEffect, useRef } from 'react';
import AdminLayout from '../components/AdminLayout';
import { useDatabase } from '../context/DatabaseContext';
import { useAuth } from '../context/AuthContext';
import { 
  Plus, 
  Edit2, 
  Trash2, 
  CheckCircle, 
  Inbox, 
  FileText, 
  Sparkles, 
  Mail, 
  Briefcase, 
  Settings as SettingsIcon,
  Search,
  Eye,
  Download,
  Image as ImageIcon,
  Upload,
  UploadCloud,
  Loader2,
  Lock,
  UserCheck
} from 'lucide-react';
import { Project, Blog, Testimonial, Service, Career, Lead, SeoSettings, SystemSettings, FaqItem, HomeSection } from '../types';

const slugify = (text: string) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-');
};

export default function Admin() {
  const db = useDatabase();
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  // Search/Filters
  const [searchTerm, setSearchTerm] = useState('');

  // CRUD Modals state
  const [showModal, setShowModal] = useState<string | null>(null); // 'project' | 'blog' | 'testimonial' | 'service' | 'career' | 'seo' | null
  const [modalMode, setModalMode] = useState<'add' | 'edit'>('add');
  const [selectedId, setSelectedId] = useState<string | null>(null);

  // Leads Detail Modal
  const [activeLeadDetails, setActiveLeadDetails] = useState<Lead | null>(null);

  // Users CRUD state (Super Admin only)
  const [users, setUsers] = useState<any[]>([]);
  const [showUserModal, setShowUserModal] = useState(false);
  const [userForm, setUserForm] = useState({ name: '', email: '', password: '', role: 'editor' });

  // Custom Image Upload and Media Library Selectors
  const [isUploading, setIsUploading] = useState(false);
  const [showMediaSelector, setShowMediaSelector] = useState<string | null>(null); // 'project_image' | 'blog_image' | 'testimonial_image' | 'team_image' | null
  const fileInputRef = useRef<HTMLInputElement>(null);

  // ==========================================
  // FORM BINDINGS
  // ==========================================

  // Project Form State
  const [projForm, setProjForm] = useState<Omit<Project, 'id'>>({
    title: '', client: '', category: 'web', description: '', longDescription: '',
    image: '', gallery: [], tags: [], stats: [{ label: '', value: '' }], featured: false, url: ''
  });

  // Blog Form State
  const [blogForm, setBlogForm] = useState<Omit<Blog, 'id' | 'date'>>({
    title: '', category: 'Technology', summary: '', content: '', image: '', author: '', readTime: '5 min read', tags: [],
    published: true, slug: '', metaTitle: '', metaDescription: '', keywords: ''
  });

  const [blogSearch, setBlogSearch] = useState('');
  const [blogCmsPage, setBlogCmsPage] = useState(1);
  const blogsPerPage = 8;

  // Testimonial Form State
  const [testForm, setTestForm] = useState<Omit<Testimonial, 'id'>>({
    name: '', role: '', company: '', rating: 5, text: '', image: ''
  });

  // Service Form State
  const [serviceForm, setServiceForm] = useState<Omit<Service, 'id'>>({
    name: '', subtitle: '', description: '', icon: 'Globe', details: [], workflow: [], pricing: []
  });

  // Career Form State
  const [careerForm, setCareerForm] = useState<Omit<Career, 'id'>>({
    title: '', department: '', location: '', type: 'Full-time', description: '', requirements: []
  });

  // SEO Form State
  const [seoForm, setSeoForm] = useState<Omit<SeoSettings, 'page'>>({
    title: '', description: '', keywords: ''
  });

  // Team Member CRUD State
  const [showTeamModal, setShowTeamModal] = useState(false);
  const [editingTeamMember, setEditingTeamMember] = useState<TeamMember | null>(null);
  const [teamForm, setTeamForm] = useState<Omit<TeamMember, 'id'>>({
    name: '', role: '', image: '', bio: '', experience: '', skills: [], order: 0, active: true,
    socials: { twitter: '', linkedin: '', github: '' }
  });
  const [teamSkillInput, setTeamSkillInput] = useState('');

  // Leads Query Filter State
  const [leadSearch, setLeadSearch] = useState('');
  const [leadStatusFilter, setLeadStatusFilter] = useState('all');
  const [leadSourceFilter, setLeadSourceFilter] = useState('all');
  const [leadSort, setLeadSort] = useState('desc');

  // Settings Form State
  const [settingsForm, setSettingsForm] = useState<SystemSettings>({
    agencyName: '',
    contactEmail: '',
    contactPhone: '',
    whatsappNumber: '',
    address: '',
    socialLinks: { twitter: '', linkedin: '', github: '', instagram: '' }
  });

  // Sync Settings form on DB load
  useEffect(() => {
    if (db.settings) {
      setSettingsForm({
        ...db.settings,
        socialLinks: {
          twitter: db.settings.socialLinks?.twitter || '',
          linkedin: db.settings.socialLinks?.linkedin || '',
          github: db.settings.socialLinks?.github || '',
          instagram: db.settings.socialLinks?.instagram || ''
        }
      });
    }
  }, [db.settings]);

  // FAQ Form State
  const [showFaqModal, setShowFaqModal] = useState(false);
  const [faqForm, setFaqForm] = useState<Partial<FaqItem>>({ q: '', a: '', order: 0 });
  const [faqEditId, setFaqEditId] = useState<string | null>(null);

  // Home Section Editor State
  const [selectedHomeSection, setSelectedHomeSection] = useState('hero');
  const [homeFormHero, setHomeFormHero] = useState({
    badge: '',
    title: '',
    description: '',
    ctaText1: '',
    ctaText2: '',
    stats: [{ value: '', label: '' }, { value: '', label: '' }, { value: '', label: '' }]
  });
  const [homeFormPartners, setHomeFormPartners] = useState({ companies: [] as string[] });
  const [homeFormAi, setHomeFormAi] = useState({ badge: '', title: '', description: '', features: [] as string[] });
  const [homeFormProcess, setHomeFormProcess] = useState({
    steps: [
      { step: '01', title: '', desc: '' },
      { step: '02', title: '', desc: '' },
      { step: '03', title: '', desc: '' },
      { step: '04', title: '', desc: '' }
    ]
  });
  const [homeFormAbout, setHomeFormAbout] = useState({
    milestones: [] as { year: string; title: string; desc: string }[],
    values: [
      { title: '', desc: '' },
      { title: '', desc: '' },
      { title: '', desc: '' }
    ]
  });

  const openAddFaqModal = () => {
    setFaqForm({ q: '', a: '', order: db.faqs.length + 1 });
    setFaqEditId(null);
    setShowFaqModal(true);
  };

  const openEditFaqModal = (faq: FaqItem) => {
    setFaqForm({ q: faq.q, a: faq.a, order: faq.order });
    setFaqEditId(faq.id);
    setShowFaqModal(true);
  };

  const handleFaqSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!faqForm.q || !faqForm.a) return;

    try {
      if (faqEditId) {
        await db.updateFaq({ id: faqEditId, q: faqForm.q, a: faqForm.a, order: faqForm.order || 0 });
        window.dispatchEvent(new CustomEvent('show-toast', {
          detail: { message: 'FAQ updated successfully.', type: 'success' }
        }));
      } else {
        await db.addFaq({ q: faqForm.q, a: faqForm.a, order: faqForm.order || 0 });
        window.dispatchEvent(new CustomEvent('show-toast', {
          detail: { message: 'FAQ created successfully.', type: 'success' }
        }));
      }
      setShowFaqModal(false);
    } catch (err: any) {
      alert(err.message || 'Failed to save FAQ.');
    }
  };

  const handleDeleteFaq = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this FAQ?')) return;
    try {
      await db.deleteFaq(id);
      window.dispatchEvent(new CustomEvent('show-toast', {
        detail: { message: 'FAQ deleted.', type: 'success' }
      }));
    } catch (err: any) {
      alert(err.message || 'Failed to delete FAQ.');
    }
  };

  // Sync section form on section change or DB load
  useEffect(() => {
    if (db.homeSections && db.homeSections.length > 0) {
      const hero = db.homeSections.find(s => s.key === 'hero')?.content;
      if (hero) {
        setHomeFormHero({
          badge: hero.badge || '',
          title: hero.title || '',
          description: hero.description || '',
          ctaText1: hero.ctaText1 || '',
          ctaText2: hero.ctaText2 || '',
          stats: hero.stats || [{ value: '', label: '' }, { value: '', label: '' }, { value: '', label: '' }]
        });
      }
      
      const partners = db.homeSections.find(s => s.key === 'partners')?.content;
      if (partners) {
        setHomeFormPartners({
          companies: partners.companies || []
        });
      }

      const ai = db.homeSections.find(s => s.key === 'aiSection')?.content;
      if (ai) {
        setHomeFormAi({
          badge: ai.badge || '',
          title: ai.title || '',
          description: ai.description || '',
          features: ai.features || []
        });
      }

      const process = db.homeSections.find(s => s.key === 'process')?.content;
      if (process) {
        setHomeFormProcess({
          steps: process.steps || [
            { step: '01', title: '', desc: '' },
            { step: '02', title: '', desc: '' },
            { step: '03', title: '', desc: '' },
            { step: '04', title: '', desc: '' }
          ]
        });
      }

      const about = db.homeSections.find(s => s.key === 'aboutSection')?.content;
      if (about) {
        setHomeFormAbout({
          milestones: about.milestones || [],
          values: about.values || [
            { title: '', desc: '' },
            { title: '', desc: '' },
            { title: '', desc: '' }
          ]
        });
      }
    }
  }, [db.homeSections, selectedHomeSection]);

  const handleHomeSectionSave = async (e: React.FormEvent) => {
    e.preventDefault();
    let content: any = null;
    
    if (selectedHomeSection === 'hero') {
      content = homeFormHero;
    } else if (selectedHomeSection === 'partners') {
      content = homeFormPartners;
    } else if (selectedHomeSection === 'aiSection') {
      content = homeFormAi;
    } else if (selectedHomeSection === 'process') {
      content = homeFormProcess;
    } else if (selectedHomeSection === 'aboutSection') {
      content = homeFormAbout;
    }

    if (!content) return;

    try {
      await db.updateHomeSection(selectedHomeSection, content);
      window.dispatchEvent(new CustomEvent('show-toast', {
        detail: { message: 'Home Layout section saved successfully.', type: 'success' }
      }));
    } catch (err: any) {
      alert(err.message || 'Failed to update home section.');
    }
  };

  // Load users when Users CRUD tab is selected (Super Admin only)
  useEffect(() => {
    if (activeTab === 'users' && user?.role === 'super_admin') {
      loadUsers();
    }
  }, [activeTab, user]);

  const loadUsers = async () => {
    try {
      const token = localStorage.getItem('corebuild_token');
      const res = await fetch('http://localhost:5000/api/auth/users', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const data = await res.json();
      if (data.success) {
        setUsers(data.users);
      }
    } catch (e) {
      console.error('Failed to load user accounts:', e);
    }
  };

  // ==========================================
  // CUSTOM MEDIA UPLOAD & SELECTOR HANDLERS
  // ==========================================

  const [isDragOver, setIsDragOver] = useState(false);

  const handleFileUploadClick = (inputId: string) => {
    document.getElementById(inputId)?.click();
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleFileDrop = async (e: React.DragEvent, targetField: string) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const file = e.dataTransfer.files?.[0];
    if (!file) return;

    // Validate type
    const allowedTypes = [
      'image/jpeg', 'image/png', 'image/svg+xml', 'image/webp', 'image/gif',
      'application/pdf'
    ];
    if (!allowedTypes.includes(file.type)) {
      alert('Invalid file format. Only JPEG, PNG, SVG, WebP, GIF, and PDF files are supported.');
      return;
    }

    setIsUploading(true);
    try {
      const mediaItem = await db.uploadFile(file);
      
      // Auto-set the file URL in the active form
      if (targetField === 'project_image') {
        setProjForm(prev => ({ ...prev, image: mediaItem.url }));
      } else if (targetField === 'blog_image') {
        setBlogForm(prev => ({ ...prev, image: mediaItem.url }));
      } else if (targetField === 'testimonial_image') {
        setTestForm(prev => ({ ...prev, image: mediaItem.url }));
      }
      
      window.dispatchEvent(new CustomEvent('show-toast', {
        detail: { message: 'Asset uploaded successfully via drag & drop.', type: 'success' }
      }));
    } catch (error: any) {
      alert(error.message || 'File upload failed.');
    } finally {
      setIsUploading(false);
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>, targetField: string) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    try {
      const mediaItem = await db.uploadFile(file);
      
      // Auto-set the file URL in the active form
      if (targetField === 'project_image') {
        setProjForm(prev => ({ ...prev, image: mediaItem.url }));
      } else if (targetField === 'blog_image') {
        setBlogForm(prev => ({ ...prev, image: mediaItem.url }));
      } else if (targetField === 'testimonial_image') {
        setTestForm(prev => ({ ...prev, image: mediaItem.url }));
      }
      
      window.dispatchEvent(new CustomEvent('show-toast', {
        detail: { message: 'Asset uploaded and attached successfully.', type: 'success' }
      }));
    } catch (error: any) {
      alert(error.message || 'File upload failed.');
    } finally {
      setIsUploading(false);
    }
  };

  const handleSelectMediaItem = (url: string, selectorKey: string) => {
    if (selectorKey === 'project_image') {
      setProjForm(prev => ({ ...prev, image: url }));
    } else if (selectorKey === 'blog_image') {
      setBlogForm(prev => ({ ...prev, image: url }));
    } else if (selectorKey === 'testimonial_image') {
      setTestForm(prev => ({ ...prev, image: url }));
    } else if (selectorKey === 'team_image') {
      setTeamForm(prev => ({ ...prev, image: url }));
    }
    setShowMediaSelector(null);
  };

  // ==========================================
  // CRUD ACTIONS
  // ==========================================

  const openAddModal = (type: string) => {
    setModalMode('add');
    setSelectedId(null);
    setShowModal(type);
    
    if (type === 'project') {
      setProjForm({
        title: '', client: '', category: 'web', description: '', longDescription: '',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
        gallery: [], tags: ['React', 'TypeScript'], stats: [{ label: 'Conversion Rate', value: '+35%' }], featured: false, url: ''
      });
    } else if (type === 'blog') {
      setBlogForm({
        title: '', category: 'Technology', summary: '', content: '',
        image: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=600&q=80',
        author: user?.name || 'Administrator', readTime: '5 min read', tags: ['AI'],
        published: true, slug: '', metaTitle: '', metaDescription: '', keywords: ''
      });
    } else if (type === 'testimonial') {
      setTestForm({
        name: '', role: '', company: '', rating: 5, text: '',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
      });
    } else if (type === 'career') {
      setCareerForm({
        title: '', department: 'Engineering', location: 'Remote', type: 'Full-time', description: '', requirements: []
      });
    } else if (type === 'service') {
      setServiceForm({
        name: '', subtitle: '', icon: 'Cpu', description: '', details: [], pricing: [{ tier: 'Standard', price: '$4,999' }]
      });
    }
  };

  const openEditModal = (type: string, id: string) => {
    setModalMode('edit');
    setSelectedId(id);
    setShowModal(type);

    if (type === 'project') {
      const match = db.projects.find(p => p.id === id);
      if (match) setProjForm({ ...match });
    } else if (type === 'blog') {
      const match = db.blogs.find(b => b.id === id);
      if (match) {
        setBlogForm({
          title: match.title || '',
          category: match.category || 'Technology',
          summary: match.summary || '',
          content: match.content || '',
          image: match.image || '',
          author: match.author || '',
          readTime: match.readTime || '',
          tags: match.tags || [],
          published: match.published ?? true,
          slug: match.slug || '',
          metaTitle: match.metaTitle || '',
          metaDescription: match.metaDescription || '',
          keywords: match.keywords || ''
        });
      }
    } else if (type === 'testimonial') {
      const match = db.testimonials.find(t => t.id === id);
      if (match) setTestForm({ ...match });
    } else if (type === 'career') {
      const match = db.careers.find(c => c.id === id);
      if (match) setCareerForm({ ...match });
    } else if (type === 'service') {
      const match = db.services.find(s => s.id === id);
      if (match) setServiceForm({ ...match });
    } else if (type === 'seo') {
      const match = db.seoSettings.find(s => s.page === id);
      if (match) setSeoForm({ title: match.title, description: match.description, keywords: match.keywords });
    }
  };

  const handleDelete = async (type: string, id: string) => {
    if (!user || (user.role !== 'super_admin' && user.role !== 'admin')) {
      alert('Forbidden: Lacks administrative delete permissions.');
      return;
    }
    
    if (!window.confirm(`Are you sure you want to delete this ${type}?`)) return;

    try {
      if (type === 'project') await db.deleteProject(id);
      else if (type === 'blog') await db.deleteBlog(id);
      else if (type === 'testimonial') await db.deleteTestimonial(id);
      else if (type === 'career') await db.deleteCareer(id);
      else if (type === 'service') await db.deleteService(id);
      else if (type === 'lead') await db.deleteLead(id);

      window.dispatchEvent(new CustomEvent('show-toast', {
        detail: { message: `${type} removed from database.`, type: 'success' }
      }));
    } catch (e: any) {
      alert(e.message || 'Deletion failed.');
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (showModal === 'project') {
        if (modalMode === 'add') {
          await db.addProject(projForm);
        } else if (selectedId) {
          await db.updateProject({ ...projForm, id: selectedId });
        }
      } else if (showModal === 'blog') {
        if (modalMode === 'add') {
          const now = new Date();
          await db.addBlog({
            ...blogForm,
            date: `${now.toLocaleString('default', { month: 'long' })} ${String(now.getDate()).padStart(2, '0')}, ${now.getFullYear()}`
          });
        } else if (selectedId) {
          const match = db.blogs.find(b => b.id === selectedId);
          await db.updateBlog({ ...blogForm, id: selectedId, date: match?.date || 'Today' });
        }
      } else if (showModal === 'testimonial') {
        if (modalMode === 'add') {
          await db.addTestimonial(testForm);
        } else if (selectedId) {
          await db.updateTestimonial({ ...testForm, id: selectedId });
        }
      } else if (showModal === 'career') {
        if (modalMode === 'add') {
          await db.addCareer(careerForm);
        } else if (selectedId) {
          await db.updateCareer({ ...careerForm, id: selectedId });
        }
      } else if (showModal === 'service') {
        if (modalMode === 'add') {
          await db.addService(serviceForm);
        } else if (selectedId) {
          await db.updateService({ ...serviceForm, id: selectedId });
        }
      } else if (showModal === 'seo' && selectedId) {
        await db.updateSeoSettings(selectedId, seoForm);
      }

      setShowModal(null);
      setSelectedId(null);
      window.dispatchEvent(new CustomEvent('show-toast', {
        detail: { message: 'Database saved successfully.', type: 'success' }
      }));
    } catch (error: any) {
      alert(error.message || 'Failed to submit form.');
    }
  };

  const handleSaveSettings = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await db.updateSettings(settingsForm);
      window.dispatchEvent(new CustomEvent('show-toast', {
        detail: { message: 'Global system settings saved to backend.', type: 'success' }
      }));
    } catch (error: any) {
      alert(error.message || 'Failed to save settings.');
    }
  };

  const handleUpdateLeadStatus = async (id: string, newStatus: 'unread' | 'read' | 'resolved' | 'pending') => {
    try {
      await db.updateLeadStatus(id, newStatus);
      window.dispatchEvent(new CustomEvent('show-toast', {
        detail: { message: `Query status updated to: ${newStatus.toUpperCase()}.`, type: 'success' }
      }));
    } catch (e: any) {
      window.dispatchEvent(new CustomEvent('show-toast', {
        detail: { message: e.message || 'Failed to update lead.', type: 'error' }
      }));
    }
  };

  const handleSaveTeamMember = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingTeamMember) {
        await db.updateTeamMember({
          ...teamForm,
          id: editingTeamMember.id
        });
        window.dispatchEvent(new CustomEvent('show-toast', {
          detail: { message: 'Team member profile updated.', type: 'success' }
        }));
      } else {
        await db.addTeamMember(teamForm);
        window.dispatchEvent(new CustomEvent('show-toast', {
          detail: { message: 'New team member added.', type: 'success' }
        }));
      }
      setShowTeamModal(false);
      setEditingTeamMember(null);
      setTeamForm({
        name: '', role: '', image: '', bio: '', experience: '', skills: [], order: 0, active: true,
        socials: { twitter: '', linkedin: '', github: '' }
      });
      setTeamSkillInput('');
    } catch (err: any) {
      window.dispatchEvent(new CustomEvent('show-toast', {
        detail: { message: err.message || 'Failed to save team member.', type: 'error' }
      }));
    }
  };

  const handleEditTeamMember = (member: TeamMember) => {
    setEditingTeamMember(member);
    setTeamForm({
      name: member.name,
      role: member.role,
      image: member.image,
      bio: member.bio,
      experience: member.experience || '',
      skills: member.skills || [],
      order: member.order || 0,
      active: member.active !== false,
      socials: {
        twitter: member.socials?.twitter || '',
        linkedin: member.socials?.linkedin || '',
        github: member.socials?.github || ''
      }
    });
    setTeamSkillInput('');
    setShowTeamModal(true);
  };

  const handleDeleteTeamMember = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this team member?')) return;
    try {
      await db.deleteTeamMember(id);
      window.dispatchEvent(new CustomEvent('show-toast', {
        detail: { message: 'Team member profile deleted.', type: 'success' }
      }));
    } catch (err: any) {
      window.dispatchEvent(new CustomEvent('show-toast', {
        detail: { message: err.message || 'Failed to delete team member.', type: 'error' }
      }));
    }
  };

  const handleAddTeamSkill = () => {
    if (!teamSkillInput.trim()) return;
    if (teamForm.skills?.includes(teamSkillInput.trim())) return;
    setTeamForm(prev => ({
      ...prev,
      skills: [...(prev.skills || []), teamSkillInput.trim()]
    }));
    setTeamSkillInput('');
  };

  const handleRemoveTeamSkill = (skill: string) => {
    setTeamForm(prev => ({
      ...prev,
      skills: (prev.skills || []).filter(s => s !== skill)
    }));
  };

  // CSV Exporter API Call
  const handleExportCSV = async () => {
    const token = localStorage.getItem('corebuild_token');
    try {
      const res = await fetch('http://localhost:5000/api/leads/export', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'leads_inbox.csv';
      document.body.appendChild(a);
      a.click();
      a.remove();
      
      window.dispatchEvent(new CustomEvent('show-toast', {
        detail: { message: 'CSV file compiled and downloaded.', type: 'success' }
      }));
    } catch (e) {
      console.error(e);
      alert('CSV export failed.');
    }
  };

  // Users CRUD operations (Super Admin)
  const handleCreateUser = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('corebuild_token');
      const res = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` 
        },
        body: JSON.stringify(userForm)
      });
      const data = await res.json();
      if (data.success) {
        setShowUserModal(false);
        setUserForm({ name: '', email: '', password: '', role: 'editor' });
        loadUsers();
        window.dispatchEvent(new CustomEvent('show-toast', {
          detail: { message: 'User account created successfully.', type: 'success' }
        }));
      } else {
        alert(data.message);
      }
    } catch (e) {
      console.error(e);
      alert('Failed to register user.');
    }
  };

  const handleDeleteUser = async (userId: string) => {
    if (!window.confirm('Delete this user?')) return;
    try {
      const token = localStorage.getItem('corebuild_token');
      const res = await fetch(`http://localhost:5000/api/auth/users/${userId}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const data = await res.json();
      if (data.success) {
        loadUsers();
        window.dispatchEvent(new CustomEvent('show-toast', {
          detail: { message: 'User deleted from system.', type: 'success' }
        }));
      } else {
        alert(data.message);
      }
    } catch (e) {
      console.error(e);
      alert('Failed to delete user.');
    }
  };

  return (
    <AdminLayout activeTab={activeTab} setActiveTab={setActiveTab}>
      <div className="text-left">
        
        {/* ==========================================
            TAB: OVERVIEW
           ========================================== */}
        {activeTab === 'overview' && (
          <div className="flex flex-col gap-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="font-heading text-3xl font-extrabold tracking-tight">Overview Dashboard</h1>
                <p className="text-xs text-slate-400 mt-1">Real-time leads analytics and content status.</p>
              </div>
              <span className="px-3 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 text-xs font-semibold uppercase tracking-wider">
                Connected to MDB
              </span>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
              {[
                { label: 'Total Queries', value: db.leads.length, color: 'text-blue-500' },
                { label: 'New Queries', value: db.leads.filter(l => l.status === 'unread').length, color: 'text-red-500' },
                { label: 'Resolved Queries', value: db.leads.filter(l => l.status === 'resolved').length, color: 'text-green-500' },
                { label: 'Pending Queries', value: db.leads.filter(l => l.status === 'pending').length, color: 'text-amber-500' }
              ].map((stat, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col justify-between h-28 shadow-md">
                  <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest">{stat.label}</span>
                  <span className={`font-heading text-4xl font-extrabold ${stat.color} mt-2`}>{stat.value}</span>
                </div>
              ))}
            </div>

            {/* Analytics Chart Mockup */}
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 shadow-md flex flex-col gap-4">
              <h3 className="font-heading text-sm font-semibold uppercase tracking-widest text-slate-400">Leads Acquisition Trend (Live MongoDB Streams)</h3>
              <div className="relative aspect-[3/1] w-full border-b border-l border-slate-800 flex items-end pt-6">
                
                {/* SVG Chart Line */}
                <svg viewBox="0 0 100 30" className="absolute inset-0 w-full h-full stroke-blue-500 stroke-[1.5] fill-none overflow-visible">
                  <path d="M0,28 L16,22 L32,25 L48,12 L64,16 L80,3 L100,0" />
                  <path d="M0,28 L16,22 L32,25 L48,12 L64,16 L80,3 L100,0 L100,30 L0,30 Z" className="fill-blue-500/5 stroke-none" />
                </svg>

                {/* Grid markings */}
                <div className="absolute inset-x-0 bottom-0 flex justify-between text-[8px] text-slate-600 font-semibold tracking-wider pt-2 translate-y-full">
                  <span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span><span>SAT</span><span>SUN</span>
                </div>

              </div>
            </div>

            {/* Recent Leads Sub-table */}
            <div className="flex flex-col gap-4 mt-4">
              <h3 className="font-heading text-sm font-semibold uppercase tracking-widest text-slate-400">Recent Leads Activity</h3>
              <div className="border border-slate-800 rounded-2xl overflow-hidden bg-slate-950/50">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-950 text-slate-400 uppercase font-semibold border-b border-slate-800">
                    <tr>
                      <th className="px-6 py-4">Name</th>
                      <th className="px-6 py-4">Email</th>
                      <th className="px-6 py-4">Source</th>
                      <th className="px-6 py-4">Status</th>
                      <th className="px-6 py-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    {db.leads.slice(0, 3).map((lead) => (
                      <tr key={lead.id} className="hover:bg-slate-900/50">
                        <td className="px-6 py-4 font-bold text-white">{lead.name}</td>
                        <td className="px-6 py-4 text-slate-300">{lead.email}</td>
                        <td className="px-6 py-4">
                          <span className="px-2 py-0.5 bg-slate-800 border border-slate-700 text-[10px] rounded-md text-slate-400 font-semibold uppercase">
                            {lead.source}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`px-2 py-0.5 text-[9px] rounded-md uppercase font-semibold ${
                            lead.status === 'new' ? 'bg-red-500/10 text-red-400 border border-red-500/20' : 'bg-green-500/10 text-green-400 border border-green-500/20'
                          }`}>
                            {lead.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right flex items-center justify-end gap-2">
                          <button
                            onClick={() => setActiveLeadDetails(lead)}
                            className="p-1.5 hover:bg-slate-800 rounded text-slate-400 hover:text-white"
                          >
                            <Eye size={14} />
                          </button>
                          {lead.status === 'new' && (
                            <button
                              onClick={() => handleMarkLeadContacted(lead.id)}
                              className="p-1.5 hover:bg-slate-800 rounded text-slate-400 hover:text-green-500"
                            >
                              <CheckCircle size={14} />
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        )}

        {/* ==========================================
            TAB: PROJECTS
           ========================================== */}
        {activeTab === 'projects' && (
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="font-heading text-3xl font-extrabold tracking-tight">Portfolio Projects</h1>
                <p className="text-xs text-slate-400 mt-1">Manage project case studies and stats.</p>
              </div>
              <button
                onClick={() => openAddModal('project')}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 shadow-md shadow-blue-500/20 cursor-pointer"
              >
                <Plus size={14} /> Add Project
              </button>
            </div>

            <div className="border border-slate-800 rounded-2xl overflow-hidden bg-slate-950/50">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-950 text-slate-400 uppercase font-semibold border-b border-slate-800">
                  <tr>
                    <th className="px-6 py-4">Title</th>
                    <th className="px-6 py-4">Client</th>
                    <th className="px-6 py-4">Category</th>
                    <th className="px-6 py-4">Featured</th>
                    <th className="px-6 py-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {db.projects.map((proj) => (
                    <tr key={proj.id} className="hover:bg-slate-900/50">
                      <td className="px-6 py-4 font-bold text-white">{proj.title}</td>
                      <td className="px-6 py-4 text-slate-300">{proj.client}</td>
                      <td className="px-6 py-4 uppercase text-slate-400 font-semibold">{proj.category}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-0.5 text-[10px] rounded-md font-semibold ${
                          proj.featured ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-500'
                        }`}>
                          {proj.featured ? 'YES' : 'NO'}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right flex items-center justify-end gap-2">
                        <button
                          onClick={() => openEditModal('project', proj.id)}
                          className="p-1.5 hover:bg-slate-800 rounded text-slate-400 hover:text-white"
                        >
                          <Edit2 size={14} />
                        </button>
                        <button
                          onClick={() => handleDelete('project', proj.id)}
                          className="p-1.5 hover:bg-slate-800 rounded text-slate-400 hover:text-red-500"
                        >
                          <Trash2 size={14} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ==========================================
            TAB: BLOGS
           ========================================== */}
        {activeTab === 'blogs' && (
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="font-heading text-3xl font-extrabold tracking-tight">Blog CMS</h1>
                <p className="text-xs text-slate-400 mt-1">Manage strategic posts and tech insights.</p>
              </div>
              <button
                onClick={() => openAddModal('blog')}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 shadow-md shadow-blue-500/20 cursor-pointer"
              >
                <Plus size={14} /> Add Post
              </button>
            </div>

            {/* Search, Filter & Paging calculations */}
            {(() => {
              const filteredCmsBlogs = db.blogs.filter(b => 
                b.title.toLowerCase().includes(blogSearch.toLowerCase()) || 
                b.category.toLowerCase().includes(blogSearch.toLowerCase()) ||
                b.author.toLowerCase().includes(blogSearch.toLowerCase()) ||
                (b.tags && b.tags.some(t => t.toLowerCase().includes(blogSearch.toLowerCase())))
              );
              
              const totalCmsPages = Math.ceil(filteredCmsBlogs.length / blogsPerPage) || 1;
              const paginatedCmsBlogs = filteredCmsBlogs.slice(
                (blogCmsPage - 1) * blogsPerPage,
                blogCmsPage * blogsPerPage
              );
              
              return (
                <>
                  {/* Search Bar Input */}
                  <div className="flex gap-4 items-center">
                    <input
                      type="text"
                      placeholder="Search articles by title, author, category, or tags..."
                      value={blogSearch}
                      onChange={(e) => {
                        setBlogSearch(e.target.value);
                        setBlogCmsPage(1); // reset to page 1 on search
                      }}
                      className="flex-1 px-4 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs focus:outline-none focus:border-blue-500 text-white"
                    />
                  </div>

                  <div className="border border-slate-800 rounded-2xl overflow-hidden bg-slate-950/50">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-slate-950 text-slate-400 uppercase font-semibold border-b border-slate-800">
                        <tr>
                          <th className="px-6 py-4">Title</th>
                          <th className="px-6 py-4">Category</th>
                          <th className="px-6 py-4">Author</th>
                          <th className="px-6 py-4">Status</th>
                          <th className="px-6 py-4">Date</th>
                          <th className="px-6 py-4 text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800">
                        {paginatedCmsBlogs.map((blog) => (
                          <tr key={blog.id} className="hover:bg-slate-900/50">
                            <td className="px-6 py-4 font-bold text-white max-w-xs truncate">{blog.title}</td>
                            <td className="px-6 py-4 text-slate-300 font-semibold uppercase text-[10px]">{blog.category}</td>
                            <td className="px-6 py-4 text-slate-400">{blog.author}</td>
                            <td className="px-6 py-4">
                              {blog.published ?? true ? (
                                <span className="inline-flex items-center px-2 py-0.5 bg-green-500/10 text-green-400 border border-green-500/20 text-[9px] font-bold rounded-full uppercase tracking-wider">
                                  Published
                                </span>
                              ) : (
                                <span className="inline-flex items-center px-2 py-0.5 bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 text-[9px] font-bold rounded-full uppercase tracking-wider">
                                  Draft
                                </span>
                              )}
                            </td>
                            <td className="px-6 py-4 text-slate-400">{blog.date}</td>
                            <td className="px-6 py-4 text-right flex items-center justify-end gap-2">
                              <button
                                onClick={() => openEditModal('blog', blog.id)}
                                className="p-1.5 hover:bg-slate-800 rounded text-slate-400 hover:text-white cursor-pointer"
                              >
                                <Edit2 size={14} />
                              </button>
                              <button
                                onClick={() => handleDelete('blog', blog.id)}
                                className="p-1.5 hover:bg-slate-800 rounded text-slate-400 hover:text-red-500 cursor-pointer"
                              >
                                <Trash2 size={14} />
                              </button>
                            </td>
                          </tr>
                        ))}
                        {paginatedCmsBlogs.length === 0 && (
                          <tr>
                            <td colSpan={6} className="px-6 py-8 text-center text-slate-500 italic">
                              No blog posts found matching current filters.
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>

                  {/* Pagination Controls */}
                  {totalCmsPages > 1 && (
                    <div className="flex items-center justify-between mt-2 px-2">
                      <span className="text-[10px] text-slate-400 font-medium">
                        Showing page {blogCmsPage} of {totalCmsPages} ({filteredCmsBlogs.length} articles)
                      </span>
                      <div className="flex gap-2">
                        <button
                          disabled={blogCmsPage === 1}
                          onClick={() => setBlogCmsPage(prev => Math.max(prev - 1, 1))}
                          className="px-3 py-1.5 bg-slate-900 border border-slate-850 hover:bg-slate-800 disabled:opacity-40 disabled:hover:bg-slate-900 text-white rounded-lg text-[10px] font-semibold uppercase tracking-wider transition-colors disabled:cursor-not-allowed cursor-pointer"
                        >
                          Prev
                        </button>
                        <button
                          disabled={blogCmsPage === totalCmsPages}
                          onClick={() => setBlogCmsPage(prev => Math.min(prev + 1, totalCmsPages))}
                          className="px-3 py-1.5 bg-slate-900 border border-slate-850 hover:bg-slate-800 disabled:opacity-40 disabled:hover:bg-slate-900 text-white rounded-lg text-[10px] font-semibold uppercase tracking-wider transition-colors disabled:cursor-not-allowed cursor-pointer"
                        >
                          Next
                        </button>
                      </div>
                    </div>
                  )}
                </>
              );
            })()}
          </div>
        )}

        {/* ==========================================
            TAB: TESTIMONIALS
           ========================================== */}
        {activeTab === 'testimonials' && (
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="font-heading text-3xl font-extrabold tracking-tight">Client Testimonials</h1>
                <p className="text-xs text-slate-400 mt-1">Manage ratings and quotes.</p>
              </div>
              <button
                onClick={() => openAddModal('testimonial')}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 shadow-md shadow-blue-500/20 cursor-pointer"
              >
                <Plus size={14} /> Add Testimonial
              </button>
            </div>

            <div className="border border-slate-800 rounded-2xl overflow-hidden bg-slate-950/50">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-950 text-slate-400 uppercase font-semibold border-b border-slate-800">
                  <tr>
                    <th className="px-6 py-4">Client Name</th>
                    <th className="px-6 py-4">Company & Role</th>
                    <th className="px-6 py-4">Rating</th>
                    <th className="px-6 py-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {db.testimonials.map((t) => (
                    <tr key={t.id} className="hover:bg-slate-900/50">
                      <td className="px-6 py-4 font-bold text-white">{t.name}</td>
                      <td className="px-6 py-4 text-slate-300">{t.role}, {t.company}</td>
                      <td className="px-6 py-4 text-yellow-500 font-extrabold">{'★'.repeat(t.rating)}</td>
                      <td className="px-6 py-4 text-right flex items-center justify-end gap-2">
                        <button
                          onClick={() => openEditModal('testimonial', t.id)}
                          className="p-1.5 hover:bg-slate-800 rounded text-slate-400 hover:text-white"
                        >
                          <Edit2 size={14} />
                        </button>
                        <button
                          onClick={() => handleDelete('testimonial', t.id)}
                          className="p-1.5 hover:bg-slate-800 rounded text-slate-400 hover:text-red-500"
                        >
                          <Trash2 size={14} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ==========================================
            TAB: TEAM MANAGEMENT
           ========================================== */}
        {activeTab === 'team' && (
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="font-heading text-3xl font-extrabold tracking-tight">Team Management</h1>
                <p className="text-xs text-slate-400 mt-1">Add, update, or remove agency craftspeople shown on the about page.</p>
              </div>
              <button
                onClick={() => {
                  setEditingTeamMember(null);
                  setTeamForm({
                    name: '', role: '', image: '', bio: '', experience: '', skills: [], order: db.team.length + 1, active: true,
                    socials: { twitter: '', linkedin: '', github: '' }
                  });
                  setTeamSkillInput('');
                  setShowTeamModal(true);
                }}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 shadow-md shadow-blue-500/20 cursor-pointer"
              >
                <Plus size={14} /> Add Team Member
              </button>
            </div>

            <div className="border border-slate-800 rounded-2xl overflow-hidden bg-slate-950/50">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-950 text-slate-400 uppercase font-semibold border-b border-slate-800">
                  <tr>
                    <th className="px-6 py-4">Member</th>
                    <th className="px-6 py-4">Designation</th>
                    <th className="px-6 py-4">Experience & Skills</th>
                    <th className="px-6 py-4">Display Order</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {(db.team || []).map((member) => (
                    <tr key={member.id} className="hover:bg-slate-900/50">
                      <td className="px-6 py-4 flex items-center gap-3">
                        <img src={member.image} alt={member.name} className="w-10 h-10 rounded-full object-cover border border-slate-700" />
                        <div className="flex flex-col gap-0.5">
                          <span className="font-bold text-white">{member.name}</span>
                          <span className="text-[10px] text-slate-500">{member.bio.slice(0, 50)}...</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-slate-300 font-medium">{member.role}</td>
                      <td className="px-6 py-4">
                        <div className="flex flex-col gap-1">
                          {member.experience && <span className="text-[10px] font-bold text-blue-400">Exp: {member.experience}</span>}
                          {member.skills && member.skills.length > 0 && (
                            <div className="flex flex-wrap gap-1">
                              {member.skills.map((s, idx) => (
                                <span key={idx} className="text-[8px] bg-slate-800 text-slate-300 px-1.5 py-0.5 rounded uppercase">
                                  {s}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-slate-400 font-mono font-bold">{member.order || 0}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-0.5 text-[9px] rounded-md uppercase font-semibold ${
                          member.active !== false ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'
                        }`}>
                          {member.active !== false ? 'Active' : 'Inactive'}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right flex items-center justify-end gap-2">
                        <button
                          onClick={() => handleEditTeamMember(member)}
                          className="p-1.5 hover:bg-slate-800 rounded text-slate-400 hover:text-white cursor-pointer"
                          title="Edit Profile"
                        >
                          <Edit2 size={14} />
                        </button>
                        <button
                          onClick={() => handleDeleteTeamMember(member.id)}
                          className="p-1.5 hover:bg-slate-800 rounded text-slate-400 hover:text-red-500 cursor-pointer"
                          title="Delete Member"
                        >
                          <Trash2 size={14} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ==========================================
            TAB: SERVICES
           ========================================== */}
        {activeTab === 'services' && (
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="font-heading text-3xl font-extrabold tracking-tight">Agency Capabilities</h1>
                <p className="text-xs text-slate-400 mt-1">Core services showing up on the public capabilities tabs.</p>
              </div>
              <button
                onClick={() => openAddModal('service')}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 shadow-md shadow-blue-500/20 cursor-pointer text-white-force"
              >
                <Plus size={14} /> Add Capability
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {db.services.map((srv) => (
                <div key={srv.id} className="p-6 rounded-2xl bg-white border border-slate-200 text-left flex flex-col justify-between shadow-sm">
                  <div>
                    <h3 className="font-heading font-bold text-lg text-slate-900">{srv.name}</h3>
                    <p className="text-[10px] text-blue-600 font-semibold tracking-wide uppercase mt-1">{srv.subtitle}</p>
                    <p className="text-xs text-slate-600 mt-4 leading-relaxed">{srv.description}</p>
                    
                    <div className="mt-4 space-y-1">
                      <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Tech specifications:</span>
                      {srv.details.map((det, idx) => (
                        <div key={idx} className="text-[10px] text-slate-600">• {det}</div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-200 text-xs">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Plan start:</span>
                      <span className="font-heading font-extrabold text-blue-650 text-sm">{srv.pricing[0]?.price || 'N/A'}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => openEditModal('service', srv.id)}
                        className="px-2.5 py-1.5 border border-slate-200 text-slate-700 hover:border-blue-600 hover:text-blue-600 rounded-lg font-semibold tracking-wide transition-all cursor-pointer"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete('service', srv.id)}
                        className="px-2.5 py-1.5 border border-red-200 text-red-650 hover:bg-red-50 rounded-lg font-semibold tracking-wide transition-all cursor-pointer"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==========================================
            TAB: CAREERS
           ========================================== */}
        {activeTab === 'careers' && (
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="font-heading text-3xl font-extrabold tracking-tight">Careers Openings</h1>
                <p className="text-xs text-slate-400 mt-1">Manage active recruitment roles on the About page.</p>
              </div>
              <button
                onClick={() => openAddModal('career')}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 shadow-md shadow-blue-500/20 cursor-pointer"
              >
                <Plus size={14} /> Add Role
              </button>
            </div>

            <div className="border border-slate-800 rounded-2xl overflow-hidden bg-slate-950/50">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-950 text-slate-400 uppercase font-semibold border-b border-slate-800">
                  <tr>
                    <th className="px-6 py-4">Role Title</th>
                    <th className="px-6 py-4">Department</th>
                    <th className="px-6 py-4">Location</th>
                    <th className="px-6 py-4">Type</th>
                    <th className="px-6 py-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {db.careers.map((car) => (
                    <tr key={car.id} className="hover:bg-slate-900/50">
                      <td className="px-6 py-4 font-bold text-white">{car.title}</td>
                      <td className="px-6 py-4 text-slate-300 font-semibold uppercase text-[10px]">{car.department}</td>
                      <td className="px-6 py-4 text-slate-400">{car.location}</td>
                      <td className="px-6 py-4 text-slate-400">{car.type}</td>
                      <td className="px-6 py-4 text-right flex items-center justify-end gap-2">
                        <button
                          onClick={() => openEditModal('career', car.id)}
                          className="p-1.5 hover:bg-slate-800 rounded text-slate-400 hover:text-white"
                        >
                          <Edit2 size={14} />
                        </button>
                        <button
                          onClick={() => handleDelete('career', car.id)}
                          className="p-1.5 hover:bg-slate-800 rounded text-slate-400 hover:text-red-500"
                        >
                          <Trash2 size={14} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ==========================================
            TAB: LEADS INBOX (CRM)
           ========================================== */}
        {activeTab === 'leads' && (() => {
          const filteredLeads = (db.leads || [])
            .filter(lead => {
              const name = lead.name || '';
              const email = lead.email || '';
              const phone = lead.phone || '';
              const company = lead.company || '';
              const subject = lead.subject || '';
              const message = lead.message || '';
              
              const searchLower = leadSearch.toLowerCase();
              const matchSearch = 
                name.toLowerCase().includes(searchLower) ||
                email.toLowerCase().includes(searchLower) ||
                phone.toLowerCase().includes(searchLower) ||
                company.toLowerCase().includes(searchLower) ||
                subject.toLowerCase().includes(searchLower) ||
                message.toLowerCase().includes(searchLower);
                
              const matchStatus = leadStatusFilter === 'all' || lead.status === leadStatusFilter;
              const matchSource = leadSourceFilter === 'all' || lead.source === leadSourceFilter;
              
              return matchSearch && matchStatus && matchSource;
            })
            .sort((a, b) => {
              const dateA = new Date(a.date).getTime() || 0;
              const dateB = new Date(b.date).getTime() || 0;
              return leadSort === 'desc' ? dateB - dateA : dateA - dateB;
            });

          return (
            <div className="flex flex-col gap-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="font-heading text-3xl font-extrabold tracking-tight">Contact Queries</h1>
                  <p className="text-xs text-slate-400 mt-1">Search, sort, filter, and manage customer enquiries stored in MongoDB.</p>
                </div>
                <button
                  onClick={handleExportCSV}
                  className="px-4 py-2 bg-slate-800 border border-slate-700 hover:border-slate-500 text-white rounded-xl text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 shadow-md cursor-pointer self-start sm:self-auto"
                >
                  <Download size={14} /> Export CSV
                </button>
              </div>

              {/* Filters Panel */}
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 p-4 bg-slate-950 border border-slate-800 rounded-2xl">
                <div className="flex flex-col gap-1">
                  <label className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Search</label>
                  <input
                    type="text"
                    value={leadSearch}
                    onChange={(e) => setLeadSearch(e.target.value)}
                    placeholder="Search name, email, query..."
                    className="px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white focus:outline-none"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Status</label>
                  <select
                    value={leadStatusFilter}
                    onChange={(e) => setLeadStatusFilter(e.target.value)}
                    className="px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white focus:outline-none"
                  >
                    <option value="all">All Statuses</option>
                    <option value="unread">Unread</option>
                    <option value="read">Read</option>
                    <option value="pending">Pending</option>
                    <option value="resolved">Resolved</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Source Channel</label>
                  <select
                    value={leadSourceFilter}
                    onChange={(e) => setLeadSourceFilter(e.target.value)}
                    className="px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white focus:outline-none"
                  >
                    <option value="all">All Channels</option>
                    <option value="contact_form">Contact Form</option>
                    <option value="newsletter">Newsletter</option>
                    <option value="contact_meeting">Meeting Scheduler</option>
                    <option value="careers">Careers Recruits</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Sort Date</label>
                  <select
                    value={leadSort}
                    onChange={(e) => setLeadSort(e.target.value)}
                    className="px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white focus:outline-none"
                  >
                    <option value="desc">Newest First</option>
                    <option value="asc">Oldest First</option>
                  </select>
                </div>
              </div>

              {/* Table List */}
              <div className="border border-slate-800 rounded-2xl overflow-hidden bg-slate-950/50">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-950 text-slate-400 uppercase font-semibold border-b border-slate-800">
                    <tr>
                      <th className="px-6 py-4">Prospect</th>
                      <th className="px-6 py-4">Inquiry details</th>
                      <th className="px-6 py-4">Source</th>
                      <th className="px-6 py-4">Date</th>
                      <th className="px-6 py-4">Status</th>
                      <th className="px-6 py-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    {filteredLeads.length > 0 ? (
                      filteredLeads.map((lead) => (
                        <tr key={lead.id} className="hover:bg-slate-900/50">
                          <td className="px-6 py-4">
                            <div className="flex flex-col gap-0.5">
                              <span className="font-bold text-white">{lead.name}</span>
                              <span className="text-[10px] text-slate-450">{lead.email}</span>
                              {lead.phone && <span className="text-[9px] text-slate-500 font-mono">{lead.phone}</span>}
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex flex-col gap-0.5 max-w-xs">
                              <span className="font-semibold text-slate-200 truncate">{lead.subject || 'No Subject'}</span>
                              <span className="text-[10px] text-slate-400 truncate">{lead.message}</span>
                              {lead.company && <span className="text-[9px] text-slate-500 font-medium">Company: {lead.company}</span>}
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <span className="px-2 py-0.5 bg-slate-800 border border-slate-700 text-[10px] rounded-md text-slate-400 font-semibold uppercase">
                              {lead.source.replace('_', ' ')}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-slate-400 font-mono">{lead.date}</td>
                          <td className="px-6 py-4">
                            <span className={`px-2 py-0.5 text-[9px] rounded-md uppercase font-semibold border ${
                              lead.status === 'unread' ? 'bg-red-500/10 text-red-400 border-red-500/20' :
                              lead.status === 'read' ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' :
                              lead.status === 'pending' ? 'bg-amber-500/10 text-amber-400 border-amber-500/20' :
                              'bg-green-500/10 text-green-400 border-green-500/20'
                            }`}>
                              {lead.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-right flex items-center justify-end gap-2">
                            <button
                              onClick={() => {
                                handleUpdateLeadStatus(lead.id, 'read');
                                setActiveLeadDetails(lead);
                              }}
                              className="p-1.5 hover:bg-slate-800 rounded text-slate-400 hover:text-white cursor-pointer"
                              title="View Details"
                            >
                              <Eye size={14} />
                            </button>
                            <button
                              onClick={() => handleDelete('lead', lead.id)}
                              className="p-1.5 hover:bg-slate-800 rounded text-slate-400 hover:text-red-500 cursor-pointer"
                              title="Delete Query"
                            >
                              <Trash2 size={14} />
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={6} className="px-6 py-8 text-center text-slate-500 font-medium uppercase tracking-wider">
                          No matching contact enquiries found.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          );
        })()}

        {/* ==========================================
            TAB: SEO CONFIGURATION
           ========================================== */}
        {activeTab === 'seo' && (
          <div className="flex flex-col gap-6">
            <div>
              <h1 className="font-heading text-3xl font-extrabold tracking-tight">SEO Metadata Control</h1>
              <p className="text-xs text-slate-400 mt-1">Configure search titles and description tags per route.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {db.seoSettings.map((seo) => (
                <div key={seo.page} className="p-6 rounded-2xl bg-slate-950 border border-slate-800 text-left flex flex-col justify-between">
                  <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-start">
                      <span className="px-2.5 py-0.5 bg-blue-600/10 border border-blue-500/25 text-blue-400 text-[10px] rounded-md font-bold uppercase tracking-wider">
                        /{seo.page === 'home' ? '' : seo.page}
                      </span>
                      <button
                        onClick={() => openEditModal('seo', seo.page)}
                        className="p-1.5 hover:bg-slate-900 border border-slate-800 text-slate-400 hover:text-white rounded"
                      >
                        <Edit2 size={12} />
                      </button>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white">{seo.title}</h3>
                      <p className="text-xs text-slate-400 mt-2 leading-relaxed">{seo.description}</p>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-slate-900 text-[10px] text-slate-500">
                    <strong>Keywords:</strong> {seo.keywords}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==========================================
            TAB: MEDIA LIBRARY (WordPress-like)
           ========================================== */}
        {activeTab === 'media' && (
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="font-heading text-3xl font-extrabold tracking-tight">Media Library</h1>
                <p className="text-xs text-slate-400 mt-1">Files stored securely in your Supabase Storage bucket.</p>
              </div>
              
              <div className="flex items-center gap-3">
                <input
                  type="file"
                  className="hidden"
                  id="media-library-upload"
                  onChange={(e) => handleFileUpload(e, 'library')}
                />
                <button
                  onClick={() => handleFileUploadClick('media-library-upload')}
                  disabled={isUploading}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 shadow-md shadow-blue-500/20 cursor-pointer disabled:opacity-50"
                >
                  {isUploading ? (
                    <>
                      <Loader2 size={14} className="animate-spin" /> Uploading...
                    </>
                  ) : (
                    <>
                      <Upload size={14} /> Upload File
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Drag & Drop Upload Zone */}
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={(e) => handleFileDrop(e, 'library')}
              onClick={() => handleFileUploadClick('media-library-upload')}
              className={`border-2 border-dashed rounded-3xl p-8 flex flex-col items-center justify-center gap-2 cursor-pointer transition-all ${
                isDragOver
                  ? 'border-blue-500 bg-blue-500/10 text-white'
                  : 'border-slate-800 bg-slate-950/20 hover:border-slate-700 text-slate-400 hover:text-slate-300'
              }`}
            >
              <UploadCloud size={32} className={isDragOver ? 'text-blue-500 animate-bounce' : 'text-slate-500'} />
              <div className="text-xs font-semibold text-center">
                Drag & Drop files here, or <span className="text-blue-500 hover:underline">browse</span>
              </div>
              <div className="text-[10px] text-slate-550 text-center">
                Supports PNG, JPG, JPEG, WEBP, SVG, and PDF (Max 50MB)
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {db.media.map((item) => (
                <div key={item.id || item._id} className="group relative rounded-2xl overflow-hidden aspect-square border border-slate-800 bg-slate-950 flex flex-col justify-between">
                  {/* File preview based on mimetype */}
                  {item.mimetype.startsWith('image/') ? (
                    <img src={item.url} alt={item.filename} className="w-full h-full object-cover group-hover:scale-103 transition-transform" />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-slate-500 gap-2 p-4 text-center">
                      <ImageIcon size={32} />
                      <span className="text-[10px] font-bold truncate max-w-full">{item.filename}</span>
                    </div>
                  )}

                  {/* Actions overlay */}
                  <div className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-3">
                    <div className="flex justify-between items-start">
                      <span className="text-[8px] px-1.5 py-0.5 bg-slate-800 text-slate-300 rounded border border-slate-700 uppercase font-semibold">
                        {item.storageType}
                      </span>
                      <button
                        onClick={() => db.deleteFile(item.id || item._id)}
                        className="p-1.5 bg-red-600 hover:bg-red-500 rounded text-white"
                        title="Delete Media"
                      >
                        <Trash2 size={12} />
                      </button>
                    </div>

                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(item.url);
                        window.dispatchEvent(new CustomEvent('show-toast', {
                          detail: { message: 'Asset path copied to clipboard.', type: 'info' }
                        }));
                      }}
                      className="w-full py-1.5 bg-slate-900 border border-slate-800 hover:border-slate-700 text-white rounded text-[10px] font-semibold uppercase text-center"
                    >
                      Copy URL
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==========================================
            TAB: USERS CRUD (Super Admin only)
           ========================================== */}
        {activeTab === 'users' && user?.role === 'super_admin' && (
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="font-heading text-3xl font-extrabold tracking-tight">System User Accounts</h1>
                <p className="text-xs text-slate-400 mt-1">Manage admin roles and credentials.</p>
              </div>
              <button
                onClick={() => setShowUserModal(true)}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 shadow-md shadow-blue-500/20 cursor-pointer"
              >
                <Plus size={14} /> Add User
              </button>
            </div>

            <div className="border border-slate-800 rounded-2xl overflow-hidden bg-slate-950/50">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-950 text-slate-400 uppercase font-semibold border-b border-slate-800">
                  <tr>
                    <th className="px-6 py-4">Name</th>
                    <th className="px-6 py-4">Email Address</th>
                    <th className="px-6 py-4">Assigned Role</th>
                    <th className="px-6 py-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {users.map((item) => (
                    <tr key={item.id || item._id} className="hover:bg-slate-900/50">
                      <td className="px-6 py-4 font-bold text-white">{item.name}</td>
                      <td className="px-6 py-4 text-slate-300">{item.email}</td>
                      <td className="px-6 py-4 uppercase text-blue-400 font-semibold">{item.role.replace('_', ' ')}</td>
                      <td className="px-6 py-4 text-right flex items-center justify-end gap-2">
                        {item.email !== 'admin@corebuild.com' && (
                          <button
                            onClick={() => handleDeleteUser(item.id || item._id)}
                            className="p-1.5 hover:bg-slate-800 rounded text-slate-400 hover:text-red-500"
                            title="Delete User"
                          >
                            <Trash2 size={14} />
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ==========================================
            TAB: SYSTEM SETTINGS
           ========================================== */}
        {activeTab === 'settings' && (
          <div className="flex flex-col gap-6">
            <div>
              <h1 className="font-heading text-3xl font-extrabold tracking-tight">System Settings</h1>
              <p className="text-xs text-slate-400 mt-1">Configure company details and social coordinates globally.</p>
            </div>

            <div className="glass-card rounded-3xl p-8 border border-slate-800 bg-slate-950/40">
              <form onSubmit={handleSaveSettings} className="flex flex-col gap-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest">Agency Name</label>
                    <input
                      type="text"
                      required
                      value={settingsForm.agencyName}
                      onChange={(e) => setSettingsForm({ ...settingsForm, agencyName: e.target.value })}
                      className="px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-sm focus:outline-none focus:border-blue-500 text-white"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest">HQ Email Address</label>
                    <input
                      type="email"
                      required
                      value={settingsForm.contactEmail}
                      onChange={(e) => setSettingsForm({ ...settingsForm, contactEmail: e.target.value })}
                      className="px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-sm focus:outline-none focus:border-blue-500 text-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest">HQ Contact Phone</label>
                    <input
                      type="text"
                      required
                      value={settingsForm.contactPhone}
                      onChange={(e) => setSettingsForm({ ...settingsForm, contactPhone: e.target.value })}
                      className="px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-sm focus:outline-none focus:border-blue-500 text-white"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest">WhatsApp ID (numbers only)</label>
                    <input
                      type="text"
                      required
                      value={settingsForm.whatsappNumber}
                      onChange={(e) => setSettingsForm({ ...settingsForm, whatsappNumber: e.target.value })}
                      className="px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-sm focus:outline-none focus:border-blue-500 text-white"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest">Physical Address</label>
                  <input
                    type="text"
                    required
                    value={settingsForm.address}
                    onChange={(e) => setSettingsForm({ ...settingsForm, address: e.target.value })}
                    className="px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-sm focus:outline-none focus:border-blue-500 text-white"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-slate-200">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest">Twitter (URL)</label>
                    <input
                      type="url"
                      value={settingsForm.socialLinks?.twitter || ''}
                      onChange={(e) => setSettingsForm({
                        ...settingsForm,
                        socialLinks: { ...settingsForm.socialLinks, twitter: e.target.value }
                      })}
                      className="px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 text-slate-900"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest">LinkedIn (URL)</label>
                    <input
                      type="url"
                      value={settingsForm.socialLinks?.linkedin || ''}
                      onChange={(e) => setSettingsForm({
                        ...settingsForm,
                        socialLinks: { ...settingsForm.socialLinks, linkedin: e.target.value }
                      })}
                      className="px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 text-slate-900"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest">GitHub (URL)</label>
                    <input
                      type="url"
                      value={settingsForm.socialLinks?.github || ''}
                      onChange={(e) => setSettingsForm({
                        ...settingsForm,
                        socialLinks: { ...settingsForm.socialLinks, github: e.target.value }
                      })}
                      className="px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 text-slate-900"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest">Instagram (URL)</label>
                    <input
                      type="url"
                      value={settingsForm.socialLinks?.instagram || ''}
                      onChange={(e) => setSettingsForm({
                        ...settingsForm,
                        socialLinks: { ...settingsForm.socialLinks, instagram: e.target.value }
                      })}
                      className="px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 text-slate-900"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-2 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-blue-500/20"
                >
                  Save Global Settings <SettingsIcon size={14} />
                </button>

              </form>
            </div>
          </div>
        )}

        {/* ==========================================
            TAB: FAQS CRUD
           ========================================== */}
        {activeTab === 'faq' && (
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="font-heading text-3xl font-extrabold tracking-tight">FAQ Accordions</h1>
                <p className="text-xs text-slate-400 mt-1">Manage frequently asked questions on the homepage.</p>
              </div>
              <button
                onClick={openAddFaqModal}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 shadow-md shadow-blue-500/20 cursor-pointer"
              >
                <Plus size={14} /> Add FAQ
              </button>
            </div>

            <div className="border border-slate-800 rounded-2xl overflow-hidden bg-slate-950/50">
              <table className="w-full text-left text-xs text-slate-300">
                <thead className="bg-slate-950 text-slate-400 uppercase font-semibold border-b border-slate-800">
                  <tr>
                    <th className="px-6 py-4 w-16">Order</th>
                    <th className="px-6 py-4">Question</th>
                    <th className="px-6 py-4">Answer</th>
                    <th className="px-6 py-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-left">
                  {db.faqs.map((faq) => (
                    <tr key={faq.id} className="hover:bg-slate-900/50">
                      <td className="px-6 py-4 font-bold text-white">{faq.order}</td>
                      <td className="px-6 py-4 font-bold text-white max-w-xs truncate">{faq.q}</td>
                      <td className="px-6 py-4 text-slate-400 max-w-sm truncate">{faq.a}</td>
                      <td className="px-6 py-4 text-right flex items-center justify-end gap-2">
                        <button
                          onClick={() => openEditFaqModal(faq)}
                          className="p-1.5 hover:bg-slate-800 rounded text-slate-400 hover:text-white"
                          title="Edit FAQ"
                        >
                          <Edit2 size={14} />
                        </button>
                        <button
                          onClick={() => handleDeleteFaq(faq.id)}
                          className="p-1.5 hover:bg-slate-800 rounded text-slate-400 hover:text-red-500"
                          title="Delete FAQ"
                        >
                          <Trash2 size={14} />
                        </button>
                      </td>
                    </tr>
                  ))}
                  {db.faqs.length === 0 && (
                    <tr>
                      <td colSpan={4} className="px-6 py-10 text-center text-slate-500">No FAQ accordions found.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ==========================================
            TAB: HOME LAYOUT SECTIONS EDITOR
           ========================================== */}
        {activeTab === 'homeLayout' && (
          <div className="flex flex-col gap-6">
            <div>
              <h1 className="font-heading text-3xl font-extrabold tracking-tight">Home Page Layout Editor</h1>
              <p className="text-xs text-slate-400 mt-1">Configure layout badges, titles, descriptions, metrics, and lists dynamically.</p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Select Section:</span>
              <select
                value={selectedHomeSection}
                onChange={(e) => setSelectedHomeSection(e.target.value)}
                className="px-4 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs focus:outline-none focus:border-blue-500 text-white font-semibold"
              >
                <option value="hero">Hero Header Block</option>
                <option value="partners">Partners Trusted Marquee</option>
                <option value="aiSection">AI Integrations Solutions</option>
                <option value="process">Roadmap process steps</option>
                <option value="aboutSection">About Milestones & Values</option>
              </select>
            </div>

            <div className="glass-card rounded-3xl p-8 border border-slate-800 bg-slate-950/40">
              <form onSubmit={handleHomeSectionSave} className="flex flex-col gap-6 text-left">
                
                {/* HERO EDITOR */}
                {selectedHomeSection === 'hero' && (
                  <div className="flex flex-col gap-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest">Hero Badge</label>
                        <input
                          type="text" required
                          value={homeFormHero.badge}
                          onChange={(e) => setHomeFormHero({ ...homeFormHero, badge: e.target.value })}
                          className="px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-sm focus:outline-none focus:border-blue-500 text-white"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest">Hero Title</label>
                        <input
                          type="text" required
                          value={homeFormHero.title}
                          onChange={(e) => setHomeFormHero({ ...homeFormHero, title: e.target.value })}
                          className="px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-sm focus:outline-none focus:border-blue-500 text-white"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest">Hero Subtitle / Description</label>
                      <textarea
                        required rows={3}
                        value={homeFormHero.description}
                        onChange={(e) => setHomeFormHero({ ...homeFormHero, description: e.target.value })}
                        className="px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-sm focus:outline-none focus:border-blue-500 text-white resize-none"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest">Primary Button text</label>
                        <input
                          type="text" required
                          value={homeFormHero.ctaText1}
                          onChange={(e) => setHomeFormHero({ ...homeFormHero, ctaText1: e.target.value })}
                          className="px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-sm focus:outline-none focus:border-blue-500 text-white"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest">Secondary Button text</label>
                        <input
                          type="text" required
                          value={homeFormHero.ctaText2}
                          onChange={(e) => setHomeFormHero({ ...homeFormHero, ctaText2: e.target.value })}
                          className="px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-sm focus:outline-none focus:border-blue-500 text-white"
                        />
                      </div>
                    </div>

                    {/* Stats List */}
                    <div className="flex flex-col gap-4 pt-4 border-t border-slate-850">
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Metrics Statistics (3 items)</h4>
                      <div className="grid grid-cols-3 gap-6">
                        {homeFormHero.stats.map((stat, idx) => (
                          <div key={idx} className="flex flex-col gap-3">
                            <div className="flex flex-col gap-1.5">
                              <label className="text-[9px] font-semibold text-slate-500 uppercase tracking-wider">Value (e.g. 99%)</label>
                              <input
                                type="text" required
                                value={stat.value}
                                onChange={(e) => {
                                  const updated = [...homeFormHero.stats];
                                  updated[idx].value = e.target.value;
                                  setHomeFormHero({ ...homeFormHero, stats: updated });
                                }}
                                className="px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs focus:outline-none focus:border-blue-500 text-white"
                              />
                            </div>
                            <div className="flex flex-col gap-1.5">
                              <label className="text-[9px] font-semibold text-slate-500 uppercase tracking-wider">Label (e.g. Uptime SLA)</label>
                              <input
                                type="text" required
                                value={stat.label}
                                onChange={(e) => {
                                  const updated = [...homeFormHero.stats];
                                  updated[idx].label = e.target.value;
                                  setHomeFormHero({ ...homeFormHero, stats: updated });
                                }}
                                className="px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs focus:outline-none focus:border-blue-500 text-white"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* PARTNERS EDITOR */}
                {selectedHomeSection === 'partners' && (
                  <div className="flex flex-col gap-4">
                    <label className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest">Trusted Partner Companies (Comma separated list)</label>
                    <textarea
                      required rows={4}
                      value={homeFormPartners.companies.join(', ')}
                      onChange={(e) => {
                        const parsed = e.target.value.split(',').map(s => s.trim()).filter(Boolean);
                        setHomeFormPartners({ companies: parsed });
                      }}
                      className="px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-sm focus:outline-none focus:border-blue-500 text-white resize-none"
                    />
                    <p className="text-[10px] text-slate-500 leading-normal">Enter the names of the trusted brands to marquee-scroll in order, separated by commas.</p>
                  </div>
                )}

                {/* AI SECTION EDITOR */}
                {selectedHomeSection === 'aiSection' && (
                  <div className="flex flex-col gap-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest">AI Section Badge</label>
                        <input
                          type="text" required
                          value={homeFormAi.badge}
                          onChange={(e) => setHomeFormAi({ ...homeFormAi, badge: e.target.value })}
                          className="px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-sm focus:outline-none focus:border-blue-500 text-white"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest">AI Section Title</label>
                        <input
                          type="text" required
                          value={homeFormAi.title}
                          onChange={(e) => setHomeFormAi({ ...homeFormAi, title: e.target.value })}
                          className="px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-sm focus:outline-none focus:border-blue-500 text-white"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest">AI Section Description</label>
                      <textarea
                        required rows={3}
                        value={homeFormAi.description}
                        onChange={(e) => setHomeFormAi({ ...homeFormAi, description: e.target.value })}
                        className="px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-sm focus:outline-none focus:border-blue-500 text-white resize-none"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest">Capabilities List (Comma separated)</label>
                      <textarea
                        required rows={3}
                        value={homeFormAi.features.join(', ')}
                        onChange={(e) => {
                          const parsed = e.target.value.split(',').map(s => s.trim()).filter(Boolean);
                          setHomeFormAi(prev => ({ ...prev, features: parsed }));
                        }}
                        className="px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-sm focus:outline-none focus:border-blue-500 text-white resize-none"
                      />
                    </div>
                  </div>
                )}

                {/* PROCESS STEPS EDITOR */}
                {selectedHomeSection === 'process' && (
                  <div className="flex flex-col gap-6">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Workflow delivery roadmap steps (4 items)</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {homeFormProcess.steps.map((item, idx) => (
                        <div key={idx} className="p-4 rounded-xl border border-slate-800 bg-slate-900/50 flex flex-col gap-3">
                          <span className="text-xs font-bold text-blue-500">Step {item.step}</span>
                          <div className="flex flex-col gap-1">
                            <label className="text-[9px] text-slate-500 uppercase font-semibold">Step Title</label>
                            <input
                              type="text" required
                              value={item.title}
                              onChange={(e) => {
                                const updated = [...homeFormProcess.steps];
                                updated[idx].title = e.target.value;
                                setHomeFormProcess({ steps: updated });
                              }}
                              className="px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-xs focus:outline-none focus:border-blue-500 text-white"
                            />
                          </div>
                          <div className="flex flex-col gap-1">
                            <label className="text-[9px] text-slate-500 uppercase font-semibold">Step Description</label>
                            <textarea
                              required rows={2}
                              value={item.desc}
                              onChange={(e) => {
                                const updated = [...homeFormProcess.steps];
                                updated[idx].desc = e.target.value;
                                setHomeFormProcess({ steps: updated });
                              }}
                              className="px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-xs focus:outline-none focus:border-blue-500 text-white resize-none"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* ABOUT SECTION EDITOR */}
                {selectedHomeSection === 'aboutSection' && (
                  <div className="flex flex-col gap-8">
                    {/* Milestones Edit */}
                    <div className="flex flex-col gap-4">
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider border-b border-slate-800 pb-2">History timeline milestones</h4>
                      <div className="flex flex-col gap-4 max-h-72 overflow-y-auto pr-2">
                        {homeFormAbout.milestones.map((mil, idx) => (
                          <div key={idx} className="grid grid-cols-12 gap-3 items-start p-3 bg-slate-900/50 rounded-xl border border-slate-800">
                            <div className="col-span-3 flex flex-col gap-1">
                              <label className="text-[8px] text-slate-550 uppercase font-bold">Year/Month</label>
                              <input
                                type="text" required
                                value={mil.year}
                                onChange={(e) => {
                                  const updated = [...homeFormAbout.milestones];
                                  updated[idx].year = e.target.value;
                                  setHomeFormAbout({ ...homeFormAbout, milestones: updated });
                                }}
                                className="px-2 py-1.5 bg-slate-900 border border-slate-800 rounded text-xs text-white"
                              />
                            </div>
                            <div className="col-span-8 flex flex-col gap-3">
                              <div className="flex flex-col gap-1">
                                <label className="text-[8px] text-slate-550 uppercase font-bold">Milestone Title</label>
                                <input
                                  type="text" required
                                  value={mil.title}
                                  onChange={(e) => {
                                    const updated = [...homeFormAbout.milestones];
                                    updated[idx].title = e.target.value;
                                    setHomeFormAbout({ ...homeFormAbout, milestones: updated });
                                  }}
                                  className="px-2 py-1.5 bg-slate-900 border border-slate-800 rounded text-xs text-white"
                                />
                              </div>
                              <div className="flex flex-col gap-1">
                                <label className="text-[8px] text-slate-550 uppercase font-bold">Milestone Summary Description</label>
                                <textarea
                                  required rows={2}
                                  value={mil.desc}
                                  onChange={(e) => {
                                    const updated = [...homeFormAbout.milestones];
                                    updated[idx].desc = e.target.value;
                                    setHomeFormAbout({ ...homeFormAbout, milestones: updated });
                                  }}
                                  className="px-2 py-1.5 bg-slate-900 border border-slate-800 rounded text-xs text-white resize-none"
                                />
                              </div>
                            </div>
                            <div className="col-span-1 pt-4 text-center">
                              <button
                                type="button"
                                onClick={() => {
                                  const updated = homeFormAbout.milestones.filter((_, i) => i !== idx);
                                  setHomeFormAbout({ ...homeFormAbout, milestones: updated });
                                }}
                                className="p-1 text-slate-500 hover:text-red-500 rounded"
                              >
                                <Trash2 size={12} />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          setHomeFormAbout({
                            ...homeFormAbout,
                            milestones: [...homeFormAbout.milestones, { year: 'New Year', title: 'New Milestone', desc: 'Summary of what was achieved.' }]
                          });
                        }}
                        className="px-3 py-1.5 border border-slate-800 text-slate-400 hover:text-white rounded-lg text-xs w-max cursor-pointer"
                      >
                        <Plus size={10} className="inline mr-1" /> Add Milestone
                      </button>
                    </div>

                    {/* Values Edit */}
                    <div className="flex flex-col gap-4 pt-4 border-t border-slate-850">
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider border-b border-slate-800 pb-2">Core Agency values (3 items)</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {homeFormAbout.values.map((val, idx) => (
                          <div key={idx} className="p-4 bg-slate-900/50 rounded-xl border border-slate-800 flex flex-col gap-3">
                            <span className="text-[10px] font-bold text-slate-500">VALUE 0{idx + 1}</span>
                            <div className="flex flex-col gap-1">
                              <label className="text-[8px] text-slate-500 uppercase font-semibold">Value Title</label>
                              <input
                                type="text" required
                                value={val.title}
                                onChange={(e) => {
                                  const updated = [...homeFormAbout.values];
                                  updated[idx].title = e.target.value;
                                  setHomeFormAbout({ ...homeFormAbout, values: updated });
                                }}
                                className="px-2.5 py-1.5 bg-slate-900 border border-slate-800 rounded text-xs text-white"
                              />
                            </div>
                            <div className="flex flex-col gap-1">
                              <label className="text-[8px] text-slate-500 uppercase font-semibold">Value Description</label>
                              <textarea
                                required rows={3}
                                value={val.desc}
                                onChange={(e) => {
                                  const updated = [...homeFormAbout.values];
                                  updated[idx].desc = e.target.value;
                                  setHomeFormAbout({ ...homeFormAbout, values: updated });
                                }}
                                className="px-2.5 py-1.5 bg-slate-900 border border-slate-800 rounded text-xs text-white resize-none"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  className="mt-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-blue-500/20"
                >
                  Save Section Layout <CheckCircle size={14} />
                </button>

              </form>
            </div>
          </div>
        )}

      </div>

      {/* ==========================================
          MODAL: GENERAL CRUD FORM MODALS
         ========================================== */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-slate-950/70 backdrop-blur-sm overflow-y-auto">
          <div className="relative w-full max-w-2xl rounded-3xl border border-slate-800 bg-slate-950 p-8 shadow-2xl text-left my-8">
            <button
              onClick={() => setShowModal(null)}
              className="absolute top-6 right-6 p-2 rounded-full border border-slate-900 text-slate-400 hover:text-white"
            >
              ✕
            </button>

            <h3 className="font-heading text-xl font-extrabold tracking-tight mb-6">
              {modalMode === 'add' ? 'Add' : 'Edit'} {showModal.toUpperCase()}
            </h3>

            <form onSubmit={handleFormSubmit} className="flex flex-col gap-4 max-h-[70vh] overflow-y-auto pr-2">
              
              {/* CRUD FORM: PROJECT */}
              {showModal === 'project' && (
                <>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1">
                      <label className="text-[10px] text-slate-500 uppercase font-semibold">Title</label>
                      <input
                        type="text" required value={projForm.title}
                        onChange={(e) => setProjForm({ ...projForm, title: e.target.value })}
                        className="px-3 py-2 bg-slate-900 border border-slate-850 rounded-xl text-xs focus:outline-none focus:border-blue-500 text-white"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-[10px] text-slate-500 uppercase font-semibold">Client</label>
                      <input
                        type="text" required value={projForm.client}
                        onChange={(e) => setProjForm({ ...projForm, client: e.target.value })}
                        className="px-3 py-2 bg-slate-900 border border-slate-850 rounded-xl text-xs focus:outline-none focus:border-blue-500 text-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1">
                      <label className="text-[10px] text-slate-500 uppercase font-semibold">Category</label>
                      <select
                        value={projForm.category}
                        onChange={(e) => setProjForm({ ...projForm, category: e.target.value as any })}
                        className="px-3 py-2 bg-slate-900 border border-slate-850 rounded-xl text-xs focus:outline-none focus:border-blue-500 text-white"
                      >
                        <option value="web">Web Application</option>
                        <option value="mobile">Mobile App</option>
                        <option value="ai">AI Automation</option>
                        <option value="saas">SaaS Platform</option>
                      </select>
                    </div>
                    
                    {/* Media File Attachment */}
                    <div className="flex flex-col gap-1">
                    <div 
                      className={`flex flex-col gap-1 p-2 rounded-2xl border transition-all ${
                        isDragOver ? 'border-blue-500 bg-blue-500/5' : 'border-transparent'
                      }`}
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={(e) => handleFileDrop(e, 'project_image')}
                    >
                      <label className="text-[10px] text-slate-500 uppercase font-semibold">Cover Image (Drag & Drop here)</label>
                      <div className="flex gap-2">
                        <input
                          type="text" required value={projForm.image}
                          onChange={(e) => setProjForm({ ...projForm, image: e.target.value })}
                          className="flex-1 px-3 py-2 bg-slate-900 border border-slate-850 rounded-xl text-xs focus:outline-none focus:border-blue-500 text-white truncate"
                        />
                        <button
                          type="button"
                          onClick={() => setShowMediaSelector('project_image')}
                          className="px-3 bg-slate-800 hover:bg-slate-700 text-xs font-semibold rounded-lg text-slate-300"
                        >
                          Library
                        </button>
                        <button
                          type="button"
                          onClick={() => handleFileUploadClick('project-image-upload')}
                          className="p-2 bg-blue-600 hover:bg-blue-500 rounded-lg text-white"
                          title="Upload Local File"
                        >
                          <Upload size={12} />
                        </button>
                      </div>
                      <input
                        type="file"
                        className="hidden"
                        id="project-image-upload"
                        onChange={(e) => handleFileUpload(e, 'project_image')}
                      />
                    </div>
                  </div>

                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] text-slate-500 uppercase font-semibold">Short Description</label>
                    <input
                      type="text" required value={projForm.description}
                      onChange={(e) => setProjForm({ ...projForm, description: e.target.value })}
                      className="px-3 py-2 bg-slate-900 border border-slate-850 rounded-xl text-xs focus:outline-none focus:border-blue-500 text-white"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] text-slate-500 uppercase font-semibold">Detailed Description</label>
                    <textarea
                      rows={4} required value={projForm.longDescription}
                      onChange={(e) => setProjForm({ ...projForm, longDescription: e.target.value })}
                      className="px-3 py-2 bg-slate-900 border border-slate-850 rounded-xl text-xs focus:outline-none focus:border-blue-500 text-white resize-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1">
                      <label className="text-[10px] text-slate-500 uppercase font-semibold">Live Site URL</label>
                      <input
                        type="url" value={projForm.url || ''}
                        onChange={(e) => setProjForm({ ...projForm, url: e.target.value })}
                        className="px-3 py-2 bg-slate-900 border border-slate-850 rounded-xl text-xs focus:outline-none focus:border-blue-500 text-white"
                      />
                    </div>
                    <div className="flex items-center gap-2 pt-6">
                      <input
                        type="checkbox" id="featured" checked={projForm.featured}
                        onChange={(e) => setProjForm({ ...projForm, featured: e.target.checked })}
                        className="rounded border-slate-800 bg-slate-900 text-blue-600 focus:ring-blue-500"
                      />
                      <label htmlFor="featured" className="text-xs text-slate-300 font-semibold select-none">Feature on Homepage</label>
                    </div>
                  </div>
                </>
              )}

              {/* CRUD FORM: BLOG */}
              {showModal === 'blog' && (
                <>
                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] text-slate-500 uppercase font-semibold">Title</label>
                    <input
                      type="text" required value={blogForm.title}
                      onChange={(e) => {
                        const newTitle = e.target.value;
                        setBlogForm(prev => ({
                          ...prev,
                          title: newTitle,
                          slug: modalMode === 'add' ? slugify(newTitle) : prev.slug
                        }));
                      }}
                      className="px-3 py-2 bg-slate-900 border border-slate-850 rounded-xl text-xs focus:outline-none focus:border-blue-500 text-white"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1">
                      <label className="text-[10px] text-slate-500 uppercase font-semibold">Category</label>
                      <input
                        type="text" required value={blogForm.category}
                        onChange={(e) => setBlogForm({ ...blogForm, category: e.target.value })}
                        className="px-3 py-2 bg-slate-900 border border-slate-850 rounded-xl text-xs focus:outline-none focus:border-blue-500 text-white"
                      />
                    </div>
                    
                    {/* Media File Attachment */}
                    <div className="flex flex-col gap-1">
                      <div 
                        className={`flex flex-col gap-1 p-2 rounded-2xl border transition-all ${
                          isDragOver ? 'border-blue-500 bg-blue-500/5' : 'border-transparent'
                        }`}
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={(e) => handleFileDrop(e, 'blog_image')}
                      >
                        <label className="text-[10px] text-slate-500 uppercase font-semibold">Banner Image (Drag & Drop here)</label>
                        <div className="flex gap-2">
                          <input
                            type="text" required value={blogForm.image}
                            onChange={(e) => setBlogForm({ ...blogForm, image: e.target.value })}
                            className="flex-1 px-3 py-2 bg-slate-900 border border-slate-850 rounded-xl text-xs focus:outline-none focus:border-blue-500 text-white truncate"
                          />
                          <button
                            type="button"
                            onClick={() => setShowMediaSelector('blog_image')}
                            className="px-3 bg-slate-880 hover:bg-slate-700 text-xs font-semibold rounded-lg text-slate-300"
                          >
                            Library
                          </button>
                          <button
                            type="button"
                            onClick={() => handleFileUploadClick('blog-image-upload')}
                            className="p-2 bg-blue-600 hover:bg-blue-500 rounded-lg text-white"
                          >
                            <Upload size={12} />
                          </button>
                        </div>
                        <input
                          type="file"
                          className="hidden"
                          id="blog-image-upload"
                          onChange={(e) => handleFileUpload(e, 'blog_image')}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1">
                      <label className="text-[10px] text-slate-500 uppercase font-semibold">Author</label>
                      <input
                        type="text" required value={blogForm.author}
                        onChange={(e) => setBlogForm({ ...blogForm, author: e.target.value })}
                        className="px-3 py-2 bg-slate-900 border border-slate-850 rounded-xl text-xs focus:outline-none focus:border-blue-500 text-white"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-[10px] text-slate-500 uppercase font-semibold">Read Time</label>
                      <input
                        type="text" required value={blogForm.readTime}
                        onChange={(e) => setBlogForm({ ...blogForm, readTime: e.target.value })}
                        className="px-3 py-2 bg-slate-900 border border-slate-850 rounded-xl text-xs focus:outline-none focus:border-blue-500 text-white"
                      />
                    </div>
                  </div>

                  {/* Dynamic Tags Manager */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] text-slate-500 uppercase font-semibold">Tags (Press Enter to add)</label>
                    <div className="flex flex-wrap gap-1.5 p-2 bg-slate-900 border border-slate-850 rounded-xl min-h-[40px] items-center">
                      {(blogForm.tags || []).map((t, idx) => (
                        <span key={idx} className="inline-flex items-center gap-1 px-2 py-0.5 bg-blue-600/10 text-blue-400 border border-blue-500/20 text-[10px] uppercase tracking-wide font-semibold rounded-md">
                          {t}
                          <button
                            type="button"
                            onClick={() => setBlogForm(prev => ({ ...prev, tags: prev.tags.filter(tag => tag !== t) }))}
                            className="hover:text-red-500 font-bold ml-0.5 focus:outline-none cursor-pointer"
                          >
                            &times;
                          </button>
                        </span>
                      ))}
                      <input
                        type="text"
                        placeholder="Add tag..."
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            e.preventDefault();
                            const val = e.currentTarget.value.trim().toLowerCase();
                            if (val && !blogForm.tags.includes(val)) {
                              setBlogForm(prev => ({ ...prev, tags: [...prev.tags, val] }));
                              e.currentTarget.value = '';
                            }
                          }
                        }}
                        className="flex-1 bg-transparent text-xs text-white focus:outline-none min-w-[80px] p-0.5"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] text-slate-500 uppercase font-semibold">Short Summary</label>
                    <input
                      type="text" required value={blogForm.summary}
                      onChange={(e) => setBlogForm({ ...blogForm, summary: e.target.value })}
                      className="px-3 py-2 bg-slate-900 border border-slate-850 rounded-xl text-xs focus:outline-none focus:border-blue-500 text-white"
                    />
                  </div>

                  {/* Draft/Publish Status Toggle */}
                  <div className="flex items-center gap-2.5 p-3 bg-slate-900/50 border border-slate-850 rounded-xl">
                    <input
                      type="checkbox"
                      id="published"
                      checked={blogForm.published ?? true}
                      onChange={(e) => setBlogForm(prev => ({ ...prev, published: e.target.checked }))}
                      className="w-4 h-4 rounded border-slate-800 bg-slate-900 text-blue-600 focus:ring-blue-500 cursor-pointer"
                    />
                    <div className="flex flex-col text-left">
                      <label htmlFor="published" className="text-xs text-white font-bold select-none cursor-pointer">Publish Article</label>
                      <span className="text-[9px] text-slate-500">Drafts are hidden from the public blog directory and direct search indexing.</span>
                    </div>
                  </div>

                  {/* SEO Metadata Settings */}
                  <div className="border border-slate-850 bg-slate-950/30 rounded-2xl p-4 flex flex-col gap-4">
                    <h4 className="font-heading text-xs font-extrabold tracking-wide uppercase text-blue-500 border-b border-slate-850 pb-2 flex items-center justify-between">
                      SEO Optimization Panel
                      <span className="text-[9px] font-normal text-slate-500 capitalize">Custom Search Engine Meta</span>
                    </h4>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1">
                        <label className="text-[10px] text-slate-500 uppercase font-semibold font-mono">SEO URL Slug</label>
                        <input
                          type="text" required value={blogForm.slug || ''}
                          onChange={(e) => setBlogForm(prev => ({ ...prev, slug: slugify(e.target.value) }))}
                          className="px-3 py-2 bg-slate-900 border border-slate-850 rounded-xl text-xs focus:outline-none focus:border-blue-500 text-white font-mono"
                          placeholder="e.g. why-every-startup-needs-a-website"
                        />
                      </div>
                      
                      <div className="flex flex-col gap-1">
                        <label className="text-[10px] text-slate-500 uppercase font-semibold">SEO Meta Title</label>
                        <input
                          type="text" value={blogForm.metaTitle || ''}
                          onChange={(e) => setBlogForm(prev => ({ ...prev, metaTitle: e.target.value }))}
                          className="px-3 py-2 bg-slate-900 border border-slate-850 rounded-xl text-xs focus:outline-none focus:border-blue-500 text-white"
                          placeholder="If blank, defaults to main title"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="text-[10px] text-slate-500 uppercase font-semibold">SEO Target Keywords (comma separated)</label>
                      <input
                        type="text" value={blogForm.keywords || ''}
                        onChange={(e) => setBlogForm(prev => ({ ...prev, keywords: e.target.value }))}
                        className="px-3 py-2 bg-slate-900 border border-slate-850 rounded-xl text-xs focus:outline-none focus:border-blue-500 text-white"
                        placeholder="e.g. nextjs development, startups, cost, seo ranking"
                      />
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="text-[10px] text-slate-500 uppercase font-semibold">SEO Meta Description</label>
                      <textarea
                        rows={2} value={blogForm.metaDescription || ''}
                        onChange={(e) => setBlogForm(prev => ({ ...prev, metaDescription: e.target.value }))}
                        className="px-3 py-2 bg-slate-900 border border-slate-850 rounded-xl text-xs focus:outline-none focus:border-blue-500 text-white resize-none"
                        placeholder="A concise, keyword-rich article description (150-160 characters)"
                      />
                    </div>
                  </div>

                  {/* Beautiful Markdown Writer with Live Preview */}
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center justify-between">
                      <label className="text-[10px] text-slate-500 uppercase font-semibold">Detailed Article Body (Markdown supported)</label>
                      <div className="flex items-center gap-1.5 text-[9px] uppercase tracking-wide font-bold">
                        <span className="px-1.5 py-0.5 rounded bg-slate-900 text-blue-500">Editor</span>
                        <span className="text-slate-600">&bull;</span>
                        <span className="px-1.5 py-0.5 rounded bg-slate-900 text-green-500">Live Preview</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-stretch min-h-[300px]">
                      {/* Editor side */}
                      <textarea
                        rows={14}
                        required
                        value={blogForm.content}
                        onChange={(e) => setBlogForm(prev => ({ ...prev, content: e.target.value }))}
                        className="px-3 py-2 bg-slate-900 border border-slate-850 rounded-xl text-xs focus:outline-none focus:border-blue-500 text-white font-mono leading-relaxed resize-y w-full h-full min-h-[250px]"
                        placeholder="Write your article body in Markdown format..."
                      />
                      
                      {/* Live Preview side */}
                      <div className="p-3 bg-slate-950 border border-slate-850 rounded-xl text-xs overflow-y-auto max-h-[300px] text-left leading-relaxed text-slate-350">
                        {blogForm.content ? (
                          blogForm.content.split('\n\n').map((paragraph, index) => {
                            const trimmed = paragraph.trim();
                            if (trimmed.startsWith('### ')) {
                              return <h4 key={index} className="text-sm font-bold text-white mt-4 mb-2">{trimmed.replace('### ', '')}</h4>;
                            }
                            if (trimmed.startsWith('## ')) {
                              return <h3 key={index} className="text-base font-extrabold text-white mt-5 mb-2">{trimmed.replace('## ', '')}</h3>;
                            }
                            if (trimmed.startsWith('# ')) {
                              return <h2 key={index} className="text-lg font-black text-white mt-6 mb-3 border-b border-slate-800 pb-1">{trimmed.replace('# ', '')}</h2>;
                            }
                            if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
                              const items = trimmed.split(/\n[-*]\s+/);
                              return (
                                <ul key={index} className="list-disc pl-5 my-2 space-y-1">
                                  {items.map((item, iIdx) => (
                                    <li key={iIdx}>{item.replace(/^[-*]\s+/, '')}</li>
                                  ))}
                                </ul>
                              );
                            }
                            return <p key={index} className="mb-3 whitespace-pre-line">{trimmed}</p>;
                          })
                        ) : (
                          <span className="text-slate-500 italic">No content written yet. Markdown elements will render here in real-time.</span>
                        )}
                      </div>
                    </div>
                  </div>
                </>
              )}

              {/* CRUD FORM: TESTIMONIAL */}
              {showModal === 'testimonial' && (
                <>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1">
                      <label className="text-[10px] text-slate-500 uppercase font-semibold">Client Name</label>
                      <input
                        type="text" required value={testForm.name}
                        onChange={(e) => setTestForm({ ...testForm, name: e.target.value })}
                        className="px-3 py-2 bg-slate-900 border border-slate-850 rounded-xl text-xs focus:outline-none focus:border-blue-500 text-white"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-[10px] text-slate-500 uppercase font-semibold">Rating (1 to 5)</label>
                      <input
                        type="number" min={1} max={5} required value={testForm.rating}
                        onChange={(e) => setTestForm({ ...testForm, rating: parseInt(e.target.value) || 5 })}
                        className="px-3 py-2 bg-slate-900 border border-slate-850 rounded-xl text-xs focus:outline-none focus:border-blue-500 text-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1">
                      <label className="text-[10px] text-slate-500 uppercase font-semibold">Company</label>
                      <input
                        type="text" required value={testForm.company}
                        onChange={(e) => setTestForm({ ...testForm, company: e.target.value })}
                        className="px-3 py-2 bg-slate-900 border border-slate-850 rounded-xl text-xs focus:outline-none focus:border-blue-500 text-white"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-[10px] text-slate-500 uppercase font-semibold">Role/Title</label>
                      <input
                        type="text" required value={testForm.role}
                        onChange={(e) => setTestForm({ ...testForm, role: e.target.value })}
                        className="px-3 py-2 bg-slate-900 border border-slate-850 rounded-xl text-xs focus:outline-none focus:border-blue-500 text-white"
                      />
                    </div>
                  </div>

                  {/* Media File Attachment */}
                  <div className="flex flex-col gap-1">
                    <div 
                      className={`flex flex-col gap-1 p-2 rounded-2xl border transition-all ${
                        isDragOver ? 'border-blue-500 bg-blue-500/5' : 'border-transparent'
                      }`}
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={(e) => handleFileDrop(e, 'testimonial_image')}
                    >
                      <label className="text-[10px] text-slate-500 uppercase font-semibold">Avatar Image (Drag & Drop here)</label>
                      <div className="flex gap-2">
                        <input
                          type="text" required value={testForm.image}
                          onChange={(e) => setTestForm({ ...testForm, image: e.target.value })}
                          className="flex-1 px-3 py-2 bg-slate-900 border border-slate-850 rounded-xl text-xs focus:outline-none focus:border-blue-500 text-white truncate"
                        />
                        <button
                          type="button"
                          onClick={() => setShowMediaSelector('testimonial_image')}
                          className="px-3 bg-slate-800 hover:bg-slate-700 text-xs font-semibold rounded-lg text-slate-300"
                        >
                          Library
                        </button>
                        <button
                          type="button"
                          onClick={() => handleFileUploadClick('testimonial-image-upload')}
                          className="p-2 bg-blue-600 hover:bg-blue-500 rounded-lg text-white"
                        >
                          <Upload size={12} />
                        </button>
                      </div>
                      <input
                        type="file"
                        className="hidden"
                        id="testimonial-image-upload"
                        onChange={(e) => handleFileUpload(e, 'testimonial_image')}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] text-slate-500 uppercase font-semibold">Review Text</label>
                    <textarea
                      rows={4} required value={testForm.text}
                      onChange={(e) => setTestForm({ ...testForm, text: e.target.value })}
                      className="px-3 py-2 bg-slate-900 border border-slate-850 rounded-xl text-xs focus:outline-none focus:border-blue-500 text-white resize-none"
                    />
                  </div>
                </>
              )}

              {/* CRUD FORM: CAREERS */}
              {showModal === 'career' && (
                <>
                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] text-slate-500 uppercase font-semibold">Role Title</label>
                    <input
                      type="text" required value={careerForm.title}
                      onChange={(e) => setCareerForm({ ...careerForm, title: e.target.value })}
                      className="px-3 py-2 bg-slate-900 border border-slate-850 rounded-xl text-xs focus:outline-none focus:border-blue-500 text-white"
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="flex flex-col gap-1">
                      <label className="text-[10px] text-slate-500 uppercase font-semibold">Department</label>
                      <input
                        type="text" required value={careerForm.department}
                        onChange={(e) => setCareerForm({ ...careerForm, department: e.target.value })}
                        className="px-3 py-2 bg-slate-900 border border-slate-850 rounded-xl text-xs focus:outline-none focus:border-blue-500 text-white"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-[10px] text-slate-500 uppercase font-semibold">Location</label>
                      <input
                        type="text" required value={careerForm.location}
                        onChange={(e) => setCareerForm({ ...careerForm, location: e.target.value })}
                        className="px-3 py-2 bg-slate-900 border border-slate-850 rounded-xl text-xs focus:outline-none focus:border-blue-500 text-white"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-[10px] text-slate-500 uppercase font-semibold">Job Type</label>
                      <select
                        value={careerForm.type}
                        onChange={(e) => setCareerForm({ ...careerForm, type: e.target.value as any })}
                        className="px-3 py-2 bg-slate-900 border border-slate-850 rounded-xl text-xs focus:outline-none focus:border-blue-500 text-white"
                      >
                        <option>Full-time</option>
                        <option>Part-time</option>
                        <option>Contract</option>
                        <option>Remote</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] text-slate-500 uppercase font-semibold">Role Summary</label>
                    <input
                      type="text" required value={careerForm.description}
                      onChange={(e) => setCareerForm({ ...careerForm, description: e.target.value })}
                      className="px-3 py-2 bg-slate-900 border border-slate-850 rounded-xl text-xs focus:outline-none focus:border-blue-500 text-white"
                    />
                  </div>
                </>
              )}

              {/* CRUD FORM: SERVICES */}
              {showModal === 'service' && (
                <>
                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] text-slate-550 uppercase font-semibold">Service Name</label>
                    <input
                      type="text" required value={serviceForm.name}
                      onChange={(e) => setServiceForm({ ...serviceForm, name: e.target.value })}
                      className="px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-blue-500 text-slate-900"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1">
                      <label className="text-[10px] text-slate-550 uppercase font-semibold">Subtitle / Tagline</label>
                      <input
                        type="text" required value={serviceForm.subtitle}
                        onChange={(e) => setServiceForm({ ...serviceForm, subtitle: e.target.value })}
                        className="px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-blue-500 text-slate-900"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-[10px] text-slate-550 uppercase font-semibold">Icon Name</label>
                      <select
                        value={serviceForm.icon}
                        onChange={(e) => setServiceForm({ ...serviceForm, icon: e.target.value })}
                        className="px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-blue-500 text-slate-900"
                      >
                        <option>Cpu</option>
                        <option>Globe</option>
                        <option>Smartphone</option>
                        <option>Layers</option>
                        <option>Sparkles</option>
                        <option>ShieldCheck</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] text-slate-550 uppercase font-semibold">Capability Summary</label>
                    <textarea
                      required rows={2} value={serviceForm.description}
                      onChange={(e) => setServiceForm({ ...serviceForm, description: e.target.value })}
                      className="px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-blue-500 text-slate-900 resize-none"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] text-slate-550 uppercase font-semibold">Bullet Specifications (one per line)</label>
                    <textarea
                      rows={3}
                      placeholder="e.g. Microservice APIs&#10;Container Orchestration&#10;Enterprise Scale"
                      value={serviceForm.details.join('\n')}
                      onChange={(e) => setServiceForm({ ...serviceForm, details: e.target.value.split('\n') })}
                      className="px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-blue-500 text-slate-900 resize-none"
                    />
                  </div>

                  <div className="flex flex-col gap-4 border-t border-slate-200 pt-4 mt-2">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs uppercase tracking-wider font-bold text-slate-700">Pricing Plans (Indian Rupees ₹)</h4>
                      <button
                        type="button"
                        onClick={() => {
                          const pr = [...(serviceForm.pricing || [])];
                          pr.push({
                            plan: 'New Plan',
                            description: '',
                            price: '₹4,999',
                            originalPrice: '',
                            features: [],
                            popular: false,
                            ctaText: 'Initiate Project',
                            active: true,
                            order: pr.length + 1
                          });
                          setServiceForm({ ...serviceForm, pricing: pr });
                        }}
                        className="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 rounded-md text-[10px] font-bold text-slate-800 border border-slate-300 cursor-pointer"
                      >
                        + Add Pricing Plan
                      </button>
                    </div>

                    <div className="flex flex-col gap-4 max-h-[300px] overflow-y-auto pr-1">
                      {(serviceForm.pricing || []).map((p, pIdx) => (
                        <div key={pIdx} className="p-4 bg-slate-50 border border-slate-200 rounded-2xl flex flex-col gap-3 relative">
                          <button
                            type="button"
                            onClick={() => {
                              const pr = serviceForm.pricing.filter((_, idx) => idx !== pIdx);
                              setServiceForm({ ...serviceForm, pricing: pr });
                            }}
                            className="absolute top-4 right-4 text-[10px] text-red-500 hover:text-red-700 font-bold cursor-pointer"
                          >
                            Remove
                          </button>

                          <div className="grid grid-cols-2 gap-4">
                            <div className="flex flex-col gap-1">
                              <label className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Plan Title / Tier</label>
                              <input
                                type="text"
                                required
                                value={p.plan || ''}
                                onChange={(e) => {
                                  const pr = [...serviceForm.pricing];
                                  pr[pIdx].plan = e.target.value;
                                  setServiceForm({ ...serviceForm, pricing: pr });
                                }}
                                placeholder="e.g. Standard Core"
                                className="px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none"
                              />
                            </div>
                            <div className="flex flex-col gap-1">
                              <label className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Price (e.g. ₹4,999)</label>
                              <input
                                type="text"
                                required
                                value={p.price || ''}
                                onChange={(e) => {
                                  const pr = [...serviceForm.pricing];
                                  pr[pIdx].price = e.target.value;
                                  setServiceForm({ ...serviceForm, pricing: pr });
                                }}
                                placeholder="₹4,999"
                                className="px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none"
                              />
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div className="flex flex-col gap-1">
                              <label className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Original Price (Optional)</label>
                              <input
                                type="text"
                                value={p.originalPrice || ''}
                                onChange={(e) => {
                                  const pr = [...serviceForm.pricing];
                                  pr[pIdx].originalPrice = e.target.value;
                                  setServiceForm({ ...serviceForm, pricing: pr });
                                }}
                                placeholder="₹9,999"
                                className="px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none"
                              />
                            </div>
                            <div className="flex flex-col gap-1">
                              <label className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">CTA Button Text</label>
                              <input
                                type="text"
                                value={p.ctaText || 'Initiate Project'}
                                onChange={(e) => {
                                  const pr = [...serviceForm.pricing];
                                  pr[pIdx].ctaText = e.target.value;
                                  setServiceForm({ ...serviceForm, pricing: pr });
                                }}
                                className="px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none"
                              />
                            </div>
                          </div>

                          <div className="flex flex-col gap-1">
                            <label className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Description</label>
                            <input
                              type="text"
                              value={p.description || ''}
                              onChange={(e) => {
                                const pr = [...serviceForm.pricing];
                                pr[pIdx].description = e.target.value;
                                setServiceForm({ ...serviceForm, pricing: pr });
                              }}
                              placeholder="Plan short description..."
                              className="px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none"
                            />
                          </div>

                          <div className="flex flex-col gap-1">
                            <label className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Plan Features (one per line)</label>
                            <textarea
                              rows={2}
                              value={(p.features || []).join('\n')}
                              onChange={(e) => {
                                const pr = [...serviceForm.pricing];
                                pr[pIdx].features = e.target.value.split('\n');
                                setServiceForm({ ...serviceForm, pricing: pr });
                              }}
                              placeholder="Feature 1&#10;Feature 2"
                              className="px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none resize-none"
                            />
                          </div>

                          <div className="grid grid-cols-3 gap-4 pt-1">
                            <div className="flex items-center gap-2">
                              <input
                                type="checkbox"
                                id={`popular-${pIdx}`}
                                checked={p.popular || false}
                                onChange={(e) => {
                                  const pr = [...serviceForm.pricing];
                                  pr[pIdx].popular = e.target.checked;
                                  setServiceForm({ ...serviceForm, pricing: pr });
                                }}
                                className="w-3.5 h-3.5"
                              />
                              <label htmlFor={`popular-${pIdx}`} className="text-[9px] font-bold text-slate-500 uppercase tracking-widest select-none cursor-pointer">Best Value / Popular</label>
                            </div>
                            <div className="flex items-center gap-2">
                              <input
                                type="checkbox"
                                id={`active-${pIdx}`}
                                checked={p.active !== false}
                                onChange={(e) => {
                                  const pr = [...serviceForm.pricing];
                                  pr[pIdx].active = e.target.checked;
                                  setServiceForm({ ...serviceForm, pricing: pr });
                                }}
                                className="w-3.5 h-3.5"
                              />
                              <label htmlFor={`active-${pIdx}`} className="text-[9px] font-bold text-slate-500 uppercase tracking-widest select-none cursor-pointer">Active Status</label>
                            </div>
                            <div className="flex items-center gap-2">
                              <label className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Order:</label>
                              <input
                                type="number"
                                value={p.order || 0}
                                onChange={(e) => {
                                  const pr = [...serviceForm.pricing];
                                  pr[pIdx].order = parseInt(e.target.value) || 0;
                                  setServiceForm({ ...serviceForm, pricing: pr });
                                }}
                                className="w-16 px-2 py-1 bg-white border border-slate-200 rounded-md text-xs text-slate-900"
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {/* CRUD FORM: SEO */}
              {showModal === 'seo' && (
                <>
                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] text-slate-500 uppercase font-semibold">Page Title</label>
                    <input
                      type="text" required value={seoForm.title}
                      onChange={(e) => setSeoForm({ ...seoForm, title: e.target.value })}
                      className="px-3 py-2 bg-slate-900 border border-slate-850 rounded-xl text-xs focus:outline-none focus:border-blue-500 text-white"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] text-slate-500 uppercase font-semibold">Meta Description</label>
                    <textarea
                      rows={3} required value={seoForm.description}
                      onChange={(e) => setSeoForm({ ...seoForm, description: e.target.value })}
                      className="px-3 py-2 bg-slate-900 border border-slate-850 rounded-xl text-xs focus:outline-none focus:border-blue-500 text-white resize-none"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] text-slate-500 uppercase font-semibold">Keywords</label>
                    <input
                      type="text" required value={seoForm.keywords}
                      onChange={(e) => setSeoForm({ ...seoForm, keywords: e.target.value })}
                      className="px-3 py-2 bg-slate-900 border border-slate-850 rounded-xl text-xs focus:outline-none focus:border-blue-500 text-white"
                    />
                  </div>
                </>
              )}

              <button
                type="submit"
                disabled={isUploading}
                className="w-full mt-4 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-semibold uppercase tracking-wider disabled:opacity-50"
              >
                {isUploading ? 'Uploading file attachment...' : 'Save Record'}
              </button>

            </form>
          </div>
        </div>
      )}

      {/* ==========================================
          MODAL: LEAD DETAILS DETAILED MODAL
         ========================================== */}
      {activeLeadDetails && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-slate-950/70 backdrop-blur-sm">
          <div className="relative w-full max-w-lg rounded-3xl border border-slate-200 bg-white p-8 shadow-2xl text-left text-slate-900 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActiveLeadDetails(null)}
              className="absolute top-6 right-6 p-2 rounded-full border border-slate-200 text-slate-400 hover:text-slate-900 cursor-pointer"
            >
              ✕
            </button>
            
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 bg-blue-50 text-blue-600 border border-blue-100 rounded-md text-[10px] font-bold uppercase tracking-wider">
                    {activeLeadDetails.source.replace('_', ' ')}
                  </span>
                  <span className="text-[10px] text-slate-400 font-semibold">{activeLeadDetails.date}</span>
                </div>
                <span className={`px-2 py-0.5 text-[9px] rounded-md uppercase font-semibold border ${
                  activeLeadDetails.status === 'unread' ? 'bg-red-50 text-red-650 border-red-200' :
                  activeLeadDetails.status === 'read' ? 'bg-blue-50 text-blue-650 border-blue-200' :
                  activeLeadDetails.status === 'pending' ? 'bg-amber-50 text-amber-650 border-amber-200' :
                  'bg-green-50 text-green-650 border-green-200'
                }`}>
                  {activeLeadDetails.status}
                </span>
              </div>

              <div>
                <h3 className="font-heading text-xl font-bold tracking-tight text-slate-900">
                  {activeLeadDetails.name}
                </h3>
                <p className="text-xs text-slate-500 font-medium mt-1">
                  {activeLeadDetails.email} {activeLeadDetails.company ? `| ${activeLeadDetails.company}` : ''}
                </p>
                {activeLeadDetails.phone && (
                  <p className="text-xs text-slate-500 font-medium mt-0.5 font-mono">
                    Phone: {activeLeadDetails.phone}
                  </p>
                )}
                {activeLeadDetails.ip && (
                  <p className="text-[10px] text-slate-400 font-mono mt-1">
                    IP Address: {activeLeadDetails.ip}
                  </p>
                )}
              </div>

              {activeLeadDetails.subject && (
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                  <h4 className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mb-1">Subject / Interest:</h4>
                  <p className="text-xs text-slate-800 font-semibold">{activeLeadDetails.subject}</p>
                </div>
              )}

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <h4 className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mb-2">Message Payload:</h4>
                <p className="text-xs text-slate-700 leading-relaxed whitespace-pre-wrap">
                  {activeLeadDetails.message}
                </p>
              </div>

              {/* Status Actions */}
              <div className="flex flex-col gap-2">
                <h4 className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Update Query Status</h4>
                <div className="grid grid-cols-4 gap-2">
                  {(['unread', 'read', 'pending', 'resolved'] as const).map((statusVal) => (
                    <button
                      key={statusVal}
                      type="button"
                      onClick={async () => {
                        await handleUpdateLeadStatus(activeLeadDetails.id, statusVal);
                        setActiveLeadDetails(prev => prev ? { ...prev, status: statusVal } : null);
                      }}
                      className={`py-1.5 rounded-lg text-[10px] font-bold uppercase border cursor-pointer transition-colors ${
                        activeLeadDetails.status === statusVal
                          ? 'bg-blue-600 border-blue-600 text-white text-white-force'
                          : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      {statusVal}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-2">
                <button
                  onClick={() => {
                    const subjectVal = encodeURIComponent(`Re: ${activeLeadDetails.subject || 'Your Inquiry to CoreBuild Solutions'}`);
                    window.open(`mailto:${activeLeadDetails.email}?subject=${subjectVal}`);
                  }}
                  className="py-3 bg-slate-900 hover:bg-black text-white rounded-xl text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5 cursor-pointer text-white-force"
                >
                  Reply via Email
                </button>
                <button
                  onClick={() => {
                    setActiveLeadDetails(null);
                  }}
                  className="py-3 bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-800 rounded-xl text-xs font-semibold uppercase tracking-wider cursor-pointer"
                >
                  Close View
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          MODAL: USERS SIGNUP MODAL (Super Admin only)
         ========================================== */}
      {showUserModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-slate-950/70 backdrop-blur-sm">
          <div className="relative w-full max-w-md rounded-3xl border border-slate-800 bg-slate-950 p-8 shadow-2xl text-left">
            <button
              onClick={() => setShowUserModal(false)}
              className="absolute top-6 right-6 p-2 rounded-full border border-slate-900 text-slate-400 hover:text-white"
            >
              ✕
            </button>

            <h3 className="font-heading text-xl font-extrabold tracking-tight mb-6">
              Create New Admin / Editor account
            </h3>

            <form onSubmit={handleCreateUser} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-[10px] text-slate-500 uppercase font-semibold">User Display Name</label>
                <input
                  type="text" required value={userForm.name}
                  onChange={(e) => setUserForm({ ...userForm, name: e.target.value })}
                  className="px-3 py-2 bg-slate-900 border border-slate-850 rounded-xl text-xs focus:outline-none focus:border-blue-500 text-white"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[10px] text-slate-500 uppercase font-semibold">Email Address</label>
                <input
                  type="email" required value={userForm.email}
                  onChange={(e) => setUserForm({ ...userForm, email: e.target.value })}
                  className="px-3 py-2 bg-slate-900 border border-slate-850 rounded-xl text-xs focus:outline-none focus:border-blue-500 text-white"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[10px] text-slate-500 uppercase font-semibold">Security Password</label>
                <input
                  type="password" required value={userForm.password}
                  onChange={(e) => setUserForm({ ...userForm, password: e.target.value })}
                  className="px-3 py-2 bg-slate-900 border border-slate-850 rounded-xl text-xs focus:outline-none focus:border-blue-500 text-white"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[10px] text-slate-500 uppercase font-semibold">Authorization Role</label>
                <select
                  value={userForm.role}
                  onChange={(e) => setUserForm({ ...userForm, role: e.target.value })}
                  className="px-3 py-2 bg-slate-900 border border-slate-850 rounded-xl text-xs focus:outline-none focus:border-blue-500 text-white"
                >
                  <option value="editor">Editor</option>
                  <option value="admin">Admin</option>
                  <option value="super_admin">Super Admin</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full mt-4 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-semibold uppercase tracking-wider"
              >
                Register User
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ==========================================
          MODAL: MEDIA SELECTOR DROPDOWN OVERLAY
         ========================================== */}
      {showMediaSelector && (
        <div className="fixed inset-0 z-55 flex items-center justify-center p-6 bg-slate-950/80 backdrop-blur-sm">
          <div className="relative w-full max-w-xl rounded-3xl border border-slate-800 bg-slate-950 p-6 shadow-2xl text-left my-8">
            <button
              onClick={() => setShowMediaSelector(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full border border-slate-900 text-slate-400 hover:text-white"
            >
              ✕
            </button>

            <div className="flex items-center justify-between mb-4 border-b border-slate-900 pb-3">
              <h4 className="font-heading text-xs font-semibold uppercase tracking-widest text-slate-400">
                Select Image From Library
              </h4>
              <div className="flex items-center gap-2">
                <input
                  type="file"
                  id="selector-media-upload"
                  className="hidden"
                  onChange={async (e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      try {
                        const mediaItem = await db.uploadFile(file);
                        handleSelectMediaItem(mediaItem.url, showMediaSelector);
                      } catch (err: any) {
                        alert(err.message || 'Upload failed.');
                      }
                    }
                  }}
                />
                <button
                  type="button"
                  onClick={() => handleFileUploadClick('selector-media-upload')}
                  className="px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 cursor-pointer shadow-md shadow-blue-500/20"
                >
                  <Upload size={12} /> Upload New
                </button>
              </div>
            </div>

            {db.media.length > 0 ? (
              <div className="grid grid-cols-3 gap-4 max-h-[50vh] overflow-y-auto pr-2">
                {db.media.filter(m => m.mimetype.startsWith('image/')).map((item) => (
                  <div 
                    key={item.id || item._id}
                    onClick={() => handleSelectMediaItem(item.url, showMediaSelector)}
                    className="relative aspect-square rounded-xl overflow-hidden border border-slate-850 bg-slate-900 hover:border-blue-500 cursor-pointer transition-all"
                  >
                    <img src={item.url} alt={item.filename} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-12 border border-dashed border-slate-850 rounded-2xl bg-slate-950/20">
                <p className="text-xs text-slate-500 mb-2">No images available in media library.</p>
                <button
                  type="button"
                  onClick={() => handleFileUploadClick('selector-media-upload')}
                  className="px-3 py-1.5 border border-slate-800 text-slate-300 hover:text-white rounded-lg text-xs flex items-center gap-1.5"
                >
                  <Upload size={12} /> Upload First Image
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ==========================================
          MODAL: TEAM MEMBER CRUD MODAL
         ========================================== */}
      {showTeamModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-slate-950/70 backdrop-blur-sm">
          <div className="relative w-full max-w-lg rounded-3xl border border-slate-200 bg-white p-8 shadow-2xl text-left text-slate-900 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => {
                setShowTeamModal(false);
                setEditingTeamMember(null);
              }}
              className="absolute top-6 right-6 p-2 rounded-full border border-slate-200 text-slate-400 hover:text-slate-900 cursor-pointer"
            >
              ✕
            </button>

            <h3 className="font-heading text-xl font-extrabold tracking-tight mb-6">
              {editingTeamMember ? 'Edit Team Member Profile' : 'Add New Team Member'}
            </h3>

            <form onSubmit={handleSaveTeamMember} className="flex flex-col gap-5">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-[10px] text-slate-500 uppercase font-semibold">Display Name</label>
                  <input
                    type="text" required value={teamForm.name}
                    onChange={(e) => setTeamForm({ ...teamForm, name: e.target.value })}
                    className="px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-blue-500 text-slate-900"
                    placeholder="Alex Rivers"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-[10px] text-slate-500 uppercase font-semibold">Designation / Role</label>
                  <input
                    type="text" required value={teamForm.role}
                    onChange={(e) => setTeamForm({ ...teamForm, role: e.target.value })}
                    className="px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-blue-500 text-slate-900"
                    placeholder="CEO & Creative Director"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[10px] text-slate-500 uppercase font-semibold">Profile Photo Image URL</label>
                <div className="flex gap-2">
                  <input
                    type="text" required value={teamForm.image}
                    onChange={(e) => setTeamForm({ ...teamForm, image: e.target.value })}
                    className="flex-1 px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-blue-500 text-slate-900"
                    placeholder="https://images.unsplash.com/..."
                  />
                  <button
                    type="button"
                    onClick={() => setShowMediaSelector('team_image')}
                    className="px-3 py-2 bg-slate-100 hover:bg-slate-200 rounded-xl border border-slate-300 text-xs font-semibold cursor-pointer text-slate-800"
                  >
                    Browse Library
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-[10px] text-slate-500 uppercase font-semibold">Experience (e.g. 5+ Years)</label>
                  <input
                    type="text" value={teamForm.experience || ''}
                    onChange={(e) => setTeamForm({ ...teamForm, experience: e.target.value })}
                    className="px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-blue-500 text-slate-900"
                    placeholder="8+ Years"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-[10px] text-slate-500 uppercase font-semibold">Display Order</label>
                  <input
                    type="number" required value={teamForm.order || 0}
                    onChange={(e) => setTeamForm({ ...teamForm, order: parseInt(e.target.value) || 0 })}
                    className="px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-blue-500 text-slate-900"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[10px] text-slate-500 uppercase font-semibold">Short Biography</label>
                <textarea
                  rows={3} required value={teamForm.bio}
                  onChange={(e) => setTeamForm({ ...teamForm, bio: e.target.value })}
                  className="px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-blue-500 text-slate-900 resize-none"
                  placeholder="Professional background, expertise..."
                />
              </div>

              {/* Skills Tagging */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] text-slate-500 uppercase font-semibold">Skills Tags</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={teamSkillInput}
                    onChange={(e) => setTeamSkillInput(e.target.value)}
                    onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleAddTeamSkill(); } }}
                    placeholder="Press enter to add skill"
                    className="flex-1 px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-blue-500 text-slate-900"
                  />
                  <button
                    type="button"
                    onClick={handleAddTeamSkill}
                    className="px-3 py-2 bg-slate-100 hover:bg-slate-200 rounded-xl border border-slate-300 text-xs font-semibold cursor-pointer text-slate-800"
                  >
                    Add
                  </button>
                </div>
                {teamForm.skills && teamForm.skills.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-1.5">
                    {teamForm.skills.map((s, idx) => (
                      <span key={idx} className="flex items-center gap-1 text-[9px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded-full border border-slate-300">
                        {s}
                        <button type="button" onClick={() => handleRemoveTeamSkill(s)} className="text-red-500 hover:text-red-700 font-bold">×</button>
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Social Channels */}
              <div className="border-t border-slate-200 pt-3">
                <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">Social Coordinates</h4>
                <div className="grid grid-cols-3 gap-3">
                  <div className="flex flex-col gap-1">
                    <label className="text-[8px] text-slate-400 uppercase font-semibold">LinkedIn</label>
                    <input
                      type="url" value={teamForm.socials?.linkedin || ''}
                      onChange={(e) => setTeamForm({ ...teamForm, socials: { ...teamForm.socials, linkedin: e.target.value } })}
                      className="px-2 py-1.5 bg-white border border-slate-200 rounded-xl text-[10px] focus:outline-none focus:border-blue-500 text-slate-900"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-[8px] text-slate-400 uppercase font-semibold">Twitter</label>
                    <input
                      type="url" value={teamForm.socials?.twitter || ''}
                      onChange={(e) => setTeamForm({ ...teamForm, socials: { ...teamForm.socials, twitter: e.target.value } })}
                      className="px-2 py-1.5 bg-white border border-slate-200 rounded-xl text-[10px] focus:outline-none focus:border-blue-500 text-slate-900"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-[8px] text-slate-400 uppercase font-semibold">GitHub</label>
                    <input
                      type="url" value={teamForm.socials?.github || ''}
                      onChange={(e) => setTeamForm({ ...teamForm, socials: { ...teamForm.socials, github: e.target.value } })}
                      className="px-2 py-1.5 bg-white border border-slate-200 rounded-xl text-[10px] focus:outline-none focus:border-blue-500 text-slate-900"
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2">
                <input
                  type="checkbox"
                  id="team-active"
                  checked={teamForm.active !== false}
                  onChange={(e) => setTeamForm({ ...teamForm, active: e.target.checked })}
                  className="w-3.5 h-3.5"
                />
                <label htmlFor="team-active" className="text-[10px] font-bold text-slate-500 uppercase tracking-widest select-none cursor-pointer">Active Status</label>
              </div>

              <button
                type="submit"
                className="w-full mt-2 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer text-white-force"
              >
                Save Profile
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ==========================================
          MODAL: FAQ ITEM CRUD MODAL
         ========================================== */}
      {showFaqModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-slate-950/70 backdrop-blur-sm">
          <div className="relative w-full max-w-md rounded-3xl border border-slate-800 bg-slate-950 p-8 shadow-2xl text-left text-slate-300">
            <button
              onClick={() => setShowFaqModal(false)}
              className="absolute top-6 right-6 p-2 rounded-full border border-slate-900 text-slate-400 hover:text-white"
            >
              ✕
            </button>

            <h3 className="font-heading text-xl font-extrabold tracking-tight mb-6">
              {faqEditId ? 'Edit FAQ Accordion' : 'Create FAQ Accordion'}
            </h3>

            <form onSubmit={handleFaqSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest">Question Text</label>
                <input
                  type="text" required
                  placeholder="e.g. Do you sign NDAs?"
                  value={faqForm.q}
                  onChange={(e) => setFaqForm({ ...faqForm, q: e.target.value })}
                  className="px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-sm focus:outline-none focus:border-blue-500 text-white"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest">Answer Description</label>
                <textarea
                  required rows={4}
                  placeholder="Provide the detailed answer to the question..."
                  value={faqForm.a}
                  onChange={(e) => setFaqForm({ ...faqForm, a: e.target.value })}
                  className="px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-sm focus:outline-none focus:border-blue-500 text-white resize-none"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest">Display Sort Order</label>
                <input
                  type="number" required
                  value={faqForm.order}
                  onChange={(e) => setFaqForm({ ...faqForm, order: parseInt(e.target.value) || 0 })}
                  className="px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-sm focus:outline-none focus:border-blue-500 text-white"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-4 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer text-white-force"
              >
                Save FAQ <CheckCircle size={14} />
              </button>
            </form>
          </div>
        </div>
      )}

    </AdminLayout>
  );
}
