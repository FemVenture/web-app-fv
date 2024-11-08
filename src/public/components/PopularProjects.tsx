import { ReactElement } from "react";
import { ProjectCard } from "./ProjectCard";

export const PopularProjects = (): ReactElement => {
  const projects = [
    {
      title: "Título del proyecto 1",
      description: "Lorem ipsum dolor sit amet",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsFP4yNddWioA0VxTXuLzsqNu5iMCBd0xhZg&s",
      link: "",
      funds_raised: 27,
      total_funding_goal: 100,
    },
    {
      title: "Título del proyecto 2",
      description: "Lorem ipsum dolor sit amet",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsFP4yNddWioA0VxTXuLzsqNu5iMCBd0xhZg&s",
      link: "",
      funds_raised: 50,
      total_funding_goal: 100,
    },
    {
      title: "Título del proyecto 3",
      description: "Lorem ipsum dolor sit amet",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsFP4yNddWioA0VxTXuLzsqNu5iMCBd0xhZg&s",
      link: "",
      funds_raised: 75,
      total_funding_goal: 100,
    },
    {
      title: "Título del proyecto 4",
      description: "Lorem ipsum dolor sit amet",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsFP4yNddWioA0VxTXuLzsqNu5iMCBd0xhZg&s",
      link: "",
      funds_raised: 100,
      total_funding_goal: 100,
    },
  ];

  return (
    <div className="p-4 md:px-16 py-8">
      <span>
        <h2 className="text-primary mb-2">Proyectos populares</h2>
        <hr className="border-t-2 border-red-300 mb-10 max-w-[365px]" />
      </span>
      <div className="flex flex-col md:flex-row gap-20">
        <ProjectCard
          title="Título del proyecto 1"
          description="Lorem ipsum dolor sit amet"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsFP4yNddWioA0VxTXuLzsqNu5iMCBd0xhZg&s"
          link=""
          funds_raised={27}
          total_funding_goal={100}
          cardType="variant"
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {" "}
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
              funds_raised={project.funds_raised}
              total_funding_goal={project.total_funding_goal}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
