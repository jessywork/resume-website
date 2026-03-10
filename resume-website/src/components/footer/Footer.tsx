import { FC } from "react";

//todo: add funny action to instagram 
export const footerItems = [
    { 
        id: 'instagram', 
        name: 'Instagram', 
        url: 'https://www.youtube.com/watch?v=3BFTio5296w&list=RD3BFTio5296w&start_radio=1' 
    },
    { 
        id: 'linkedin', 
        name: 'LinkedIn', 
        url: 'https://www.linkedin.com/in/j%C3%A9ssica-carvalho-577823230/' 
    },
    { 
        id: 'mail', 
        name: 'Email',
        url: 'mailto:jessysofia.work@gmail.com'
    },
];

const Footer: FC = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-16 px-64 py-120">
            <span className="text-3xl leading-10 font-bold text-primary">
                Jéssica Carvalho
            </span>
            <div className="flex items-center gap-16 text-[12px] leading-12px text-tertiary">
                {footerItems.map((item) => (
                    <a className="" href={item.url} target="_blank" key={`footer-link-${item.id}`}>{item.name}</a>
                ))}
            </div>
            <span className="text-[12px] leading-12px text-tertiary">
                © 2026 Jéssica Carvalho. All rights reserved.
            </span>
        </div>
    )
};

export default Footer;