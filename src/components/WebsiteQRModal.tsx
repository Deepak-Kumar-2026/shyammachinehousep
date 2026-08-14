import React, { useState, useRef } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import { 
  QrCode, 
  X, 
  Download, 
  Copy, 
  Check, 
  Globe, 
  Smartphone, 
  Share2, 
  ExternalLink,
  ShieldCheck,
  Building2
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface WebsiteQRModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WebsiteQRModal: React.FC<WebsiteQRModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const qrRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  // Use standard window location or shared app URL fallback
  const websiteUrl = typeof window !== 'undefined' ? window.location.href : 'https://ais-pre-rcqzho4sdfvz5kga6bq74t-339908247216.asia-southeast1.run.app';

  const handleCopyLink = () => {
    navigator.clipboard.writeText(websiteUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadQR = () => {
    if (!qrRef.current) return;
    const canvas = qrRef.current.querySelector('canvas');
    if (!canvas) return;

    // Create a styled canvas with header branding and padding for high quality download
    const exportCanvas = document.createElement('canvas');
    const ctx = exportCanvas.getContext('2d');
    if (!ctx) return;

    const qrSize = canvas.width;
    const padding = 40;
    const headerHeight = 110;
    const footerHeight = 70;

    exportCanvas.width = qrSize + padding * 2;
    exportCanvas.height = qrSize + padding * 2 + headerHeight + footerHeight;

    // Background
    ctx.fillStyle = '#0f172a'; // slate-900
    ctx.fillRect(0, 0, exportCanvas.width, exportCanvas.height);

    // Header Title
    ctx.fillStyle = '#ea580c'; // orange-600
    ctx.font = 'bold 22px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('SHYAM MACHINE HOUSE', exportCanvas.width / 2, 45);

    ctx.fillStyle = '#94a3b8'; // slate-400
    ctx.font = '13px sans-serif';
    ctx.fillText('Official Website QR Code | New Delhi, India', exportCanvas.width / 2, 70);

    ctx.fillStyle = '#22c55e'; // green-500
    ctx.font = 'bold 12px sans-serif';
    ctx.fillText('★ Grade-1 Industrial Machinery Manufacturer', exportCanvas.width / 2, 92);

    // White box container for QR code
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.roundRect(padding - 10, headerHeight + padding - 10, qrSize + 20, qrSize + 20, 16);
    ctx.fill();

    // Draw QR code canvas
    ctx.drawImage(canvas, padding, headerHeight + padding);

    // Footer Text
    ctx.fillStyle = '#f8fafc';
    ctx.font = 'bold 14px sans-serif';
    ctx.fillText('Scan to view products, catalogs & get instant quotes', exportCanvas.width / 2, exportCanvas.height - 40);

    ctx.fillStyle = '#f97316';
    ctx.font = 'bold 12px sans-serif';
    ctx.fillText(`Phone: ${COMPANY_INFO.phone} | GST: ${COMPANY_INFO.gstin}`, exportCanvas.width / 2, exportCanvas.height - 20);

    // Trigger PNG download
    const imageUri = exportCanvas.toDataURL('image/png');
    const downloadLink = document.createElement('a');
    downloadLink.href = imageUri;
    downloadLink.download = 'Shyam_Machine_House_Official_Website_QR.png';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-slate-900 text-white border border-slate-800 rounded-3xl max-w-md w-full shadow-2xl overflow-hidden relative my-auto">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-orange-600/20 border border-orange-500/40 flex items-center justify-center text-orange-400">
              <QrCode className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-black text-base text-white uppercase tracking-tight flex items-center gap-1.5">
                <span>Scan & Share Website</span>
              </h3>
              <p className="text-[11px] text-slate-400 font-medium">SHYAM MACHINE HOUSE QR Code</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          {/* Main QR Code Canvas Box */}
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 text-center space-y-4">
            <div className="inline-block bg-white p-4 rounded-2xl shadow-xl relative" ref={qrRef}>
              <QRCodeCanvas
                value={websiteUrl}
                size={220}
                level="H"
                includeMargin={false}
                imageSettings={{
                  src: COMPANY_INFO.logoUrl,
                  x: undefined,
                  y: undefined,
                  height: 38,
                  width: 38,
                  excavate: true,
                }}
              />
            </div>

            <div>
              <span className="bg-orange-500/20 border border-orange-500/30 text-orange-400 text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1">
                <Globe className="w-3 h-3" />
                <span>Live Website Direct Scan</span>
              </span>
              <p className="text-xs font-semibold text-slate-300 mt-2">
                Point any smartphone camera or WhatsApp scanner to open the website instantly.
              </p>
            </div>
          </div>

          {/* Action Buttons: Download & Copy Link */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button
              onClick={handleDownloadQR}
              className="w-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 text-white font-extrabold text-xs py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-lg transition-all active:scale-95 uppercase tracking-wider"
              id="download-website-qr-btn"
            >
              <Download className="w-4 h-4" />
              <span>Download QR (PNG)</span>
            </button>

            <button
              onClick={handleCopyLink}
              className="w-full bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs py-3 px-4 rounded-xl flex items-center justify-center gap-2 border border-slate-700 transition-all active:scale-95"
              id="copy-website-link-btn"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400 font-extrabold">Link Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-slate-400" />
                  <span>Copy Website URL</span>
                </>
              )}
            </button>
          </div>

          {/* Instructions Box */}
          <div className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-3.5 space-y-2 text-xs">
            <div className="flex items-center gap-2 text-orange-400 font-bold">
              <Smartphone className="w-4 h-4 shrink-0" />
              <span>How to use this QR Code:</span>
            </div>
            <ul className="text-slate-300 space-y-1.5 text-[11px] list-disc list-inside font-medium pl-1">
              <li>Open Smartphone Camera app or WhatsApp scanner.</li>
              <li>Scan the QR Code on screen to browse machines & download PDF catalogs.</li>
              <li>Download PNG image to print on paper quotations, business cards, or customer invoices.</li>
            </ul>
          </div>

          {/* Verification Badge */}
          <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-slate-800">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Verified Manufacturer: {COMPANY_INFO.gstin}</span>
            </div>
            <a
              href={websiteUrl}
              target="_blank"
              rel="noreferrer"
              className="text-orange-400 hover:underline flex items-center gap-1 font-bold"
            >
              <span>Visit Site</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
