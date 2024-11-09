import { ReactElement, useState, useEffect } from "react";
import { ProjectCard } from "./ProjectCard";
import { SearchBar } from "../../shared/components/ui/Searchbar";
import { getAllProjects } from "../../project/services/project.service";
import { Projects } from "../../project/models/Projects";

export const ProjectCatalog = (): ReactElement => {
  const [projects, setProjects] = useState<Projects>([])

  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      selectedCategory === "Todos" || project.tag === selectedCategory;
    const matchesSearch = project.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
            projectId={project.id}
            title={project.title}
            description={project.description}
            entrepreneurId={project.entrepreneurId.toString()}
            funds_raised={project.funds_raised || 40}
            total_funding_goal={project.total_funding_goal || 1000}
          />
        ))}
      </div>
    </div>
  );
};
