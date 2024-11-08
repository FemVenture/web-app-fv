import { ReactElement, useEffect, useState } from "react"
import { Projects } from "../models/Projects"
import { Button } from "../../shared/components/ui/Button";


type ProjectProps = {
    Project: Projects
}
export const ProjectCard = ({Project}: ProjectProps): ReactElement => {
    const [porcentaje, setPorcentaje] = useState(0)

    useEffect(() => {
        setPorcentaje(Project.funds_raised * 100 / Project.total_funding_goal)
    }, [])

    return (
        <div className="flex flex-row gap-10 py-5 w-full items-center">
            <img className="overflow-hidden w-[1000px] h-60 rounded-3xl object-cover object-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLaKj7rWVi6YJn7EYtWcJhU99bWd8ApdhV_A&s" alt="" />
            <div className="flex flex-col gap-2">
                <h1 className="text-4xl">
                    {Project.title}
                </h1>
                <p className="text-base">
                    {Project.description}
                </p>
                <div className="relative bg-light">
                        <div className="bg-secondary h-2" style={{
                                width: `${porcentaje}%`,
                            }}>
                        </div>
                </div>
                <p>
                    Meta: S/. {Project.total_funding_goal}
                </p>
                <div className="text-nowrap">
                    <Button label="Ver proyecto" size="small" borderColor="gray" borderSize="small" variant="secondary" paddingY="py-2" paddingX="px-20"/>

                </div>
            </div>
        </div>
    )
}