import Link from "next/link";
import Image from "next/image";
import ScreenshotItem from "@/ui/ScreenshotItem";

import getProjectBySlug from "@/core/getProjectBySlug";

type Props = {
  params: {
    slug: string;
  };
};

export default async function ProjectPage({ params }: Props) {
  const project = await getProjectBySlug(params.slug);
  return (
    <div className="sm:border sm:border-gray-100 sm:p-4 rounded-lg grid gap-4">
      <div>
        <Link
          href="/"
          className="border-b-2 border-b-transparent hover:border-b-yellow-500 transition-colors duration-300 ease-in-out pb-2 group"
        >
          <span className="mr-1">
            <svg
              className="w-6 h-6 inline-block translate-x-0 group-hover:-translate-x-1 transition-transform duration-300 ease-in-out"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
              />
            </svg>
          </span>
          <span>Back to Projects</span>
        </Link>
      </div>
      <div className="grid gap-2">
        <h2 className="border-b-2 border-gray-100 inline-block">
          {project.name}
        </h2>
        <p className="font-mono hidden sm:block md:hidden">
          {project.description}
        </p>
      </div>
      <div className="flex gap-4 sm:hidden">
        <Link
          href={project.demo}
          className="border border-yellow-500 p-2 hover:bg-yellow-700 hover:text-white transition-colors duration-300 ease-in-out"
        >
          Demo
        </Link>
        {project.github && (
          <Link
            href={project.github}
            className="border border-yellow-500 p-2 hover:bg-yellow-700 hover:text-white transition-colors duration-300 ease-in-out"
          >
            GitHub
          </Link>
        )}
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Image
          className="rounded-xl"
          src={project.mainImageUrl}
          alt={project.name}
          width={900}
          height={900}
        />
        <div className="flex flex-col gap-8">
          <div className="sm:hidden md:block">
            <h3 className="hidden md:block">Intro</h3>
            <p className="font-mono">{project.description}</p>
          </div>
          <div className="flex flex-col gap-4 sm:border-b sm:border-b-gray-500 pb-4">
            <h3 className="border-b border-b-gray-500 sm:border-b-0">
              Tech Stack
            </h3>
            <ul className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <li
                  key={tech.id}
                  className="border border-yellow-700 px-2 py-1 rounded-lg"
                >
                  {tech.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="gap-4 hidden sm:flex">
            <Link
              href={project.demo}
              className="border border-yellow-500 p-2 hover:bg-yellow-700 hover:text-white transition-colors duration-300 ease-in-out"
            >
              Demo
            </Link>
            {project.github && (
              <Link
                href={project.github}
                className="border border-yellow-500 p-2 hover:bg-yellow-700 hover:text-white transition-colors duration-300 ease-in-out"
              >
                GitHub
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className="grid gap-2">
        <h3 className="border-b border-gray-500">Details</h3>
        <div
          className="html_content"
          dangerouslySetInnerHTML={{
            __html: project.detailHTML,
          }}
        />
      </div>
      <div className="grid gap-4">
        <h3 className="border-b border-gray-400">Screenshots</h3>
        <ul className="flex flex-wrap gap-2">
          {project.screenshots.map((screenshot) => (
            <li key={screenshot.id}>
              <ScreenshotItem screenshot={screenshot} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
