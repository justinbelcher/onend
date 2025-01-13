import { getCollection, type CollectionEntry } from "astro:content";
import { PROJECT_ORDER } from "@constants";

export const getImages = () =>
  import.meta.glob<{ default: ImageMetadata }>([
    "/src/assets/**/*.{jpeg,jpg,png,gif,webp}",
  ]);

export async function getOrderedProjects() {
  const projects = await getCollection("projects");

  const orderedProjects = PROJECT_ORDER.map((projectId) =>
    projects.find(
      (project: CollectionEntry<"projects">) => project.id === projectId,
    ),
  ).filter((project) => project !== undefined);

  const remainingProjects = projects.filter(
    (project: CollectionEntry<"projects">) =>
      !PROJECT_ORDER.includes(project.id),
  );

  return [...orderedProjects, ...remainingProjects];
}
