import { Code } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ImageCarousel from "@/components/imageCarousel";
import { ProjectData } from "@/lib/projects";

interface ProjectProps {
  projects: ProjectData[];
}

export default function Project({ projects }: ProjectProps) {
  return (
    <>
      {projects.map(
        ({
          id,
          title,
          icon: Icon,
          description,
          technologies,
          images,
          live,
          github,
        }) => (
          <Card key={id} className="m-2">
            <CardHeader className="mb-4 md:mb-0">
              <CardTitle className="font-body font-bold text-primary flex flex-row items-center">
                {title}

                <Icon className="text-gray-500 ml-2" />
              </CardTitle>
              <CardDescription className="font-body h-[70px] text-secondary">
                {description}
              </CardDescription>
            </CardHeader>
            {images.length > 0 && <ImageCarousel images={images} />}
            <CardContent>
              <p className="font-body font-bold flex flex-row text-primary">
                Tech <Code className="pl-2" />
              </p>
              <ul className="flex flex-wrap">
                {technologies.map((tech) => (
                  <li
                    key={tech}
                    className="font-body text-sm pr-3 text-secondary"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="flex flex-row justify-around">
              <a
                className="font-body font-bold text-primary hover:cursor-pointer"
                href={live}
                target="_blank"
                rel="noopener noreferrer"
              >
                demo
              </a>
              <a
                className="font-body font-bold text-primary hover:cursor-pointer"
                href={github}
                target="_blank"
                rel="noopener noreferrer"
              >
                github
              </a>
            </CardFooter>
          </Card>
        )
      )}
    </>
  );
}
