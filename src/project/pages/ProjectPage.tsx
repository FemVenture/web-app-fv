import { ReactElement, useEffect, useState } from "react";
import { Button } from "../../shared/components/ui/Button";
import { EntrepreneurComponent } from "../components/EntrepreneurComponent";
import Markdown from "react-markdown";
import { Entrepreneur } from "../models/Entrepreneur";
import { Projects } from "../models/Projects";
import { ProjectCard } from "../components/PojectCard";

export const ProjectPage = (): ReactElement => {
    const [montoRecolectado, setMontoRecolectado] = useState(5000)
    const [montoTotal, setMontoTotal] = useState(12000)
    const [porcentaje, setPorcentaje] = useState(0)
    const [primaryImage, setPrimaryImage] = useState("https://i.pinimg.com/736x/83/8c/69/838c69b8e6d664cd3db8fd22294edb9e.jpg")
    const [secondaryImages, setSecondaryImages] = useState([""])
    const [activeSection, setActiveSection] = useState("Detalles")
    const [projects, setProjects] = useState<Projects[]>([
        {
            id: 0,
            title: "Test",
            description: "Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum",
            start_date: "",
            end_date: "",
            total_funding_goal: 70000,
            funds_raised: 40000,
            status: "",
            tag: "",
            creator_id: 0,
        },
        {
            id: 1,
            title: "Test2",
            description: "Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum",
            start_date: "",
            end_date: "",
            total_funding_goal: 20000,
            funds_raised: 18000,
            status: "",
            tag: "",
            creator_id: 0,
        }
    ])
    const [entrepreneur, setEntrepreneur] = useState<Entrepreneur>({
        name: "Leia Organa",
        location: "Lima, Perú",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent posuere lectus sit amet risus aliquam blandit. Sed lacinia turpis ullamcorper orci lobortis commodo. Aliquam ac aliquam erat. Vivamus eros justo, tempor vel iaculis quis, ultricies ac enim. Maecenas suscipit lacinia accumsan. Curabitur ac pharetra ipsum, auctor dictum arcu. Aenean nec ante est.",
        image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw_-k7ssUgts2wR06OIAzhdM2pk6ndCvDDFQ&s",
    });
    const [markdownText, setMarkDownText] = useState(`
# Test de markdown
## Este es un subtitulo
### Esto no se que es

Hola, esto es de prueba

![Texto alternativo](https://t2.ea.ltmcdn.com/es/posts/1/3/7/por_que_los_chihuahuas_son_agresivos_26731_orig.jpg)
        `)

    useEffect(() => {
        setSecondaryImages(["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQc-iqiNfGMQhPTWNfesxAnICFV5-fAHERsQ&s", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBZCGlBA78aAsCu0m1noK0TTAf_blQROiAZA&s", "https://pbs.twimg.com/media/GOrzmLIW8AAmNq_.jpg:large" ])
        setPorcentaje(montoRecolectado*100/montoTotal)
    }, [])

    const handleChangeImage = (indexToRemove: number, newImage: string) => {
        setSecondaryImages(prevItems => prevItems.filter((_, index) => index !== indexToRemove))
        setSecondaryImages(prevItems => [...prevItems, primaryImage])
        setPrimaryImage(newImage)
    }

    return(
        <div className="flex flex-col m-24 gap-16">
            <div className="flex flex-col gap-10 justify-center items-center overflow-hidden w-[65%]">
                <img className="h-80 w-full rounded-3xl object-cover" src={primaryImage} alt="" />
                <div className="flex flex-row gap-5 overflow-hidden w-full justify-between">
                    <img className="h-24 w-full rounded-lg object-cover" src={secondaryImages[0]} alt="image" onClick={() => handleChangeImage(0, secondaryImages[0])}/>
                    <img className="h-24 w-full rounded-lg object-cover" src={secondaryImages[1]} alt="image" onClick={() => handleChangeImage(1, secondaryImages[1])}/>
                    <img className="h-24 w-full rounded-lg object-cover" src={secondaryImages[2]} alt="image" onClick={() => handleChangeImage(2, secondaryImages[2])}/>
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
                    <Markdown>{markdownText}</Markdown>
                </div>
                <div className={`${activeSection === "Hitos" ? "block" : "hidden"}`}>
                    <h1>Hitos section</h1>
                </div>
                <div className={`${activeSection === "Sobre" ? "block" : "hidden"} flex flex-col gap-5`}>
                    <div className="flex flex-row gap-5">
                        <img src={entrepreneur.image_url} alt={entrepreneur.name} className="rounded-2xl h-80 w-64"/>
                        <div className="flex flex-col gap-5">
                            <h1 className="text-5xl text-primary">
                                {entrepreneur.name}
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
                            projects.map(project => {
                                return (
                                    <ProjectCard key={project.id} Project={project}/>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="fixed z-30 right-0 flex flex-col w-[27%] mr-24 gap-5">
                <h1 className="text-primary text-5xl">Título del Proyecto</h1>
                <p className="text-primary text-base">30 dias para finalizar el hito 1</p>
                <p className="text-textSecondary text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent posuere lectus sit amet risus aliquam blandit. 
                </p>
                <EntrepreneurComponent full_name={entrepreneur.name} location={entrepreneur.location} image_url={entrepreneur.image_url}/>
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
                            ${montoRecolectado}
                        </p>
                    </span>
                    <span className="flex flex-row gap-2 text-xs">
                        <p className="text-textSecondary">
                            Meta:
                        </p>
                        <p>
                            ${montoTotal}
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