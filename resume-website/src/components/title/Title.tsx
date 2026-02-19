import { FC } from "react";
import { TitleType } from "@/src/types/components/title";
import './Title.css'

const Title: FC<TitleType> = ({ text }) => {
    return (
        <h2 className="title-header">{text}</h2>
    )
};

export default Title;