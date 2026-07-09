import React, { createContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';
import { supabase } from '../utils/supabaseClient';
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

interface MediaItem {
  id?: string;
  _id: string;
  filename: string;
  url: string;
  sizeBytes: number;
  mimetype: string;
  storageType: 'local' | 'cloudinary' | 'supabase';
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

// Utility to generate a v4 UUID on the client side
const generateUUID = () => {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

export const DatabaseContext = createContext<DatabaseContextProps | undefined>(undefined);

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

  // Helper to map flat database Project columns to nested client Project object
  const mapProjectFromDB = (p: any): Project => {
    return {
      ...p,
      id: p.id,
      testimonial: p.testimonialName ? {
        name: p.testimonialName,
        role: p.testimonialRole || '',
        text: p.testimonialText || '',
        avatar: p.testimonialAvatar || ''
      } : undefined
    };
  };

  // Fetch initial public content directly from Supabase
  const loadInitialData = async () => {
    try {
      setLoading(true);
      
      const [
        resProj,
        resBlogs,
        resTest,
        resSrv,
        resCar,
        resTeam,
        resSeo,
        resSet,
        resFaq,
        resHomeSec
      ] = await Promise.all([
        supabase.from('Project').select('*').order('createdAt', { ascending: false }),
        supabase.from('Blog').select('*').order('createdAt', { ascending: false }),
        supabase.from('Testimonial').select('*').order('createdAt', { ascending: false }),
        supabase.from('Service').select('*'),
        supabase.from('Career').select('*'),
        supabase.from('TeamMember').select('*').order('order', { ascending: true }),
        supabase.from('SeoSettings').select('*'),
        supabase.from('SystemSettings').select('*').eq('key', 'global').maybeSingle(),
        supabase.from('FaqItem').select('*').order('order', { ascending: true }),
        supabase.from('HomeSection').select('*')
      ]);

      if (resProj.data && resProj.data.length > 0) setProjects(resProj.data.map(mapProjectFromDB));
      
      // Merge local storage blogs with Supabase/fallback blogs to preserve custom fields (published, SEO, slugs)
      const cleanAuthor = (authorName?: string) => {
        if (!authorName) return "Kshitij, Founder & CEO";
        if (authorName === "Elena Vance, CTO" || 
            authorName === "Marcus Sterling, Lead Designer" || 
            authorName === "CoreBuild Team") {
          return "Kshitij, Founder & CEO";
        }
        return authorName;
      };

      const localBlogsRaw = localStorage.getItem("core_blogs");
      const localBlogs: Blog[] = localBlogsRaw ? JSON.parse(localBlogsRaw) : [];
      const databaseBlogs = resBlogs.data && resBlogs.data.length > 0 ? resBlogs.data : [];
      
      // Start with all fallback blogs (ensuring all new posts are present)
      const mergedBlogs = fallbackBlogs.map(b => ({
        ...b,
        author: cleanAuthor(b.author)
      }));

      // Merge database records
      databaseBlogs.forEach((db: Blog) => {
        const idx = mergedBlogs.findIndex(b => b.id === db.id);
        const cleanDb = {
          ...db,
          author: cleanAuthor(db.author)
        };
        if (idx !== -1) {
          mergedBlogs[idx] = { ...mergedBlogs[idx], ...cleanDb };
        } else {
          mergedBlogs.push(cleanDb);
        }
      });

      // Merge local storage records
      localBlogs.forEach((lb: Blog) => {
        const idx = mergedBlogs.findIndex(b => b.id === lb.id);
        const cleanLb = {
          ...lb,
          author: cleanAuthor(lb.author)
        };
        if (idx !== -1) {
          mergedBlogs[idx] = { ...mergedBlogs[idx], ...cleanLb };
        } else {
          mergedBlogs.unshift(cleanLb);
        }
      });

      setBlogs(mergedBlogs);

      if (resTest.data && resTest.data.length > 0) setTestimonials(resTest.data);
      if (resSrv.data && resSrv.data.length > 0) setServices(resSrv.data);
      if (resCar.data && resCar.data.length > 0) setCareers(resCar.data);
      if (resTeam.data && resTeam.data.length > 0) {
        const cleanedTeam = resTeam.data.map(tm => {
          if (tm.id === 'team-1' || tm.name === 'Kshitij Tiwari') {
            return {
              ...tm,
              bio: tm.bio ? tm.bio.replace('15 years', '5 years') : '',
              experience: '5+ Years'
            };
          }
          return tm;
        });
        setTeam(cleanedTeam);
      }
      if (resSeo.data && resSeo.data.length > 0) setSeoSettings(resSeo.data);
      if (resSet.data) setSettings(resSet.data);
      if (resFaq.data && resFaq.data.length > 0) setFaqs(resFaq.data);
      if (resHomeSec.data && resHomeSec.data.length > 0) setHomeSections(resHomeSec.data);

    } catch (e) {
      console.error('Failed to load database records from Supabase.', e);
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
      const { data, error } = await supabase.from('Lead').select('*').order('createdAt', { ascending: false });
      if (error) throw error;
      if (data) setLeads(data);
    } catch (e) {
      console.error('Leads fetch failed:', e);
    }
  };

  const fetchMedia = async () => {
    try {
      const { data, error } = await supabase.from('MediaItem').select('*').order('createdAt', { ascending: false });
      if (error) throw error;
      if (data) {
        setMedia(data.map(m => ({ ...m, _id: m.id })));
      }
    } catch (e) {
      console.error('Media fetch failed:', e);
    }
  };

  // Projects CRUD
  const addProject = async (proj: Omit<Project, 'id'>) => {
    const { testimonial, ...rest } = proj;
    const newProj = { 
      id: generateUUID(), 
      ...rest,
      testimonialName: testimonial?.name || null,
      testimonialRole: testimonial?.role || null,
      testimonialText: testimonial?.text || null,
      testimonialAvatar: testimonial?.avatar || null,
      updatedAt: new Date().toISOString()
    };
    const { data, error } = await supabase.from('Project').insert([newProj]).select().single();
    if (error) throw error;
    if (data) {
      setProjects(prev => [mapProjectFromDB(data), ...prev]);
    }
  };

  const updateProject = async (proj: Project) => {
    const { testimonial, ...rest } = proj;
    const updateData = { 
      ...rest,
      testimonialName: testimonial?.name || null,
      testimonialRole: testimonial?.role || null,
      testimonialText: testimonial?.text || null,
      testimonialAvatar: testimonial?.avatar || null,
      updatedAt: new Date().toISOString()
    };
    delete (updateData as any).id;
    delete (updateData as any).createdAt;
    
    const { data, error } = await supabase.from('Project').update(updateData).eq('id', proj.id).select().single();
    if (error) throw error;
    if (data) {
      setProjects(prev => prev.map(p => p.id === proj.id ? mapProjectFromDB(data) : p));
    }
  };

  const deleteProject = async (id: string) => {
    const { error } = await supabase.from('Project').delete().eq('id', id);
    if (error) throw error;
    setProjects(prev => prev.filter(p => p.id !== id));
  };

  // Blogs CRUD
  const addBlog = async (blog: Omit<Blog, 'id'>) => {
    const newBlog = { 
      id: generateUUID(), 
      ...blog,
      updatedAt: new Date().toISOString()
    };
    
    let savedInDb = false;
    try {
      const { data, error } = await supabase.from('Blog').insert([newBlog]).select().single();
      if (!error && data) {
        setBlogs(prev => [data, ...prev]);
        savedInDb = true;
      }
    } catch (e) {
      console.warn("Supabase blog insert failed, falling back to local sync.", e);
    }
    
    // Always persist to local storage to preserve custom draft status and SEO tags
    const localBlogsRaw = localStorage.getItem("core_blogs");
    const localBlogs: Blog[] = localBlogsRaw ? JSON.parse(localBlogsRaw) : [];
    localBlogs.unshift(newBlog as Blog);
    localStorage.setItem("core_blogs", JSON.stringify(localBlogs));
    
    if (!savedInDb) {
      setBlogs(prev => [newBlog as Blog, ...prev]);
    }
  };

  const updateBlog = async (blog: Blog) => {
    const updateData = { 
      ...blog,
      updatedAt: new Date().toISOString()
    };
    
    let savedInDb = false;
    try {
      const supabaseData = { ...updateData };
      delete (supabaseData as any).id;
      delete (supabaseData as any).createdAt;
      
      const { data, error } = await supabase.from('Blog').update(supabaseData).eq('id', blog.id).select().single();
      if (!error && data) {
        setBlogs(prev => prev.map(b => b.id === blog.id ? data : b));
        savedInDb = true;
      }
    } catch (e) {
      console.warn("Supabase blog update failed, falling back to local sync.", e);
    }
    
    const localBlogsRaw = localStorage.getItem("core_blogs");
    const localBlogs: Blog[] = localBlogsRaw ? JSON.parse(localBlogsRaw) : [];
    const idx = localBlogs.findIndex(b => b.id === blog.id);
    if (idx !== -1) {
      localBlogs[idx] = updateData;
    } else {
      localBlogs.push(updateData);
    }
    localStorage.setItem("core_blogs", JSON.stringify(localBlogs));
    
    if (!savedInDb) {
      setBlogs(prev => prev.map(b => b.id === blog.id ? updateData : b));
    }
  };

  const deleteBlog = async (id: string) => {
    try {
      await supabase.from('Blog').delete().eq('id', id);
    } catch (e) {
      console.warn("Supabase blog delete failed, falling back to local sync.", e);
    }
    
    const localBlogsRaw = localStorage.getItem("core_blogs");
    if (localBlogsRaw) {
      const localBlogs: Blog[] = JSON.parse(localBlogsRaw);
      const filtered = localBlogs.filter(b => b.id !== id);
      localStorage.setItem("core_blogs", JSON.stringify(filtered));
    }
    
    setBlogs(prev => prev.filter(b => b.id !== id));
  };

  // Testimonials CRUD
  const addTestimonial = async (test: Omit<Testimonial, 'id'>) => {
    const newTest = { 
      id: generateUUID(), 
      ...test,
      updatedAt: new Date().toISOString()
    };
    const { data, error } = await supabase.from('Testimonial').insert([newTest]).select().single();
    if (error) throw error;
    if (data) {
      setTestimonials(prev => [data, ...prev]);
    }
  };

  const updateTestimonial = async (test: Testimonial) => {
    const updateData = { 
      ...test,
      updatedAt: new Date().toISOString()
    };
    delete (updateData as any).id;
    delete (updateData as any).createdAt;

    const { data, error } = await supabase.from('Testimonial').update(updateData).eq('id', test.id).select().single();
    if (error) throw error;
    if (data) {
      setTestimonials(prev => prev.map(t => t.id === test.id ? data : t));
    }
  };

  const deleteTestimonial = async (id: string) => {
    const { error } = await supabase.from('Testimonial').delete().eq('id', id);
    if (error) throw error;
    setTestimonials(prev => prev.filter(t => t.id !== id));
  };

  // Services CRUD
  const addService = async (srv: Omit<Service, 'id'>) => {
    const newSrv = { 
      id: generateUUID(), 
      ...srv,
      updatedAt: new Date().toISOString()
    };
    const { data, error } = await supabase.from('Service').insert([newSrv]).select().single();
    if (error) throw error;
    if (data) {
      setServices(prev => [...prev, data]);
    }
  };

  const updateService = async (srv: Service) => {
    const updateData = { 
      ...srv,
      updatedAt: new Date().toISOString()
    };
    delete (updateData as any).id;
    delete (updateData as any).createdAt;

    const { data, error } = await supabase.from('Service').update(updateData).eq('id', srv.id).select().single();
    if (error) throw error;
    if (data) {
      setServices(prev => prev.map(s => s.id === srv.id ? data : s));
    }
  };

  const deleteService = async (id: string) => {
    const { error } = await supabase.from('Service').delete().eq('id', id);
    if (error) throw error;
    setServices(prev => prev.filter(s => s.id !== id));
  };

  // Careers CRUD
  const addCareer = async (car: Omit<Career, 'id'>) => {
    const newCar = { 
      id: generateUUID(), 
      ...car,
      updatedAt: new Date().toISOString()
    };
    const { data, error } = await supabase.from('Career').insert([newCar]).select().single();
    if (error) throw error;
    if (data) {
      setCareers(prev => [...prev, data]);
    }
  };

  const updateCareer = async (car: Career) => {
    const updateData = { 
      ...car,
      updatedAt: new Date().toISOString()
    };
    delete (updateData as any).id;
    delete (updateData as any).createdAt;

    const { data, error } = await supabase.from('Career').update(updateData).eq('id', car.id).select().single();
    if (error) throw error;
    if (data) {
      setCareers(prev => prev.map(c => c.id === car.id ? data : c));
    }
  };

  const deleteCareer = async (id: string) => {
    const { error } = await supabase.from('Career').delete().eq('id', id);
    if (error) throw error;
    setCareers(prev => prev.filter(c => c.id !== id));
  };

  // Team Member CRUD
  const addTeamMember = async (tm: Omit<TeamMember, 'id'>) => {
    const newTm = { 
      id: generateUUID(), 
      ...tm,
      updatedAt: new Date().toISOString()
    };
    const { data, error } = await supabase.from('TeamMember').insert([newTm]).select().single();
    if (error) throw error;
    if (data) {
      setTeam(prev => [...prev, data]);
    }
  };

  const updateTeamMember = async (tm: TeamMember) => {
    const updateData = { 
      ...tm,
      updatedAt: new Date().toISOString()
    };
    delete (updateData as any).id;
    delete (updateData as any).createdAt;

    const { data, error } = await supabase.from('TeamMember').update(updateData).eq('id', tm.id).select().single();
    if (error) throw error;
    if (data) {
      setTeam(prev => prev.map(t => t.id === tm.id ? data : t));
    }
  };

  const deleteTeamMember = async (id: string) => {
    const { error } = await supabase.from('TeamMember').delete().eq('id', id);
    if (error) throw error;
    setTeam(prev => prev.filter(t => t.id !== id));
  };

  // Leads CRM CRUD
  const addLead = async (lead: Omit<Lead, 'id' | 'date' | 'status'>) => {
    const leadData = {
      id: generateUUID(),
      ...lead,
      date: new Date().toLocaleDateString('en-US'),
      status: 'unread',
      source: 'web',
      updatedAt: new Date().toISOString()
    };
    const { error } = await supabase.from('Lead').insert([leadData]);
    if (error) throw error;
    if (token) {
      await fetchLeads();
    }
  };

  const updateLeadStatus = async (id: string, status: 'new' | 'contacted' | 'archived') => {
    const { data, error } = await supabase.from('Lead').update({ 
      status,
      updatedAt: new Date().toISOString() 
    }).eq('id', id).select().single();
    if (error) throw error;
    if (data) {
      setLeads(prev => prev.map(l => l.id === id ? data : l));
    }
  };

  const deleteLead = async (id: string) => {
    const { error } = await supabase.from('Lead').delete().eq('id', id);
    if (error) throw error;
    setLeads(prev => prev.filter(l => l.id !== id));
  };

  // SEO Page Metadata Update
  const updateSeoSettings = async (page: string, seo: Omit<SeoSettings, 'page'>) => {
    const updateData = { 
      ...seo,
      updatedAt: new Date().toISOString()
    };
    delete (updateData as any).id;
    delete (updateData as any).createdAt;

    const { data, error } = await supabase.from('SeoSettings').update(updateData).eq('page', page).select().single();
    if (error) throw error;
    if (data) {
      setSeoSettings(prev => prev.map(s => s.page === page ? data : s));
    }
  };

  // General Settings Update
  const updateSettings = async (nextSettings: SystemSettings) => {
    const updateData = { 
      ...nextSettings,
      updatedAt: new Date().toISOString()
    };
    delete (updateData as any).createdAt;

    // Use current ID in state or generate a new UUID if setting row doesn't exist
    const existingId = (settings as any).id || generateUUID();

    const { data, error } = await supabase.from('SystemSettings').upsert({ 
      id: existingId,
      ...updateData, 
      key: 'global' 
    }).select().single();
    
    if (error) throw error;
    if (data) {
      setSettings(data);
    }
  };

  // FAQs CRUD
  const addFaq = async (faq: Omit<FaqItem, 'id'>) => {
    const newFaq = { 
      id: generateUUID(), 
      ...faq,
      updatedAt: new Date().toISOString()
    };
    const { data, error } = await supabase.from('FaqItem').insert([newFaq]).select().single();
    if (error) throw error;
    if (data) {
      setFaqs(prev => [...prev, data]);
    }
  };

  const updateFaq = async (faq: FaqItem) => {
    const updateData = { 
      ...faq,
      updatedAt: new Date().toISOString()
    };
    delete (updateData as any).id;
    delete (updateData as any).createdAt;

    const { data, error } = await supabase.from('FaqItem').update(updateData).eq('id', faq.id).select().single();
    if (error) throw error;
    if (data) {
      setFaqs(prev => prev.map(f => f.id === faq.id ? data : f));
    }
  };

  const deleteFaq = async (id: string) => {
    const { error } = await supabase.from('FaqItem').delete().eq('id', id);
    if (error) throw error;
    setFaqs(prev => prev.filter(f => f.id !== id));
  };

  // Home Sections Update
  const updateHomeSection = async (key: string, content: any) => {
    const existing = homeSections.find(hs => hs.key === key);
    const existingId = existing?.id || generateUUID();

    const { data, error } = await supabase.from('HomeSection').upsert({ 
      id: existingId,
      key, 
      content,
      updatedAt: new Date().toISOString()
    }).select().single();
    
    if (error) throw error;
    if (data) {
      setHomeSections(prev => {
        const exists = prev.some(hs => hs.key === key);
        if (exists) {
          return prev.map(hs => hs.key === key ? data : hs);
        } else {
          return [...prev, data];
        }
      });
    }
  };

  // Direct Supabase Storage Uploader
  const uploadFile = async (file: File): Promise<MediaItem> => {
    const fileExt = file.name.split('.').pop();
    const uniqueFilename = `${Date.now()}-${Math.random().toString(36).substring(2, 15)}.${fileExt}`;
    const bucketName = 'website-images';

    // 1. Upload to Supabase Storage
    const { error: uploadError } = await supabase.storage
      .from(bucketName)
      .upload(uniqueFilename, file, {
        cacheControl: '3600',
        upsert: false
      });

    if (uploadError) throw uploadError;

    // 2. Get Public URL
    const { data: { publicUrl } } = supabase.storage
      .from(bucketName)
      .getPublicUrl(uniqueFilename);

    // 3. Record in MediaItem table
    const mediaItem = {
      id: generateUUID(),
      filename: uniqueFilename,
      url: publicUrl,
      sizeBytes: file.size,
      mimetype: file.type,
      storageType: 'supabase' as const,
      updatedAt: new Date().toISOString()
    };

    const { data, error } = await supabase.from('MediaItem').insert([mediaItem]).select().single();
    if (error) throw error;

    const formattedMedia = {
      ...data,
      _id: data.id
    };

    setMedia(prev => [formattedMedia, ...prev]);
    return formattedMedia;
  };

  // Storage and Database File Deleter
  const deleteFile = async (id: string) => {
    const item = media.find(m => m.id === id || m._id === id);
    if (!item) return;

    const bucketName = 'website-images';

    // 1. Delete from Storage
    await supabase.storage.from(bucketName).remove([item.filename]);

    // 2. Delete from MediaItem table
    const { error } = await supabase.from('MediaItem').delete().eq('id', id);
    if (error) throw error;

    setMedia(prev => prev.filter(m => m.id !== id && m._id !== id));
  };

  // Database Seeder
  const resetToSeedData = async () => {
    try {
      setLoading(true);
      
      // 1. Delete existing records
      await Promise.all([
        supabase.from('Project').delete().neq('id', ''),
        supabase.from('Blog').delete().neq('id', ''),
        supabase.from('Testimonial').delete().neq('id', ''),
        supabase.from('Service').delete().neq('id', ''),
        supabase.from('Career').delete().neq('id', ''),
        supabase.from('TeamMember').delete().neq('id', ''),
        supabase.from('FaqItem').delete().neq('id', ''),
        supabase.from('HomeSection').delete().neq('id', ''),
        supabase.from('SystemSettings').delete().neq('id', ''),
        supabase.from('SeoSettings').delete().neq('id', '')
      ]);

      const now = new Date().toISOString();

      // 2. Flatten project testimonials to match flat PostgreSQL columns
      const projectsWithDates = fallbackProjects.map(p => {
        const { testimonial, ...rest } = p;
        return {
          ...rest,
          testimonialName: testimonial?.name || null,
          testimonialRole: testimonial?.role || null,
          testimonialText: testimonial?.text || null,
          testimonialAvatar: testimonial?.avatar || null,
          updatedAt: now
        };
      });

      const blogsWithDates = fallbackBlogs.map(b => ({ ...b, updatedAt: now }));
      const testimonialsWithDates = fallbackTestimonials.map(t => ({ ...t, updatedAt: now }));
      const servicesWithDates = fallbackServices.map(s => ({ ...s, updatedAt: now }));
      const careersWithDates = fallbackCareers.map(c => ({ ...c, updatedAt: now }));
      const teamWithDates = fallbackTeam.map(tm => ({ ...tm, updatedAt: now }));
      const faqsWithDates = fallbackFaqs.map(f => ({ ...f, updatedAt: now }));
      const homeSecWithDates = fallbackHomeSections.map(hs => ({ ...hs, updatedAt: now }));
      const settingsWithDate = { ...fallbackSettings, key: 'global', id: generateUUID(), updatedAt: now };
      const seoWithDates = fallbackSeoSettings.map(seo => ({ ...seo, id: generateUUID(), updatedAt: now }));

      // 3. Insert all records
      await Promise.all([
        supabase.from('Project').insert(projectsWithDates),
        supabase.from('Blog').insert(blogsWithDates),
        supabase.from('Testimonial').insert(testimonialsWithDates),
        supabase.from('Service').insert(servicesWithDates),
        supabase.from('Career').insert(careersWithDates),
        supabase.from('TeamMember').insert(teamWithDates),
        supabase.from('FaqItem').insert(faqsWithDates),
        supabase.from('HomeSection').insert(homeSecWithDates),
        supabase.from('SystemSettings').insert([settingsWithDate]),
        supabase.from('SeoSettings').insert(seoWithDates)
      ]);

      // Clear local storage cache
      localStorage.removeItem("core_blogs");

      // 4. Reload
      await loadInitialData();

      window.dispatchEvent(new CustomEvent('show-toast', {
        detail: { message: 'Database reset to seed data successfully!', type: 'success' }
      }));
    } catch (err: any) {
      console.error('Seed reset failure:', err.message);
      window.dispatchEvent(new CustomEvent('show-toast', {
        detail: { message: 'Failed to seed database: ' + err.message, type: 'error' }
      }));
    } finally {
      setLoading(false);
    }
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
