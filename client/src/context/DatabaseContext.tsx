import React, { createContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';
import { Project, Blog, Testimonial, Service, Career, TeamMember, Lead, SeoSettings, SystemSettings, DatabaseState, FaqItem, HomeSection } from '../types';
import {
  fallbackProjects,
  fallbackBlogs,
  fallbackTestimonials,
  fallbackServices,
  fallbackCareers,
  fallbackTeam,
  fallbackSeoSettings,
  fallbackSettings,
  fallbackFaqs,
  fallbackHomeSections
} from '../fallbackData';

const defaultSettings: SystemSettings = {
  agencyName: 'CoreBuild Solutions',
  contactEmail: 'partner@corebuildsolutions.com',
  contactPhone: '+1 (800) 555-0199',
  whatsappNumber: '+18005550199',
  address: 'Level 42, Vercel Tower, 100 Hudson Street, New York, NY 10013',
  socialLinks: { twitter: '', linkedin: '', github: '', instagram: '' }
};

interface MediaItem {
  _id: string;
  filename: string;
  url: string;
  sizeBytes: number;
  mimetype: string;
  storageType: 'local' | 'cloudinary';
}

interface DatabaseContextProps extends DatabaseState {
  media: MediaItem[];
  loading: boolean;
  
  // Projects
  addProject: (proj: Omit<Project, 'id'>) => Promise<void>;
  updateProject: (proj: Project) => Promise<void>;
  deleteProject: (id: string) => Promise<void>;
  
  // Blogs
  addBlog: (blog: Omit<Blog, 'id'>) => Promise<void>;
  updateBlog: (blog: Blog) => Promise<void>;
  deleteBlog: (id: string) => Promise<void>;
  
  // Testimonials
  addTestimonial: (test: Omit<Testimonial, 'id'>) => Promise<void>;
  updateTestimonial: (test: Testimonial) => Promise<void>;
  deleteTestimonial: (id: string) => Promise<void>;
  
  // Services
  addService: (srv: Omit<Service, 'id'>) => Promise<void>;
  updateService: (srv: Service) => Promise<void>;
  deleteService: (id: string) => Promise<void>;
  
  // Careers
  addCareer: (car: Omit<Career, 'id'>) => Promise<void>;
  updateCareer: (car: Career) => Promise<void>;
  deleteCareer: (id: string) => Promise<void>;
  
  // Team
  addTeamMember: (tm: Omit<TeamMember, 'id'>) => Promise<void>;
  updateTeamMember: (tm: TeamMember) => Promise<void>;
  deleteTeamMember: (id: string) => Promise<void>;
  
  // Leads
  addLead: (lead: Omit<Lead, 'id' | 'date' | 'status'>) => Promise<void>;
  updateLeadStatus: (id: string, status: 'new' | 'contacted' | 'archived') => Promise<void>;
  deleteLead: (id: string) => Promise<void>;
  
  // SEO
  updateSeoSettings: (page: string, seo: Omit<SeoSettings, 'page'>) => Promise<void>;
  
  // Settings
  updateSettings: (settings: SystemSettings) => Promise<void>;
  
  // FAQs
  addFaq: (faq: Omit<FaqItem, 'id'>) => Promise<void>;
  updateFaq: (faq: FaqItem) => Promise<void>;
  deleteFaq: (id: string) => Promise<void>;

  // Home Sections
  updateHomeSection: (key: string, content: any) => Promise<void>;
  
  // Media Uploads
  uploadFile: (file: File) => Promise<MediaItem>;
  deleteFile: (id: string) => Promise<void>;
  fetchMedia: () => Promise<void>;
  
  // Controls
  resetToSeedData: () => Promise<void>;
}

export const DatabaseContext = createContext<DatabaseContextProps | undefined>(undefined);

const API_BASE = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' 
  ? 'http://localhost:5000/api' 
  : `http://${window.location.hostname}:5000/api`;

export const DatabaseProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { token } = useAuth();
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState<Project[]>(fallbackProjects);
  const [blogs, setBlogs] = useState<Blog[]>(fallbackBlogs);
  const [testimonials, setTestimonials] = useState<Testimonial[]>(fallbackTestimonials);
  const [services, setServices] = useState<Service[]>(fallbackServices);
  const [careers, setCareers] = useState<Career[]>(fallbackCareers);
  const [team, setTeam] = useState<TeamMember[]>(fallbackTeam);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [seoSettings, setSeoSettings] = useState<SeoSettings[]>(fallbackSeoSettings);
  const [settings, setSettings] = useState<SystemSettings>(fallbackSettings);
  const [faqs, setFaqs] = useState<FaqItem[]>(fallbackFaqs);
  const [homeSections, setHomeSections] = useState<HomeSection[]>(fallbackHomeSections);
  const [media, setMedia] = useState<MediaItem[]>([]);

  // Token header helper
  const getHeaders = (isMultipart = false) => {
    const headers: Record<string, string> = {};
    
    if (!isMultipart) {
      headers['Content-Type'] = 'application/json';
    }
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
    return headers;
  };

  // Unified fetch wrapper with credentials (cookies) and token auth fallback
  const fetchWithAuth = async (url: string, options: RequestInit = {}) => {
    const headers = getHeaders(options.body instanceof FormData);
    return fetch(url, {
      ...options,
      credentials: 'include',
      headers: {
        ...headers,
        ...(options.headers || {})
      }
    });
  };

  // Fetch initial public content
  const loadInitialData = async () => {
    try {
      setLoading(true);
      
      const [resProj, resBlogs, resTest, resSrv, resCar, resTeam, resSeo, resSet, resFaq, resHomeSec] = await Promise.all([
        fetchWithAuth(`${API_BASE}/projects`),
        fetchWithAuth(`${API_BASE}/blogs`),
        fetchWithAuth(`${API_BASE}/testimonials`),
        fetchWithAuth(`${API_BASE}/services`),
        fetchWithAuth(`${API_BASE}/careers`),
        fetchWithAuth(`${API_BASE}/team`),
        fetchWithAuth(`${API_BASE}/seo`),
        fetchWithAuth(`${API_BASE}/settings`),
        fetchWithAuth(`${API_BASE}/faqs`),
        fetchWithAuth(`${API_BASE}/home-sections`)
      ]);

      const dataProj = await resProj.json();
      const dataBlogs = await resBlogs.json();
      const dataTest = await resTest.json();
      const dataSrv = await resSrv.json();
      const dataCar = await resCar.json();
      const dataTeam = await resTeam.json();
      const dataSeo = await resSeo.json();
      const dataSet = await resSet.json();
      const dataFaq = await resFaq.json();
      const dataHomeSec = await resHomeSec.json();

      if (dataProj.success) setProjects(dataProj.projects.map((p: any) => ({ ...p, id: p.id || p._id })));
      if (dataBlogs.success) setBlogs(dataBlogs.blogs.map((b: any) => ({ ...b, id: b.id || b._id })));
      if (dataTest.success) setTestimonials(dataTest.testimonials.map((t: any) => ({ ...t, id: t.id || t._id })));
      if (dataSrv.success) setServices(dataSrv.services.map((s: any) => ({ ...s, id: s.id || s._id })));
      if (dataCar.success) setCareers(dataCar.careers.map((c: any) => ({ ...c, id: c.id || c._id })));
      if (dataTeam.success) setTeam(dataTeam.team.map((t: any) => ({ ...t, id: t.id || t._id })));
      if (dataSeo.success) setSeoSettings(dataSeo.seoSettings.map((s: any) => ({ ...s, id: s.id || s._id || s.page })));
      if (dataSet.success && dataSet.settings) setSettings(dataSet.settings);
      if (dataFaq.success) setFaqs(dataFaq.faqs.map((f: any) => ({ ...f, id: f.id || f._id })));
      if (dataHomeSec.success) setHomeSections(dataHomeSec.homeSections.map((h: any) => ({ ...h, id: h.id || h._id })));

    } catch (e) {
      console.error('Failed to load database records from API server.', e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadInitialData();
  }, []);

  // Fetch Leads / Media when token shifts (login/logout triggers)
  useEffect(() => {
    if (token) {
      fetchLeads();
      fetchMedia();
    } else {
      setLeads([]);
      setMedia([]);
    }
  }, [token]);

  const fetchLeads = async () => {
    try {
      const res = await fetchWithAuth(`${API_BASE}/leads`, { headers: getHeaders() });
      const data = await res.json();
      if (data.success) {
        setLeads(data.leads.map((l: any) => ({ ...l, id: l.id || l._id })));
      }
    } catch (e) {
      console.error('Leads fetch failed:', e);
    }
  };

  const fetchMedia = async () => {
    try {
      const res = await fetchWithAuth(`${API_BASE}/media`, { headers: getHeaders() });
      const data = await res.json();
      if (data.success) {
        setMedia(data.media);
      }
    } catch (e) {
      console.error('Media fetch failed:', e);
    }
  };

  // Projects CRUD
  const addProject = async (proj: Omit<Project, 'id'>) => {
    const res = await fetchWithAuth(`${API_BASE}/projects`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify(proj)
    });
    const data = await res.json();
    if (data.success) {
      setProjects(prev => [{ ...data.project, id: data.project.id || data.project._id }, ...prev]);
    } else {
      throw new Error(data.message);
    }
  };

  const updateProject = async (proj: Project) => {
    const res = await fetchWithAuth(`${API_BASE}/projects/${proj.id}`, {
      method: 'PUT',
      headers: getHeaders(),
      body: JSON.stringify(proj)
    });
    const data = await res.json();
    if (data.success) {
      setProjects(prev => prev.map(p => p.id === proj.id ? { ...data.project, id: data.project.id || data.project._id } : p));
    } else {
      throw new Error(data.message);
    }
  };

  const deleteProject = async (id: string) => {
    const res = await fetchWithAuth(`${API_BASE}/projects/${id}`, {
      method: 'DELETE',
      headers: getHeaders()
    });
    const data = await res.json();
    if (data.success) {
      setProjects(prev => prev.filter(p => p.id !== id));
    } else {
      throw new Error(data.message);
    }
  };

  // Blogs CRUD
  const addBlog = async (blog: Omit<Blog, 'id'>) => {
    const res = await fetchWithAuth(`${API_BASE}/blogs`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify(blog)
    });
    const data = await res.json();
    if (data.success) {
      setBlogs(prev => [{ ...data.blog, id: data.blog.id || data.blog._id }, ...prev]);
    } else {
      throw new Error(data.message);
    }
  };

  const updateBlog = async (blog: Blog) => {
    const res = await fetchWithAuth(`${API_BASE}/blogs/${blog.id}`, {
      method: 'PUT',
      headers: getHeaders(),
      body: JSON.stringify(blog)
    });
    const data = await res.json();
    if (data.success) {
      setBlogs(prev => prev.map(b => b.id === blog.id ? { ...data.blog, id: data.blog.id || data.blog._id } : b));
    } else {
      throw new Error(data.message);
    }
  };

  const deleteBlog = async (id: string) => {
    const res = await fetchWithAuth(`${API_BASE}/blogs/${id}`, {
      method: 'DELETE',
      headers: getHeaders()
    });
    const data = await res.json();
    if (data.success) {
      setBlogs(prev => prev.filter(b => b.id !== id));
    } else {
      throw new Error(data.message);
    }
  };

  // Testimonials CRUD
  const addTestimonial = async (test: Omit<Testimonial, 'id'>) => {
    const res = await fetchWithAuth(`${API_BASE}/testimonials`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify(test)
    });
    const data = await res.json();
    if (data.success) {
      setTestimonials(prev => [{ ...data.testimonial, id: data.testimonial.id || data.testimonial._id }, ...prev]);
    } else {
      throw new Error(data.message);
    }
  };

  const updateTestimonial = async (test: Testimonial) => {
    const res = await fetchWithAuth(`${API_BASE}/testimonials/${test.id}`, {
      method: 'PUT',
      headers: getHeaders(),
      body: JSON.stringify(test)
    });
    const data = await res.json();
    if (data.success) {
      setTestimonials(prev => prev.map(t => t.id === test.id ? { ...data.testimonial, id: data.testimonial.id || data.testimonial._id } : t));
    } else {
      throw new Error(data.message);
    }
  };

  const deleteTestimonial = async (id: string) => {
    const res = await fetchWithAuth(`${API_BASE}/testimonials/${id}`, {
      method: 'DELETE',
      headers: getHeaders()
    });
    const data = await res.json();
    if (data.success) {
      setTestimonials(prev => prev.filter(t => t.id !== id));
    } else {
      throw new Error(data.message);
    }
  };

  // Services CRUD
  const addService = async (srv: Omit<Service, 'id'>) => {
    const res = await fetchWithAuth(`${API_BASE}/services`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify(srv)
    });
    const data = await res.json();
    if (data.success) {
      setServices(prev => [...prev, { ...data.service, id: data.service.id || data.service._id }]);
    } else {
      throw new Error(data.message);
    }
  };

  const updateService = async (srv: Service) => {
    const res = await fetchWithAuth(`${API_BASE}/services/${srv.id}`, {
      method: 'PUT',
      headers: getHeaders(),
      body: JSON.stringify(srv)
    });
    const data = await res.json();
    if (data.success) {
      setServices(prev => prev.map(s => s.id === srv.id ? { ...data.service, id: data.service.id || data.service._id } : s));
    } else {
      throw new Error(data.message);
    }
  };

  const deleteService = async (id: string) => {
    const res = await fetchWithAuth(`${API_BASE}/services/${id}`, {
      method: 'DELETE',
      headers: getHeaders()
    });
    const data = await res.json();
    if (data.success) {
      setServices(prev => prev.filter(s => s.id !== id));
    } else {
      throw new Error(data.message);
    }
  };

  // Careers CRUD
  const addCareer = async (car: Omit<Career, 'id'>) => {
    const res = await fetchWithAuth(`${API_BASE}/careers`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify(car)
    });
    const data = await res.json();
    if (data.success) {
      setCareers(prev => [...prev, { ...data.career, id: data.career.id || data.career._id }]);
    } else {
      throw new Error(data.message);
    }
  };

  const updateCareer = async (car: Career) => {
    const res = await fetchWithAuth(`${API_BASE}/careers/${car.id}`, {
      method: 'PUT',
      headers: getHeaders(),
      body: JSON.stringify(car)
    });
    const data = await res.json();
    if (data.success) {
      setCareers(prev => prev.map(c => c.id === car.id ? { ...data.career, id: data.career.id || data.career._id } : c));
    } else {
      throw new Error(data.message);
    }
  };

  const deleteCareer = async (id: string) => {
    const res = await fetchWithAuth(`${API_BASE}/careers/${id}`, {
      method: 'DELETE',
      headers: getHeaders()
    });
    const data = await res.json();
    if (data.success) {
      setCareers(prev => prev.filter(c => c.id !== id));
    } else {
      throw new Error(data.message);
    }
  };

  // Team Member CRUD
  const addTeamMember = async (tm: Omit<TeamMember, 'id'>) => {
    const res = await fetchWithAuth(`${API_BASE}/team`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify(tm)
    });
    const data = await res.json();
    if (data.success) {
      setTeam(prev => [...prev, { ...data.teamMember, id: data.teamMember.id || data.teamMember._id }]);
    } else {
      throw new Error(data.message);
    }
  };

  const updateTeamMember = async (tm: TeamMember) => {
    const res = await fetchWithAuth(`${API_BASE}/team/${tm.id}`, {
      method: 'PUT',
      headers: getHeaders(),
      body: JSON.stringify(tm)
    });
    const data = await res.json();
    if (data.success) {
      setTeam(prev => prev.map(t => t.id === tm.id ? { ...data.teamMember, id: data.teamMember.id || data.teamMember._id } : t));
    } else {
      throw new Error(data.message);
    }
  };

  const deleteTeamMember = async (id: string) => {
    const res = await fetchWithAuth(`${API_BASE}/team/${id}`, {
      method: 'DELETE',
      headers: getHeaders()
    });
    const data = await res.json();
    if (data.success) {
      setTeam(prev => prev.filter(t => t.id !== id));
    } else {
      throw new Error(data.message);
    }
  };

  // Leads CRM CRUD
  const addLead = async (lead: Omit<Lead, 'id' | 'date' | 'status'>) => {
    const res = await fetchWithAuth(`${API_BASE}/leads`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(lead)
    });
    const data = await res.json();
    if (data.success) {
      // If admin is logged in, refresh list view in panel
      const token = localStorage.getItem('corebuild_token');
      if (token) {
        await fetchLeads();
      }
    } else {
      throw new Error(data.message);
    }
  };

  const updateLeadStatus = async (id: string, status: 'new' | 'contacted' | 'archived') => {
    const res = await fetchWithAuth(`${API_BASE}/leads/${id}`, {
      method: 'PUT',
      headers: getHeaders(),
      body: JSON.stringify({ status })
    });
    const data = await res.json();
    if (data.success) {
      setLeads(prev => prev.map(l => l.id === id ? { ...data.lead, id: data.lead.id || data.lead._id } : l));
    } else {
      throw new Error(data.message);
    }
  };

  const deleteLead = async (id: string) => {
    const res = await fetchWithAuth(`${API_BASE}/leads/${id}`, {
      method: 'DELETE',
      headers: getHeaders()
    });
    const data = await res.json();
    if (data.success) {
      setLeads(prev => prev.filter(l => l.id !== id));
    } else {
      throw new Error(data.message);
    }
  };

  // SEO Page Metadata Update
  const updateSeoSettings = async (page: string, seo: Omit<SeoSettings, 'page'>) => {
    const res = await fetchWithAuth(`${API_BASE}/seo/${page}`, {
      method: 'PUT',
      headers: getHeaders(),
      body: JSON.stringify(seo)
    });
    const data = await res.json();
    if (data.success) {
      setSeoSettings(prev => prev.map(s => s.page === page ? { ...data.seoSettings, id: data.seoSettings.id || data.seoSettings._id } : s));
    } else {
      throw new Error(data.message);
    }
  };

  // General Settings Update
  const updateSettings = async (nextSettings: SystemSettings) => {
    const res = await fetchWithAuth(`${API_BASE}/settings`, {
      method: 'PUT',
      headers: getHeaders(),
      body: JSON.stringify(nextSettings)
    });
    const data = await res.json();
    if (data.success && data.settings) {
      setSettings(data.settings);
    } else {
      throw new Error(data.message);
    }
  };

  // FAQs CRUD
  const addFaq = async (faq: Omit<FaqItem, 'id'>) => {
    const res = await fetchWithAuth(`${API_BASE}/faqs`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify(faq)
    });
    const data = await res.json();
    if (data.success && data.faq) {
      setFaqs(prev => [...prev, { ...data.faq, id: data.faq.id || data.faq._id }]);
    } else {
      throw new Error(data.message);
    }
  };

  const updateFaq = async (faq: FaqItem) => {
    const res = await fetchWithAuth(`${API_BASE}/faqs/${faq.id}`, {
      method: 'PUT',
      headers: getHeaders(),
      body: JSON.stringify(faq)
    });
    const data = await res.json();
    if (data.success && data.faq) {
      setFaqs(prev => prev.map(f => f.id === faq.id ? { ...data.faq, id: data.faq.id || data.faq._id } : f));
    } else {
      throw new Error(data.message);
    }
  };

  const deleteFaq = async (id: string) => {
    const res = await fetchWithAuth(`${API_BASE}/faqs/${id}`, {
      method: 'DELETE',
      headers: getHeaders()
    });
    const data = await res.json();
    if (data.success) {
      setFaqs(prev => prev.filter(f => f.id !== id));
    } else {
      throw new Error(data.message);
    }
  };

  // Home Sections Update
  const updateHomeSection = async (key: string, content: any) => {
    const res = await fetchWithAuth(`${API_BASE}/home-sections/${key}`, {
      method: 'PUT',
      headers: getHeaders(),
      body: JSON.stringify({ content })
    });
    const data = await res.json();
    if (data.success && data.homeSection) {
      setHomeSections(prev => {
        const exists = prev.some(hs => hs.key === key);
        if (exists) {
          return prev.map(hs => hs.key === key ? { ...data.homeSection, id: data.homeSection.id || data.homeSection._id } : hs);
        } else {
          return [...prev, { ...data.homeSection, id: data.homeSection.id || data.homeSection._id }];
        }
      });
    } else {
      throw new Error(data.message);
    }
  };

  // Multipart File Uploader
  const uploadFile = async (file: File): Promise<MediaItem> => {
    const formData = new FormData();
    formData.append('file', file);

    const res = await fetchWithAuth(`${API_BASE}/media/upload`, {
      method: 'POST',
      headers: getHeaders(true),
      body: formData
    });

    const data = await res.json();
    if (data.success && data.media) {
      const formattedMedia = {
        ...data.media,
        _id: data.media.id || data.media._id
      };
      setMedia(prev => [formattedMedia, ...prev]);
      return formattedMedia;
    } else {
      throw new Error(data.message || 'File upload failed.');
    }
  };

  // File Deleter
  const deleteFile = async (id: string) => {
    const res = await fetchWithAuth(`${API_BASE}/media/${id}`, {
      method: 'DELETE',
      headers: getHeaders()
    });
    const data = await res.json();
    if (data.success) {
      setMedia(prev => prev.filter(m => m.id !== id && m._id !== id));
    } else {
      throw new Error(data.message);
    }
  };

  const resetToSeedData = async () => {
    // Frontend re-loads initial seed from database directly
    await loadInitialData();
  };

  return (
    <DatabaseContext.Provider value={{
      projects,
      blogs,
      testimonials,
      services,
      careers,
      team,
      leads,
      seoSettings,
      settings,
      faqs,
      homeSections,
      media,
      loading,
      addProject,
      updateProject,
      deleteProject,
      addBlog,
      updateBlog,
      deleteBlog,
      addTestimonial,
      updateTestimonial,
      deleteTestimonial,
      addService,
      updateService,
      deleteService,
      addCareer,
      updateCareer,
      deleteCareer,
      addTeamMember,
      updateTeamMember,
      deleteTeamMember,
      addLead,
      updateLeadStatus,
      deleteLead,
      updateSeoSettings,
      updateSettings,
      addFaq,
      updateFaq,
      deleteFaq,
      updateHomeSection,
      uploadFile,
      deleteFile,
      fetchMedia,
      resetToSeedData
    }}>
      {children}
    </DatabaseContext.Provider>
  );
};

export const useDatabase = () => {
  const context = React.useContext(DatabaseContext);
  if (context === undefined) {
    throw new Error('useDatabase must be used within a DatabaseProvider');
  }
  return context;
};
