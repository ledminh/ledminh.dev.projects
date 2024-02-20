import { sanityClient, toProjectSummary } from "@/core/utils/sanity";
import type { ProjectSummary } from "@/types";

export default async function getProjects(): Promise<ProjectSummary[]> {
  const projectsSanity = await sanityClient.fetch(
    `*[_type == "project" ] | order(priority) {_id, name, slug, featured, description, mainImage}`
  );

  const projects = projectsSanity.map(toProjectSummary);

  return projects;
}
