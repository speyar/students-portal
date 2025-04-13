import { honoClient } from "@/client/hono.client";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { AddEditProjectModal } from "@/components/teacher/modals/add-project.modal";
import { ProjectsList } from "@/components/teacher/project-list";
import { withHeaders } from "@/lib/server-utils";
import { headers } from "next/headers";

export default async function TeacherProjectsPage() {
  const response = await honoClient.api.teachers.projects.$get(
    {},
    {
      headers: await withHeaders(),
    }
  );

  const apiProjects = await response.json();
  
  // Initialize projects variable
  let projects = null;

  if(Array.isArray(apiProjects)){
    projects = apiProjects.map((project: any) => ({
      ...project,
      speciality: project.specialty.replace("_"," "),
      createdAt: new Date(project.createdAt)
    }));
    console.log(projects);
  }
  else {
    const projects = null;
  }
  

  return (
    <PageWrapper>
    <PageWrapper.Header
        title="Projects"
        description="Manage your available projects"
      >
        <AddEditProjectModal mode="add"></AddEditProjectModal>
      </PageWrapper.Header>
      <PageWrapper.Content>
        <ProjectsList initialProjects={projects || []}></ProjectsList>
      </PageWrapper.Content>
    </PageWrapper>
  );
}
