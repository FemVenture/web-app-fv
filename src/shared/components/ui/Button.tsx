import { ReactElement, MouseEvent, useState, useEffect } from "react";

type ButtonProps = {
  disabled?: boolean;
  label?: string;
  type?: "button" | "submit";
  children?: ReactElement | Array<ReactElement>;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  size?: "small" | "medium" | "large";
  variant?: "primary" | "secondary";
  borderColor?: "blue" | "gray" | "white";
  borderSize?: "big" | "medium" | "small";
};

export const Button = ({
  disabled,
  label,
  type,
  children,
  onClick,
  size = "medium",
  variant = "primary",
  borderColor = "blue",
  borderSize = "small",
}: ButtonProps): ReactElement => {
  const [buttonStyle, setButtonStyle] = useState("py-2 px-4 text-base w-full");
  const [variantStyle, setVariantStyle] = useState(
    variant === "primary" ? "bg-blue-950 text-white" : "bg-white text-blue-950"
  );
  const [borderColorStyle, setBorderColorStyle] = useState("border-blue-950");
  const [borderSizeStyle, setBorderSizeStyle] = useState("border-2");
  useEffect(() => {
    if (borderColor === "white") {
      setBorderColorStyle("border-white");
    } else if (borderColor === "gray") {
      setBorderColorStyle("border-gray-300");
    } else {
      setBorderColorStyle("border-blue-950");
    }
    if (size === "small") {
      setButtonStyle("py-2 px-2 text-sm w-full md:w-1/4 lg:w-1/6");
    } else if (size === "large") {
      setButtonStyle("py-3 px-6 text-lg w-full");
    }
    if (borderSize === "big") {
      setBorderSizeStyle("border-8");
    } else if (borderSize === "small") {
      setBorderSizeStyle("border-2");
    } else {
      setBorderSizeStyle("border-4");
    }
  }, []);

  return (
    <button
      type={type}
      onClick={(e) => (onClick ? onClick(e) : undefined)}
      disabled={disabled}
      className={`flex justify-center font-semibold rounded-xl ${borderSizeStyle} ${buttonStyle} ${variantStyle} ${borderColorStyle}`}
    >
      {label ?? children ?? ""}
    </button>
  );
};
