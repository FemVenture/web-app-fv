import { ReactElement } from "react";
import { BaseLayout } from "../../shared/layouts/BaseLayout";
import { ProjectCatalog } from "../components/ProjectCatalog";

export const Explore = (): ReactElement => {
  return (
    <BaseLayout>
      <ProjectCatalog />
    </BaseLayout>
  );
};
