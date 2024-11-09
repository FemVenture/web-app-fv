import { ReactElement } from "react";
import { BaseLayout } from "../../shared/layouts/BaseLayout";
import { ApproveProject } from "../components/ApproveProject";

export const ApproveProjectPage = (): ReactElement => {
  return (
    <BaseLayout>
      <ApproveProject />
    </BaseLayout>
  );
};
