import React, { useState, useRef } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import { QrCode, Download, Copy, Check, Globe, Smartphone, ShieldCheck, ExternalLink } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface WebsiteQRWidgetProps {
  onExpandModal?: () => void;
  compact?: boolean;
}

export const WebsiteQRWidget: React.FC<WebsiteQRWidgetProps> = ({ onExpandModal, compact = false }) => {
  const [copied, setCopied] = useState(false);
  const qrRef = useRef<HTMLDivElement>(null);

  const websiteUrl = typeof window !== 'undefined' ? window.location.href : 'https://ais-pre-rcqzho4sdfvz5kga6bq74t-339908247216.asia-southeast1.run.app';

  const handleCopyLink = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(websiteUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadQR = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!qrRef.current) return;
    const canvas = qrRef.current.querySelector('canvas');
    if (!canvas) return;

    const exportCanvas = document.createElement('canvas');
    const ctx = exportCanvas.getContext('2d');
    if (!ctx) return;

    const qrSize = canvas.width;
    const padding = 30;
    const headerHeight = 100;
    const footerHeight = 60;

    exportCanvas.width = qrSize + padding * 2;
    exportCanvas.height = qrSize + padding * 2 + headerHeight + footerHeight;

    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 0, exportCanvas.width, exportCanvas.height);

    ctx.fillStyle = '#ea580c';
    ctx.font = 'bold 20px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('SHYAM MACHINE HOUSE', exportCanvas.width / 2, 40);

    ctx.fillStyle = '#94a3b8';
    ctx.font = '12px sans-serif';
    ctx.fillText('Official Website QR Code | New Delhi, India', exportCanvas.width / 2, 62);

    ctx.fillStyle = '#22c55e';
    ctx.font = 'bold 11px sans-serif';
    ctx.fillText('★ Grade-1 Industrial Machinery Manufacturer', exportCanvas.width / 2, 82);

    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.roundRect(padding - 8, headerHeight + padding - 8, qrSize + 16, qrSize + 16, 12);
    ctx.fill();

    ctx.drawImage(canvas, padding, headerHeight + padding);

    ctx.fillStyle = '#f8fafc';
    ctx.font = 'bold 13px sans-serif';
    ctx.fillText('Scan to view products & get instant quotes', exportCanvas.width / 2, exportCanvas.height - 35);

    ctx.fillStyle = '#f97316';
    ctx.font = 'bold 11px sans-serif';
    ctx.fillText(`Phone: ${COMPANY_INFO.phone} | GST: ${COMPANY_INFO.gstin}`, exportCanvas.width / 2, exportCanvas.height - 18);

    const imageUri = exportCanvas.toDataURL('image/png');
    const downloadLink = document.createElement('a');
    downloadLink.href = imageUri;
    downloadLink.download = 'Shyam_Machine_House_Website_QR.png';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  if (compact) {
    return (
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-3.5 text-white space-y-3 shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <QrCode className="w-4 h-4 text-orange-400" />
            <span className="text-xs font-black uppercase text-white">Scan Website</span>
          </div>
          <span className="bg-emerald-500/20 text-emerald-400 text-[9px] font-bold px-1.5 py-0.5 rounded uppercase">
            Live QR
          </span>
        </div>

        <div className="flex items-center gap-3">
          <div className="bg-white p-2 rounded-xl shrink-0 shadow-md" ref={qrRef}>
            <QRCodeCanvas
              value={websiteUrl}
              size={90}
              level="M"
              includeMargin={false}
            />
          </div>
          <div className="space-y-1.5 text-[11px] text-slate-300">
            <p className="font-semibold text-white leading-tight">
              Scan with phone camera to open website live
            </p>
            <div className="flex flex-col gap-1">
              <button
                onClick={handleDownloadQR}
                className="inline-flex items-center gap-1 text-orange-400 hover:text-orange-300 font-bold text-[10px] uppercase tracking-wider"
              >
                <Download className="w-3 h-3" />
                <span>Download Image</span>
              </button>
              {onExpandModal && (
                <button
                  onClick={onExpandModal}
                  className="inline-flex items-center gap-1 text-slate-400 hover:text-white font-bold text-[10px] uppercase tracking-wider"
                >
                  <Globe className="w-3 h-3" />
                  <span>Full Screen QR</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white rounded-2xl border border-slate-800 p-4 space-y-3.5 shadow-xl">
      <div className="flex items-center justify-between pb-2 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-orange-600/20 border border-orange-500/30 flex items-center justify-center text-orange-400">
            <QrCode className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-xs font-black uppercase tracking-wider text-white">
              Website QR Code Scanner
            </h3>
            <p className="text-[10px] text-slate-400">Scan using phone camera or WhatsApp</p>
          </div>
        </div>
        <span className="bg-orange-500/20 text-orange-400 text-[10px] font-black px-2 py-0.5 rounded-full border border-orange-500/30 uppercase tracking-widest">
          LIVE SCANNER
        </span>
      </div>

      {/* Center QR Code Display */}
      <div className="flex flex-col items-center justify-center bg-slate-950 p-3.5 rounded-xl border border-slate-800/80 space-y-2.5">
        <div className="bg-white p-3 rounded-xl shadow-2xl relative" ref={qrRef}>
          <QRCodeCanvas
            value={websiteUrl}
            size={145}
            level="H"
            includeMargin={false}
            imageSettings={{
              src: COMPANY_INFO.logoUrl,
              x: undefined,
              y: undefined,
              height: 26,
              width: 26,
              excavate: true,
            }}
          />
        </div>
        <div className="text-center space-y-0.5">
          <span className="text-[10px] font-extrabold text-orange-400 uppercase tracking-wider flex items-center justify-center gap-1">
            <Globe className="w-3 h-3" />
            <span>shyam-machine-house.com</span>
          </span>
          <p className="text-[10px] text-slate-400 font-medium">
            Scan to inspect specs, prices & catalogs on mobile
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-2 gap-2">
        <button
          onClick={handleDownloadQR}
          className="w-full bg-orange-600 hover:bg-orange-500 text-white font-extrabold py-2 px-3 rounded-lg text-[11px] uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 shadow-md active:scale-95"
          id="widget-download-qr-btn"
        >
          <Download className="w-3.5 h-3.5" />
          <span>Save PNG</span>
        </button>

        <button
          onClick={handleCopyLink}
          className="w-full bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold py-2 px-3 rounded-lg text-[11px] border border-slate-700 transition-all flex items-center justify-center gap-1.5 active:scale-95"
          id="widget-copy-link-btn"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 text-slate-400" />
              <span>Copy URL</span>
            </>
          )}
        </button>
      </div>

      {onExpandModal && (
        <button
          onClick={onExpandModal}
          className="w-full text-center text-[11px] font-bold text-slate-400 hover:text-white transition-colors py-1 block uppercase tracking-wider"
        >
          Click to view large format QR modal →
        </button>
      )}
    </div>
  );
};
