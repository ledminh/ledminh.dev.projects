import getProjects from "@/core/getProjects";
import ProjectList from "@/ui/ProjectList";
import About from "@/ui/About";

export default async function Home() {
  const projects = await getProjects();

  return (
    <main>
      <About />
      <ProjectList projects={projects} />
    </main>
  );
}
