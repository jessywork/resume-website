import { FC } from "react";
import './Spotlight.css'
import Media from "../media";
import { ButtonVariant } from "@/src/types/components/button";
import Button from "../button";
import { SpotlightType } from "@/src/types/components/spotlight";

const Spotlight: FC<SpotlightType> = ({ projects }) => {
    return (
        <div className="flex flex-col gap-20">
            {projects.map((item) => (
                <div key={`project-${item.id}`} className="project-card">
                    <div className="flex flex-col gap-6 project-text">
                        <h3 className="text-[40px] font-bold">{item.title}</h3>
                        <span className="text-[18px] text-[#828282]">{item.description}</span>
                        <Button variant={ButtonVariant.Secondary} className="project-button">View Project</Button>
                    </div>
                    <div className='w-1/2 h-full project-media'>
                        <Media {...item.image} />
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Spotlight;