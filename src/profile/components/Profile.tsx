import { ReactElement } from "react";
import { Button } from "../../shared/components/ui/Button";


export const Profile = (): ReactElement => {
    return (
        <div className="m-24">
            <div className="flex flex-row gap-12 justify-center">
                <img className="w-auto h-72 rounded-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-FAu23SIJy_WaXgFKqtqupGbqHpM2Lz63kA&s" alt="image" />
                <div className="flex flex-col gap-5 text-left">
                    <div className="flex flex-col">
                        <h1 className="text-5xl text-primary">
                            Nombre
                        </h1>
                        <p className="text-base text-textPrimary">
                            Lima, Peru
                        </p>
                    </div>
                    <p className="text-lg text-textSecondary">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent posuere lectus sit amet risus aliquam blandit. Sed lacinia turpis ullamcorper orci lobortis commodo. Aliquam ac aliquam erat. Vivamus eros justo, tempor vel iaculis quis, ultricies ac enim. Maecenas suscipit lacinia accumsan. Curabitur ac pharetra ipsum, auctor dictum arcu. Aenean nec ante est.                    </p>
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