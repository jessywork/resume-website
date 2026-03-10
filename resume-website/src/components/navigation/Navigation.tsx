import { FC } from "react";
import Link from "next/link";
import Button from "../button";

const navigationItems = [
    { id: 'home', name: 'Jéssica Carvalho', url: '/' },
    { id: 'about', name: 'About', url: '/about' },
    { id: 'projects', name: 'Projects', url: '/projects' },
    { id: 'contacts', name: 'Contacts', url: '/contacts' },
];

const Navigation: FC = () => {
    return (
        <nav className="fixed z-1 flex w-full items-center justify-between border border-white/30 bg-white/10 px-120 py-16 shadow-[0_8px_32px_rgba(0,0,0,0.2)] backdrop-blur-[15px]">
            <Link className="text-3xl leading-10 font-bold text-primary cursor-pointer" href={navigationItems[0].url}>
                {navigationItems[0].name}
            </Link>
            <div className="flex gap-40">
                {navigationItems.slice(1).map((item) => (
                    <Link className="relative cursor-pointer text-[1rem] leading-24 text-tertiary after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-primary hover:text-secondary after:transition-all after:duration-200 hover:after:w-full" key={`navigation-${item.id}`} href={item.url}>
                        {item.name}
                    </Link>
                ))}
            </div>
            <Button>Resume</Button>
        </nav>
    )
};

export default Navigation;