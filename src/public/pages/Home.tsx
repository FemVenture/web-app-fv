import { ReactElement } from "react";
import { BaseLayout } from "../../shared/layouts/BaseLayout";
import { Hero } from "../components/Hero";
import { ProjectPage } from "../../project/pages/ProjectPage";
import { ProfielPage } from "../../profile/page/ProfilePage";

export const Home = (): ReactElement => {
  return (
    <BaseLayout>
      {/* <Hero></Hero> */}
      <ProfielPage/>
    </BaseLayout>
  );
};
