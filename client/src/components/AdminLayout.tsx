import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  LayoutDashboard, 
  FolderGit2, 
  BookOpen, 
  MessageSquare, 
  Sliders, 
  Briefcase, 
  Inbox, 
  Globe, 
  Image as ImageIcon, 
  Settings as SettingsIcon, 
  LogOut, 
  Menu, 
  X,
  RefreshCw,
  UserCheck,
  Users,
  HelpCircle,
  Home as HomeIcon
} from 'lucide-react';
import { useDatabase } from '../context/DatabaseContext';
import { useAuth } from '../context/AuthContext';
import logoImg from '../assets/logo.png';

interface AdminLayoutProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  children: React.ReactNode;
}

export default function AdminLayout({ activeTab, setActiveTab, children }: AdminLayoutProps) {
  const navigate = useNavigate();
  const { resetToSeedData } = useDatabase();
  const { user, logout } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Define tabs available by roles
  const menuItems = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard, roles: ['super_admin', 'admin', 'editor'] },
    { id: 'projects', label: 'Projects', icon: FolderGit2, roles: ['super_admin', 'admin', 'editor'] },
    { id: 'blogs', label: 'Blogs', icon: BookOpen, roles: ['super_admin', 'admin', 'editor'] },
    { id: 'testimonials', label: 'Testimonials', icon: MessageSquare, roles: ['super_admin', 'admin', 'editor'] },
    { id: 'team', label: 'Team Management', icon: Users, roles: ['super_admin', 'admin', 'editor'] },
    { id: 'faq', label: 'FAQ Accordions', icon: HelpCircle, roles: ['super_admin', 'admin', 'editor'] },
    { id: 'services', label: 'Services', icon: Sliders, roles: ['super_admin', 'admin'] },
    { id: 'careers', label: 'Careers', icon: Briefcase, roles: ['super_admin', 'admin'] },
    { id: 'leads', label: 'Leads Inbox', icon: Inbox, roles: ['super_admin', 'admin'] },
    { id: 'homeLayout', label: 'Home Layout Editor', icon: HomeIcon, roles: ['super_admin', 'admin'] },
    { id: 'seo', label: 'SEO Config', icon: Globe, roles: ['super_admin', 'admin'] },
    { id: 'media', label: 'Media Library', icon: ImageIcon, roles: ['super_admin', 'admin', 'editor'] },
    { id: 'users', label: 'Users CRUD', icon: UserCheck, roles: ['super_admin'] },
    { id: 'settings', label: 'System Settings', icon: SettingsIcon, roles: ['super_admin', 'admin'] },
  ];

  const handleReset = () => {
    if (window.confirm("Are you sure you want to restore the seed data? This will overwrite your current changes.")) {
      resetToSeedData();
      window.dispatchEvent(new CustomEvent('show-toast', {
        detail: { message: 'Database reset to seed data successfully.', type: 'success' }
      }));
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  const filteredMenuItems = menuItems.filter(item => user && item.roles.includes(user.role));

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col md:flex-row antialiased">
      
      {/* Mobile Top Bar */}
      <div className="flex md:hidden items-center justify-between px-6 py-4 bg-white border-b border-slate-200">
        <Link to="/" className="flex items-center gap-2">
          <img src={logoImg} alt="CoreBuild Solutions Logo" className="h-18 w-auto object-contain" />
        </Link>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-1.5 rounded-md text-slate-500 hover:text-slate-900 hover:bg-slate-100"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 z-30 w-64 bg-white border-r border-slate-200 p-6 flex flex-col justify-between transition-transform duration-300 md:relative md:translate-x-0
        ${mobileOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        <div className="flex flex-col gap-6">
          {/* Logo */}
          <div className="hidden md:flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 group">
              <img src={logoImg} alt="CoreBuild Solutions Logo" className="h-20 w-auto object-contain" />
            </Link>
          </div>

          {/* User badge */}
          {user && (
            <div className="p-3 bg-slate-50 rounded-xl flex items-center gap-3 border border-slate-200">
              <div className="w-8 h-8 rounded-full bg-blue-600/10 flex items-center justify-center text-blue-650 font-bold text-sm uppercase">
                {user.name[0]}
              </div>
              <div className="flex flex-col truncate">
                <span className="text-xs font-bold text-slate-800 truncate">{user.name}</span>
                <span className="text-[8px] text-blue-650 bg-blue-50 px-1.5 py-0.5 rounded border border-blue-100 font-bold tracking-wider uppercase mt-1 w-max">
                  {user.role.replace('_', ' ')}
                </span>
              </div>
            </div>
          )}

          {/* Navigation Links */}
          <nav className="flex flex-col gap-1 max-h-[50vh] overflow-y-auto">
            {filteredMenuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setMobileOpen(false);
                  }}
                  className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors duration-200 text-left ${
                    isActive 
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20' 
                      : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  <Icon size={14} />
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Footer Actions */}
        <div className="flex flex-col gap-2 mt-8">
          {/* Restore Seed Data */}
          <button
            onClick={handleReset}
            className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider text-orange-600 border border-orange-500/35 hover:bg-orange-500/10 transition-colors w-full text-left cursor-pointer"
          >
            <RefreshCw size={12} /> Seed Data
          </button>

          {/* Sign Out */}
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider text-red-650 border border-red-500/30 hover:bg-red-500/10 transition-colors w-full text-left cursor-pointer"
          >
            <LogOut size={12} /> Sign Out
          </button>
        </div>
      </aside>

      {/* Main Workspace */}
      <main className="flex-1 p-6 md:p-10 overflow-y-auto max-w-6xl mx-auto w-full bg-slate-50">
        {children}
      </main>

    </div>
  );
}
