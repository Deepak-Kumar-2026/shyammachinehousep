import React from 'react';
import { Youtube, Instagram, ExternalLink, ShieldCheck, ArrowRight , Facebook} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface YouTubeGalleryProps {
  onOpenQueryModal: (productName?: string) => void;
}

export const YouTubeGallery: React.FC<YouTubeGalleryProps> = ({ onOpenQueryModal }) => {
  return (
    <section className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-8 shadow-xs space-y-8" id="youtube-gallery-section">
      
      {/* Header Banner */}
      <div className="border-b border-slate-100 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <span className="bg-orange-600 text-white font-black text-[10px] px-2.5 py-0.5 rounded tracking-widest uppercase inline-block mb-1">
            Official Social Media Hubs
          </span>
          <h2 className="text-xl sm:text-2xl font-black uppercase text-slate-900 tracking-tight">
            Connect With SHYAM MACHINE HOUSE
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Explore live factory operations, machine demonstrations, new arrivals & export packaging on our official social channels.
          </p>
        </div>

        <button
          onClick={() => onOpenQueryModal()}
          className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-4 py-2.5 rounded-xl text-xs uppercase tracking-wider self-start sm:self-auto transition-colors shrink-0"
        >
          Send Direct Inquiry
        </button>
      </div>

      {/* Social Media Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* YOUTUBE CARD */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 border border-slate-800 shadow-xl flex flex-col justify-between relative overflow-hidden group">
          <div className="absolute -right-8 -bottom-8 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
            <Youtube className="w-56 h-56 text-red-600" />
          </div>

          <div className="space-y-4 z-10">
            <div className="flex items-center justify-between">
              <span className="bg-red-600 text-white font-black text-[10px] px-2.5 py-1 rounded tracking-widest uppercase flex items-center gap-1.5">
                <Youtube className="w-4 h-4 fill-white" />
                YouTube Channel
              </span>
              <span className="text-slate-400 font-mono text-xs font-semibold">
                {COMPANY_INFO.youtubeHandle}
              </span>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-black uppercase tracking-tight text-white">
                Visit our Youtube channel for more videos
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                Watch full machinery operating videos, precision turning performance, heavy radial drill demonstrations, and factory tours.
              </p>
            </div>

            <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800 font-mono text-xs text-red-400 break-all flex items-center justify-between gap-2">
              <span className="truncate">https://www.youtube.com/@shyammachinehouse5758</span>
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            </div>
          </div>

          <div className="pt-6 z-10">
            <a
              href="https://www.youtube.com/@shyammachinehouse5758"
              target="_blank"
              rel="noreferrer"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-extrabold py-3.5 px-5 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-red-950 transition-all hover:scale-[1.01]"
              id="youtube-channel-link-btn"
            >
              <Youtube className="w-4 h-4 fill-white" />
              <span>Visit Youtube Channel</span>
              <ExternalLink className="w-4 h-4 text-red-200" />
            </a>
          </div>
        </div>

        {/* INSTAGRAM CARD */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-pink-950 text-white rounded-2xl p-6 border border-slate-800 shadow-xl flex flex-col justify-between relative overflow-hidden group">
          <div className="absolute -right-8 -bottom-8 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
            <Instagram className="w-56 h-56 text-pink-500" />
          </div>

          <div className="space-y-4 z-10">
            <div className="flex items-center justify-between">
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 text-white font-black text-[10px] px-2.5 py-1 rounded tracking-widest uppercase flex items-center gap-1.5">
                <Instagram className="w-4 h-4" />
                Instagram Profile
              </span>
              <span className="text-slate-400 font-mono text-xs font-semibold">
                {COMPANY_INFO.instagramHandle}
              </span>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-black uppercase tracking-tight text-white">
                Follow us on Instagram for daily updates
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                Stay updated with behind-the-scenes factory shorts, machine dispatch photos, customer deliveries, and stock announcements.
              </p>
            </div>

            <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800 font-mono text-xs text-pink-400 break-all flex items-center justify-between gap-2">
              <span className="truncate">https://www.instagram.com/shyammachinehouse</span>
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            </div>
          </div>

          <div className="pt-6 z-10">
            <a
              href="https://www.instagram.com/shyammachinehouse"
              target="_blank"
              rel="noreferrer"
              className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 hover:opacity-95 text-white font-extrabold py-3.5 px-5 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-pink-950 transition-all hover:scale-[1.01]"
              id="instagram-profile-link-btn"
            >
              <Instagram className="w-4 h-4" />
              <span>Visit Instagram Profile</span>
              <ExternalLink className="w-4 h-4 text-pink-200" />
            </a>
          </div>
        </div>

        {/* facebook card */}


<div className="bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950 text-white rounded-2xl p-6 border border-slate-800 shadow-xl flex flex-col justify-between relative overflow-hidden group">
  <div className="absolute -right-8 -bottom-8 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
    <Facebook className="w-56 h-56 text-blue-500" />
  </div>

  <div className="space-y-4 z-10">
    <div className="flex items-center justify-between">
      <span className="bg-[#1877F2] text-white font-black text-[10px] px-2.5 py-1 rounded tracking-widest uppercase flex items-center gap-1.5">
        <Facebook className="w-4 h-4" />
        Facebook Profile
      </span>

      <span className="text-slate-400 font-mono text-xs font-semibold">
        {COMPANY_INFO.facebookHandle}
      </span>
    </div>

    <div className="space-y-2">
      <h3 className="text-xl font-black uppercase tracking-tight text-white">
        Follow us on Facebook for daily updates
      </h3>

      <p className="text-xs text-slate-300 leading-relaxed font-normal">
        Stay updated with factory news, machine launches, product updates,
        customer deliveries, and latest industrial machinery announcements.
      </p>
    </div>

    <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800 font-mono text-xs text-blue-400 break-all flex items-center justify-between gap-2">
      <span className="truncate">
        https://www.facebook.com/people/Yash-Sharma/pfbid0HwjAKwMxXEKEuzCjzr2FqKSqf4YwMVKsvRb4ahTBZprAmjLgAh38aGDRMyFnzUZNl/
      </span>

      <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
    </div>
  </div>

  <div className="pt-6 z-10">
    <a
      href="https://www.facebook.com/people/Yash-Sharma/pfbid0HwjAKwMxXEKEuzCjzr2FqKSqf4YwMVKsvRb4ahTBZprAmjLgAh38aGDRMyFnzUZNl/?rdid=jJPlPpLRVfiBhTvK&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19DWpooEKJ%2F"
      target="_blank"
      rel="noreferrer"
      className="w-full bg-[#1877F2] hover:bg-[#166FE5] text-white font-extrabold py-3.5 px-5 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-blue-950 transition-all hover:scale-[1.01]"
      id="facebook-profile-link-btn"
    >
      <Facebook className="w-4 h-4" />
      <span>Visit Facebook Profile</span>
      <ExternalLink className="w-4 h-4 text-blue-200" />
    </a>
  </div>
</div>

      </div>

      {/* Quick Access Info Bar */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
            <ArrowRight className="w-5 h-5 text-orange-600" />
          </div>
          <div>
            <h4 className="text-xs font-black uppercase text-slate-900">
              Need Instant Quotation or Video Demo on WhatsApp?
            </h4>
            <p className="text-[11px] text-slate-500">
              Get direct video walkthroughs and technical specifications sent to your phone.
            </p>
          </div>
        </div>

        <a
          href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent('Hello SHYAM MACHINE HOUSE, please send me machine videos and price catalog.')}`}
          target="_blank"
          rel="noreferrer"
          className="bg-green-600 hover:bg-green-700 text-white font-bold px-4 py-2.5 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shrink-0"
        >
          <span>Request Video on WhatsApp</span>
        </a>
      </div>

    </section>
  );
};
