import { FC } from "react";

const experienceItems = [
    { id: 'mid', company: 'Metyis', position: 'Mid Fullstack Developer', date: 'Jun 2025 - Current' },
    { id: 'junior', company: 'Metyis', position: 'Junior Fullstack Developer', date: 'Mar 2023 - Jun 2025' },
    { id: 'intern', company: 'Metyis', position: 'Intern Fullstack Developer', date: 'Mar 2022 - Mar 2023' },
];

const Cards: FC = () => {
    return (
        <div>
            {/* create component */}
            <span>title</span> 

            <div>
                {experienceItems.map((item) => (
                    // create component
                    <div key={`experience-${item.id}`}>
                        <div>
                            <div>icon</div>
                            <div>
                                <span>{item.position}</span>
                                <span>{item.company}</span>
                            </div>
                        </div>
                        <div>{item.date}</div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Cards;