import { ReactElement } from "react";
import { BaseLayout } from "../../shared/layouts/BaseLayout";
import { LoginForm } from "../components/LoginForm";

export const Login = (): ReactElement => {
  return (
    <BaseLayout>
      <LoginForm></LoginForm>
    </BaseLayout>
  );
};
