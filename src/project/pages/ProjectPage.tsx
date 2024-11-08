import { ReactElement } from "react"
import { BaseLayout } from "../../shared/layouts/BaseLayout"
import { Project } from "../components/Project"

export const ProjectPage = (): ReactElement => {
    return (
        <BaseLayout>
            <Project/>
        </BaseLayout>
    )
}