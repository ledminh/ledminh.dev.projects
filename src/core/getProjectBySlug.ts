import { sanityClient, toProject } from "@/core/utils/sanity";
import type { Project as ProjectType } from "@/types";

export default async function getProjectBySlug(
  slug: string
): Promise<ProjectType> {
  const projectsSanity = await sanityClient.fetch(
    `*[_type == "project" && slug.current == "${slug}"] | order(priority){_id, priority, name, slug, featured, description, github, demo, mainImage,  techStack[]->{_id,name}, detail, screenshots}`
  );

  const project = toProject(projectsSanity[0]);

  return Promise.resolve(project);
}
