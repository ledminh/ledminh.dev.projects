import getProjects from "@/core/getProjects";
import ProjectList from "@/ui/ProjectList";
import About from "@/ui/About";

export default async function Home() {
  const projects = await getProjects();

  return (
    <div className="grid gap-8">
      <About />
      <ProjectList projects={projects} />
    </div>
  );
}
