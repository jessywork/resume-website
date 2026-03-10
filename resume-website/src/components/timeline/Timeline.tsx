import { FC } from "react";
import Title from "../title";

type TimelineItem = {
    id: string;
    role: string;
    company: string;
    date: string;
    description: string;
    tags: string[];
};

const timelineItems: TimelineItem[] = [
    {
        id: 'mid',
        role: 'Mid Fullstack Developer',
        company: 'Metyis',
        date: 'Jun 2025 - Present',
        description: 'Leading backend initiatives and developing scalable solutions using C# and .NET Core. Collaborating with cross-functional teams to deliver high-quality software products.',
        tags: ['.NET Core', 'SQL Server', 'Azure'],
    },
    {
        id: 'junior',
        role: 'Junior Fullstack Developer',
        company: 'Metyis',
        date: 'Mar 2023 - Jun 2025',
        description: 'Developed and maintained e-commerce platforms. Implemented new features using React and .NET, and integrated APIs to enhance the shopping experience.',
        tags: ['React', 'Next.js', 'PostgreSQL'],
    },
    {
        id: 'intern',
        role: 'Intern Fullstack Developer',
        company: 'Metyis',
        date: 'Mar 2022 - Mar 2023',
        description: 'Supported the development of internal tools and customer-facing web applications, gaining practical experience with agile methodologies and version control.',
        tags: ['C#', 'Blazor'],
    },
];

const Timeline: FC = () => {
    return (
        <div className="flex flex-col gap-32 items-center justify-center pt-120" aria-label="Professional Journey">
            <Title text="Professional Journey" />
            <div className="relative">
                <div className="absolute bottom-6 left-4 top-6 w-px bg-primary" aria-hidden="true" />
                <div className="flex flex-col gap-6">
                    {timelineItems.map((item) => (
                        <div key={item.id} className="relative flex gap-5">
                            <div className="z-10 flex size-8 shrink-0 items-center justify-center rounded-full border border-[#714AAA] bg-white text-[11px] text-secondary">
                                <span aria-hidden="true">.</span>
                            </div>
                            <div className="w-125 flex-1 flex flex-col gap-16 rounded-lg border border-[#ececf1] bg-white p-24 shadow-[0_8px_24px_rgba(43,36,76,0.05)]">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="text-sm font-bold text-primary">{item.role}</h3>
                                        <p className="text-xs font-medium text-secondary">{item.company}</p>
                                    </div>
                                    <time className="w-fit rounded-sm bg-[#f1e8fb] p-4 text-[8px] font-semibold tracking-wide text-[#6b6b75]">
                                        {item.date}
                                    </time>
                                </div>
                                <p className="text-[10px] leading-relaxed text-[#6b6b75]">
                                    {item.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {item.tags.map((tag) => (
                                        <span key={`${item.id}-${tag}`} className="rounded-sm border border-[#e4e4eb] px-2 py-1 text-[8px] font-medium text-[#6b6b75]">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Timeline;
