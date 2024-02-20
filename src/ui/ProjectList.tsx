import type { Project as ProjectType } from "@/types";

interface Props {
  projects: ProjectType[];
}
export default function ProjectList({ projects }: Props) {
  return (
    <ul>
      {projects.map((project) => (
        <li key={project.id}>
          <h2>{project.name}</h2>
          <p>{project.description}</p>
        </li>
      ))}
    </ul>
  );
}
