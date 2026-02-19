import { FC } from "react";
import './Button.css'
import { ButtonType } from "@/src/types/components/button";

const Button: FC<ButtonType> = ({ variant, children, className }) => {
    return (
        <button className={`btn btn-${variant} ${className}`}>
            {children}
        </button>
    )
};

export default Button;