import React, { useState } from 'react';
import { BookOpen, Calendar, Clock, User, Tag, ArrowRight, X, Zap, MessageSquare, Share2 } from 'lucide-react';
import { BLOG_POSTS, COMPANY_INFO } from '../data/companyData';
import { BlogPost } from '../types';

interface BlogsSectionProps {
  onOpenQueryModal: (productName?: string) => void;
}

export const BlogsSection: React.FC<BlogsSectionProps> = ({ onOpenQueryModal }) => {
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);
  const [searchFilter, setSearchFilter] = useState<string>('');

  const filteredBlogs = BLOG_POSTS.filter(blog => 
    blog.title.toLowerCase().includes(searchFilter.toLowerCase()) ||
    blog.summary.toLowerCase().includes(searchFilter.toLowerCase()) ||
    blog.tags.some(tag => tag.toLowerCase().includes(searchFilter.toLowerCase()))
  );

  return (
    <section className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs space-y-6" id="blogs-section">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2">
            <span className="bg-orange-600 text-white font-black text-[10px] px-2.5 py-0.5 rounded tracking-widest uppercase flex items-center gap-1">
              <BookOpen className="w-3.5 h-3.5" />
              Technical Articles & Insights
            </span>
            <span className="text-slate-500 font-mono text-xs">2026 Industrial Edition</span>
          </div>
          <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900 mt-1">
            SHYAM MACHINE HOUSE Engineering Blogs
          </h2>
          <p className="text-xs text-slate-600 mt-0.5 max-w-2xl">
            In-depth guides on lathe selection, maintenance checklists, power press comparison, and international machinery export compliance.
          </p>
        </div>

        {/* Filter Input */}
        <div className="w-full md:w-64">
          <input
            type="text"
            placeholder="Search blogs or tags..."
            value={searchFilter}
            onChange={(e) => setSearchFilter(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-xs px-3 py-2 rounded-lg focus:outline-none focus:border-orange-500 font-medium"
          />
        </div>
      </div>

      {/* Blogs Grid - 2 items aligned in clean grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredBlogs.map((blog) => (
          <article
            key={blog.id}
            className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden hover:border-orange-300 transition-all flex flex-col justify-between group shadow-xs cursor-pointer"
            onClick={() => setSelectedBlog(blog)}
            id={`blog-card-${blog.id}`}
          >
            {/* Image Header */}
            <div className="relative aspect-16/9 bg-slate-200 overflow-hidden">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 left-3 bg-slate-900/90 text-orange-400 text-[10px] font-black px-2.5 py-1 rounded-md uppercase tracking-wider border border-slate-800">
                {blog.category}
              </div>
              <div className="absolute bottom-3 right-3 bg-slate-900/80 text-white text-[10px] font-mono px-2 py-0.5 rounded flex items-center gap-1">
                <Clock className="w-3 h-3 text-orange-400" />
                {blog.readTime}
              </div>
            </div>

            {/* Content Body */}
            <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-[11px] text-slate-500 font-medium">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-orange-600" />
                    {blog.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1 truncate max-w-[180px]">
                    <User className="w-3.5 h-3.5 text-slate-400" />
                    {blog.author}
                  </span>
                </div>

                <h3 className="text-base font-black text-slate-900 uppercase tracking-tight group-hover:text-orange-600 transition-colors leading-snug">
                  {blog.title}
                </h3>

                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                  {blog.summary}
                </p>
              </div>

              {/* Tags & Read More Button */}
              <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between gap-2">
                <div className="flex flex-wrap gap-1 text-[10px] font-mono">
                  {blog.tags.slice(0, 2).map((tag, idx) => (
                    <span key={idx} className="bg-slate-200 text-slate-700 px-2 py-0.5 rounded">
                      #{tag}
                    </span>
                  ))}
                </div>

                <span className="text-xs font-bold text-orange-600 group-hover:translate-x-1 transition-transform flex items-center gap-1 uppercase tracking-wider shrink-0">
                  Read Article <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>

          </article>
        ))}
      </div>

      {/* Blog Article Reader Modal */}
      {selectedBlog && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6" id="blog-modal-overlay">
          <div className="bg-white border border-slate-200 text-slate-900 w-full max-w-3xl rounded-2xl shadow-2xl overflow-hidden relative animate-in fade-in zoom-in-95 duration-200 my-auto">
            
            {/* Modal Header */}
            <div className="bg-slate-900 text-white p-4 sm:p-5 flex items-center justify-between border-b border-slate-800">
              <div>
                <span className="bg-orange-600 text-white text-[10px] font-black px-2 py-0.5 rounded tracking-widest uppercase">
                  {selectedBlog.category}
                </span>
                <p className="text-[10px] text-slate-400 mt-0.5">SHYAM MACHINE HOUSE Technical Insights</p>
              </div>

              <button
                onClick={() => setSelectedBlog(null)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                id="close-blog-modal-btn"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-5 sm:p-6 space-y-5 max-h-[80vh] overflow-y-auto">
              <div>
                <h1 className="text-xl sm:text-2xl font-black uppercase text-slate-900 tracking-tight leading-tight">
                  {selectedBlog.title}
                </h1>

                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 font-medium mt-2 pt-2 border-t border-slate-100">
                  <span className="flex items-center gap-1 text-slate-700 font-semibold">
                    <User className="w-3.5 h-3.5 text-orange-600" />
                    {selectedBlog.author}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    {selectedBlog.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    {selectedBlog.readTime}
                  </span>
                </div>
              </div>

              {/* Cover Image */}
              <div className="aspect-16/9 bg-slate-100 rounded-xl overflow-hidden border border-slate-200">
                <img
                  src={selectedBlog.image}
                  alt={selectedBlog.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Main Article Prose Content */}
              <div className="prose prose-slate max-w-none text-xs sm:text-sm leading-relaxed text-slate-700 space-y-3 font-normal">
                {selectedBlog.content.split('\n\n').map((paragraph, idx) => {
                  if (paragraph.startsWith('### ')) {
                    return (
                      <h3 key={idx} className="text-sm sm:text-base font-black text-slate-900 uppercase tracking-tight mt-4 pt-2 border-b border-slate-100">
                        {paragraph.replace('### ', '')}
                      </h3>
                    );
                  }
                  return (
                    <p key={idx} className="leading-relaxed">
                      {paragraph}
                    </p>
                  );
                })}
              </div>

              {/* Tags */}
              <div className="pt-3 border-t border-slate-200 flex flex-wrap items-center gap-1.5">
                <span className="text-[10px] font-black uppercase text-slate-400 mr-1">Tags:</span>
                {selectedBlog.tags.map((tag, i) => (
                  <span key={i} className="bg-slate-100 text-slate-700 text-[10px] font-mono px-2 py-0.5 rounded border border-slate-200">
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Call to Action Bar */}
              <div className="bg-slate-900 text-white p-4 rounded-xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div>
                  <h4 className="text-xs font-bold uppercase text-orange-400">Looking for Machine Advice?</h4>
                  <p className="text-[11px] text-slate-300">Speak directly with SHYAM MACHINE HOUSE senior engineering team.</p>
                </div>

                <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto">
                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(`Hello SHYAM MACHINE HOUSE, I read your blog "${selectedBlog.title}" and want machine guidance.`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-green-600 hover:bg-green-500 text-white font-bold px-3 py-2 rounded-lg text-xs uppercase tracking-wider flex items-center gap-1 transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-white" />
                    <span>WhatsApp Us</span>
                  </a>

                  <button
                    onClick={() => {
                      setSelectedBlog(null);
                      onOpenQueryModal();
                    }}
                    className="bg-orange-600 hover:bg-orange-500 text-white font-bold px-3 py-2 rounded-lg text-xs uppercase tracking-wider flex items-center gap-1 transition-colors"
                  >
                    <Zap className="w-3.5 h-3.5" />
                    <span>Get Quote</span>
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
};
