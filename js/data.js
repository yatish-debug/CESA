/**
 * CESA - Computer Engineering Student Association
 * Godavari College of Engineering, Jalgaon (GF's GCOEJ)
 * Master Data File: Official 25 Council Members Roster, Gallery Events & Info
 */

const SITE_CONFIG = {
  collegeName: "Godavari Foundation's Godavari College of Engineering, Jalgaon",
  collegeShort: "GF's GCOE, Jalgaon",
  affiliation: "Approved by AICTE New Delhi, DTE Govt. of Maharashtra & Affiliated to DBATU / KBCNMU",
  associationName: "Computer Engineering Student Association",
  associationShort: "CESA",
  department: "Department of Computer Engineering",
  academicYear: "2026 - 2027",
  contact: {
    address: "P-51, Additional M.I.D.C., Near Bharat Petroleum, Jalgaon, Maharashtra - 425003",
    email: "cesa.gcoej@gmail.com",
    collegeEmail: "principal@godavariengg.ac.in",
    phone: "+91 257 2212999 / 2213500",
    timing: "Monday – Saturday: 9:30 AM to 5:30 PM",
    socials: {
      instagram: "https://instagram.com/cesa_gcoej",
      linkedin: "https://linkedin.com/school/godavari-college-of-engineering-jalgaon",
      github: "https://github.com/cesa-gcoej",
      youtube: "https://youtube.com/@gcoejalgaon"
    }
  }
};

/**
 * Official 25 Council Members in the EXACT hierarchy sequence:
 * 1. Dinkky Shadani - PRESIDENT
 * 2. Pratik Warke - VICE PRESIDENT
 * 3. Kajal Patil - VICE PRESIDENT
 * 4. Keval Rade - VICE PRESIDENT
 * 5. Devesh Patil - SECRETARY
 * 6. Isha Patil - JOINT SECRETARY
 * 7. Sakshi Khadke - CHIEF ADVISOR
 * 8. Yatish Bharambe - ADVISOR
 * 9. Tejal Warade - CULTURAL SECRETARY
 * 10. Savita Sononi - JOINT CULTURAL SECRETARY
 * 11. Aryan Ingole - TREASURER
 * 12. Gunjan Mahajan - JOINT TREASURER
 * 13. Toshit Ingale - SPORTS CO-ORDINATOR
 * 14. Vaibhav Pachpol - DISCIPLINE HEAD
 * 15. Lalit Patil - DISCIPLINE HEAD
 * 16. Riddhi Bhirud - SY CO-ORDINATOR
 * 17. Purva Devkar - SY CO-ORDINATOR
 * 18. Aachal Kokate - SY CO-ORDINATOR
 * 19. Nandini Petkule - SY CO-ORDINATOR
 * 20. Samiksha Tayade - SY CO-ORDINATOR
 * 21. Sakshi Patil - SY CO-ORDINATOR
 * 22. Mohit Chaudhari - SY CO-ORDINATOR
 * 23. Gaurav Ingale - SY CO-ORDINATOR
 * 24. Pranay Patil - SY CO-ORDINATOR
 * 25. Rohan Rathod - SY CO-ORDINATOR
 */
const CESA_MEMBERS = [
  // 1. PRESIDENT
  {
    id: 1,
    name: "Dinkky Shadani",
    designation: "PRESIDENT",
    sequence: 1,
    category: "executive",
    badge: "Executive Head",
    year: "BE Computer Engineering",
    image: "assets/images/members/member-1.jpg",
    initials: "DS",
    email: "president.cesa@godavariengg.ac.in",
    linkedin: "https://linkedin.com",
    bio: "Leading CESA with strategic vision, guiding departmental growth, hackathons, and student representation."
  },

  // 2. VICE PRESIDENT (1)
  {
    id: 2,
    name: "Pratik Warke",
    designation: "VICE PRESIDENT",
    sequence: 2,
    category: "executive",
    badge: "Vice President (1/3)",
    year: "BE Computer Engineering",
    image: "assets/images/members/member-2.jpg",
    initials: "PW",
    email: "vp.pratik@godavariengg.ac.in",
    linkedin: "https://linkedin.com",
    bio: "Spearheading technical events, coding clubs, and developer symposiums across Maharashtra."
  },

  // 3. VICE PRESIDENT (2)
  {
    id: 3,
    name: "Kajal Patil",
    designation: "VICE PRESIDENT",
    sequence: 3,
    category: "executive",
    badge: "Vice President (2/3)",
    year: "BE Computer Engineering",
    image: "assets/images/members/member-3.jpg",
    initials: "KP",
    email: "vp.kajal@godavariengg.ac.in",
    linkedin: "https://linkedin.com",
    bio: "Managing departmental workshops, guest lectures, and student academic welfare initiatives."
  },

  // 4. VICE PRESIDENT (3)
  {
    id: 4,
    name: "Keval Rade",
    designation: "VICE PRESIDENT",
    sequence: 4,
    category: "executive",
    badge: "Vice President (3/3)",
    year: "BE Computer Engineering",
    image: "assets/images/members/member-4.jpg",
    initials: "KR",
    email: "vp.keval@godavariengg.ac.in",
    linkedin: "https://linkedin.com",
    bio: "Overseeing public relations, inter-college partnerships, and industry-institution collaborations."
  },

  // 5. SECRETARY
  {
    id: 5,
    name: "Devesh Patil",
    designation: "SECRETARY",
    sequence: 5,
    category: "secretariat",
    badge: "Secretariat",
    year: "TE Computer Engineering",
    image: "assets/images/members/member-5.jpg",
    initials: "DP",
    email: "secretary.devesh@godavariengg.ac.in",
    linkedin: "https://linkedin.com",
    bio: "Managing council documentation, administrative affairs, official correspondence, and meeting records."
  },

  // 6. JOINT SECRETARY
  {
    id: 6,
    name: "Isha Patil",
    designation: "JOINT SECRETARY",
    sequence: 6,
    category: "secretariat",
    badge: "Secretariat",
    year: "TE Computer Engineering",
    image: "assets/images/members/member-6.jpg",
    initials: "IP",
    email: "jnt.sec.isha@godavariengg.ac.in",
    linkedin: "https://linkedin.com",
    bio: "Assisting with operational planning, department notices, and student assembly schedules."
  },

  // 7. CHIEF ADVISOR
  {
    id: 7,
    name: "Sakshi Khadke",
    designation: "CHIEF ADVISOR",
    sequence: 7,
    category: "advisory",
    badge: "Advisory Board",
    year: "BE Computer Engineering",
    image: "assets/images/members/member-7.jpg",
    initials: "SK",
    email: "chief.advisor@godavariengg.ac.in",
    linkedin: "https://linkedin.com",
    bio: "Providing senior strategic guidance, policy evaluation, and event roadmap governance."
  },

  // 8. ADVISOR
  {
    id: 8,
    name: "Yatish Bharambe",
    designation: "ADVISOR",
    sequence: 8,
    category: "advisory",
    badge: "Advisory Board",
    year: "BE Computer Engineering",
    image: "assets/images/members/member-8.jpg",
    initials: "YB",
    email: "advisor.yatish@godavariengg.ac.in",
    linkedin: "https://linkedin.com",
    bio: "Mentoring junior committees, tech projects, architectural quality, and technical events."
  },

  // 9. CULTURAL SECRETARY
  {
    id: 9,
    name: "Tejal Warade",
    designation: "CULTURAL SECRETARY",
    sequence: 9,
    category: "cultural",
    badge: "Cultural Wing",
    year: "TE Computer Engineering",
    image: "assets/images/members/member-9.jpg",
    initials: "TW",
    email: "cultural.tejal@godavariengg.ac.in",
    linkedin: "https://linkedin.com",
    bio: "Leading annual cultural gatherings, traditional day celebrations, music, and stage performances."
  },

  // 10. JOINT CULTURAL SECRETARY
  {
    id: 10,
    name: "Savita Sononi",
    designation: "JOINT CULTURAL SECRETARY",
    sequence: 10,
    category: "cultural",
    badge: "Cultural Wing",
    year: "TE Computer Engineering",
    image: "assets/images/members/member-10.jpg",
    initials: "SS",
    email: "jnt.cultural@godavariengg.ac.in",
    linkedin: "https://linkedin.com",
    bio: "Coordinating stage management, cultural rehearsals, decor, and student artistic competitions."
  },

  // 11. TREASURER
  {
    id: 11,
    name: "Aryan Ingole",
    designation: "TREASURER",
    sequence: 11,
    category: "finance",
    badge: "Finance & Accounts",
    year: "TE Computer Engineering",
    image: "assets/images/members/member-11.jpg",
    initials: "AI",
    email: "treasurer.aryan@godavariengg.ac.in",
    linkedin: "https://linkedin.com",
    bio: "Overseeing association budgeting, event expenditures, sponsorship records, and financial balance sheets."
  },

  // 12. JOINT TREASURER
  {
    id: 12,
    name: "Gunjan Mahajan",
    designation: "JOINT TREASURER",
    sequence: 12,
    category: "finance",
    badge: "Finance & Accounts",
    year: "TE Computer Engineering",
    image: "assets/images/members/member-12.jpg",
    initials: "GM",
    email: "jnt.treasurer@godavariengg.ac.in",
    linkedin: "https://linkedin.com",
    bio: "Managing event registration fees, billing receipts, and account reconciliations."
  },

  // 13. SPORTS CO-ORDINATOR
  {
    id: 13,
    name: "Toshit Ingale",
    designation: "SPORTS CO-ORDINATOR",
    sequence: 13,
    category: "sports",
    badge: "Sports Wing",
    year: "TE Computer Engineering",
    image: "assets/images/members/member-13.jpg",
    initials: "TI",
    email: "sports.toshit@godavariengg.ac.in",
    linkedin: "https://linkedin.com",
    bio: "Organizing the department cricket tournament, indoor esports, athletics, and inter-branch sports meets."
  },

  // 14. DISCIPLINE HEAD (1)
  {
    id: 14,
    name: "Vaibhav Pachpol",
    designation: "DISCIPLINE HEAD",
    sequence: 14,
    category: "discipline",
    badge: "Discipline Committee",
    year: "TE Computer Engineering",
    image: "assets/images/members/member-14.jpg",
    initials: "VP",
    email: "discipline.vaibhav@godavariengg.ac.in",
    linkedin: "https://linkedin.com",
    bio: "Ensuring student decorum, venue security, and adherence to codes of conduct during all college functions."
  },

  // 15. DISCIPLINE HEAD (2)
  {
    id: 15,
    name: "Lalit Patil",
    designation: "DISCIPLINE HEAD",
    sequence: 15,
    category: "discipline",
    badge: "Discipline Committee",
    year: "TE Computer Engineering",
    image: "assets/images/members/member-15.jpg",
    initials: "LP",
    email: "discipline.lalit@godavariengg.ac.in",
    linkedin: "https://linkedin.com",
    bio: "Managing auditorium seating, crowd protocols, and student cooperation during campus gatherings."
  },

  // 16 to 25. THE 10 SY CO-ORDINATORS
  {
    id: 16,
    name: "Riddhi Bhirud",
    designation: "SY CO-ORDINATOR",
    sequence: 16,
    category: "sy-coordinator",
    badge: "SY Coordinator (1/10)",
    year: "SE Computer Engineering",
    image: "assets/images/members/member-16.jpg",
    initials: "RB",
    email: "sy.riddhi@godavariengg.ac.in",
    linkedin: "https://linkedin.com",
    bio: "Second Year coordination: Registration drives, seminar invitations, and student queries."
  },
  {
    id: 17,
    name: "Purva Devkar",
    designation: "SY CO-ORDINATOR",
    sequence: 17,
    category: "sy-coordinator",
    badge: "SY Coordinator (2/10)",
    year: "SE Computer Engineering",
    image: "assets/images/members/member-17.jpg",
    initials: "PD",
    email: "sy.purva@godavariengg.ac.in",
    linkedin: "https://linkedin.com",
    bio: "Second Year coordination: Creative publicity, poster designing, and social media announcements."
  },
  {
    id: 18,
    name: "Aachal Kokate",
    designation: "SY CO-ORDINATOR",
    sequence: 18,
    category: "sy-coordinator",
    badge: "SY Coordinator (3/10)",
    year: "SE Computer Engineering",
    image: "assets/images/members/member-18.jpg",
    initials: "AK",
    email: "sy.aachal@godavariengg.ac.in",
    linkedin: "https://linkedin.com",
    bio: "Second Year coordination: Technical workshop lab setups and software installation support."
  },
  {
    id: 19,
    name: "Nandini Petkule",
    designation: "SY CO-ORDINATOR",
    sequence: 19,
    category: "sy-coordinator",
    badge: "SY Coordinator (4/10)",
    year: "SE Computer Engineering",
    image: "assets/images/members/member-19.jpg",
    initials: "NP",
    email: "sy.nandini@godavariengg.ac.in",
    linkedin: "https://linkedin.com",
    bio: "Second Year coordination: Guest speaker hospitality, stage arrangements, and felicitation kits."
  },
  {
    id: 20,
    name: "Samiksha Tayade",
    designation: "SY CO-ORDINATOR",
    sequence: 20,
    category: "sy-coordinator",
    badge: "SY Coordinator (5/10)",
    year: "SE Computer Engineering",
    image: "assets/images/members/member-20.jpg",
    initials: "ST",
    email: "sy.samiksha@godavariengg.ac.in",
    linkedin: "https://linkedin.com",
    bio: "Second Year coordination: Attendance collation, student surveys, and certificate distribution."
  },
  {
    id: 21,
    name: "Sakshi Patil",
    designation: "SY CO-ORDINATOR",
    sequence: 21,
    category: "sy-coordinator",
    badge: "SY Coordinator (6/10)",
    year: "SE Computer Engineering",
    image: "assets/images/members/member-21.jpg",
    initials: "SP",
    email: "sy.sakshipatil@godavariengg.ac.in",
    linkedin: "https://linkedin.com",
    bio: "Second Year coordination: Event photography, digital archives, and photo gallery curation."
  },
  {
    id: 22,
    name: "Mohit Chaudhari",
    designation: "SY CO-ORDINATOR",
    sequence: 22,
    category: "sy-coordinator",
    badge: "SY Coordinator (7/10)",
    year: "SE Computer Engineering",
    image: "assets/images/members/member-22.jpg",
    initials: "MC",
    email: "sy.mohit@godavariengg.ac.in",
    linkedin: "https://linkedin.com",
    bio: "Second Year coordination: Coding contest platform testing and volunteer team logistics."
  },
  {
    id: 23,
    name: "Gaurav Ingale",
    designation: "SY CO-ORDINATOR",
    sequence: 23,
    category: "sy-coordinator",
    badge: "SY Coordinator (8/10)",
    year: "SE Computer Engineering",
    image: "assets/images/members/member-23.jpg",
    initials: "GI",
    email: "sy.gaurav@godavariengg.ac.in",
    linkedin: "https://linkedin.com",
    bio: "Second Year coordination: Audio-visual setup, projection systems, and stage tech operations."
  },
  {
    id: 24,
    name: "Pranay Patil",
    designation: "SY CO-ORDINATOR",
    sequence: 24,
    category: "sy-coordinator",
    badge: "SY Coordinator (9/10)",
    year: "SE Computer Engineering",
    image: "assets/images/members/member-24.jpg",
    initials: "PP",
    email: "sy.pranay@godavariengg.ac.in",
    linkedin: "https://linkedin.com",
    bio: "Second Year coordination: Technical quiz management, participant desk, and crowd support."
  },
  {
    id: 25,
    name: "Rohan Rathod",
    designation: "SY CO-ORDINATOR",
    sequence: 25,
    category: "sy-coordinator",
    badge: "SY Coordinator (10/10)",
    year: "SE Computer Engineering",
    image: "assets/images/members/member-25.jpg",
    initials: "RR",
    email: "sy.rohan@godavariengg.ac.in",
    linkedin: "https://linkedin.com",
    bio: "Second Year coordination: Venue coordination, sports event assistance, and equipment tracking."
  }
];

/**
 * Event Photo Gallery Data
 */
const GALLERY_EVENTS = [
  {
    id: 1,
    title: "National Tech-Symposium & Hackathon 2024",
    category: "technical",
    categoryLabel: "Technical Events",
    date: "February 22, 2024",
    location: "Computer Labs 1-4 & Main Auditorium",
    description: "A 24-hour inter-college coding marathon and project showcase involving 60+ teams across Maharashtra solving real-world challenges in AI, Web3, and IoT.",
    badge: "Grand Annual Techfest",
    image: "assets/images/gallery/event-hackathon.svg",
    stats: "350+ Participants • 42 Projects"
  },
  {
    id: 2,
    title: "Full-Stack Web & Cloud Architecture Workshop",
    category: "workshops",
    categoryLabel: "Workshops & Seminars",
    date: "September 15, 2024",
    location: "Seminar Hall - Ground Floor",
    description: "Hands-on industrial masterclass conducted by alumni software engineers from leading IT firms on Docker containers, React, Node.js, and CI/CD pipelines.",
    badge: "Skill Development",
    image: "assets/images/gallery/event-workshop.svg",
    stats: "120 Attendees • Certified"
  },
  {
    id: 3,
    title: "CESA Annual Grand Cultural Gathering & Traditional Day",
    category: "cultural",
    categoryLabel: "Cultural & Celebrations",
    date: "January 18, 2024",
    location: "College Open Air Amphitheatre",
    description: "Vibrant cultural evening celebrating Maharashtra's rich heritage, drama skits on social issues, musical performances, and batch felicitation.",
    badge: "Cultural Fiesta",
    image: "assets/images/gallery/event-cultural.svg",
    stats: "Whole Department • 18 Acts"
  },
  {
    id: 4,
    title: "Expert Guest Lecture on AI, ML & Future of Tech",
    category: "workshops",
    categoryLabel: "Workshops & Seminars",
    date: "August 10, 2024",
    location: "Virtual & Physical Hybrid Hall",
    description: "Interactive session exploring Large Language Models, ethical AI deployment, and emerging career opportunities for undergraduates.",
    badge: "Industry Connect",
    image: "assets/images/gallery/event-ai-seminar.svg",
    stats: "200+ Students • Q&A Session"
  },
  {
    id: 5,
    title: "Annual Departmental Sports Meet & Cricket League",
    category: "sports",
    categoryLabel: "Sports & Activities",
    date: "December 28, 2023",
    location: "Godavari Sports Complex Ground",
    description: "Intra-department cricket tournament, volleyball championships, and indoor chess/carrom battles building teamwork and athletic resilience.",
    badge: "Sports Tournament",
    image: "assets/images/gallery/event-sports.svg",
    stats: "16 Teams • 4 Disciplines"
  },
  {
    id: 6,
    title: "Engineers' Day Celebrations & Project Exhibition",
    category: "technical",
    categoryLabel: "Technical Events",
    date: "September 15, 2023",
    location: "Central Library Quadrangle",
    description: "Commemorating Sir M. Visvesvaraya with project exhibitions, blind coding competitions, circuit debugging, and technical paper presentations.",
    badge: "Innovation Showcase",
    image: "assets/images/gallery/event-engineers-day.svg",
    stats: "48 Exhibits • Faculty Judges"
  },
  {
    id: 7,
    title: "Industrial Visit to IT Tech Park & Data Centers",
    category: "workshops",
    categoryLabel: "Workshops & Seminars",
    date: "November 08, 2023",
    location: "Pune Hinjewadi IT Park",
    description: "Educational study tour where students interacted with server administrators, observed server clusters, and studied enterprise cloud setups.",
    badge: "Field Experience",
    image: "assets/images/gallery/event-industrial-visit.svg",
    stats: "85 Students • 3 IT Companies"
  },
  {
    id: 8,
    title: "Fresher's Induction & CESA Grand Welcome Meet",
    category: "cultural",
    categoryLabel: "Cultural & Celebrations",
    date: "August 25, 2024",
    location: "Main Auditorium",
    description: "Warm welcome to the incoming batch with introduction to department clubs, coding society perks, team bonding games, and council induction.",
    badge: "Orientation",
    image: "assets/images/gallery/event-freshers.svg",
    stats: "250+ Freshers & Seniors"
  },
  {
    id: 9,
    title: "Code-Blitz: Intra-College Speed Coding Battle",
    category: "technical",
    categoryLabel: "Technical Events",
    date: "October 14, 2024",
    location: "Advanced Computing Lab",
    description: "High-intensity competitive programming duel testing DSA knowledge, algorithmic speed, and bug fixes across C++, Java, and Python.",
    badge: "Speed Coding",
    image: "assets/images/gallery/event-code-blitz.svg",
    stats: "90 Coders • Cash Prizes"
  }
];
