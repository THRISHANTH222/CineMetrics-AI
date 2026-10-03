import React, { useState } from 'react';
import { SlideData } from '../types/presentation';
import { X, Layers, Check, FileDown } from 'lucide-react';

interface SlideGridModalProps {
  slides: SlideData[];
  currentSlide: number;
  isOpen: boolean;
  onSelectSlide: (id: number) => void;
  onClose: () => void;
  onExportPdf?: () => void;
}

export const SlideGridModal: React.FC<SlideGridModalProps> = ({
  slides,
  currentSlide,
  isOpen,
  onSelectSlide,
  onClose,
  onExportPdf
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  if (!isOpen) return null;

  const categories = ['All', ...Array.from(new Set(slides.map((s) => s.category)))];

  const filteredSlides = selectedCategory === 'All'
    ? slides
    : slides.filter((s) => s.category === selectedCategory);

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 md:p-6 no-print">
      <div className="bg-neutral-950 border border-neutral-800 rounded-2xl w-full max-w-5xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-neutral-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Layers className="w-5 h-5 text-amber-400" />
            <h3 className="text-base font-semibold text-white">
              Slide Deck Overview ({slides.length} Slides)
            </h3>
          </div>

          <div className="flex items-center gap-2">
            {onExportPdf && (
              <button
                onClick={() => {
                  onClose();
                  onExportPdf();
                }}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-400 hover:bg-amber-300 text-neutral-950 text-xs font-bold rounded-lg transition-colors shadow-sm"
              >
                <FileDown className="w-3.5 h-3.5" />
                <span>Export PDF</span>
              </button>
            )}

            <button
              onClick={onClose}
              aria-label="Close Grid"
              className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-900 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="px-5 py-2.5 border-b border-neutral-800/80 bg-neutral-900/40 flex items-center gap-1.5 overflow-x-auto text-xs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 rounded-md transition-colors whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-amber-400 text-neutral-950 font-semibold'
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid of Slide Cards */}
        <div className="p-5 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {filteredSlides.map((slide) => {
            const isCurrent = slide.id === currentSlide;
            return (
              <button
                key={slide.id}
                onClick={() => {
                  onSelectSlide(slide.id);
                  onClose();
                }}
                className={`p-4 rounded-xl border text-left flex flex-col justify-between transition-all ${
                  isCurrent
                    ? 'border-amber-400 bg-amber-500/10 shadow-lg shadow-amber-500/10 ring-1 ring-amber-400'
                    : 'border-neutral-800 bg-neutral-900/60 hover:border-neutral-700 hover:bg-neutral-900'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-neutral-400 mb-1.5">
                    <span className="font-mono text-amber-400 font-semibold">
                      Slide {String(slide.id).padStart(2, '0')}
                    </span>
                    <span className="text-[11px] font-medium text-neutral-400">
                      {slide.category}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-white line-clamp-1">
                    {slide.title}
                  </h4>
                  <p className="text-xs text-neutral-400 mt-1 line-clamp-2 leading-relaxed">
                    {slide.subtitle}
                  </p>
                </div>

                <div className="mt-3 pt-2.5 border-t border-neutral-800/80 flex items-center justify-between text-[11px] text-neutral-500">
                  <span className="truncate pr-2 font-mono text-[10px] text-neutral-400">
                    {slide.kicker}
                  </span>
                  {isCurrent && (
                    <span className="text-amber-400 font-medium flex items-center gap-1 shrink-0">
                      <Check className="w-3 h-3" /> Active
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
