import { FC } from "react";
import Image from "next/image";
import { MediaType } from "@/src/types/components/media";

const Media: FC<MediaType> = ({ file, type, className }) => {
    return (
        <>
            {type === 'image' && (
                <Image
                    src={file.src}
                    alt={file.alt}
                    className={className}
                    layout='fill'
                />
            )}
            {type === 'video' && (
                <video
                    src={file.src}
                    className={className}
                    autoPlay={file.autoPlay}
                    loop={file.loop}
                    muted={file.muted}
                    controls={file.controls}
                />
            )}
        </>
    )
};

export default Media;