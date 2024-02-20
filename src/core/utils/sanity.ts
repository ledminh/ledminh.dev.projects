import { createClient, SanityClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

import SANITY_PROJECTS_ID from "../data/sanity";
import { Project, ProjectSummary } from "@/types";

const blocksToHtml = require("@sanity/block-content-to-html");

const h = blocksToHtml.h;

const serializers = {
  types: {
    code: (props: { node: { language: any; code: any } }) =>
      h("pre", { className: props.node.language }, h("code", props.node.code)),
  },
};

/********************
 * SANITY CLIENT
 */

let client: SanityClient | null = null;

if (!client) {
  client = createClient({
    projectId: SANITY_PROJECTS_ID,
    dataset: "production",
    apiVersion: getCurrentDate(),
    useCdn: false,
  });
}

export const sanityClient = client;

/********************
 * PROJECTS
 */

export function toProjectSummary(project: any): ProjectSummary {
  return {
    id: project._id,
    name: project.name,
    slug: project.slug.current,
    featured: project.featured,
    description: project.description,
    mainImageUrl: urlFor(project.mainImage).width(500).url(),
  };
}

export function toProject(project: any): Project {
  return {
    id: project._id,
    priority: project.priority,
    name: project.name,
    slug: project.slug.current,
    featured: project.featured,
    description: project.description,
    github: project.github,
    demo: project.demo,
    mainImageUrl: urlFor(project.mainImage).width(1000).url(),
    techStack: project.techStack.map((tech: any) => ({
      id: tech._id,
      name: tech.name,
    })),
    detailHTML: blocksToHtml({
      blocks: project.detail,
      serializers: serializers,
    }),
    screenshots: project.screenshots.map((screenshot: any) => ({
      id: screenshot._id,
      src: urlFor(screenshot).width(1000).url(),
      alt: "screenshot for " + project.name,
    })),
  };
}

/********************
 * IMAGE URL BUILDER
 */

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}

/********************
 * HELPERS
 */

function getCurrentDate() {
  const date = new Date();
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
}
