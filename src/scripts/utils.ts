import { getCollection } from "astro:content";
import { PROJECT_ORDER } from "@constants";

/**
 * Published projects in the curated PROJECT_ORDER, followed by any
 * published projects not listed there.
 */
export async function getOrderedProjects() {
  const projects = await getCollection(
    "projects",
    ({ data }) => !data.isDraft,
  );

  const orderedProjects = PROJECT_ORDER.map((projectId) =>
    projects.find((project) => project.id === projectId),
  ).filter((project) => project !== undefined);

  const remainingProjects = projects.filter(
    (project) => !PROJECT_ORDER.includes(project.id),
  );

  return [...orderedProjects, ...remainingProjects];
}
