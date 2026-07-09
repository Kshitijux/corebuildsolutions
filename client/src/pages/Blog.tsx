import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Calendar, Clock, ArrowRight, ArrowUpRight } from 'lucide-react';
import { useDatabase } from '../context/DatabaseContext';
import SEO from '../components/SEO';

export default function Blog() {
  const navigate = useNavigate();
  const { blogs, seoSettings } = useDatabase();
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Dynamic SEO from database
  const blogSeo = seoSettings.find(s => s.page === 'blog') || {
    title: 'Premium Engineering & AI Insights Blog | CoreBuild Solutions',
    description: 'Read the latest technical articles, case studies, and engineering guidelines on AI system architectures, custom web development, and premium UI/UX designs.',
    keywords: 'engineering blog, tech articles, AI architecture, custom software development blog, UI/UX designs, tech agency insights'
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://corebuildsolutions.in"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://corebuildsolutions.in/blog"
      }
    ]
  };

  // Only display published blog posts
  const publishedBlogs = blogs.filter(b => b.published !== false);

  // Distinct Categories list based on published posts
  const categories = ['All', ...Array.from(new Set(publishedBlogs.map(b => b.category)))];

  // Filter posts by category and search query
  const filteredBlogs = publishedBlogs.filter(b => {
    const matchesCategory = activeCategory === 'All' || b.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (b.tags && b.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())));
    return matchesCategory && matchesSearch;
  });

  // Set the first blog in the array as Featured, the rest in the list (only under default view)
  const isDefaultView = activeCategory === 'All' && searchQuery === '';
  const featuredPost = isDefaultView ? filteredBlogs[0] : null;
  const gridBlogs = featuredPost 
    ? filteredBlogs.slice(1) 
    : filteredBlogs;

  // Paginated grid blogs
  const totalPages = Math.ceil(gridBlogs.length / postsPerPage) || 1;
  const paginatedGridBlogs = gridBlogs.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  return (
    <div className="relative w-full overflow-hidden bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 transition-colors pt-24 pb-20">
      <SEO 
        title={blogSeo.title}
        description={blogSeo.description}
        keywords={blogSeo.keywords}
        schema={breadcrumbSchema}
      />

      {/* Background blobs */}
      <div className="liquid-bg">
        <div className="liquid-blob top-10 left-10 w-96 h-96 bg-blue-500/10 dark:bg-blue-600/10 blur-[100px]" />
        <div className="liquid-blob bottom-20 right-10 w-80 h-80 bg-indigo-500/10 dark:bg-indigo-600/10 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* ==========================================
            HERO SECTION
           ========================================== */}
        <div className="max-w-3xl text-left py-16 flex flex-col gap-6">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-500 flex items-center gap-1.5">
            <BookOpen size={14} /> Agency Insights
          </span>
          <h1 className="font-heading text-4xl md:text-6xl font-extrabold tracking-tight leading-none text-slate-900 dark:text-white">
            Engineering Insights for Modern Teams.
          </h1>
          <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
            Deep-dives into cognitive machine learning integrations, quantitative financial dashboards, and premium UX interactions designed to maximize brand equity.
          </p>
        </div>

        {/* ==========================================
            FEATURED POST SECTION (Only on 'All' and no search query)
           ========================================== */}
        {featuredPost && (
          <div className="mb-16">
            <h2 className="font-heading text-xs font-semibold uppercase tracking-wider text-slate-400 mb-6 text-left">
              Featured Case Study & Blueprint
            </h2>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              onClick={() => navigate(`/blog/${featuredPost.slug || featuredPost.id}`)}
              className="glass-card rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-900 hover:border-blue-500/20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch cursor-pointer group"
            >
              {/* Media layout (span 7) */}
              <div className="lg:col-span-7 aspect-[16/10] lg:aspect-auto relative min-h-[300px] bg-slate-900 overflow-hidden">
                <img
                  src={featuredPost.image}
                  alt={`Featured Technical Post - ${featuredPost.title}`}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-102 transition-transform duration-700 ease-[0.16,1,0.3,1]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60" />
                <div className="absolute top-6 left-6 px-3 py-1 bg-blue-600 text-white text-[10px] tracking-widest font-semibold uppercase rounded-md shadow-md">
                  FEATURED READ
                </div>
              </div>

              {/* Text context (span 5) */}
              <div className="lg:col-span-5 p-8 md:p-10 flex flex-col justify-between text-left">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    <span className="text-blue-500">{featuredPost.category}</span>
                    <span>&bull;</span>
                    <span className="flex items-center gap-1"><Calendar size={12} /> {featuredPost.date}</span>
                  </div>

                  <h3 className="font-heading text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-500 transition-colors">
                    {featuredPost.title}
                  </h3>

                  <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {featuredPost.summary}
                  </p>
                </div>

                <div className="flex flex-col gap-6 mt-6">
                  <div className="h-[1px] bg-slate-200 dark:bg-slate-800 w-full" />
                  
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
                    <div className="flex flex-col">
                      <span className="text-slate-850 dark:text-slate-205">{featuredPost.author}</span>
                      <span className="text-[10px] text-slate-400 mt-0.5 flex items-center gap-1 font-normal"><Clock size={10} /> {featuredPost.readTime}</span>
                    </div>

                    <span className="inline-flex items-center gap-1 text-blue-650 dark:text-blue-400 uppercase tracking-widest group-hover:translate-x-1 transition-transform">
                      Read Blueprint <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {/* ==========================================
            SEARCH BAR
           ========================================== */}
        <div className="max-w-md mx-auto mb-8 relative">
          <input
            type="text"
            placeholder="Search insights by title, summary, tags..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full px-5 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-850 rounded-2xl text-xs focus:outline-none focus:border-blue-500 text-slate-900 dark:text-white shadow-md shadow-blue-500/5 transition-all pl-10"
          />
          <span className="absolute left-3.5 top-3.5 text-slate-400">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </span>
          {searchQuery && (
            <button
              onClick={() => {
                setSearchQuery('');
                setCurrentPage(1);
              }}
              className="absolute right-3.5 top-3 px-2 py-1 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-[10px] rounded text-slate-450 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              Clear
            </button>
          )}
        </div>

        {/* ==========================================
            FILTER TABS
           ========================================== */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 border-b border-slate-200 dark:border-slate-900 pb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setCurrentPage(1);
              }}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 shadow-md'
                  : 'bg-white/50 dark:bg-slate-900/50 text-slate-650 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ==========================================
            BLOG LIST GRID
           ========================================== */}
        {paginatedGridBlogs.length > 0 ? (
          <div className="flex flex-col gap-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence mode="popLayout">
                {paginatedGridBlogs.map((blog) => (
                  <motion.div
                    layout
                    key={blog.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5 }}
                    onClick={() => navigate(`/blog/${blog.slug || blog.id}`)}
                    className="glass-card rounded-3xl overflow-hidden text-left flex flex-col justify-between group border border-slate-200 dark:border-slate-900 hover:border-blue-500/20 cursor-pointer"
                  >
                    
                    {/* Media banner */}
                    <div className="relative aspect-[16/10] bg-slate-900 overflow-hidden">
                      <img
                        src={blog.image}
                        alt={`Article - ${blog.title}`}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 ease-[0.16,1,0.3,1]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60" />
                      <div className="absolute top-4 left-4 px-3 py-1 bg-slate-950/70 border border-white/10 backdrop-blur-sm rounded-full text-[9px] text-white tracking-widest font-semibold uppercase">
                        {blog.category}
                      </div>
                    </div>

                    {/* Body details */}
                    <div className="p-6 flex flex-col justify-between flex-grow">
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-1.5 text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
                          <span>{blog.date}</span>
                          <span>&bull;</span>
                          <span>{blog.readTime}</span>
                        </div>

                        <h3 className="font-heading text-lg font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-500 transition-colors line-clamp-2">
                          {blog.title}
                        </h3>

                        <p className="text-xs text-slate-605 dark:text-slate-400 leading-relaxed line-clamp-3">
                          {blog.summary}
                        </p>
                      </div>

                      <div className="flex flex-col gap-4 mt-6">
                        <div className="h-[1px] bg-slate-200 dark:bg-slate-800 w-full" />
                        
                        <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
                          <span className="text-slate-700 dark:text-slate-300 truncate max-w-[120px]">{blog.author}</span>
                          <span className="inline-flex items-center gap-0.5 text-blue-600 dark:text-blue-400 uppercase tracking-wider group-hover:translate-x-0.5 transition-transform text-[10px]">
                            View Post <ArrowUpRight size={12} />
                          </span>
                        </div>
                      </div>
                    </div>

                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Pagination controls */}
            {totalPages > 1 && (
              <div className="flex items-center justify-between mt-4 border-t border-slate-200 dark:border-slate-900 pt-6">
                <span className="text-xs text-slate-500">
                  Showing page {currentPage} of {totalPages}
                </span>
                <div className="flex gap-2">
                  <button
                    disabled={currentPage === 1}
                    onClick={() => {
                      setCurrentPage(prev => Math.max(prev - 1, 1));
                      window.scrollTo({ top: 300, behavior: 'smooth' });
                    }}
                    className="px-4 py-2 bg-slate-200 dark:bg-slate-900 hover:bg-slate-300 dark:hover:bg-slate-800 disabled:opacity-40 disabled:hover:bg-slate-200 dark:disabled:hover:bg-slate-900 text-slate-800 dark:text-white rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors disabled:cursor-not-allowed cursor-pointer"
                  >
                    Previous
                  </button>
                  <button
                    disabled={currentPage === totalPages}
                    onClick={() => {
                      setCurrentPage(prev => Math.min(prev + 1, totalPages));
                      window.scrollTo({ top: 300, behavior: 'smooth' });
                    }}
                    className="px-4 py-2 bg-slate-205 dark:bg-slate-900 hover:bg-slate-300 dark:hover:bg-slate-800 disabled:opacity-40 disabled:hover:bg-slate-200 dark:disabled:hover:bg-slate-900 text-slate-800 dark:text-white rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors disabled:cursor-not-allowed cursor-pointer"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="py-20 text-center text-slate-400">
            No articles found matching your search options.
          </div>
        )}

      </div>
    </div>
  );
}
