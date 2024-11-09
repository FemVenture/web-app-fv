import { ReactElement, useState, useEffect } from "react";

import { getAllProjects } from "../../project/services/project.service";
import { Projects } from "../../project/models/Projects";
import { ProjectCard } from "../../public/components/ProjectCard";

export const ApproveProject = (): ReactElement => {
  const [projects, setProjects] = useState<Projects>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getAllProjects();
      if (result.status === "success") {
        const data = result.data as unknown as Projects;
        setProjects(data);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="p-4 md:px-16 py-8 mt-24">
      <span>
        <h2 className="text-primary mb-2">Proyectos pendientes por aprobar</h2>
        <hr className="border-t-2 border-red-300 mb-10 max-w-[365px]" />
      </span>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            projectId={project.id}
            title={project.title}
            description={project.description}
            entrepreneurId={project.entrepreneurId.toString()}
            funds_raised={project.funds_raised || 40}
            total_funding_goal={project.total_funding_goal || 1000}
            cardType="pending"
          />
        ))}
      </div>
    </div>
  );
};
