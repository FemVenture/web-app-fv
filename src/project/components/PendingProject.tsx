import { ReactElement, useEffect, useState } from "react";
import { Button } from "../../shared/components/ui/Button";
import { useParams } from "react-router-dom";
import Markdown from "react-markdown";
import { Profile } from "../../profile/models/Profile";
import { Projects } from "../models/Projects";
import { getEntrepreneurById } from "../../profile/services/profile.service";
import { getProjectById } from "../services/project.service";
import { getImageByProjectId } from "../services/project.service";
import { Image } from "../../public/models/Image";

export const PendingProject = (): ReactElement => {
  const [primaryImage, setPrimaryImage] = useState("");
  const [secondaryImages, setSecondaryImages] = useState([""]);
  const { projectId, entrepreneurId } = useParams<{
    projectId: string;
    entrepreneurId: string;
  }>();
  const [activeSection, setActiveSection] = useState("Detalles");
  const [mainProject, setMainProject] = useState<Projects>({});
  const [entrepreneur, setEntrepreneur] = useState<Profile>({
    image_url: "",
    fullName: "",
    location: "",
    description: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const result = await getEntrepreneurById(entrepreneurId);
      if (result.status === "success") {
        const data = result.data as Profile;
        setEntrepreneur(data);
      }
      const resultProjects = await getProjectById(projectId);
      if (resultProjects.status === "success") {
        const data = resultProjects.data as Projects;
        setMainProject(data);
      }
      const resultImage = await getImageByProjectId(projectId);
      if (resultImage.status === "success") {
        const data = resultImage.data as unknown as Image[];
        setPrimaryImage(data[0].imageUrl);
        setSecondaryImages(data.slice(1).map((image: Image) => image.imageUrl));
      }
    };
    fetchData();
  }, []);

  const handleChangeImage = (indexToRemove: number, newImage: string) => {
    setSecondaryImages((prevItems) =>
      prevItems.filter((_, index) => index !== indexToRemove)
    );
    setSecondaryImages((prevItems) => [...prevItems, primaryImage]);
    setPrimaryImage(newImage);
  };

  return (
    <div className="flex flex-col m-24 gap-16">
      <div className="flex flex-col gap-10 justify-center items-center overflow-hidden w-[65%]">
        <img
          className="h-[500px] w-full rounded-3xl object-cover"
          src={primaryImage}
          alt=""
        />
        <div className="flex flex-row gap-5 overflow-hidden w-full justify-between">
          {secondaryImages.map((image, index) => (
            <img
              key={index}
              className="h-56 w-full rounded-lg object-cover"
              src={image}
              alt="image"
              onClick={() => handleChangeImage(index, image)}
            />
          ))}
        </div>
      </div>
      <div className="border-y-2 border-light w-[65%] py-5">
        <span className="flex flex-row justify-between">
          <h1
            className={`text-base cursor-pointer ${
              activeSection === "Detalles" ? "font-bold" : ""
            }`}
            onClick={() => setActiveSection("Detalles")}
          >
            Detalles
          </h1>
          <h1
            className={`text-base cursor-pointer ${
              activeSection === "Hitos" ? "font-bold" : ""
            }`}
            onClick={() => setActiveSection("Hitos")}
          >
            Hitos
          </h1>
          <h1
            className={`text-base cursor-pointer ${
              activeSection === "Sobre" ? "font-bold" : ""
            }`}
            onClick={() => setActiveSection("Sobre")}
          >
            Sobre la emprendedora
          </h1>
        </span>
      </div>
      <div className="w-[65%]">
        <div className={`${activeSection === "Detalles" ? "block" : "hidden"}`}>
          <Markdown>{mainProject.text}</Markdown>
        </div>
        <div className={`${activeSection === "Hitos" ? "block" : "hidden"}`}>
          <h1>Hitos section</h1>
        </div>
        <div
          className={`${
            activeSection === "Sobre" ? "block" : "hidden"
          } flex flex-col gap-5`}
        >
          <div className="flex flex-row gap-5">
            <img
              src={entrepreneur.image_url}
              alt={entrepreneur.fullName}
              className="rounded-2xl h-80 w-64 object-cover"
            />
            <div className="flex flex-col gap-5">
              <h1 className="text-5xl text-primary">{entrepreneur.fullName}</h1>
              <p className="text-base">{entrepreneur.location}</p>
              <p className="text-base text-textSecondary">
                {entrepreneur.description}
              </p>
              <span>
                <Button
                  label="Contactar"
                  size="small"
                  paddingX="px-16"
                  variant="primary"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
