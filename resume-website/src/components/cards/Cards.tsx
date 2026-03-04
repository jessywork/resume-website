import { FC } from "react";
import Title from "../title";
import './Cards.css'
import Media from "../media";
import { MediaVariants } from "@/src/types/components/media";

const experienceItems = [
    { id: 'mid', company: 'Metyis', position: 'Mid Fullstack Developer', date: 'Jun 2025 - Current' },
    { id: 'junior', company: 'Metyis', position: 'Junior Fullstack Developer', date: 'Mar 2023 - Jun 2025' },
    { id: 'intern', company: 'Metyis', position: 'Intern Fullstack Developer', date: 'Mar 2022 - Mar 2023' },
];

const Cards: FC = () => {
    return (
        <div className="flex flex-col gap-12 px-23 py-16 items-center">
            <Title text='Experience' /> 
            <div className="flex flex-col gap-4 w-full">
                {experienceItems.map((item) => (
                    <div key={`experience-${item.id}`} className="flex justify-between items-center p-6 card-content">
                        <div className="flex gap-12">
                            <Media file={{ src: '/metyis.svg', alt: 'Metyis Logo' }} type={MediaVariants.Image} className="card-media" />
                            <div className="flex flex-col gap-6">
                                <span className="text-[#828282] text-[20px] font-medium">{item.position}</span>
                                <span className="text-[24px] font-medium">{item.company}</span>
                            </div>
                        </div>
                        <div className="text-[#828282] text-[20px] font-medium">{item.date}</div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Cards;