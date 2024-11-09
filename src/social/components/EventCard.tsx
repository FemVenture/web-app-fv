import { ReactElement } from "react";

type CardButtonProps = {
  title: string;
  link: string;
  date: string;
  image: string;
};

export const EventCard = ({
  title,
  link,
  date,
  image,
}: CardButtonProps): ReactElement => {
  return (
    <a
      className="rounded-lg overflow-hidden bg-white w-[300px] cursor-pointer"
      href={link}
      rel="noreferrer noopener"
    >
      <div className="relative h-[500px] w-full">
        <img className="object-cover w-full h-full" src={image} alt={title} />
        <div className="absolute bottom-0 left-0 right-0 bg-gray-600 bg-opacity-50 backdrop-blur-sm p-4 m-2 rounded-xl">
          <h2 className="text-xl font-bold text-white mb-1 line-clamp-1">
            {title}
          </h2>
          <div className="mt-2">
            <div className="flex items-center justify-between">
              <p className="text-white">{date}</p>
              <img src="/icons/arrow.svg" alt="visit" className="h-6 w-6" />
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};
