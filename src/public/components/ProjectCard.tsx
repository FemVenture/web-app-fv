import { ReactElement, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../shared/components/ui/Button";
import { getImageByProjectId } from "../../project/services/project.service";
import { Image } from "../models/Image";

type CardButtonProps = {
  projectId: number;
  entrepreneurId: string;
  title: string;
  description: string;
  funds_raised: number;
  total_funding_goal: number;
  cardType?: "default" | "variant" | "pending";
};

export const ProjectCard = ({
  projectId,
  entrepreneurId,
  title,
  description,
  funds_raised,
  total_funding_goal,
  cardType = "default",
}: CardButtonProps): ReactElement => {
  const navigate = useNavigate();
  const [images, setImages] = useState<Image[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getImageByProjectId(projectId.toString());
      if (result.status === "success") {
        const data = result.data as unknown as Image[];
        setImages(data);
      }
    };
    fetchData();
  }, []);

  const handleCardClick = () => {
    if (cardType === "pending") {
      navigate(`/projects/pending/${projectId}/${entrepreneurId}`);
    } else {
      navigate(`/projects/${projectId}/${entrepreneurId}`);
    }
  };

  return (
    <div
      className={`rounded-lg overflow-hidden bg-white ${
        cardType === "variant" ? "w-[300px]" : "w-[300px] cursor-pointer"
      }`}
      onClick={handleCardClick}
    >
      {cardType === "variant" ? (
        <>
          <div className="h-[500px] w-full">
            <img
              className="object-cover h-full w-full rounded-lg"
              src={images[0]?.imageUrl}
              alt={title}
            />
          </div>

          <div className="py-4">
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <p className="text-sm mb-4 overflow-hidden max-h-[60px] line-clamp-2">
              {description}
            </p>
            <div className="flex items-center justify-between">
              <div className="w-full bg-gray-200 h-2 rounded-full mr-2">
                <div
                  className="bg-secondary h-2 rounded-full"
                  style={{
                    width: `${(funds_raised / total_funding_goal) * 100}%`,
                  }}
                ></div>
              </div>
              <img src="/icons/arrow.svg" alt="visit" className="h-6 w-6" />
            </div>
            <div className="flex items-center justify-between mt-1 mb-4">
              <span className="text-sm">
                Meta: S/. {total_funding_goal.toLocaleString()}
              </span>
            </div>
            <Button
              label="Patrocinar proyecto"
              size="medium"
              variant="secondary"
              onClick={() => navigate(`/project/${projectId}/${entrepreneurId}`)}
            />
          </div>
        </>
      ) : cardType === "pending" ? (
        <>
          <div className="h-[500px] w-full">
            <img
              className="object-cover h-full w-full rounded-lg"
              src={images[0]?.imageUrl}
              alt={title}
            />
          </div>

          <div className="py-4">
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <p className="text-sm mb-4 overflow-hidden max-h-[60px] line-clamp-2">
              {description}
            </p>
            <Button
              label="Revisar proyecto"
              size="medium"
              variant="secondary"
              onClick={() => navigate(`/projects/${projectId}/${entrepreneurId}`)}
            />
          </div>
        </>
      ) : (
        <>
          <div className="relative h-[500px] w-full">
            <img
              className="object-cover w-full h-full"
              src={images[0]?.imageUrl}
              alt={title}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gray-600 bg-opacity-50 backdrop-blur-sm p-4 m-2 rounded-xl">
              <h2 className="text-xl font-bold text-white mb-1 line-clamp-1">
                {title}
              </h2>
              <p className="text-sm text-white overflow-hidden max-h-[100px] line-clamp-3">
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
                  <img src="/icons/arrow.svg" alt="visit" className="h-6 w-6" />
                </div>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-white text-sm">
                    Meta: S/. {total_funding_goal.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
