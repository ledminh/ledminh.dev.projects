import Link from "next/link";
import type { ProjectSummary } from "@/types";

interface Props {
  projects: ProjectSummary[];
}
export default function ProjectList({ projects }: Props) {
  return (
    <ul className="grid gap-6">
      {projects.map((project) => (
        <li key={project.id}>
          <Link
            href={`/projects/${project.slug}`}
            className="grid grid-cols-5 gap-4 group hover:bg-slate-700 rounded-xl p-4 transition-colors duration-300 ease-in-out"
          >
            <div className="bg-slate-800 rounded-xl p-4 col-span-2 border border-transparent group-hover:border-slate-400 transition-border duration-300 ease-in-out">
              <h2 className="text-2xl">{project.name}</h2>
            </div>
            <div className={"col-span-3 flex justify-center items-center"}>
              <p>{project.description}</p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
