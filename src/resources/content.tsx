import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Row } from "@once-ui-system/core";

const person: Person = {
  firstName: "Abdullah",
  lastName: "Siddique",
  name: "Abdullah Siddique",
  role: "AI Engineer & Consultant",
  avatar: "/images/avatar.jpg",
  email: "",
  location: "America/Vancouver",
  languages: ["English"],
  locale: "en", // BCP 47 language tag for the HTML lang attribute, e.g., 'en', 'ja', 'zh-TW'
};

const newsletter: Newsletter = {
  display: false,
  title: <></>,
  description: <></>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/siddicky",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/a-sdq",
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as an ${person.role}`,
  headline: <>AI engineer &amp; consultant who ships production LLM systems — RAG, agents, red-teaming</>,
  featured: {
    display: true,
    title: (
      <Row>Featured work</Row>
    ),
    href: "/work/thebehumancompany",
  },
  subline: (
    <>7+ years across software engineering and cybersecurity — production LLM systems spanning RAG, agents, and red-teaming.</>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} based in Vancouver, Canada`,
  tableOfContent: {
    display: false,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Abdullah is an AI engineer with 7+ years across software engineering and cybersecurity.
        He builds and operates production AI systems: multi-agent LangGraph architectures, RAG
        pipelines, and the enterprise infrastructure around them — evaluation suites,
        human-approval controls, tenant isolation, and PII protection.
        <br />
        <br />
        His route there runs through regulated and security-first environments: capital-market data
        products at the Pakistan Stock Exchange, an LLB from LUMS and a BBA in Accounting &amp;
        Finance from IoBM, and OSCP/OSEP certifications — which is why the engineering defaults
        to evidence, authorization, and audit trails.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "OffSec",
         timeframe: "Jan 2023 – Jul 2026",
         role: "AI Engineer (Software Engineer L2, AI Innovation & Development)",
        achievements: [
          <>
             Took KAI from concept to production as an AI-powered mentor for OffSec learners.
          </>,
          <>
             Built OSCAR, a support agent that cut contextualized ticket volume by 40%.
           </>,
          <>
            Built a LangGraph/Deep Agents B2B orchestrator for enterprise retention.
          </>,
        ],
      },
      {
        company: "The Be Human Company",
        timeframe: "Jul 2026 – Present",
        role: "Co-Founder & CTO / Chief AI Officer",
        achievements: [
          <>
            Building AI governance SaaS with 65+ controls and a fail-closed authorization gateway.
          </>,
        ],
      },
      {
        company: "JSW AI Services",
        timeframe: "May 2025 – Jan 2026",
        role: "Principal AI Engineer",
        achievements: [
          <>
            Built Monet AI's LangGraph supervisor with MongoDB hybrid RAG, Snowflake analytics,
            and human-approval gates.
          </>,
        ],
      },
      {
        company: "Polymer Runtime Data Security",
        timeframe: "Jul 2024 – Dec 2024",
        role: "Senior Python Developer",
        achievements: [<>Built PII/PHI NLP detection and DLP capabilities for SOC 2 and HIPAA.</>],
      },
      {
        company: "Pakistan Stock Exchange",
        timeframe: "Jan 2018 – Dec 2019",
        role: "Data Vending Officer, Product & Research",
        achievements: [<>Worked on capital-market data products.</>],
      },
    ],
  },
  studies: {
    display: false,
    title: "Studies",
    institutions: [],
  },
  technical: {
    display: false,
    title: "Technical skills",
    skills: [],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  images: [],
};

export { person, social, newsletter, home, about, blog, work, gallery };
