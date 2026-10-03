import React from 'react';
import { SlideData } from '../types/presentation';
import { X, Mic, Lightbulb, HelpCircle, MessageSquare } from 'lucide-react';

interface SpeakerNotesDrawerProps {
  slide: SlideData;
  isOpen: boolean;
  onClose: () => void;
}

export const SpeakerNotesDrawer: React.FC<SpeakerNotesDrawerProps> = ({
  slide,
  isOpen,
  onClose
}) => {
  if (!isOpen) return null;

  return (
    <aside className="fixed bottom-0 right-0 z-50 w-full sm:w-[440px] max-h-[85vh] sm:max-h-[640px] bg-neutral-950/95 backdrop-blur-xl border-t sm:border-l sm:border-t-0 border-neutral-800 shadow-2xl p-5 text-neutral-200 overflow-y-auto no-print rounded-t-2xl sm:rounded-tl-2xl sm:rounded-tr-none">
      {/* Top Header */}
      <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
        <div className="flex items-center gap-2">
          <Mic className="w-4 h-4 text-amber-400" />
          <h4 className="text-sm font-semibold text-white">
            Presenter Notes & Lecture Guide
          </h4>
        </div>
        <button
          onClick={onClose}
          aria-label="Close Notes"
          className="p-1 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-900 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="mt-2 text-xs text-neutral-400 font-mono">
        Slide {slide.id}: {slide.title}
      </div>

      {/* Main Spoken Script */}
      <div className="mt-4 space-y-2">
        <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-400">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Spoken Script (What to Say):</span>
        </div>
        <p className="text-xs text-neutral-200 leading-relaxed bg-neutral-900/90 p-3.5 rounded-lg border border-neutral-800/80">
          "{slide.speakerNotes.presentationScript}"
        </p>
      </div>

      {/* Classroom Engagement Tip */}
      <div className="mt-4 space-y-2">
        <div className="flex items-center gap-1.5 text-xs font-semibold text-sky-400">
          <Lightbulb className="w-3.5 h-3.5" />
          <span>Classroom Engagement Tip:</span>
        </div>
        <p className="text-xs text-neutral-300 leading-relaxed bg-sky-950/20 p-3 rounded-lg border border-sky-500/20">
          {slide.speakerNotes.classroomTip}
        </p>
      </div>

      {/* Anticipated Student Q&A */}
      <div className="mt-4 space-y-2">
        <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Student FAQ & Exact Answer:</span>
        </div>
        <div className="bg-neutral-900/90 p-3 rounded-lg border border-neutral-800/80 space-y-1.5 text-xs">
          <div className="font-semibold text-neutral-200">
            Q: "{slide.speakerNotes.commonStudentQuestion}"
          </div>
          <p className="text-neutral-400 leading-relaxed pt-1 border-t border-neutral-800 text-[11px]">
            <strong className="text-emerald-400">A:</strong> {slide.speakerNotes.answer}
          </p>
        </div>
      </div>
    </aside>
  );
};
