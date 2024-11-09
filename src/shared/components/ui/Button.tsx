import { ReactElement, MouseEvent, useState, useEffect } from "react";

type ButtonProps = {
    disabled?: boolean;
    label?: string,
    type?: "button" | "submit",
    children?: ReactElement | Array<ReactElement>,
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void,
    size?: "small" | "medium" | "large",
    variant?: "primary" | "secondary",
    borderColor?: "blue" | "gray" | "white",
    borderSize?: "big" | "medium" | "small"
    paddingX?: string;
    paddingY?: string;
}

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
    paddingX,
    paddingY = "py-2",
}: ButtonProps): ReactElement => {
    const [buttonStyle, setButtonStyle] = useState("text-base w-full")
    const [variantStyle] = useState(variant === "primary" ? "bg-primary text-background" : "bg-background text-primary")
    const [borderColorStyle, setBorderColorStyle] = useState("border-blue-950")
    const [borderSizeStyle, setBorderSizeStyle] = useState("border-2")
    useEffect(() => {
        if (borderColor === "white"){
            setBorderColorStyle("border-background")
        } else if (borderColor === "gray") {
            setBorderColorStyle("border-light")
        } else {
            setBorderColorStyle("border-primary")
        }
        if (size === "small") {
            setButtonStyle("text-sm w-full md:w-1/4 lg:w-1/6")
        } else if (size === "large") {
            setButtonStyle("text-lg w-full")
        }
        if (borderSize === "big") {
            setBorderSizeStyle("border-8")
        } else if (borderSize === "small") {
            setBorderSizeStyle("border-2")
        } else {
            setBorderSizeStyle("border-4")  
        }
    }, [])
    return (
        <button type={type} onClick={(e) => onClick ? onClick(e) : undefined} disabled={disabled} className={`flex ${paddingY} ${paddingX} justify-center font-semibold rounded-xl ${borderSizeStyle} ${buttonStyle} ${variantStyle} ${borderColorStyle}`}>
            {label ?? children ?? ""}
        </button>
    )
}