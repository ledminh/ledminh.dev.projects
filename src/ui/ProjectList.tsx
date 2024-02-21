import Link from "next/link";
import type { ProjectSummary } from "@/types";

interface Props {
  projects: ProjectSummary[];
}
export default function ProjectList({ projects }: Props) {
  return (
    <ul className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {projects.map((project) => (
        <li key={project.id}>
          <Link
            href={`/projects/${project.slug}`}
            className="h-full grid grid-cols-5 gap-4 group hover:bg-slate-700 rounded-xl p-4 transition-colors duration-300 ease-in-out sm:grid-cols-1 sm:grid-row-6 sm:border sm:border-slate-400 sm:p-0"
          >
            <div className="bg-slate-800 rounded-xl p-4 col-span-2 border border-transparent group-hover:border-slate-400 transition-border duration-300 ease-in-out sm:col-span-1 sm:row-span-2 sm:h-16 sm:flex sm:item-center">
              <h2 className="text-lg sm:text-xl">{project.name}</h2>
            </div>
            <div className="col-span-3 flex justify-center items-center sm:p-2 sm:col-span-1 sm:row-span-4">
              <p>{project.description}</p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
