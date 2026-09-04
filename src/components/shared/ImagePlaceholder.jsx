// src/components/shared/ImagePlaceholder.jsx
import React from 'react';
import { Image, Play } from 'lucide-react';

const ImagePlaceholder = ({
  src,
  alt = 'Placeholder image',
  className = '',
  aspectRatio = 'aspect-[16/10]',
  label = 'Image Placeholder',
  badgeText = null,
  badgeBg = 'bg-teal',
  hasPlayButton = false,
  duration = null,
  heightClass = '',
}) => {
  // If a real image src is provided by the user later, render the img tag
  if (src) {
    return (
      <div className={`relative overflow-hidden ${aspectRatio} ${heightClass} ${className}`}>
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        {badgeText && (
          <span
            className={`absolute top-3 left-3 px-2.5 py-1 text-xs font-semibold text-white rounded-md shadow-sm z-10 ${badgeBg}`}
          >
            {badgeText}
          </span>
        )}
        {hasPlayButton && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors">
            <div className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white shadow-lg transform group-hover:scale-110 transition-transform">
              <Play className="w-5 h-5 fill-white ml-0.5" />
            </div>
          </div>
        )}
        {duration && (
          <span className="absolute bottom-2 right-2 px-2 py-0.5 bg-black/80 text-white text-[11px] font-medium rounded z-10">
            {duration}
          </span>
        )}
      </div>
    );
  }

  // Otherwise, render a pixel-perfect aesthetic placeholder block
  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300 flex flex-col items-center justify-center border border-slate-200/80 ${aspectRatio} ${heightClass} ${className}`}
    >
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#0d9488_1px,transparent_1px)] [background-size:16px_16px]" />

      {/* Badge (e.g., Guide, Toolkit, Directory, Video Series) */}
      {badgeText && (
        <span
          className={`absolute top-3 left-3 px-2.5 py-1 text-xs font-bold text-white rounded-md shadow-sm z-10 ${badgeBg}`}
        >
          {badgeText}
        </span>
      )}

      {/* Play Button for video placeholders */}
      {hasPlayButton ? (
        <div className="relative z-10 flex flex-col items-center gap-1 group-hover:scale-105 transition-transform duration-300">
          <div className="w-11 h-11 rounded-full bg-slate-900/60 backdrop-blur-md flex items-center justify-center text-white shadow-lg border border-white/20">
            <Play className="w-5 h-5 fill-white ml-0.5" />
          </div>
        </div>
      ) : (
        <div className="relative z-10 flex flex-col items-center gap-1 text-slate-400">
          <Image className="w-8 h-8 opacity-60" />
          {label && <span className="text-[11px] font-medium text-slate-500/80 tracking-wide uppercase">{label}</span>}
        </div>
      )}

      {/* Video duration tag */}
      {duration && (
        <span className="absolute bottom-2 right-2 px-2 py-0.5 bg-slate-900/80 text-white text-[11px] font-mono rounded z-10">
          {duration}
        </span>
      )}
    </div>
  );
};

export default ImagePlaceholder;
