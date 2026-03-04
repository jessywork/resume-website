import { FC } from "react";
import Title from "../title";
import './Skills.css'
import HtmlIcon from "../icons/Html";

const skillsItems = [
    { id: 'html', icon: <HtmlIcon width={32} />, name: 'HTML 5', progress: '80' },
    { id: 'css', icon: <HtmlIcon width={32} />, name: 'css 3', progress: '70' },
    { id: 'javascript', icon: <HtmlIcon width={32} />, name: 'JavaScript', progress: '60' },
    { id: 'dotnet', icon: <HtmlIcon width={32} />, name: '.Net', progress: '40' },
    { id: 'nestjs', icon: <HtmlIcon width={32} />, name: 'NestJS', progress: '30' },
    { id: 'nextjs', icon: <HtmlIcon width={32} />, name: 'NextJS', progress: '75' },
    { id: 'strapi', icon: <HtmlIcon width={32} />, name: 'Strapi', progress: '70' },
    { id: 'typescript', icon: <HtmlIcon width={32} />, name: 'Typescript', progress: '90' },
    { id: 'blazor', icon: <HtmlIcon width={32} />, name: 'Blazor', progress: '50' },
    { id: 'csharp', icon: <HtmlIcon width={32} />, name: 'C#', progress: '60' },
    { id: 'figma', icon: <HtmlIcon width={32} />, name: 'Figma', progress: '55' },
    { id: 'react', icon: <HtmlIcon width={32} />, name: 'React', progress: '75' },
];

const Skills: FC = () => {
    return (
        <div className="flex flex-col gap-12 px-23 py-16 items-center">
            <Title text='Skills' /> 
            <div className="skills-content">
                {skillsItems.map((item) => (
                    <div key={`skill-${item.id}`} className="skill-item">
                        <div className="skill-progress" style={{ "--progress": item.progress } as React.CSSProperties}>
                            <div className="skill-icon">
                                {item.icon}
                            </div>
                        </div>
                        <span className="skill-text">{item.name}</span>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Skills;