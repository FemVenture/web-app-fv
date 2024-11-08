import { ReactNode } from "react";
import Navbar from "../components/layout/Navbar";

type BaseLayoutProps = {
  children: ReactNode;
};

export const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <div className="min-h-dvh">
      <Navbar />
      <main>{children}</main>
    </div>
  );
};
