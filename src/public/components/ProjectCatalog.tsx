import { ReactElement, useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { SearchBar } from "../../shared/components/ui/Searchbar";

export const ProjectCatalog = (): ReactElement => {
  const projects = [
    {
      title: "Título del proyecto 1",
      description: "Lorem ipsum dolor sit amet",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsFP4yNddWioA0VxTXuLzsqNu5iMCBd0xhZg&s",
      link: "",
      funds_raised: 27,
      total_funding_goal: 100,
      category: "Arte",
    },
    {
      title: "Título del proyecto 2",
      description: "Lorem ipsum dolor sit amet",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsFP4yNddWioA0VxTXuLzsqNu5iMCBd0xhZg&s",
      link: "",
      funds_raised: 50,
      total_funding_goal: 100,
      category: "Fotografía",
    },
    {
      title: "Título del proyecto 3",
      description: "Lorem ipsum dolor sit amet",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsFP4yNddWioA0VxTXuLzsqNu5iMCBd0xhZg&s",
      link: "",
      funds_raised: 75,
      total_funding_goal: 100,
      category: "Gastronomía",
    },
    {
      title: "Título del proyecto 4",
      description: "Lorem ipsum dolor sit amet",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsFP4yNddWioA0VxTXuLzsqNu5iMCBd0xhZg&s",
      link: "",
      funds_raised: 100,
      total_funding_goal: 100,
      category: "Moda",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      selectedCategory === "Todos" || project.category === selectedCategory;
    const matchesSearch = project.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="mt-24 mx-24">
      <span>
        <h2 className="text-primary mb-2">Catálogo de proyectos</h2>
        <hr className="border-t-2 border-red-300 mb-10 max-w-[365px]" />
      </span>

      <SearchBar
        value={searchTerm}
        placeholder="Buscar un emprendimiento"
        onChange={(e) => setSearchTerm(e.target.value)} // Actualiza el término de búsqueda
      />

      {/* Filtros de categorías */}
      <div className="flex justify-between gap-4 mt-4 mb-8">
        {[
          "Todos",
          "Arte",
          "Fotografía",
          "Gastronomía",
          "Moda",
          "Música",
          "Tecnología",
        ].map((category) => (
          <button
            key={category}
            className={`py-2 px-6 rounded-lg transition duration-200 ease-in-out ${
              selectedCategory === category
                ? "bg-secondary text-white"
                : "border-2 border-disabled text-black"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredProjects.map((project, index) => (
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
  );
};
