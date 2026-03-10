import { FC, ReactNode } from "react";
import Label from "../label";
import Title from "../title";

type SkillGroup = {
    id: string;
    title: string;
    description: string;
    tags: string[];
    className: string;
    children?: ReactNode;
};

const skillGroups: SkillGroup[] = [
    {
        id: 'social-media',
        title: 'Private Social Media',
        description: 'Development of a private web application for a client, using C#, .NET, and SCSS.',
        tags: ['C#', '.NET', 'Entity Framework', 'SQL Server', 'REST APIs', 'SCSS'],
        className: 'col-span-7',
    },
    {
        id: 'back-office',
        title: 'Back Office with Interactive Map',
        description: 'Maintenance and enhancement of an existing back-office application using React and NestJS, including bug fixes and the development of new features involving map interaction.',
        tags: ['React', 'Nest.js'],
        className: 'col-span-5',
    },
    {
        id: 'boilerplate',
        title: 'Design System & Boilerplate',
        description: 'Development of a Design System and boilerplate for web applications using React, TypeScript, Next.js, and Styled Components, with a focus on component reusability and consistency.',
        tags: ['Next.js', 'Styled Components', 'Emotion', 'TypeScript'],
        className: 'col-span-4',
    },
    {
        id: 'meetings',
        title: 'Meetings with AI Integration',
        description: 'Development of an application for conducting and managing meetings, with integrated Artificial Intelligence features, using React and Tailwind CSS.',
        tags: ['React', 'Tailwind CSS'],
        className: 'col-span-8',
    },
    {
        id: 'metyis',
        title: 'Metyis Website',
        description: 'Redesign and migration of a website’s CMS using Next.js and Strapi, including the development of the new interface and integration with the new content management system.',
        tags: ['Next.js', 'Styled Components', 'Emotion', 'TypeScript', 'Strapi'],
        className: 'col-span-7',
    },
    {
        id: 'fios-da-ria',
        title: 'Fios da Ria Website',
        description: 'Development of the Fios da Ria website from scratch, including the design and implementation of the web interface, with a focus on performance, usability, and responsive design.',
        tags: ['Next.js', 'SCSS', 'TypeScript'],
        className: 'col-span-5',
    },
];

const Skills: FC = () => {
    return (
        <div className="flex flex-col gap-32 items-center justify-center">
            <Title text="Technical Arsenal" />
            <div className="w-full" aria-label="Skills">
                <div className="grid grid-cols-12 gap-16">
                    {skillGroups.map((group) => (
                        <div
                            key={group.id}
                            className={`${group.className} min-h-32 rounded-lg border border-[#e8e8ef] bg-white p-4 shadow-[0_8px_24px_rgba(43,36,76,0.05)] md:p-5`}
                        >
                            <div className="flex items-start gap-2">
                                <div className="min-w-0">
                                    <h3 className="text-sm font-bold leading-tight text-[#25252c]">
                                        {group.title}
                                    </h3>
                                </div>
                            </div>
                            <p className="mt-3 max-w-136 text-[10px] leading-[1.45] text-[#6b6b75]">
                                {group.description}
                            </p>
                            {group.children}
                            <div className="mt-3 flex flex-wrap gap-2">
                                {group.tags.map((tag, index) => (
                                    <Label text={tag} key={index} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
};

export default Skills;