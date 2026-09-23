import type { PastEventsContent } from "@/types/past-events";

const photos = {
  ceremony: {
    src: "/events/certification-ceremony-hero.jpg",
    alt: "Participants at Odisha’s First AI Simulation Bootcamp by HireKarma",
  },
  workshop: {
    src: "/events/workshop-session.jpg",
    alt: "Hands-on AI learning session during the HireKarma bootcamp",
  },
  presentation: {
    src: "/events/certificate-presentation.jpg",
    alt: "Moment from HireKarma AI Simulation Bootcamp",
  },
  recognition: {
    src: "/events/recognition-moment.jpg",
    alt: "Students building practical AI skills at HireKarma bootcamp",
  },
  ariseWebinar: {
    src: "/events/arise-hub-webinar.png",
    alt: "ARISE Hub Webinar – The Rise of the AI-Native Professional live session",
  },
  careerOrientation: {
    src: "/events/career-orientation-rcem.png",
    alt: "Career Orientation Virtual Program for Rajdhani College of Engineering & Management students",
  },
  bputHackathon1: {
    src: "/events/bput-hackathon-1.jpg",
    alt: "Speaker at the BPUT Hackathon 2025 Valedictory Ceremony podium",
  },
  bputHackathon2: {
    src: "/events/bput-hackathon-2.jpg",
    alt: "Recognition moment on stage at BPUT Hackathon 2025 Valedictory Ceremony",
  },
  bputHackathon3: {
    src: "/events/bput-hackathon-3.jpg",
    alt: "Felicitation ceremony during BPUT Hackathon 2025 Valedictory Ceremony",
  },
  bputHackathonCover: {
    src: "/events/bput-hackathon-4.jpg",
    alt: "Award presentation on stage at BPUT Hackathon 2025 Valedictory Ceremony",
  },
  ojobz1: {
    src: "/events/ojobz-drive-1.jpg",
    alt: "Group photo at BPUT O-JOBZ Campus Placement Drive with HireKarma banners",
  },
  ojobz2: {
    src: "/events/ojobz-drive-2.jpg",
    alt: "Students and recruiters at BPUT O-JOBZ Campus Recruitment Drive seminar hall",
  },
  ojobz3: {
    src: "/events/ojobz-drive-3.jpg",
    alt: "Campus stakeholders and students outdoor group photo during O-JOBZ drive",
  },
  ojobz4: {
    src: "/events/ojobz-drive-4.jpg",
    alt: "Students and Arizona Automation delegates at BPUT O-Jobz Campus Recruitment Drive",
  },
} as const;

export const pastEventsContent: PastEventsContent = {
  eyebrow: "Highlights",
  title: "Past Events",
  titleHighlight: "Events",
  description:
    "Highlights from HireKarma’s webinars, bootcamps, and hackathons — moments that bring our community together.",
  viewGalleryLabel: "View Gallery",
  photoCountLabel: "Photos",
  events: [
    {
      id: "ai-simulation-bootcamp-2026",
      category: "Bootcamp",
      badgeTone: "purple",
      title: "Empowering Students with Practical AI Skills",
      date: "30 July 2026",
      location: "Odisha",
      description:
        "Odisha’s First AI Simulation Bootcamp — an intensive learning initiative helping students and aspiring professionals apply Artificial Intelligence in real-world scenarios.",
      body: `On 30 July 2026, HireKarma organized Odisha's First AI Simulation Bootcamp, an intensive learning initiative designed to help students and aspiring professionals understand and apply Artificial Intelligence in real-world scenarios.

The bootcamp delivered practical exposure to AI tools, prompt engineering, AI-powered productivity, resume enhancement, and interview preparation. Through hands-on learning and workplace-inspired simulations, participants explored how Artificial Intelligence can be used to solve practical challenges and support career development.

The initiative focused on bridging the gap between theoretical knowledge and practical application, helping students build AI-ready skills and gain confidence in using emerging technologies.`,
      photoCount: 4,
      heroImage: photos.ceremony,
      gallery: [
        photos.ceremony,
        photos.presentation,
        photos.recognition,
        photos.workshop,
      ],
    },
    {
      id: "arise-hub-webinar-2026",
      category: "Webinar",
      badgeTone: "teal",
      title: "Helping Learners Understand the Future of AI-Driven Careers",
      date: "21 August 2026",
      location: "Online · DISHA",
      description:
        "ARISE Hub Webinar – “The Rise of the AI-Native Professional” — 241 participants exploring AI-driven careers through DISHA.",
      body: `On 21 August 2026, HireKarma successfully delivered the ARISE Hub Webinar – “The Rise of the AI-Native Professional” through the DISHA platform, bringing together 241 participants to explore the changing landscape of AI-driven careers.

The webinar focused on how Artificial Intelligence is transforming careers and workplaces, while introducing participants to essential AI and Agentic AI skills, practical applications, and the importance of gaining real-world experience beyond traditional learning.

Through live AI demonstrations and discussions, participants explored how ideas can move from Prompt → Build → Working Prototype and gained insights into applying AI in practical professional scenarios.

The session also introduced participants to the ARISE Hub learning journey, highlighting guided projects, mentorship, practical challenges, portfolio development, and the pathway from AI learner to AI practitioner.`,
      photoCount: 1,
      heroImage: photos.ariseWebinar,
      gallery: [photos.ariseWebinar],
    },
    {
      id: "career-orientation-rcem-2026",
      category: "Orientation",
      badgeTone: "blue",
      title: "Helping Students Navigate the Journey from College to Career",
      date: "11 September 2026",
      location: "Online · DISHA",
      description:
        "Career Orientation Virtual Program for Rajdhani College of Engineering & Management — 61 students exploring the path from college to career.",
      body: `On 11 September 2026, we successfully delivered a Career Orientation Virtual Program through the DISHA platform for students of Rajdhani College of Engineering & Management, with 61 students participating in the virtual session.

The program was designed to help students understand the transition from college to the professional world and make informed career decisions. The session covered career direction, the evolving employment landscape, essential technical and soft skills, professional profile building, and workplace readiness.

Students also received practical guidance on Resume and LinkedIn profile development, projects and internships, job search strategies, placement processes, and interview preparation. The session encouraged students to take a structured approach to career development by building relevant skills, gaining practical experience, and preparing for future opportunities.

What We Delivered to Students

Career Direction: Guidance on exploring career paths based on interests, strengths, skills, and industry requirements.

Industry & Employment Awareness: Insights into the changing job market and evolving employer expectations.

Skill Development: Understanding of essential technical, communication, teamwork, problem-solving, and workplace skills.

Professional Profile Building: Practical guidance on resumes, LinkedIn profiles, projects, internships, and professional visibility.

Placement Preparation: Awareness of modern recruitment processes and how recruiters evaluate candidates.

Interview Readiness: Guidance to improve communication, confidence, presentation, and overall interview preparation.

Event Highlights

A glimpse into the successfully delivered virtual career orientation session, featuring 61 student participants, interactive career guidance, placement-readiness insights, and practical discussions on building skills, professional visibility, and career readiness.`,
      photoCount: 1,
      heroImage: photos.careerOrientation,
      gallery: [photos.careerOrientation],
    },
    {
      id: "bput-hackathon-2025",
      category: "Hackathon",
      badgeTone: "orange",
      title: "Celebrating Innovation at BPUT Hackathon 2025",
      date: "2025",
      location: "Rourkela, Odisha",
      description:
        "HireKarma at the BPUT Hackathon 2025 Valedictory Ceremony — celebrating innovation, technology, creativity, and student-led problem solving.",
      body: `HireKarma was proud to be part of the BPUT Hackathon 2025 Valedictory Ceremony, hosted by Biju Patnaik University of Technology, Odisha, celebrating innovation, technology, creativity, and student-led problem solving.

The valedictory ceremony marked the culmination of an exciting hackathon journey that brought together students, mentors, academic leaders, and technology enthusiasts to explore ideas and develop solutions to real-world challenges.

The event provided students with an opportunity to move beyond classroom learning and experience innovation, teamwork, technology, and practical problem-solving in an engaging environment.

The ceremony also recognized the efforts and achievements of the participants, celebrating their dedication and contribution to the hackathon.

Event Highlights

A glimpse into the BPUT Hackathon 2025 Valedictory Ceremony, capturing moments of recognition, collaboration, and celebration as students and stakeholders came together to celebrate the spirit of innovation and technology.`,
      photoCount: 3,
      heroImage: photos.bputHackathonCover,
      gallery: [
        photos.bputHackathon1,
        photos.bputHackathon2,
        photos.bputHackathon3,
      ],
    },
    {
      id: "bput-ojobz-campus-recruitment-2025",
      category: "Placement",
      badgeTone: "teal",
      title: "Connecting Students with Real-World Career Opportunities",
      date: "May 2025",
      location: "BPUT · Odisha",
      description:
        "BPUT O-JOBZ Campus Recruitment Drive — bringing students and recruiters together through a structured campus hiring experience.",
      body: `HireKarma successfully supported a BPUT O-JOBZ Campus Recruitment Drive, bringing students and recruiters together through a structured campus hiring experience.

The drive provided students with an opportunity to engage directly with industry representatives, understand recruitment expectations, and participate in the campus selection process. It created a platform where students could showcase their skills and explore potential career opportunities.

The event also reflected the importance of strengthening the connection between universities, students, and industry, making campus recruitment more accessible and organized for aspiring graduates.

Event Highlights

A glimpse into the BPUT O-JOBZ Campus Recruitment Drive, featuring students, academic representatives, and recruitment stakeholders coming together for an industry-focused campus hiring experience.`,
      photoCount: 4,
      heroImage: photos.ojobz1,
      gallery: [
        photos.ojobz1,
        photos.ojobz2,
        photos.ojobz3,
        photos.ojobz4,
      ],
    },
  ],
};
