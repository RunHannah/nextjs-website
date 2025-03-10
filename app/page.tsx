"use client";

import { Construction } from "lucide-react";
import Project from "@/components/project";
import { projects } from "@/lib/projects";

function HomeContent() {
  return (
    <>
      <div className="mb-8">
        <p className="font-body font-bold text-base pt-4 leading-[1.8] text-gray-800 dark:text-white text-center">
          * Due to company restructuring, I am looking 👀 for new opportunities
          in Fullstack and Frontend roles. *
        </p>
        <p className="font-body text-sm md:text-base pt-4 leading-[1.8] text-gray-800 dark:text-white">
          I&apos;m a software engineer based in Los Angeles ☀️ with expertise in
          Typescript, React, Next.js, Node, PostgreSQL, MongoDB, REST APIs, and
          other fun stuff. Passionate about building robust web apps and always
          learning new technologies. Former public sector professional bringing
          a unique, problem-solving mindset to tech!
        </p>
        <p className="font-body text-sm md:text-base pt-4 leading-[1.8] text-gray-800 dark:text-white flex flex-row">
          <Construction className="pr-2" /> Activley building and updating this
          site... <Construction className="pl-2" />
        </p>
      </div>

      {/* Portfolio projects */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        <Project projects={projects} />
      </div>
    </>
  );
}

export default function Home() {
  return <HomeContent />;
}
