import type { ProjectSummary } from "@/types";

interface Props {
  projects: ProjectSummary[];
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
