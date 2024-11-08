import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";

type CardButtonProps = {
  image: string;
  title: string;
  link: string;
  description: string;
  funds_raised: number;
  total_funding_goal: number;
};

export const ProjectCard = ({
  image,
  title,
  link,
  description,
  funds_raised,
  total_funding_goal,
}: CardButtonProps): ReactElement => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(link)}
      className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white min-h-[500px] w-[300px] cursor-pointer"
    >
      <div className="relative">
        <img
          className="object-cover h-[500px] w-[300px]"
          src={image}
          alt={title}
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gray-600 bg-opacity-50 backdrop-blur-sm p-4 m-2 rounded-xl">
          <h2 className="text-xl font-bold text-white mb-1 line-clamp-1">
            {title}
          </h2>
          <p className="text-sm text-white overflow-hidden h-[100px] line-clamp-3">
            {description}
          </p>
          <div className="mt-2">
            <div className="flex items-center justify-between">
              <div className="w-full bg-gray-100 h-2 mr-2">
                <div
                  className="bg-secondary h-2"
                  style={{
                    width: `${(funds_raised / total_funding_goal) * 100}%`,
                  }}
                ></div>
              </div>
              <img src="/icons/arrow.svg" alt="search" className="h-6 w-6" />
            </div>
            <div className="flex items-center justify-between mt-1">
              <span className="text-white text-sm">
                Meta: S/. {total_funding_goal.toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
