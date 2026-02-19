import { FC } from "react";
import Title from "../title";
import './Skills.css'
import HtmlIcon from "../icons/Html";

const skillsItems = [
    { id: 'html', icon: <HtmlIcon />, name: 'Figma', progress: '45%' },
];

const Skills: FC = () => {
    return (
        <div className="flex flex-col gap-12 px-23 py-16 items-center">
            <Title text='Skills' /> 
            <div className="flex flex-col gap-4 w-full">
                {skillsItems.map((item) => (
                    <div key={`skill-${item.id}`} className="">
                        <div className="">
                            {item.icon}
                        </div>
                        <span className="text-[#545454] text-[14px] font-semibold">{item.name}</span>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Skills;