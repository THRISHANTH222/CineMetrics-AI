export interface SlideCitation {
  title: string;
  source: string;
  year?: string;
  url?: string;
  note?: string;
}

export interface SlideData {
  id: number;
  slug: string;
  category: string;
  title: string;
  kicker: string;
  subtitle: string;
  keyTakeaway: string;
  bulletPoints: {
    heading: string;
    detail: string;
    highlight?: string;
  }[];
  speakerNotes: {
    presentationScript: string;
    classroomTip: string;
    commonStudentQuestion: string;
    answer: string;
  };
  componentType?: 'title' | 'general_ratings' | 'fast_release' | 'data_sampling' | 'bayesian_math' | 'starmeter' | 'nlp_lexicon' | 'classical_ml' | 'transformers' | 'ai_pipeline' | 'reality_vs_ai' | 'challenges' | 'conclusions' | 'references' | 'interactive_lab';
}
