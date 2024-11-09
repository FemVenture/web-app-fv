import { ReactElement } from "react"
import { BaseLayout } from "../../shared/layouts/BaseLayout"
import { ProjectComponent } from "../components/ProjectComponent"

export const ProjectPage = (): ReactElement => {
    return (
        <BaseLayout>
            <ProjectComponent/>
        </BaseLayout>
    )
}