import { FC } from "react";
import './Banner.css'
import Button from "../button/Button";
import Media from "../media/Media";
import { BannerType } from "@/src/types/components/banner";

const Banner: FC<BannerType> = ({ preTitle, title, description, cta, media, classNameContainer, classNameText, classNameImage }) => {
    return (
        <div className={`flex justify-between items-center gap-12 ${classNameContainer}`}>
            <div className={`flex flex-col gap-3 w-[45%] ${classNameText}`}>
                {preTitle && <span className={`banner-pre-title ${classNameText}`}>{preTitle}</span>}
                <div className="banner-content">
                    {title && <span className="banner-title">{title}</span>}
                    {description && <span className="banner-description">{description}</span>}
                    {cta && <Button {...cta} className="banner-button">{cta.children}</Button>}
                </div>
            </div>
            {media && <div className={`w-1/2 h-full banner-media ${classNameImage}`}>
                <Media {...media} />
            </div>}
        </div>
    )
};

export default Banner;