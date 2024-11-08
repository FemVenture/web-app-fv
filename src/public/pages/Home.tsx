import { ReactElement } from "react";
<<<<<<< HEAD
import { BaseLayout } from "../../shared/layouts/BaseLayout";
import { Hero } from "../components/Hero";

export const Home = (): ReactElement => {
  return (
    <BaseLayout>
      <Hero></Hero>
    </BaseLayout>
  );
};
=======
import { Button } from "../../shared/components/button";

export const Home = (): ReactElement => {
    return (
        <div>
            <h1>Home Page</h1>
            <Button label="Boton" type="button" size="large" variant="primary" />
            <Button label="Boton" type="button" size="large" variant="secondary" borderColor="gray" borderSize="big" />
        </div>
    );
}
>>>>>>> origin/feat/button
