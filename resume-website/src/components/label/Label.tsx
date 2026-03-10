import { FC } from "react";
import type { LabelType } from "@/src/types/components/label";

const Label: FC<LabelType> = ({ text }) => {
    return (
        <div className="bg-(--bg-primary)/10 text-secondary px-16 py-8 rounded-18 text-[12px] leading-12">{text}</div>
    )
};

export default Label;