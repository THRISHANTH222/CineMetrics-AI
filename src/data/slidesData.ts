import { SlideData, SlideCitation } from '../types/presentation';

export const SLIDES_DATA: SlideData[] = [
  {
    id: 1,
    slug: 'title-overview',
    category: 'Introduction',
    kicker: 'AI & Data Science Assignment Presentation',
    title: 'The Intelligence Behind the Screen',
    subtitle: 'Decoding IMDb Rating Mechanics, Popularity Metrics, and Modern AI Opinion Mining Pipelines',
    keyTakeaway: 'Separating official statistical weighted algorithms from proposed NLP transformer pipelines.',
    bulletPoints: [
      {
        heading: 'Rating System Foundations',
        detail: 'Why simple arithmetic averages fail and how modern platforms apply statistical weighting to combat manipulation.',
        highlight: 'Weighted Vote Averages'
      },
      {
        heading: 'The 2–3 Hour Release Window',
        detail: 'How global timezones, festival circuits, and midnight previews enable instant score calculation upon threshold fulfillment.',
        highlight: 'Volume Thresholds'
      },
      {
        heading: 'Official IMDb vs. AI Approaches',
        detail: 'IMDb uses proprietary vote-weight statistics and Bayesian inference, while AI introduces semantic aspect-based text parsing.',
        highlight: 'Bayesian vs Transformers'
      },
      {
        heading: 'STARmeter & Popularity',
        detail: 'Why "Top 1" denotes weekly search traffic and public interest, strictly distinguished from acting excellence.',
        highlight: 'Behavioral Metrics'
      }
    ],
    speakerNotes: {
      presentationScript: 'Welcome everyone. Today we are presenting a research study on how modern cinema rating ecosystems operate. We will demystify how IMDb scores pop up within 2 to 3 hours of a release, unpack the mathematics of the Top 250 list, explain what the STARmeter #1 ranking actually means, and explore how an AI system using modern transformers like BERT would process written reviews.',
      classroomTip: 'Hook the room early by asking: "How many of you check IMDb before buying a movie ticket?" Then point out that what they see is not a simple arithmetic average.',
      commonStudentQuestion: 'Does IMDb use an AI like ChatGPT or BERT to calculate movie star scores?',
      answer: 'No. IMDb explicitly uses statistical weighting of 1-10 numerical star submissions. Written reviews do not influence the headline star rating.'
    },
    componentType: 'title'
  },
  {
    id: 2,
    slug: 'general-rating-systems',
    category: 'System Architectures',
    kicker: 'Mechanism Analysis',
    title: 'How Rating & Review Systems Work',
    subtitle: 'From Primitive Arithmetic Means to Robust Defense-Weighted Aggregators',
    keyTakeaway: 'Simple arithmetic means are fragile. Production systems require statistical dampening against extreme outliers.',
    bulletPoints: [
      {
        heading: 'Binary vs. Likert vs. Aggregator',
        detail: 'Binary (Netflix thumbs) optimizes for algorithmic recommendation. Likert scales (IMDb 1–10, Amazon 1–5) capture granular sentiment. Aggregators (Rotten Tomatoes, Metacritic) normalize critic thresholds.',
        highlight: 'Architecture Spectrum'
      },
      {
        heading: 'The Vulnerability of Arithmetic Mean',
        detail: 'In a raw mean (Sum of Votes / Total Voters), a coordinated brigading attack of 10,000 "1/10" votes can easily overpower legitimate viewers and crash an authentic 8.5/10 title down to 4.2/10.',
        highlight: 'Ballot Stuffing Risk'
      },
      {
        heading: 'Statistical Dampening Strategies',
        detail: 'Platforms employ Trimmed Means (discarding top/bottom percentiles), Credibility Weighting (trust scores per user), and Bayesian Shrinkage (pulling low-sample items toward a site-wide prior).',
        highlight: 'Robust Estimators'
      },
      {
        heading: 'Dual-Track Partitioning',
        detail: 'Enterprise rating engines separate numerical votes from unstructured text reviews to ensure high computation throughput without waiting for heavy NLP passes.',
        highlight: 'Throughput Optimization'
      }
    ],
    speakerNotes: {
      presentationScript: 'When building any rating system, the biggest naive assumption is using a basic average: add the numbers and divide by users. In the real world, this gets exploited within hours by bots and review bombers. Production engines must use statistical weighting to withstand extreme polarized votes.',
      classroomTip: 'Contrast Netflix switching from 5 stars to thumbs up/down (binary recommendation) versus IMDb keeping 1-10 stars (public consensus scorecard).',
      commonStudentQuestion: 'Why doesn\'t IMDb simply delete the 1-star and 10-star votes?',
      answer: 'Deleting votes alienates genuine passionate users. Instead, weighting algorithms dampen extreme votes from untrusted or rapid-fire accounts while retaining legitimate user impact.'
    },
    componentType: 'general_ratings'
  },
  {
    id: 3,
    slug: 'fast-release-mystery',
    category: 'IMDb Mechanics',
    kicker: 'Timing & Logistics',
    title: 'The 2–3 Hour Mystery: Instant Ratings',
    subtitle: 'Why IMDb Shows Scores Minutes After Release Without "Predicting" the Future',
    keyTakeaway: 'Instant ratings are enabled by global release timezones, early access screenings, and a minimum vote threshold.',
    bulletPoints: [
      {
        heading: 'Global Timezone Progression',
        detail: 'Films do not release simultaneously across the globe. Theatrical debuts in New Zealand, Australia, India, and the UK screen up to 16 hours ahead of North American midnight showtimes.',
        highlight: 'Time Zone Lead'
      },
      {
        heading: 'Midnight Screenings & Festivals',
        detail: 'Thursday preview showings (starting at 3:00 PM or 7:00 PM), film festival world premieres (Cannes, Venice, TIFF), and industry screenings provide thousands of immediate verified viewer ratings.',
        highlight: 'Early Cohorts'
      },
      {
        heading: 'The Vote Threshold Safeguard',
        detail: 'IMDb will NOT display a public rating if vote volume is negligible. Ratings are withheld until a statistically valid minimum sample size is submitted by registered accounts.',
        highlight: 'Publication Gate'
      },
      {
        heading: 'The "Honeymoon" & Normalization Curve',
        detail: 'Initial scores are routinely skewed upward by diehard superfans or downward by ideological brigaders. Over 7 to 14 days, the weighted average naturally regresses toward public consensus.',
        highlight: 'Regression Over Time'
      }
    ],
    speakerNotes: {
      presentationScript: 'Students often ask: How can an IMDb rating appear at 2:00 AM on opening Friday when people are still in theaters? There is no mystery or AI guessing. Films screen in Sydney 16 hours earlier, Thursday previews draw massive crowds, and once the system hits its vote threshold, the weighted algorithm publishes immediately.',
      classroomTip: 'Show students the difference between opening-night score (often 8.8) and the 6-month stabilized score (often 7.6) due to the superfan honeymoon effect.',
      commonStudentQuestion: 'Does IMDb allow ratings before a movie is released anywhere?',
      answer: 'No. IMDb restricts voting until after official public screenings or festival debuts have commenced.'
    },
    componentType: 'fast_release'
  },
  {
    id: 4,
    slug: 'audience-sampling-safeguards',
    category: 'IMDb Mechanics',
    kicker: 'Data Integrity',
    title: 'Audience Sampling & Ballot Safeguards',
    subtitle: 'How IMDb Samples Votes, Weighs Regular Users, and Blocks Coordinated Stuffing',
    keyTakeaway: 'Written text reviews, Metascores, and box office do NOT affect the headline user rating.',
    bulletPoints: [
      {
        heading: 'Direct Voluntary Submissions',
        detail: 'Any registered IMDb user can log a 1 to 10 integer vote. IMDb does not conduct random stratified phone surveys; it relies on self-selected registered user submission.',
        highlight: 'Registered Voter Pool'
      },
      {
        heading: 'Written Reviews Are Excluded from Math',
        detail: 'Official IMDb Fact: Written reviews, critic Metascores, awards, and external social media buzz do NOT factor into the calculated 1–10 star title rating.',
        highlight: 'Numerical Star Exclusivity'
      },
      {
        heading: 'The "Regular Voter" Hierarchy',
        detail: 'IMDb assigns higher statistical weight to established accounts with consistent voting histories across multiple genres, while heavily discounting fresh accounts created right before a controversial premiere.',
        highlight: 'Account Longevity'
      },
      {
        heading: 'Ballot Stuffing & Anomaly Detection',
        detail: 'Proprietary anomaly filters monitor vote velocity, IP geographic clustering, device fingerprints, and uncharacteristic 1/10 or 10/10 polarization spikes to neutralize botnets.',
        highlight: 'Velocity Dampening'
      }
    ],
    speakerNotes: {
      presentationScript: 'Crucial clarification for this assignment: many people assume IMDb parses written user reviews to generate the number. IMDb’s official help documentation states that the score is strictly calculated from user votes. Written reviews are displayed alongside for reading, not for calculating the headline rating.',
      classroomTip: 'Emphasize the distinction between self-selected sampling (anyone can vote) versus weighted sampling (not every vote carries equal statistical influence).',
      commonStudentQuestion: 'Why does IMDb keep the exact weighting formula a secret?',
      answer: 'Security through obscurity. If malicious marketing firms or bot networks knew the exact threshold and weight rules, they would reverse-engineer bots to bypass the filters.'
    },
    componentType: 'data_sampling'
  },
  {
    id: 5,
    slug: 'top-250-bayesian-formula',
    category: 'Statistical Modeling',
    kicker: 'Mathematical Rigor',
    title: 'The Top 250 Formula: Bayesian Inference',
    subtitle: 'How IMDb Prevents Obscure Films with Five 10/10 Votes from Ranking #1',
    keyTakeaway: 'The Bayesian formula balances a movie\'s observed average against the site-wide prior expectation.',
    bulletPoints: [
      {
        heading: 'The Documented Formula',
        detail: 'W = [v / (v + m)] · R + [m / (v + m)] · C',
        highlight: 'W = Weighted Rating'
      },
      {
        heading: 'Parameter R (Observed Mean)',
        detail: 'The unweighted arithmetic mean rating of votes submitted specifically for this movie.',
        highlight: 'Movie Mean'
      },
      {
        heading: 'Parameter v & m (Vote Volume & Threshold)',
        detail: 'v is the count of votes for the movie. m is the minimum required votes threshold for chart entry (currently set at 25,000 votes).',
        highlight: 'm = 25,000 threshold'
      },
      {
        heading: 'Parameter C (Site-Wide Prior)',
        detail: 'The mean vote across the entire IMDb database report (historically approximately 7.0). As v grows into millions, W converges to R.',
        highlight: 'C ≈ 7.0 Prior'
      }
    ],
    speakerNotes: {
      presentationScript: 'Here is the exact mathematical formula IMDb publishes for its prestigious Top 250 chart. It is a Bayesian shrinkage estimator. If an indie movie has three 10/10 votes, v=3. Since m=25,000, the weight (v/(v+m)) is virtually zero, pulling the rating straight to the global average C of 7.0.',
      classroomTip: 'Have students test extreme values: what happens when v=0? The formula gives exactly C. What happens when v is 2,000,000? v/(v+m) becomes 0.988, so the movie\'s real score dominates.',
      commonStudentQuestion: 'Does the Top 250 formula apply to all movies on IMDb?',
      answer: 'No. The explicit Bayesian formula with m=25,000 is used for the curated Top 250 list. Individual title pages use IMDb\'s proprietary weighted average.'
    },
    componentType: 'bayesian_math'
  },
  {
    id: 6,
    slug: 'starmeter-popularity-vs-quality',
    category: 'Metrics & Rankings',
    kicker: 'Behavioral Metrics',
    title: 'Actor Popularity & STARmeter Demystified',
    subtitle: 'What "Top 1" Actor Truly Signifies: Measuring Public Curiosity vs. Artistic Acting Skill',
    keyTakeaway: 'STARmeter measures user attention and search velocity, not acting capability or award pedigree.',
    bulletPoints: [
      {
        heading: 'What Is IMDbPro STARmeter?',
        detail: 'A proprietary popularity leaderboard updated every Monday morning, tracking the relative public interest in entertainment professionals.',
        highlight: 'Weekly Trend Index'
      },
      {
        heading: 'Core Behavioral Determinants',
        detail: 'Rankings are calculated primarily from real clickstream behavior: page views, search frequency, profile navigation, and user traffic across IMDb\'s 200M+ monthly visitors.',
        highlight: 'Search & Page Views'
      },
      {
        heading: 'What "Top 1" Actually Means',
        detail: 'Reaching #1 on STARmeter means the person generated the highest search and page-view volume during the preceding 7 days, often triggered by a viral teaser, controversy, or premiere.',
        highlight: 'Current Awareness Peak'
      },
      {
        heading: 'Popularity ≠ Acting Talent',
        detail: 'A breakout Netflix teen star can rank #1 on STARmeter while a 3-time Academy Award winner sits at #480. No public language model or acting evaluation script is used.',
        highlight: 'Zero Acting Evaluation'
      }
    ],
    speakerNotes: {
      presentationScript: 'One of the most frequent misconceptions is believing that the "Top 1 actor" on IMDb is determined by an AI evaluating their acting technique. STARmeter is a web traffic metric. If an actor stars in a trailer that dropped on Tuesday, thousands search their name and they rocket to #1.',
      classroomTip: 'Use the real example: When a new fantasy show airs, the previously unknown lead actor often hits #1 on STARmeter within 48 hours, surpassing Robert De Niro and Meryl Streep.',
      commonStudentQuestion: 'Does IMDb use an LLM to read actor reviews for STARmeter?',
      answer: 'No. There is no publicly documented language model for STARmeter. It is driven by site interaction logs and search telemetry.'
    },
    componentType: 'starmeter'
  },
  {
    id: 7,
    slug: 'nlp-lexicon-three-pillars',
    category: 'NLP Foundations',
    kicker: 'Conceptual Mapping',
    title: 'The NLP Lexicon: Three Connected Pillars',
    subtitle: 'Deconstructing Text Classification, Sentiment Analysis, and Opinion Mining',
    keyTakeaway: 'Text Classification is the broad umbrella; Sentiment Analysis identifies emotion; Opinion Mining finds the target aspect.',
    bulletPoints: [
      {
        heading: 'Pillar 1: Text Classification (The Umbrella)',
        detail: 'The overarching machine learning task of assigning predefined discrete labels to unstructured text documents (e.g. Genre: Sci-Fi, Spoiler: True/False, Language: English).',
        highlight: 'Broad Supervised Category'
      },
      {
        heading: 'Pillar 2: Sentiment Analysis (The Polarity)',
        detail: 'A specialized branch of text classification focused on identifying emotional valence and attitude (Binary: Positive/Negative; Multi-class: 1 to 5 Stars; or Continuous: [-1.0, +1.0]).',
        highlight: 'Emotional Polarity'
      },
      {
        heading: 'Pillar 3: Opinion Mining / "Opinion Mind" (The Aspects)',
        detail: 'Aspect-Based Sentiment Analysis (ABSA). Instead of scoring the whole review as one number, it extracts the entity aspect and pairs it with sentiment (e.g., Visuals: +0.9, Screenplay: -0.6).',
        highlight: 'Granular Aspect Attribution'
      },
      {
        heading: 'The Research Connection',
        detail: 'Pang & Lee (2008) and Bing Liu established ABSA as the bridge from crude document scores to actionable intelligence that answers WHY audiences react the way they do.',
        highlight: 'Why vs What'
      }
    ],
    speakerNotes: {
      presentationScript: 'In your assignment, you were asked about Sentiment Analysis, Text Classification, and Opinion Mining. Notice the hierarchical relationship: Text Classification is the parent discipline. Sentiment Analysis focuses on whether the sentiment is good or bad. Opinion Mining zooms in to connect specific opinions to specific movie elements.',
      classroomTip: 'Give this sentence to the class: "The cinematography was breathtaking, but the pacing put me to sleep." Ask: What is the overall sentiment? Mixed. But Opinion Mining extracts: Cinematography = Positive, Pacing = Negative.',
      commonStudentQuestion: 'What does "Opinion Mind" refer to in technical literature?',
      answer: 'It is a common student term for Opinion Mining and Subjectivity Analysis, the study of extracting attitudes, evaluations, and sentiments toward specific targets.'
    },
    componentType: 'nlp_lexicon'
  },
  {
    id: 8,
    slug: 'classical-ml-models',
    category: 'Machine Learning',
    kicker: 'Statistical Baselines',
    title: 'Classical Machine Learning Models',
    subtitle: 'From Naive Bayes to Support Vector Machines: Lightweight Baselines',
    keyTakeaway: 'Classical models are fast and explainable, but struggle with word order and complex sarcasm.',
    bulletPoints: [
      {
        heading: 'Naive Bayes (Multinomial NB)',
        detail: 'Calculates the posterior probability of a class given word frequencies using Bayes\' Rule. Assumes strong conditional independence between words. Extremely fast (sub-millisecond inference).',
        highlight: 'Fast Probabilistic Baseline'
      },
      {
        heading: 'Logistic Regression',
        detail: 'Models the log-odds of a positive review as a linear combination of TF-IDF feature weights. Highly interpretable: words like "magnificent" get positive coefficients, "dreadful" gets negative.',
        highlight: 'Interpretable Linear Model'
      },
      {
        heading: 'Support Vector Machines (SVM)',
        detail: 'Projects TF-IDF word vectors into a high-dimensional space and solves for the maximum-margin hyperplane separating positive from negative reviews. Highly resilient to text sparsity.',
        highlight: 'Max-Margin Separator'
      },
      {
        heading: 'Fundamental Limitations of Bag-of-Words',
        detail: 'Cannot differentiate word order: "not good, actually bad" has identical bag-of-words tokens to "not bad, actually good". Struggles with linguistic nuance.',
        highlight: 'Blind to Word Order'
      }
    ],
    speakerNotes: {
      presentationScript: 'Before deep learning, these three algorithms powered all industry text analysis. Naive Bayes is still popular as a high-speed baseline. Logistic Regression is great when you need to show stakeholders which words influenced the decision. But because they treat text as a bag of words, they cannot understand sentence grammar.',
      classroomTip: 'Write on the board: "The movie was not terrible, it was surprisingly compelling." Explain how a bag-of-words model might count "terrible" as negative and get confused.',
      commonStudentQuestion: 'Why study classical models if Transformers are better?',
      answer: 'Classical models require 1000x less computing power, train in seconds on basic CPUs, and are ideal when deploying on edge devices with limited resources.'
    },
    componentType: 'classical_ml'
  },
  {
    id: 9,
    slug: 'deep-learning-transformers',
    category: 'Deep Learning',
    kicker: 'Modern Architecture',
    title: 'Deep Learning: Recurrent Models & Transformers',
    subtitle: 'Capturing Sequence, Polysemy, and Bidirectional Context in Movie Reviews',
    keyTakeaway: 'Transformers replaced sequential recurrence by computing self-attention across all words simultaneously.',
    bulletPoints: [
      {
        heading: 'LSTM & BiLSTM (Recurrent Networks)',
        detail: 'Processes tokens in sequential order using memory gates (input, forget, output). BiLSTM reads text forward and backward. Overcomes basic negation but struggles with long multi-paragraph reviews.',
        highlight: 'Sequential Memory'
      },
      {
        heading: 'Google BERT (Devlin et al., 2018)',
        detail: 'Bidirectional Encoder Representations from Transformers. Uses multi-head self-attention to assess relationships between all words in a sentence simultaneously, resolving contextual meanings.',
        highlight: 'Self-Attention Revolution'
      },
      {
        heading: 'RoBERTa (Liu et al., 2019)',
        detail: 'A Robustly Optimized BERT approach removing Next Sentence Prediction, training on 10x more data with dynamic masking. Standard benchmark champion on IMDb 50k sentiment dataset (95%+ accuracy).',
        highlight: 'State-of-the-Art Benchmark'
      },
      {
        heading: 'Why Transformers Excel in Film Reviews',
        detail: 'They correctly distinguish slang and polysemy: "That chase scene was sick!" (positive) vs "The shaky camera made me sick" (negative).',
        highlight: 'Polysemy Resolution'
      }
    ],
    speakerNotes: {
      presentationScript: 'The pivotal breakthrough in NLP happened in 2018 with Google’s BERT paper. Rather than reading word-by-word like an LSTM, BERT looks at every word in relation to all other words at the same time. This is why it can easily understand that "sick" in modern movie slang means awesome, whereas in medical terms it means ill.',
      classroomTip: 'Highlight the citation: Devlin et al., 2018. It is one of the most cited papers in artificial intelligence history and forms the foundation of modern NLP.',
      commonStudentQuestion: 'Does BERT output a 1-to-10 movie rating directly?',
      answer: 'Typically, BERT outputs a probability distribution over classes (e.g. [0.92 Positive, 0.08 Negative]), which an aggregation layer converts into a continuous rating.'
    },
    componentType: 'transformers'
  },
  {
    id: 10,
    slug: 'proposed-ai-pipeline',
    category: 'Applied AI',
    kicker: 'Engineering Proposal',
    title: 'Proposed AI System: The Review-to-Rating Pipeline',
    subtitle: 'A Transparent 6-Stage Architecture for Synthesizing Objective Scores from Text',
    keyTakeaway: 'Unlike IMDb\'s star vote counter, this AI system reads the words, extracts aspects, and synthesizes scores.',
    bulletPoints: [
      {
        heading: 'Stage 1: Review Ingestion & Cleansing',
        detail: 'Collect unstructured audience reviews via API, filter automated spam and duplicate text hashes, and remove boilerplate disclaimer markup.',
        highlight: 'Ingestion & Deduplication'
      },
      {
        heading: 'Stage 2: Preprocessing & Tokenization',
        detail: 'Sub-word tokenization using Byte-Pair Encoding (BPE), sentence boundary detection, and entity dependency parsing.',
        highlight: 'BPE Tokenization'
      },
      {
        heading: 'Stage 3: Fine-Tuned Transformer Encoder',
        detail: 'Pass token sequences through a fine-tuned RoBERTa model to output continuous document-level sentiment probabilities [0.0 to 1.0].',
        highlight: 'RoBERTa Classifier'
      },
      {
        heading: 'Stage 4: Aspect-Based Opinion Mining',
        detail: 'Extract domain aspect vectors: Direction, Screenplay, Performance, Visual Effects, Audio/Score, and Pacing.',
        highlight: 'Aspect Attribution'
      },
      {
        heading: 'Stage 5: User Calibration & Outlier Guard',
        detail: 'Normalize reviewer bias (some users never give above 7/10) and discount reviews flagged for synthetic LLM bot generation.',
        highlight: 'Bias Normalization'
      },
      {
        heading: 'Stage 6: Calibrated 1–10 Synthetic Score',
        detail: 'Synthesize the weighted aspect scores into an interpretable final title rating alongside aspect radar breakdowns.',
        highlight: 'Explainable Score Output'
      }
    ],
    speakerNotes: {
      presentationScript: 'If our class were tasked with building an AI movie rating system today, this is the pipeline we would engineer. We start with text reviews, clean them, feed them into RoBERTa, extract aspect scores like acting and plot, calibrate for user bias, and output a composite score.',
      classroomTip: 'Emphasize that this is OUR proposed design, not IMDb\'s proprietary system. IMDb counts star votes; this pipeline reads and understands text reviews.',
      commonStudentQuestion: 'Can an AI review system replace human ratings entirely?',
      answer: 'It complements human ratings by explaining WHY a film scored an 8/10, breaking it down into 9/10 for visuals and 6/10 for script.'
    },
    componentType: 'ai_pipeline'
  },
  {
    id: 11,
    slug: 'imdb-reality-vs-ai-theory',
    category: 'Comparative Analysis',
    kicker: 'Direct Head-to-Head',
    title: 'IMDb Reality vs. Proposed AI System',
    subtitle: 'Contrasting a Proven Industrial Vote Engine with a Modern Semantic Pipeline',
    keyTakeaway: 'IMDb values voter integrity and computational speed; AI values linguistic nuance and aspect explainability.',
    bulletPoints: [
      {
        heading: 'Primary Input Modality',
        detail: 'IMDb uses discrete 1–10 integer votes. The AI System analyzes unstructured written natural language review paragraphs.',
        highlight: 'Numbers vs. Text'
      },
      {
        heading: 'Underlying Computation Engine',
        detail: 'IMDb relies on statistical weighted averages and Bayesian inference formulas. The AI System uses neural Transformer attention mechanisms (RoBERTa).',
        highlight: 'Statistics vs. Neural Nets'
      },
      {
        heading: 'Handling of Written Text',
        detail: 'IMDb displays text reviews for user reading but excludes them from title score math. The AI System uses text as the primary mathematical feature source.',
        highlight: 'Text Role in Rating'
      },
      {
        heading: 'Defense Against Manipulation',
        detail: 'IMDb detects voter velocity and new account clusters. The AI System uses semantic anomaly detection and synthetic bot-text fingerprinting.',
        highlight: 'Account Checks vs. NLP Checks'
      }
    ],
    speakerNotes: {
      presentationScript: 'This slide provides the critical side-by-side comparison for your academic assignment. IMDb’s strength is high-throughput fraud resistance on pure numbers. An AI system’s strength is explainability—it can explain that a movie scored poorly because audiences disliked the ending, which a raw 1-star click can never convey.',
      classroomTip: 'Encourage students to discuss: Which system is more resilient to a flood of 100,000 bots created in one afternoon?',
      commonStudentQuestion: 'Why doesn\'t IMDb switch to an all-AI system?',
      answer: 'Scalability and cost: computing billions of transformer inferences in real-time is computationally expensive compared to statistical weighted vote aggregations.'
    },
    componentType: 'reality_vs_ai'
  },
  {
    id: 12,
    slug: 'technical-and-ethical-challenges',
    category: 'Critical Evaluation',
    kicker: 'Real-World Obstacles',
    title: 'Technical & Ethical Challenges in Review AI',
    subtitle: 'Sarcasm, Evolving Movie Slang, Generative Botnets, and Cultural Bias',
    keyTakeaway: 'Language is dynamic and culture-dependent; AI models require continuous adaptation to avoid critical misclassifications.',
    bulletPoints: [
      {
        heading: 'The Sarcasm & Irony Trap',
        detail: 'Reviews like "A monumental masterpiece for anyone suffering from chronic insomnia" contain glowing words ("masterpiece") used with negative sarcastic intent.',
        highlight: 'Sarcasm Detection'
      },
      {
        heading: 'Domain-Specific Slang & Semantic Shift',
        detail: 'Words like "campy", "unhinged", "cheesy", and "sick" can represent high praise in horror and B-movies, yet signify poor quality in serious historical dramas.',
        highlight: 'Genre-Dependent Semantics'
      },
      {
        heading: 'Generative AI Astroturfing',
        detail: 'Malicious campaigns no longer submit identical copypasta; they use LLMs to generate 50,000 uniquely phrased synthetic positive reviews to bypass naive filters.',
        highlight: 'AI-Generated Review Bombs'
      },
      {
        heading: 'Demographic & Cultural Sampling Bias',
        detail: 'Online reviewers are not a representative sample of global moviegoers. They skew toward internet-connected, vocal demographics with strong polarization tendencies.',
        highlight: 'Echo Chamber Skew'
      }
    ],
    speakerNotes: {
      presentationScript: 'No AI system is flawless. The hardest problem in NLP is sarcasm and irony. If a reviewer writes "Absolute genius... if you love staring at drywall", a simple model sees "genius" and assigns a high rating. Furthermore, with modern LLMs, review bombing can now be done with thousands of human-sounding unique reviews.',
      classroomTip: 'Ask students to share a movie review sentence that would confuse an AI.',
      commonStudentQuestion: 'Can an AI tell if a review was generated by ChatGPT?',
      answer: 'AI watermarking and perplexity analyzers can estimate likelihood, but detection is an ongoing arms race as language models become more human-like.'
    },
    componentType: 'challenges'
  },
  {
    id: 13,
    slug: 'summary-and-conclusions',
    category: 'Conclusions',
    kicker: 'Key Takeaways',
    title: 'Summary & Research Takeaways',
    subtitle: 'Synthesizing the Core Answers for the Academic Inquiry',
    keyTakeaway: 'IMDb ensures mathematical consensus integrity; AI provides semantic depth and explainability.',
    bulletPoints: [
      {
        heading: '1. Fast 2-3 Hour Display',
        detail: 'Driven by international timezone leads, early Thursday previews, and minimum statistical sample thresholds.',
        highlight: 'Logistics, Not Magic'
      },
      {
        heading: '2. IMDb Data Collection',
        detail: 'Direct voluntary 1–10 star votes with secret weighted averages. Written reviews and critic Metascores do NOT count toward the headline score.',
        highlight: 'Vote-Only Math'
      },
      {
        heading: '3. STARmeter Metric',
        detail: 'A weekly behavioral traffic index reflecting user search queries and page clicks. It tracks public buzz and awareness, not acting talent.',
        highlight: 'Popularity ≠ Quality'
      },
      {
        heading: '4. AI Review Potential',
        detail: 'Fine-tuned Transformers (BERT/RoBERTa) with Aspect-Based Opinion Mining enable transparent, explainable review-to-rating pipelines.',
        highlight: 'The Semantic Future'
      }
    ],
    speakerNotes: {
      presentationScript: 'To wrap up our research: IMDb operates on robust statistical safeguards that protect vote integrity and enable rapid publishing. Popularity rankings like STARmeter measure curiosity, not acting awards. And for the future of film analysis, transformers offer a way to unpack the rich opinions hiding inside audience prose.',
      classroomTip: 'Summarize the 4 bullet points clearly as the direct answers to the 4 core assignment questions.',
      commonStudentQuestion: 'What is the biggest takeaway for an AI engineer?',
      answer: 'Always understand the difference between counting user actions (IMDb\'s approach) and understanding user meaning (the AI NLP approach).'
    },
    componentType: 'conclusions'
  },
  {
    id: 14,
    slug: 'academic-references',
    category: 'Bibliography',
    kicker: 'Scholarly Grounding',
    title: 'References & Authoritative Sources',
    subtitle: 'Official IMDb Documentation, Academic NLP Papers, and Foundational Research',
    keyTakeaway: 'All claims grounded in verified primary documentation and peer-reviewed literature.',
    bulletPoints: [
      {
        heading: 'Official IMDb Help: Weighted Average Ratings',
        detail: 'IMDb Help Desk Documentation: "Ratings FAQ - Weighted Average". Confirms proprietary weighting, suppression of ballot stuffing, and independence from written text.',
        highlight: 'help.imdb.com'
      },
      {
        heading: 'IMDbPro: STARmeter Explained',
        detail: 'IMDbPro FAQ & User Guide. Explains that STARmeter is calculated from page views and search patterns across IMDb properties updated weekly.',
        highlight: 'pro.imdb.com'
      },
      {
        heading: 'Devlin et al. (2018): Google BERT Paper',
        detail: '"BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding", NAACL-HLT 2019. Foundational transformer architecture for bidirectional context.',
        highlight: 'Google AI Research'
      },
      {
        heading: 'Pang & Lee (2008): Opinion Mining Foundational Monograph',
        detail: '"Opinion Mining and Sentiment Analysis", Foundations and Trends in Information Retrieval. The seminal work defining sentiment classification and aspect extraction.',
        highlight: 'Academic Monograph'
      }
    ],
    speakerNotes: {
      presentationScript: 'Here are the primary sources supporting this research. We used official IMDb Help Center articles to verify their calculation policies, the Google Research BERT paper for the transformer architecture, and Pang and Lee’s foundational monograph for the sentiment classification principles.',
      classroomTip: 'Provide these citations in your written submission to verify that your facts about IMDb’s black-box weighting and STARmeter are sourced accurately.',
      commonStudentQuestion: 'Where can students download real IMDb review datasets to train a model?',
      answer: 'IMDb provides public non-commercial datasets at datasets.imdbws.com, and the famous Stanford IMDb 50k sentiment benchmark is available on Hugging Face.'
    },
    componentType: 'references'
  },
  {
    id: 15,
    slug: 'interactive-classroom-lab',
    category: 'Interactive Lab',
    kicker: 'Hands-On Simulator',
    title: 'Interactive Classroom Exploration Lab',
    subtitle: 'Live Bayesian Top 250 Calculator, STARmeter Traffic Simulator & AI Review Analyzer',
    keyTakeaway: 'Test mathematical formulas and AI opinion extraction live with real parameters.',
    bulletPoints: [
      {
        heading: 'Live Bayesian Top 250 Tool',
        detail: 'Adjust vote count (v), movie rating (R), threshold (m), and prior mean (C) to see real-time shrinkage.',
        highlight: 'Interactive Math'
      },
      {
        heading: 'STARmeter vs. Oscar Simulator',
        detail: 'Compare how a viral trailer surge moves an actor to #1 while award prestige has zero automated effect on weekly search rank.',
        highlight: 'Behavior vs Prestige'
      },
      {
        heading: 'AI Review Sentiment Tester',
        detail: 'Type any film review or choose pre-built examples to see simulated BERT tokens, aspect polarity tags, and synthetic star ratings.',
        highlight: 'Aspect-Based NLP'
      }
    ],
    speakerNotes: {
      presentationScript: 'To conclude our presentation, we have built an interactive classroom lab. You can test the Bayesian Top 250 formula yourself to see how a low vote count gets pulled down to 7.0, compare STARmeter search traffic against Oscar awards, and try our NLP sentiment simulator on real movie reviews.',
      classroomTip: 'Invite a student to give a review sentence and run it through the live interactive aspect sentiment simulator.',
      commonStudentQuestion: 'Can I change the minimum vote threshold m to see what happens?',
      answer: 'Yes, use the interactive slider on the Bayesian calculator to test what happened back when IMDb used m=1,250 versus the modern m=25,000.'
    },
    componentType: 'interactive_lab'
  }
];

export const CITATIONS: SlideCitation[] = [
  {
    title: 'IMDb Help Center: Weighted Average Ratings',
    source: 'IMDb.com, Inc.',
    year: '2024',
    url: 'https://help.imdb.com/article/imdb/track-movies-tv/ratings-faq/G67Y87TFYYP6TWAV',
    note: 'Official documentation confirming that written reviews do not affect title ratings and that proprietary weighting filters extreme votes.'
  },
  {
    title: 'IMDb Top 250 Chart Criteria & Bayesian Formula',
    source: 'IMDb Support Documentation',
    year: '2024',
    url: 'https://help.imdb.com/article/imdb/track-movies-tv/weighted-average-ratings/GACD29P4Q8WETW9T',
    note: 'Documents the formula W = (v/(v+m))R + (m/(v+m))C with m=25,000 for regular voters.'
  },
  {
    title: 'IMDbPro STARmeter & MOVIEmeter FAQ',
    source: 'Amazon / IMDbPro',
    year: '2024',
    url: 'https://pro.imdb.com/help/show_leaf?starmeter',
    note: 'Documents that STARmeter is calculated based on site traffic, page views, and clickstream user behavior updated weekly.'
  },
  {
    title: 'BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding',
    source: 'Jacob Devlin, Ming-Wei Chang, Kenton Lee, Kristina Toutanova (Google AI Language)',
    year: '2018',
    url: 'https://arxiv.org/abs/1810.04805',
    note: 'Introduced bidirectional attention encoding for modern NLP.'
  },
  {
    title: 'Opinion Mining and Sentiment Analysis',
    source: 'Bo Pang and Lillian Lee (Cornell University)',
    year: '2008',
    url: 'https://www.cs.cornell.edu/home/llee/opinion-mining-sentiment-analysis-survey.html',
    note: 'Comprehensive monograph establishing sentiment classification, aspect mining, and polarity scoring.'
  },
  {
    title: 'Learning Word Vectors for Sentiment Analysis (IMDb 50k Dataset)',
    source: 'Andrew L. Maas, Raymond E. Daly, Peter T. Pham, Dan Huang, Andrew Y. Ng, Christopher Potts',
    year: '2011',
    url: 'https://ai.stanford.edu/~amaas/data/sentiment/',
    note: 'The benchmark 50,000 movie review dataset widely used for NLP research.'
  }
];
