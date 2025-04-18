import { getStudentProjects } from "@/fetchs/student.fetcher";
import { ProjectsClient } from "./projects";
import { withHeaders } from "@/lib/server-utils";

export default async function StudentProjectsPage() {
  const projects = await getStudentProjects(await withHeaders());
  console.log(projects);

  return <ProjectsClient initialProjects={projects.projects} />;
}
