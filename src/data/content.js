export const BD_RESUME_URL = 'https://drive.google.com/file/d/1odVb8FPE65kbb9OIeycDcukhJqXJ-zgc/view?usp=drive_link'

export const content = {
  name: 'Abhijit R',
  eyebrow: 'Chennai · Cold emails, warm relationships',
  headline: 'Client Relationships | Business Development | Outreach',
  intro: 'I lead outreach, negotiate partnerships, and lead teams through events.\nI also build data and AI projects as supporting proof of execution.',
  openTo: 'Open to full-time roles in business development, client engagement, partnerships, and management training.',
  proof: [
    { value: '8.15', label: 'CGPA' },
    { value: '50+', label: 'People led' },
    { value: '₹25K', label: 'Sponsorship raised' },
  ],
  email: 'abhijitrajeev171@gmail.com',
  linkedin: 'https://www.linkedin.com/in/abhijit-r-3015b8257/',
  github: 'https://www.github.com/Abhijitxx/',
  resume: BD_RESUME_URL,
  marquee: ['Outreach', 'Sponsorship pitching', 'Event coordination', 'Team leadership', 'Data & SQL', 'Machine learning'],
  projects: [
    {
      index: '01', category: 'WEB / PRODUCT', title: 'College Symposium Website',
      summary: 'Event registrations need one place for participant, team and payment details; I built this portal with a teammate using AI-assisted development.',
      built: ['Created the frontend and database schema for participant, team and transaction details.', 'Added automated Razorpay checkout and Supabase data tracking.', 'Deployed the web app on Vercel.'],
      tech: ['React', 'Supabase', 'Razorpay', 'Vercel'],
      github: 'https://github.com/Abhijitxx/Portfolio', live: 'https://datalorewebsite.vercel.app/',
      limitation: 'Next step: keep improving the registration experience as event needs change.',
      // TODO: Add the project repository URL if it is available.
    },
    {
      index: '02', category: 'AI / PRODUCT', title: 'PlainSense',
      summary: 'Legal documents can be difficult to read; this LLM-based pipeline simplifies them clause by clause.',
      built: ['OCR with Tesseract for digital PDFs, scanned PDFs and images.', 'Regex-based clause segmentation with validation for names, dates, amounts and durations.', 'React dashboard with risk summaries, readability metrics, clause comparisons and JSON export.'],
      tech: ['React', 'Tesseract OCR', 'Gemini API', 'Regex'],
      github: 'https://github.com/Abhijitxx/PlainSense-Final', live: '',
      limitation: 'Next step: continue validating the pipeline across more document types.',
      // TODO: Add the project repository URL if it is available.
    },
    {
      index: '03', category: 'DATA / MACHINE LEARNING', title: 'Electricity Theft Detection',
      summary: 'Electricity theft is difficult to identify from usage patterns; this explainable system was evaluated on synthetic data.',
      built: ['Generated hourly usage data for 500 consumers over 90 days.', 'Engineered 34 statistical, temporal and anomaly-based features.', 'Built a five-model ensemble and an eight-rule explainable detection engine with real-time risk scoring.'],
      tech: ['Python', 'Machine Learning', 'Feature Engineering', 'Anomaly Detection'],
      github: 'https://github.com/Abhijitxx/Electricity-Theft-Detection', live: 'https://electricity-theft-detection-1.onrender.com/', results: '',
      limitation: 'Next step: re-run and document the evaluation before reporting results.',
      // TODO: Add the project repository URL if it is available.
    },
    {
      index: '04', category: 'HACKATHON PROTOTYPE', title: 'OceanGuard',
      summary: 'Coastal hazard reports need structured location and evidence data; this prototype was built for Smart India Hackathon.',
      built: ['Built a coastal hazard platform with citizen reporting, GPS capture and image uploads.', 'Added interactive Leaflet maps and admin dashboards for validation and analytics.', 'Implemented credibility scoring, duplicate detection and report clustering.'],
      tech: ['React', 'FastAPI', 'Supabase', 'PostgreSQL', 'Leaflet'],
      github: 'https://github.com/Abhijitxx/OceanGuard', live: '',
      limitation: 'Prototype built for a hackathon; a next step is deeper field validation.',
      // TODO: Add the project repository URL if it is available.
    },
  ],
  timeline: [
    { date: 'Apr 2025 – Apr 2026', role: 'Chief Outreach Officer', org: 'Entrepreneurship Development Cell, Rajalakshmi Engineering College', details: ['Owned key investor pitches and high-profile guest relationships end to end, from first contact to confirmation.', 'Secured CEO- and founder-level speakers through direct outreach, including Rajesh Parthasarathy (CEO, Mage Data) and Pooja Srinivasa Raja (Founder, Love Hope Company).', 'Trained junior members in sponsor outreach and guest invitations.', 'Organised a founders’ round table with 3–4 seasoned entrepreneurs and supported 2–3 student startup ideas.'] },
    { date: 'Oct 2024 – Jul 2025', role: 'Founder and Chief Executive Officer', org: 'ARQ (Data Science Club), Rajalakshmi Engineering College', details: ['Founded a department club that brought together students with varied technical and non-technical skills.', 'Led a team of 50 vertical and horizontal leads for an inter-college symposium on tech, data and AI.', 'Resolved team disagreements through discussion and consensus.'] },
    { date: 'Jul 2024 – Apr 2025', role: 'Director of Public Relations and Marketing', org: 'Entrepreneurship Development Cell, Rajalakshmi Engineering College', details: ['Sourced and closed sponsorships through cold outreach and negotiation, raising about ₹25,000 for Startup Spark, a three-phase hackathon that ended in investor pitches.', 'Pitched to angel investors and venture capitalists.', 'Invited and hosted business leaders at our events.'] },
    { date: 'Aug 2024 – Oct 2024', role: 'Video Editing & Event Support', org: 'Entrepreneurs of Madras', details: ['Supported Singapenne, a Navaratri-season event with 9 speakers and about 30 attendees.', 'Looked after an assigned guest and interacted with women founders and entrepreneurs.', 'Edited event and community videos for social media.'] },
  ],
  skills: {
    People: ['Outreach', 'Sponsorship pitching', 'Guest handling', 'Event coordination', 'Team leadership', 'Public relations'],
    Technical: ['Data manipulation and cleaning', 'Data visualization', 'Exploratory data analysis', 'Database management', 'Machine learning'],
    Tools: ['Python', 'SQL', 'Excel', 'Power BI', 'Git and GitHub'],
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
