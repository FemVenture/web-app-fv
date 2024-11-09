import { ReactElement, useEffect, useState } from "react";
import { Button } from "../../shared/components/ui/Button";
import { useParams, useNavigate } from "react-router-dom";
import { EntrepreneurComponent } from "./EntrepreneurComponent";
import Markdown from "react-markdown";
import { Profile } from "../../profile/models/Profile";
import { Projects } from "../models/Projects";
import { ProjectCard } from "./PojectCard";
import { getEntrepreneurById } from "../../profile/services/profile.service";
import { getProjectById } from "../services/project.service";
import { getProjectByEntrepreneurId } from "../services/project.service";
import { getImageByProjectId } from "../services/project.service";
import { Image } from "../../public/models/Image";

export const Project = (): ReactElement => {
    const [porcentaje, setPorcentaje] = useState(0)
    const [primaryImage, setPrimaryImage] = useState("")
    const [secondaryImages, setSecondaryImages] = useState([""])
    const { projectId, entrepreneurId } = useParams<{
        projectId: string,
        entrepreneurId: string
    }>() 
    const [activeSection, setActiveSection] = useState("Detalles")
    const [mainProject, setMainProject] = useState<Projects>({})
    const [projects, setProjects] = useState<Projects[]>([])
    const [entrepreneur, setEntrepreneur] = useState<Profile>({
        image_url: '',
        fullName: '',
        location: '',
        description: ''
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
            const resultProjectsByEntrepreneur = await getProjectByEntrepreneurId(entrepreneurId);
            if (resultProjectsByEntrepreneur.status === "success") {
                const data = resultProjectsByEntrepreneur.data as Projects[];
                setProjects(data);
            }
            const resultImage = await getImageByProjectId(projectId);
            if (resultImage.status === "success") {
                const data = resultImage.data as unknown as Image[];
                setPrimaryImage(data[0].imageUrl);
                setSecondaryImages(data.slice(1).map((image: Image) => image.imageUrl));            }
        };
        fetchData();
        setPorcentaje(mainProject.funds_raised*100/mainProject.total_funding_goal)
    }, [])

    const handleChangeImage = (indexToRemove: number, newImage: string) => {
        setSecondaryImages(prevItems => prevItems.filter((_, index) => index !== indexToRemove))
        setSecondaryImages(prevItems => [...prevItems, primaryImage])
        setPrimaryImage(newImage)
    }

    return(
        <div className="flex flex-col m-24 gap-16">
            <div className="flex flex-col gap-10 justify-center items-center overflow-hidden w-[65%]">
                <img className="h-[500px] w-full rounded-3xl object-cover" src={primaryImage} alt="" />
                <div className="flex flex-row gap-5 overflow-hidden w-full justify-between">
                    <img className="h-56 w-full rounded-lg object-cover" src={secondaryImages[0]} alt="image" onClick={() => handleChangeImage(0, secondaryImages[0])}/>
                    <img className="h-56 w-full rounded-lg object-cover" src={secondaryImages[1]} alt="image" onClick={() => handleChangeImage(1, secondaryImages[1])}/>
                    <img className="h-56 w-full rounded-lg object-cover" src={secondaryImages[2]} alt="image" onClick={() => handleChangeImage(2, secondaryImages[2])}/>
                </div>
            </div>
            <div className="border-y-2 border-light w-[65%] py-5">
                <span className="flex flex-row justify-between">
                    <h1 className={`text-base cursor-pointer ${activeSection === "Detalles" ? "font-bold" : ""}`} onClick={() => setActiveSection("Detalles")}>
                        Detalles
                    </h1>
                    <h1 className={`text-base cursor-pointer ${activeSection === "Hitos" ? "font-bold" : ""}`} onClick={() => setActiveSection("Hitos")}>
                        Hitos
                    </h1>
                    <h1 className={`text-base cursor-pointer ${activeSection === "Sobre" ? "font-bold" : ""}`} onClick={() => setActiveSection("Sobre")}>
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
                <div className={`${activeSection === "Sobre" ? "block" : "hidden"} flex flex-col gap-5`}>
                    <div className="flex flex-row gap-5">
                        <img src={entrepreneur.image_url} alt={entrepreneur.fullName} className="rounded-2xl h-80 w-64 object-cover"/>
                        <div className="flex flex-col gap-5">
                            <h1 className="text-5xl text-primary">
                                {entrepreneur.fullName}
                            </h1>
                            <p className="text-base">
                                {entrepreneur.location}
                            </p>
                            <p className="text-base text-textSecondary">
                                {entrepreneur.description}
                            </p>
                            <span>
                                <Button label="Contactar" size="small" paddingX="px-16" variant="primary"/>
                            </span>
                        </div>
                    </div>
                    <div className="">
                        <span>
                            <h2 className="text-primary text-5xl mb-2">Proyectos</h2>
                            <hr className="border-t-2 border-red-300 mb-10 max-w-[365px]" />
                        </span>
                        {
                            projects
                            .filter(project => project.id.toString() !== projectId)
                            .map(project => (
                                <ProjectCard key={project.id} Project={project} />
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="fixed z-30 right-0 flex flex-col w-[27%] mr-24 gap-5">
                <h1 className="text-primary text-5xl">{mainProject.title}</h1>
                <p className="text-primary text-base">30 dias para finalizar el hito 1</p>
                <p className="text-textSecondary text-base">
                    {mainProject.description} 
                </p>
                <EntrepreneurComponent full_name={entrepreneur.fullName} location={entrepreneur.location} image_url={entrepreneur.image_url}/>
                <div className="relative w-full bg-light">
                        <div className="bg-secondary h-2" style={{
                                width: `${porcentaje}%`,
                            }}>
                        </div>
                </div>
                <div className="w-full flex flex-row justify-between">
                    <span className="flex flex-row gap-2 text-xs">
                        <p className="text-textSecondary">
                            Recolectado:
                        </p>
                        <p>
                            S/. {mainProject.funds_raised}
                        </p>
                    </span>
                    <span className="flex flex-row gap-2 text-xs">
                        <p className="text-textSecondary">
                            Meta:
                        </p>
                        <p>
                           S/. {mainProject.total_funding_goal}
                        </p>
                    </span>
                </div>
                <div className="flex flex-col gap-5">
                    <Button label="Patrocinar proyecto" variant="primary" borderSize="small" borderColor="blue" paddingY="py-2" />
                    <div className="flex flex-row gap-5 w-full  justify-between">
                        <Button label="Guardar" variant="secondary" borderSize="small" borderColor="gray" paddingY="py-2"/>
                        <Button label="Compartir" variant="secondary" borderSize="small" borderColor="gray" paddingY="py-2"/>
                    </div>
                </div>
            </div>
        </div>
    )
}