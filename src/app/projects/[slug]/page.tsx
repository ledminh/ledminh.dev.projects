import Link from "next/link";
import Image from "next/image";
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
      <div className="grid gap-2">
        <h2 className="border-b-2 border-gray-100 inline-block">
          {project.name}
        </h2>
        <p className="font-mono hidden sm:block">{project.description}</p>
      </div>
      <div>
        <Link
          href="/"
          className="border-b-2 border-b-transparent hover:border-b-yellow-500 transition-colors duration-300 ease-in-out"
        >
          Back to Projects
        </Link>
      </div>
      <div className="flex gap-4">
        <Link href={project.demo} className="border border-yellow-500 p-2">
          Demo
        </Link>
        <Link href={project.github} className="border border-yellow-500 p-2">
          GitHub
        </Link>
      </div>
      <Image
        src={project.mainImageUrl}
        alt={project.name}
        width={400}
        height={300}
      />
      <ul>
        {project.techStack.map((tech) => (
          <li key={tech.id}>{tech.name}</li>
        ))}
      </ul>
      <div
        dangerouslySetInnerHTML={{
          __html: project.detailHTML,
        }}
      />
      <ul>
        {project.screenshots.map((screenshot) => (
          <li key={screenshot.id}>
            <Image
              src={screenshot.src}
              alt={screenshot.alt}
              width={400}
              height={300}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
