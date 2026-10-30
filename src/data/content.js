export const RESUME_URL = 'https://drive.google.com/file/d/1odVb8FPE65kbb9OIeycDcukhJqXJ-zgc/view?usp=drive_link'

export const content = {
  name: 'Abhijit R',
  eyebrow: 'AI & Data Science · Chennai',
  headline: 'AI & Data Science Graduate | Client Relationships & Analytics',
  intro: 'I turn business needs into clear, data-backed answers.\nMy experience combines data projects with leadership, outreach and client relationships.',
  openTo: 'Immediate joiner, open to relocation and full-time business analyst or client-facing analytics roles.',
  proof: [
    { value: '8.15', label: 'CGPA' },
    { value: '50', label: 'Team leads' },
    { value: '₹25K', label: 'Sponsorship raised' },
  ],
  email: 'abhijitrajeev171@gmail.com',
  linkedin: 'https://www.linkedin.com/in/abhijit-r-3015b8257/',
  github: 'https://www.github.com/Abhijitxx/',
  resume: RESUME_URL,
  marquee: ['Business analysis', 'Data visualization', 'Exploratory data analysis', 'SQL', 'Client relationships', 'Machine learning'],
  projects: [
    {
      index: '01', category: 'AI / PRODUCT', title: 'PLAINSENSE',
      summary: 'Legal contracts can be difficult to follow, so I built a tool that explains them clause by clause in plain language and highlights risks.',
      built: ['Used Tesseract OCR to read digital PDFs, scanned PDFs and images, then used the Google Gemini API to simplify, translate and flag clause risks.', 'Added regex-based clause segmentation and validation so names, dates, amounts and durations stay unchanged in simplified text.', 'Built a React dashboard with risk summaries, readability metrics, clause comparisons and JSON export.'],
      tech: ['Python', 'FastAPI', 'React', 'Tesseract OCR', 'Google Gemini API'],
      github: 'https://github.com/Abhijitxx/PlainSense-Final', live: '',
      limitation: 'The next step is to continue validating the pipeline across more document types.',
    },
    {
      index: '02', category: 'DATA / MACHINE LEARNING', title: 'Electricity Theft Detection',
      summary: 'This system scores consumer theft risk from usage patterns and explains the reason behind each flag.',
      built: ['Generated hourly usage data for 500 consumers over 90 days.', 'Engineered 34 statistical, temporal and anomaly-based features.', 'Built a five-model ensemble and an eight-rule explainable detection engine with real-time risk scoring.'],
      tech: ['Python', 'Autoencoder', 'LSTM', 'XGBoost', 'Random Forest', 'Isolation Forest', 'FastAPI', 'Next.js'],
      github: 'https://github.com/Abhijitxx/Electricity-Theft-Detection', live: 'https://electricity-theft-detection-1.onrender.com/',
      limitation: 'The evaluation used synthetic data; real-world usage data was not used.',
    },
    {
      index: '03', category: 'WEB / PRODUCT', title: 'College Symposium Website',
      summary: 'Built with a teammate, this website brought symposium registrations and payment tracking together.',
      built: ['Designed the frontend UI and database schema for participant details, team sizes and transaction status.', 'Added automated Razorpay checkout and Supabase data tracking.', 'Deployed on Vercel; participants registered through the live site.'],
      tech: ['Razorpay', 'Supabase', 'Vercel'],
      live: 'https://datalorewebsite.vercel.app/',
      limitation: 'Built with a teammate using AI-assisted development.',
    },
  ],
  timeline: [
    { date: 'Apr 2025 – Apr 2026', role: 'Chief Outreach Officer', org: 'Entrepreneurship Development Cell, Rajalakshmi Engineering College', details: ['Owned key investor pitches and high-profile guest relationships end to end, from first contact to confirmation.', 'Trained junior members in sponsor outreach and guest invitations.', 'Organised a founders’ round table with 3–4 seasoned entrepreneurs and supported 2–3 student startup ideas.'] },
    { date: 'Oct 2024 – Jul 2025', role: 'Founder and Chief Executive Officer', org: 'ARQ (Data Science Club), Rajalakshmi Engineering College', details: ['Founded a department club that brought together students with varied technical and non-technical skills.', 'Led a team of 50 vertical and horizontal leads for an inter-college symposium on tech, data and AI.', 'Resolved team disagreements through discussion and consensus.'] },
    { date: 'Jul 2024 – Apr 2025', role: 'Director of Public Relations and Marketing', org: 'Entrepreneurship Development Cell, Rajalakshmi Engineering College', details: ['Sourced and closed sponsorships through cold outreach and negotiation, raising about ₹25,000 for Startup Spark, a three-phase hackathon that ended in investor pitches.', 'Secured CEO- and founder-level speakers through direct outreach, including Rajesh Parthasarathy (CEO, Mage Data) and Pooja Srinivasa Raja (Founder, Love Hope Company).', 'Pitched to angel investors and venture capitalists.'] },
    { date: 'Aug 2024 – Oct 2024', role: 'Video Editing & Event Support', org: 'Entrepreneurs of Madras', details: ['Supported Singapenne, a Navaratri-season event with 9 speakers and about 30 attendees.', 'Looked after an assigned guest and interacted with women founders and entrepreneurs.', 'Edited event and community videos for social media.'] },
  ],
  skills: {
    People: ['Outreach', 'Sponsorship pitching', 'Guest handling', 'Event coordination', 'Team leadership', 'Public relations'],
    Technical: ['Data manipulation and cleaning', 'Data visualization', 'Exploratory data analysis', 'Database management', 'Machine learning'],
    Tools: ['Python', 'SQL', 'Excel', 'Power BI', 'Git and GitHub', 'Jupyter Notebook'],
    Languages: ['English (Proficient)', 'Malayalam (Native)', 'Tamil (Proficient)'],
  },
  education: [
    { title: 'Bachelor of Technology', place: 'Rajalakshmi Engineering College, Thandalam, Chennai', detail: 'Artificial Intelligence and Data Science · CGPA: 8.15', date: 'Nov 2022 – May 2026' },
    { title: 'Class 12th, State Board', place: 'Hussain Memorial Matriculation Higher Secondary School, Ambattur, Chennai', detail: '93%', date: 'Jun 2022' },
    { title: 'Class 10th, State Board', place: 'Hussain Memorial Matriculation Higher Secondary School, Ambattur, Chennai', detail: '91%', date: 'Jun 2020' },
  ],
  certifications: [
    { title: 'Introduction to Databases', issuer: 'Meta', date: 'May 2024', detail: 'Database Management, DBMS, Relational Databases, SQL, Database Software', link: 'https://www.coursera.org/account/accomplishments/verify/CSTXMJD5Y3JZ' },
    { title: 'Supervised Machine Learning: Regression and Classification', issuer: 'DeepLearning.AI and Stanford', date: 'Apr 2024', detail: 'Supervised Learning, Scikit Learn, Data preprocessing, Model Evaluation, Feature Engineering', link: 'https://www.coursera.org/account/accomplishments/verify/A3G9LXRCDYG2' },
  ],
}
