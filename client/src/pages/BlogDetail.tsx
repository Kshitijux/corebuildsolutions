import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft, ArrowUpRight, User, BookOpen } from 'lucide-react';
import { useDatabase } from '../context/DatabaseContext';
import SEO from '../components/SEO';

export default function BlogDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { blogs } = useDatabase();

  const post = blogs.find(b => b.id === id);

  if (!post) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col items-center justify-center text-slate-900 dark:text-slate-50 gap-6 pt-24 pb-20">
        <h1 className="font-heading text-4xl font-extrabold">Insights Blueprint Not Found</h1>
        <p className="text-sm text-slate-500 max-w-sm text-center">
          The requested engineering article or system architecture document does not exist in our indices.
        </p>
        <Link 
          to="/blog" 
          className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-semibold text-xs uppercase tracking-wider shadow-md transition-colors"
        >
          Return to Blog Directory
        </Link>
      </div>
    );
  }

  // Related posts (excluding current post)
  const relatedPosts = blogs.filter(b => b.id !== post.id).slice(0, 2);

  // Schema.org BlogPosting
  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `https://corebuildsolutions.in/blog/${post.id}#blogposting`,
    "headline": post.title,
    "description": post.summary,
    "image": post.image,
    "datePublished": "2026-07-01T00:00:00+05:30", // Standardized ISO timestamp format
    "dateModified": "2026-07-01T00:00:00+05:30",
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "CoreBuild Solutions",
      "logo": {
        "@type": "ImageObject",
        "url": "https://corebuildsolutions.in/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://corebuildsolutions.in/blog/${post.id}`
    },
    "articleBody": post.content
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
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": `https://corebuildsolutions.in/blog/${post.id}`
      }
    ]
  };

  // Helper to render markdown headers/bullet points simply as JSX
  const renderContentParagraphs = (content: string) => {
    return content.split('\n\n').map((paragraph, index) => {
      const trimmed = paragraph.trim();
      if (trimmed.startsWith('### ')) {
        return (
          <h2 key={index} className="font-heading text-xl md:text-2xl font-bold tracking-tight text-slate-900 dark:text-white mt-8 mb-4">
            {trimmed.replace('### ', '')}
          </h2>
        );
      }
      if (trimmed.startsWith('## ')) {
        return (
          <h2 key={index} className="font-heading text-xl md:text-2xl font-bold tracking-tight text-slate-900 dark:text-white mt-8 mb-4">
            {trimmed.replace('## ', '')}
          </h2>
        );
      }
      if (trimmed.startsWith('1. ') || trimmed.startsWith('* ') || trimmed.startsWith('- ')) {
        const items = trimmed.split('\n');
        return (
          <ul key={index} className="list-disc pl-6 space-y-2 text-xs md:text-sm text-slate-650 dark:text-slate-400 my-4 text-left">
            {items.map((item, itemIdx) => {
              const cleanedItem = item.replace(/^(\d+\.\s*|\*\s*|-\s*)/, '');
              // Check for bold text formatting in item e.g. **Text**
              if (cleanedItem.includes('**')) {
                const parts = cleanedItem.split('**');
                return (
                  <li key={itemIdx}>
                    {parts.map((part, pIdx) => pIdx % 2 === 1 ? <strong key={pIdx} className="text-slate-900 dark:text-white font-bold">{part}</strong> : part)}
                  </li>
                );
              }
              return <li key={itemIdx}>{cleanedItem}</li>;
            })}
          </ul>
        );
      }
      
      // Inline bold parsing for general paragraph text
      if (trimmed.includes('**')) {
        const parts = trimmed.split('**');
        return (
          <p key={index} className="text-xs md:text-sm text-slate-650 dark:text-slate-400 leading-relaxed mb-4 text-left">
            {parts.map((part, pIdx) => pIdx % 2 === 1 ? <strong key={pIdx} className="text-slate-900 dark:text-white font-bold">{part}</strong> : part)}
          </p>
        );
      }

      return (
        <p key={index} className="text-xs md:text-sm text-slate-650 dark:text-slate-400 leading-relaxed mb-4 text-left">
          {trimmed}
        </p>
      );
    });
  };

  return (
    <div className="relative w-full overflow-hidden bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 transition-colors pt-24 pb-20">
      <SEO 
        title={`${post.title} | CoreBuild Solutions Blog`}
        description={post.summary}
        keywords={post.tags}
        image={post.image}
        type="article"
        schema={[blogPostingSchema, breadcrumbSchema]}
      />

      {/* Background blobs */}
      <div className="liquid-bg">
        <div className="liquid-blob top-10 left-1/3 w-96 h-96 bg-blue-500/10 dark:bg-blue-600/10 blur-[120px] pointer-events-none" />
        <div className="liquid-blob bottom-20 left-10 w-80 h-80 bg-indigo-500/5 dark:bg-indigo-600/5 blur-[100px] pointer-events-none" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-left">
        
        {/* Back Link */}
        <Link 
          to="/blog"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 hover:text-blue-500 transition-colors mb-12 cursor-pointer"
        >
          <ArrowLeft size={14} /> Back to Insights Directory
        </Link>

        {/* ==========================================
            ARTICLE HEADER
           ========================================== */}
        <article className="flex flex-col gap-6">
          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">
            <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/20 rounded-md text-blue-600 dark:text-blue-400 font-medium">
              {post.category}
            </span>
            <span>&bull;</span>
            <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
            <span>&bull;</span>
            <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
          </div>

          <h1 className="font-heading text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            {post.title}
          </h1>

          {/* Author Block */}
          <div className="flex items-center gap-3 mt-2 border-b border-slate-200 dark:border-slate-900 pb-8">
            <div className="w-10 h-10 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-600 flex items-center justify-center">
              <User size={16} />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white block">
                {post.author}
              </span>
              <span className="text-[10px] text-slate-400 uppercase tracking-widest mt-0.5">
                CoreBuild Engineering Team
              </span>
            </div>
          </div>

          {/* Featured Header Image */}
          <div className="rounded-3xl overflow-hidden aspect-[16/9] bg-slate-900 my-8 border border-slate-200 dark:border-slate-800 shadow-xl">
            <img
              src={post.image}
              alt={`Engineering Architecture Schematic - ${post.title}`}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Core Content */}
          <div className="prose prose-slate dark:prose-invert max-w-none mb-16">
            {renderContentParagraphs(post.content)}
          </div>
        </article>

        {/* Divider */}
        <div className="h-[1px] bg-slate-200 dark:bg-slate-900 w-full my-12" />

        {/* ==========================================
            RELATED ARTICLES
           ========================================== */}
        {relatedPosts.length > 0 && (
          <div className="flex flex-col gap-8">
            <h2 className="font-heading text-xs font-semibold uppercase tracking-wider text-slate-400">
              Related Insights Blueprints
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {relatedPosts.map(related => (
                <div
                  key={related.id}
                  onClick={() => navigate(`/blog/${related.id}`)}
                  className="glass-card rounded-2xl p-5 border border-slate-200 dark:border-slate-900 hover:border-blue-500/20 cursor-pointer flex flex-col justify-between group"
                >
                  <div className="flex flex-col gap-3">
                    <span className="text-[9px] font-bold uppercase tracking-widest text-blue-500">
                      {related.category}
                    </span>
                    <h3 className="font-heading text-base font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-500 transition-colors">
                      {related.title}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                      {related.summary}
                    </p>
                  </div>

                  <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-blue-650 dark:text-blue-400 mt-4 group-hover:translate-x-0.5 transition-transform">
                    Inspect Guide <ArrowUpRight size={10} />
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
