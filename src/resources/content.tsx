import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Row } from "@once-ui-system/core";

const person: Person = {
  firstName: "Tehreem",
  lastName: "Siddiqui",
  name: "Tehreem Siddiqui",
  role: "AI Engineer & Consultant",
  avatar: "/images/avatar.jpg",
  email: "tehreemsiddiqui19@gmail.com",
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
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
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
    <>A portfolio of production LLM systems spanning RAG, agents, and red-teaming.</>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
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
        {person.firstName} is an {person.role} who builds production LLM systems:
        retrieval-augmented (RAG) pipelines, agent systems, and AI red-teaming frameworks.
        Her focus is turning language models into dependable software, with evaluation and
        safety handled as part of the engineering rather than bolted on afterward.
        <br />
        <br />
        She came to AI engineering from financial investigations and insolvency compliance,
        where she analyzed financial records and supported proceedings under the Bankruptcy
        and Insolvency Act. That regulated-industry background still shapes how she works:
        verify the evidence, document the trail, and never claim more than the record
        supports.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "OffSec",
        timeframe: "Recent role",
        role: "AI Engineer",
        achievements: [
          <>
            Built KAI, an AI-powered mentor that helps OffSec learners triage questions and
            work through guided exercises.
          </>,
          <>
            Built OSCAR, a Slack data agent that answers natural-language questions over
            internal data.
          </>,
        ],
      },
      {
        company: "Monetate",
        timeframe: "Recent engagement",
        role: "AI Engineer",
        achievements: [
          <>
            Built the Monet Chat App, a streaming chat application with agent workflows,
            auth, and thread storage.
          </>,
        ],
      },
      {
        company: "Nymble",
        timeframe: "Recent engagement",
        role: "AI Engineer",
        achievements: [
          <>
            Built a healthcare RAG assistant with PII handling safeguards and an evaluation
            pipeline.
          </>,
        ],
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
