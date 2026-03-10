import { FC } from "react";
import Media from "../media/Media";
import type { BannerType } from "@/src/types/components/banner";

const Banner: FC<BannerType> = ({ preTitle, title, description, children, media, classNameContainer, classNameText, classNameImage }) => {
    return (
        <div className={`flex justify-between items-center gap-12 ${classNameContainer}`}>
            <div className={`flex flex-col gap-3 w-[45%] ${classNameText}`}>
                {preTitle && <span className={`text-[1.25rem] font-semibold text-secondary ${classNameText}`}>{preTitle}</span>}
                <div className="flex flex-col gap-32">
                    {title && <span className="text-[4rem] front-bold">{title}</span>}
                    {description && <span className="text-[18px] leading-32 text-primary">{description}</span>}
                    {children}
                </div>
            </div>
            {media && <div className={`w-1/2 h-full ${classNameImage}`}>
                <Media {...media} className="static! h-auto! w-full!"/>
            </div>}
        </div>
    )
};

export default Banner;