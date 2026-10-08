export const content = {
  name: 'Abhijit R',
  headline: 'AI & Data Science graduate | Partnerships & Outreach',
  intro: 'I build practical data and AI projects, and help teams turn ideas into events, partnerships and products.\nBased in Chennai, I work across technical delivery and people-facing execution.',
  openTo: 'Open to full-time roles in data, AI/ML, product, partnerships and business development.',
  proof: [
    { value: '8.15', label: 'CGPA' },
    { value: '04', label: 'Selected projects' },
    { value: '50', label: 'People led' },
    { value: '₹25K', label: 'Sponsorship raised' },
  ],
  email: 'abhijitrajeev171@gmail.com',
  linkedin: 'https://www.linkedin.com/in/abhijit-r-3015b8257/',
  github: 'https://www.github.com/Abhijitxx/',
  resume: '',
  // TODO: Add a public resume URL or restore the PDF before enabling download buttons.
  marquee: ['AI / ML', 'Data & SQL', 'Product thinking', 'Outreach', 'Events', 'Partnerships'],
  projects: [
    {
      index: '01', category: 'AI / PRODUCT', title: 'PlainSense',
      summary: 'An LLM-based pipeline that simplifies legal documents clause by clause.',
      built: ['OCR with Tesseract for digital PDFs, scanned PDFs and images.', 'Regex-based clause segmentation with validation for names, dates, amounts and durations.', 'React dashboard with risk summaries, readability metrics, clause comparisons and JSON export.'],
      tech: ['React', 'Tesseract OCR', 'Gemini API', 'Regex'],
      github: '', live: '',
      limitation: 'Next step: continue validating the pipeline across more document types.',
      // TODO: Add the project repository URL if it is available.
    },
    {
      index: '02', category: 'DATA / MACHINE LEARNING', title: 'Electricity Theft Detection',
      summary: 'An explainable detection system tested on synthetic electricity usage data.',
      built: ['Generated hourly usage data for 500 consumers over 90 days.', 'Engineered 34 statistical, temporal and anomaly-based features.', 'Built a five-model ensemble and an eight-rule explainable detection engine with real-time risk scoring.'],
      tech: ['Python', 'Machine Learning', 'Feature Engineering', 'Anomaly Detection'],
      github: '', live: '', results: '',
      limitation: 'Next step: re-run and document the evaluation before reporting results.',
      // TODO: Add the project repository URL if it is available.
    },
    {
      index: '03', category: 'WEB / PRODUCT', title: 'College Symposium Website',
      summary: 'A registration portal built with a teammate using AI-assisted development.',
      built: ['Created the frontend and database schema for participant, team and transaction details.', 'Added automated Razorpay checkout and Supabase data tracking.', 'Deployed the web app on Vercel.'],
      tech: ['React', 'Supabase', 'Razorpay', 'Vercel'],
      github: '', live: 'https://datalorewebsite.vercel.app/',
      limitation: 'Next step: keep improving the registration experience as event needs change.',
      // TODO: Add the project repository URL if it is available.
    },
    {
      index: '04', category: 'HACKATHON PROTOTYPE', title: 'OceanGuard',
      summary: 'A coastal hazard reporting prototype built for Smart India Hackathon.',
      built: ['Built a coastal hazard platform with citizen reporting, GPS capture and image uploads.', 'Added interactive Leaflet maps and admin dashboards for validation and analytics.', 'Implemented credibility scoring, duplicate detection and report clustering.'],
      tech: ['React', 'FastAPI', 'Supabase', 'PostgreSQL', 'Leaflet'],
      github: '', live: '',
      limitation: 'Prototype built for a hackathon; a next step is deeper field validation.',
      // TODO: Add the project repository URL if it is available.
    },
  ],
  timeline: [
    { date: 'Apr 2025 – Apr 2026', role: 'Chief Outreach Officer', org: 'Entrepreneurship Development Cell, Rajalakshmi Engineering College', details: ['Handled key investor pitches and high-profile guests.', 'Guided junior members in sponsor outreach and guest invitations.', 'Supported 2–3 student startup ideas and helped organise a founders’ round table with 3–4 entrepreneurs.'] },
    { date: 'Oct 2024 – Jul 2025', role: 'Founder and Chief Executive Officer', org: 'ARQ (Data Science Club), Rajalakshmi Engineering College', details: ['Led a team of 50 for an inter-college symposium on tech, data and AI.', 'Founded a department club for students with varied technical and non-technical skills.', 'Resolved team disagreements through discussion and consensus.'] },
    { date: 'Jul 2024 – Apr 2025', role: 'Director of Public Relations and Marketing', org: 'Entrepreneurship Development Cell, Rajalakshmi Engineering College', details: ['Raised about ₹25,000 in sponsorship for Startup Spark, a three-phase hackathon.', 'Found sponsors, pitched to angel investors and venture capitalists, and brought guests to events.', 'Invited and hosted business leaders including Rajesh Parthasarathy and Pooja Srinivasa Raja.'] },
    { date: 'Aug 2024 – Oct 2024', role: 'Video Editing & Event Support', org: 'Entrepreneurs of Madras', details: ['Supported Singapenne, a Navaratri-season event with 9 speakers and about 30 attendees.', 'Looked after an assigned guest and interacted with women founders and entrepreneurs.', 'Edited event and community videos for social media.'] },
  ],
  skills: {
    'AI / ML': ['Machine learning', 'Statistical analysis', 'Exploratory data analysis', 'Data visualization'],
    'Data & SQL': ['Data manipulation and cleaning', 'Data wrangling', 'Database management', 'SQL', 'MongoDB', 'PostgreSQL'],
    'Web & Tools': ['Python', 'Excel', 'Power BI', 'Git and GitHub', 'Jupyter Notebook', 'Visual Studio Code', 'GitHub Copilot'],
    People: ['Outreach', 'Sponsorship pitching', 'Guest handling', 'Event coordination', 'Team leadership', 'Public relations'],
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
