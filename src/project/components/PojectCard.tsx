import { ReactElement, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Project } from "../models/Projects";
import { Button } from "../../shared/components/ui/Button";
import { getImageByProjectId } from "../services/project.service";
import { Image } from "../../public/models/Image";

type ProjectProps = {
    Project: Project;
};

export const ProjectCard = ({ Project }: ProjectProps): ReactElement => {
    const [porcentaje, setPorcentaje] = useState(0);
    const [images, setImages] = useState<Image[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const result = await getImageByProjectId(Project.id.toString());
            if (result.status === "success") {
                const data = result.data as unknown as Image[];
                setImages(data);
            }
        };
        fetchData();
        setPorcentaje((Project.funds_raised * 100) / Project.total_funding_goal);
    }, [Project.id, Project.funds_raised, Project.total_funding_goal]);

    return (
        <div className="flex flex-row gap-10 py-5 w-full items-center">
            {images.length > 0 ? (
                <img
                    className="overflow-hidden w-[1000px] h-60 rounded-3xl object-cover object-top"
                    src={images[0].imageUrl}
                    alt=""
                />
            ) : (
                <div className="w-[1000px] h-60 rounded-3xl bg-gray-300 flex items-center justify-center">
                    <p>No Image Available</p>
                </div>
            )}
            <div className="flex flex-col gap-2">
                <h1 className="text-4xl">{Project.title}</h1>
                <p className="text-base">{Project.description}</p>
                <div className="relative bg-light">
                    <div
                        className="bg-secondary h-2"
                        style={{
                            width: `${porcentaje}%`,
                        }}
                    ></div>
                </div>
                <p>Meta: S/. {Project.total_funding_goal}</p>
                <div className="text-nowrap">
                    <Button
                        label="Ver proyecto"
                        size="small"
                        borderColor="gray"
                        borderSize="small"
                        variant="secondary"
                        paddingY="py-2"
                        paddingX="px-20"
                        onClick={() =>
                        {
                            navigate(`/projects/${Project.id}/${Project.entrepreneurId}`);
                            window.location.reload();
                        }
                        }
                    />
                </div>
            </div>
        </div>
    );
};
