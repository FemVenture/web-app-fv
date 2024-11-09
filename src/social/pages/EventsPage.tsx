import { ReactElement } from "react";
import { BaseLayout } from "../../shared/layouts/BaseLayout";
import { Events } from "../components/Events";

export const EventsPage = (): ReactElement => {
  return (
    <BaseLayout>
      <Events />
    </BaseLayout>
  );
};
