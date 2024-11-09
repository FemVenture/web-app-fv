import { ReactElement, useState, useEffect } from "react";
import { Button } from "../../shared/components/ui/Button";
import { getEntrepreneurById } from "../services/profile.service";
import { Profile } from "../models/Profile";


export const ProfileComponent = (): ReactElement => {
    const [profile, setProfile] = useState<Profile>({
        image_url: '',
        fullName: '',
        location: '',
        description: ''
    });

    useEffect(() => {
        const fetchData = async () => {
            const result = await getEntrepreneurById("2");
            if (result.status === "success") {
                const data = result.data as Profile;
                setProfile(data);
            }
            };
            fetchData();
    }, [])


    return (
        <div className="m-24">
            <div className="flex flex-row gap-12 justify-center">
                <img className="w-auto h-72 rounded-lg" src={profile.image_url} alt="image" />
                <div className="flex flex-col gap-5 text-left">
                    <div className="flex flex-col">
                        <h1 className="text-5xl text-primary">
                            {profile.fullName}
                        </h1>
                        <p className="text-base text-textPrimary">
                            {profile.location}
                        </p>
                    </div>
                    <p className="text-lg text-textSecondary">
                        {profile.description}
                    </p>
                    <span className="flex flex-row gap-4 whitespace-nowrap">
                        <Button label="Crear nuevo proyecto" type="button" variant="primary" borderColor="blue" borderSize="small" size="small" paddingX="px-32" paddingY="py-3"/>
                        <Button label="Cerrar sesión" type="button" variant="secondary" borderColor="blue" borderSize="small" size="small" paddingX="px-4" paddingY="py-3"/>
                    </span>
                </div>
            </div>
            <div>
                <span>
                    <h2 className="text-primary w-1/4 text-5xl pt-10 mb-2">Proyectos</h2>
                    <hr className="border-t-2 border-red-300 mb-10 max-w-[365px]" />
                </span>
            </div>
            <div>
                <span>
                    <h2 className="text-primary w-1/4 text-5xl whitespace-nowrap pt-10 mb-2">Proyectos Guardados</h2>
                    <hr className="border-t-2 border-red-300 mb-10 max-w-[365px]" />
                </span>
            </div>
        </div>
    )
}