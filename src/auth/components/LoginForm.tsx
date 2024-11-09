import { ReactElement } from "react";
import { TextInput } from "../../shared/components/ui/TextInput";
import { Button } from "../../shared/components/ui/Button";

export const LoginForm = (): ReactElement => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Formulario enviado");
  };

  return (
    <div className="flex">
      <div className="md:w-1/2 flex flex-col justify-center items-center">
        <h2 className="text-center">Bienvenida a FemVenture</h2>
        <p className="text-center mb-8">Inicia sesión</p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center gap-4 w-1/2"
        >
          <TextInput
            title="Correo electrónico"
            value=""
            onChange={() => {}}
            type="email"
          />
          <TextInput
            title="Contraseña"
            value=""
            onChange={() => {}}
            type="password"
          />
          <Button
            label="Iniciar sesión"
            size="large"
            paddingX="px-8"
            type="submit"
          />
        </form>
      </div>
      <div className="w-1/2 hidden md:block">
        <img
          src="/images/login_image.webp"
          alt="login"
          className="w-full h-auto max-h-screen object-cover object-top"
        />
      </div>
    </div>
  );
};
