import { FC } from "react";
import './Footer.css'
import Instagram from "@/src/icons/Instagram";
import LinkedIn from "@/src/icons/LinkedIn";
import Mail from "@/src/icons/Mail";

//todo: add funny action to instagram 
const footerItems = [
    { 
        id: 'instagram', 
        icon: <Instagram />, 
        url: 'https://www.youtube.com/watch?v=3BFTio5296w&list=RD3BFTio5296w&start_radio=1' 
    },
    { 
        id: 'linkedin', 
        icon: <LinkedIn />, 
        url: 'https://www.linkedin.com/in/j%C3%A9ssica-carvalho-577823230/' 
    },
    { 
        id: 'mail', 
        icon: <Mail /> ,
        url: 'mailto:jessysofia.work@gmail.com'
    },
];

const Footer: FC = () => {
    return (
        <div className="footer-container">
            <div className="footer-links">
                {footerItems.map((item) => (
                    <a className="footer-link" href={item.url} target="_blank" key={`footer-link-${item.id}`}>{item.icon}</a>
                ))}
            </div>
            <div className="footer-text">
                Jéssica Carvalho 2026
            </div>
        </div>
    )
};

export default Footer;