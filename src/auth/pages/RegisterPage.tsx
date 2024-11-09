import { ReactElement } from "react";
import { RegisterForm } from "../components/RegisterForm";
import { BaseLayout } from "../../shared/layouts/BaseLayout";

export const Register = (): ReactElement => {
  return (
    <BaseLayout>
      <RegisterForm></RegisterForm>
    </BaseLayout>
  );
};
