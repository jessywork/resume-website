import { FC } from "react";
import type { TitleType } from "@/src/types/components/title";

const Title: FC<TitleType> = ({ text }) => {
    return (
        <h2 className="relative text-[2rem] leading-40 font-bold after:content-[''] after:absolute after:bottom-0 after:w-104 after:h-[0.25rem] after:bg-primary after:left-1/2 after:-translate-x-1/2">{text}</h2>
    )
};

export default Title;