import { ReactElement } from "react"
import { BaseLayout } from "../../shared/layouts/BaseLayout"
import { Profile } from "../components/Profile"


export const ProfilePage = (): ReactElement => {
    return (
        <BaseLayout>
            <Profile />
        </BaseLayout>
    )
}