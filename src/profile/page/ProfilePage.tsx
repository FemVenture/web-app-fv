import { ReactElement } from "react";
import { Button } from "../../shared/components/ui/Button";


export const ProfielPage = (): ReactElement => {
    return (
        <div className="mt-24 mx-24">
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
                        <Button label="Crear nuevo proyecto" type="button" variant="primary" borderColor="blue" borderSize="small" size="small"/>
                        <Button label="Cerrar sesión" type="button" variant="secondary" borderColor="blue" borderSize="small" size="small"/>
                    </span>
                </div>
            </div>
            <div>
                <h1 className="border-b-4 w-1/4 text-5xl pt-10 py-5 text-primary border-secondary">
                    Proyectos
                </h1>
            </div>
            <div>
                <h1 className="border-b-4 w-1/4 text-5xl pt-10 py-5 text-primary whitespace-nowrap border-secondary">
                    Proyectos Guardados
                </h1>
            </div>
        </div>
    )
}