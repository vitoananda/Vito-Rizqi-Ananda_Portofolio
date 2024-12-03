import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Vito Ananda",
  initials: "VA",
  url: "https://dillion.io",
  location: "Jakarta, ID",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description: "Junior Back-End Developer with 1+ Year of experience",
  summary:
    'I am a fresh graduate Information Systems major from UPN "Veteran" Yogyakarta who have a strong foundation in backend engineering, utilizing various frameworks and programming languages to develop efficient and scalable systems. My technical expertise includes working with frameworks such as Laravel, Kotlin Spring Boot, .NET, and Parse Server. I am proficient in programming languages like Kotlin, TypeScript, Javascript, and C#.',
  avatarUrl: "/me.png",
  skills: ["Spring Boot", "Laravel", ".NET", "Node JS"],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/vitoananda",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/vito-rizqi-ananda/",
        icon: Icons.linkedin,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Berijalan",
      href: "https://berijalan.co.id/",
      badges: [],
      location: "Remote",
      title: "Back-End Developer Associate",
      logoUrl: "/logo_berijalan.png",
      start: "January 2024",
      end: "Now",
      description:
        "Managed two projects using Laravel and Kotlin Spring Boot, optimizing scheduled tasks, enhancing databases, ensuring code quality through testing, integrating back-end services, and collaborating efficiently via GitLab.",
    },
    {
      company: "United Tractors",
      badges: [],
      href: "https://www.unitedtractors.com/en/",
      location: "Jakarta",
      title: "Back-End Developer Intern",
      logoUrl: "/logo_ut.png",
      start: "February 2024",
      end: "June 2024",
      description:
        "Executed back-end development within the DAD division's MMA workstream, delivering a large-scale administrative website for managing sports events across United Tractors locations, leveraging Parse Server, ngrok, and Mermaid for efficient collaboration and function visualization.",
    },
    {
      company: "Berijalan",
      href: "https://berijalan.co.id/",
      badges: [],
      location: "Yogyakarta",
      title: "Back-End Developer Intern",
      logoUrl: "/logo_berijalan.png",
      start: "September 2023",
      end: "January 2024",
      description:
        'Acquired expertise in React Native, Next.js, .NET Framework, and Kotlin Spring Boot by developing mobile apps, full-stack websites, and APIs, and contributed to the "Setir Kanan" automotive platform by enhancing its CMS and dashboard using Laravel.',
    },
  ],
  education: [
    {
      school: 'Universitas Pembangunan Nasional "Veteran" Yogyakarta',
      href: "https://www.upnyk.ac.id/",
      degree: "Bachelor's Degree of Information System (S.Kom)",
      description:
        'Final thesis titled "Enterprise Architecture Planning Using TOGAF-ADM at PT. XYZ" focuses on designing software solutions by creating table designs, database design, network infrastructure, Value Chain Analysis, BPMNs, ERDs, and other related artifacts to integrate with business processes.',
      logoUrl: "/logo_upn.png",
      start: "2020",
      end: "2024",
    },
  ],
  projects: [
    {
      title: "BeFast",
      href: "",
      dates: "June 2024 - November 2024",
      active: false,
      description:
        "Develop the backend application entirely from scratch, leveraging the Spring Boot framework to serve as the backbone for both the application's core functionalities and the Content Management System (CMS), ensuring seamless integration and scalability.",
      technologies: ["Spring Boot", "PostgreSQL"],
      links: [],
      image: "/Befast_menu.png",
      video: "",
    },
    {
      title: "Olympiad Admin",
      href: "",
      dates: "Feb 2024 - June 2024",
      active: false,
      description:
        "Develop the backend application from scratch for the admin of an existing application, utilizing Parse Server with TypeScript to enable seamless data management and streamlined monitoring for enhanced scalability and efficiency.",
      technologies: ["Parse Server", "Typescript"],
      links: [],
      image: "/Olympiad_menu.png",
      video: "",
    },
    {
      title: "Setir Kanan",
      href: "https://setirkanan.co.id/",
      dates: "Oct 2024 - Dec 2024",
      active: false,
      description:
        "Enhance the existing CMS using Laravel MVC and improve the website dashboard by implementing Laravel API based on the change requests.",
      technologies: ["Laravel API", "Laravel MVC", "MySQL"],
      links: [
        {
          type: "Website",
          href: "https://setirkanan.co.id/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/Setir Kanan.mp4",
    },
    {
      title: "SkinSight",
      href: "https://github.com/vitoananda/SkinSight",
      dates: "June 2023 - July 2023",
      active: false,
      description:
        "Develop the entire backend service using Node.js with the Hapi framework and Python with the Flask framework, integrating it with a machine learning model. Utilize Firestore on GCP as the database and deploy the solution using Cloud Run.",
      technologies: [
        "Node JS",
        "Hapi Frameork",
        "Python",
        "Flask",
        "Google Cloud Platform",
        "Firestore",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/vitoananda/SkinSight",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/SkinSight_menu.png",
      video: "",
    },
  ],
} as const;
