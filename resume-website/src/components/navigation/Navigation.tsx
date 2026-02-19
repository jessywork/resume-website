import { FC } from "react";
import './Navigation.css'

// todo: change url
const navigationItems = [
    { id: 'home', name: 'Jéssica Carvalho', url: '/' },
    { id: 'about', name: 'About', url: '/' },
    { id: 'projects', name: 'Projects', url: '/' },
    { id: 'contacts', name: 'Contacts', url: '/' },
];

//todo: add url
const Navigation: FC = () => {
    return (
        <div className="navigation-container">
            <span className="navigation-single-item">
                {navigationItems[0].name}
            </span>
            <div className="navigation-multiple-items">
                {navigationItems.slice(1).map((item) => (
                    <div className="navigation-item" key={`navigation-${item.id}`}>
                        {item.name}
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Navigation;