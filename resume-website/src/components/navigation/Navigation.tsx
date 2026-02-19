import { FC } from "react";
import './Navigation.css'
import Link from "next/link";

// todo: change url
const navigationItems = [
    { id: 'home', name: 'Jéssica Carvalho', url: '/' },
    { id: 'about', name: 'About', url: '/about' },
    { id: 'projects', name: 'Projects', url: '/projects' },
    { id: 'contacts', name: 'Contacts', url: '/contacts' },
];

//todo: add url
const Navigation: FC = () => {
    return (
        <nav className="navigation-container">
            <Link className="navigation-single-item" href={navigationItems[0].url}>
                {navigationItems[0].name}
            </Link>
            <div className="navigation-multiple-items">
                {navigationItems.slice(1).map((item) => (
                    <Link className="navigation-item" key={`navigation-${item.id}`} href={item.url}>
                        {item.name}
                    </Link>
                ))}
            </div>
        </nav>
    )
};

export default Navigation;