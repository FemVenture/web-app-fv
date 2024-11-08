import { ReactElement } from "react";
import { BaseLayout } from "../../shared/layouts/BaseLayout";
import { Hero } from "../components/Hero";
import { PopularProjects } from "../components/PopularProjects";

export const Home = (): ReactElement => {
  return (
    <BaseLayout>
      <Hero></Hero>
      <PopularProjects></PopularProjects>
    </BaseLayout>
  );
};
