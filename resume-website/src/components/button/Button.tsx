import { FC } from "react";
import { type ButtonType, ButtonVariant } from "@/src/types/components/button";

const baseStyles =
  'cursor-pointer rounded-lg px-32 py-12 text-[1rem] leading-24 w-fit';

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-primary text-white hover:bg-primary-hover',
  secondary:
    'border border-primary text-secondary hover:bg-primary hover:text-white',
  tertiary: 'text-primary',
};


const Button: FC<ButtonType> = ({ variant = ButtonVariant.Primary, children, onClick }) => {
    return (
        <button
          className={`${baseStyles} ${variantStyles[variant]}`}
            onClick={onClick}
            type='button'
        >
            {children}
        </button>
    )
};

export default Button;