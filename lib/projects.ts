import { Music, PawPrint, LucideProps } from "lucide-react";

export interface ImageData {
  src: string;
  alt: string;
}

export interface ProjectData {
  id: string;
  title: string;
  icon: React.ComponentType<LucideProps>;
  description: string;
  technologies: string[];
  images: ImageData[];
  live: string;
  github: string;
}

export const projects: ProjectData[] = [
  {
    id: "music-search",
    title: "Music Search",
    icon: Music,
    description:
      "Search for music, via Discogs database, by artists, album, genre, and more! Search results rendering animation, pagination, album details page includes includes track list.",
    technologies: [
      "TypeScript",
      "React 15",
      "Next.js 19",
      "tailwindcss",
      "shadcn/ui",
      "motion",
      "zod",
      "React Hook Form",
    ],
    images: [
      { src: "/musicsearch-home.png", alt: "music search home page" },
      { src: "/musicsearch-search.png", alt: "music search search results" },
      {
        src: "/musicsearch-details.png",
        alt: "music search album details page",
      },
    ],
    live: "https://discogs-nine.vercel.app/",
    github: "https://github.com/RunHannah/discogs",
  },
  {
    id: "dog-finder",
    title: "Dog Finder",
    icon: PawPrint,
    description:
      "Find your new best friend! Like and see if you're a match. User session managed by cookies for authenticated login, protected routes, search by city and state, and filter and order search results.",
    technologies: [
      "TypeScript",
      "React 15",
      "Next.js 19",
      "tailwindcss",
      "shadcn/ui",
      "zod",
      "React Hook Form",
    ],
    images: [
      { src: "/dogfinder-home.png", alt: "dog finder home page" },
      { src: "/dogfinder-login.png", alt: "dog finder login form" },
      { src: "/dogfinder-search.png", alt: "dog finder search page" },
      { src: "/dogfinder-match.png", alt: "dog finder match success" },
    ],
    live: "https://dog-finder-six.vercel.app/",
    github: "https://github.com/RunHannah/dog-finder",
  },
];
