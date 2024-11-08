import { ReactElement } from "react";

type EntrepreneurProps = {
    full_name: string,
    image_url: string,
    location: string,
}
export const EntrepreneurComponent = ({
    full_name,
    image_url,
    location
}: EntrepreneurProps): ReactElement => {

    return(
        <div className="flex flex-row gap-3">
            <img className="rounded-full size-10 object-cover" src={image_url} alt="" />
            <div className="flex flex-col">
                <h1 className="text-base text-textPrimary">{full_name}</h1>
                <p className="text-xs text-textSecondary">{location}</p>
            </div>
        </div>
    )
}