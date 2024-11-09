import { ReactElement } from "react"
import { BaseLayout } from "../../shared/layouts/BaseLayout"
import { ProfileComponent } from "../components/Profile"


export const ProfilePage = (): ReactElement => {
    return (
        <BaseLayout>
            <ProfileComponent />
        </BaseLayout>
    )
}