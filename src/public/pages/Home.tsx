import { ReactElement } from "react";

import { BaseLayout } from "../../shared/layouts/BaseLayout";
import { Hero } from "../components/Hero";

export const Home = (): ReactElement => {
  return (
    <BaseLayout>
      <Hero></Hero>
    </BaseLayout>
  );
};
