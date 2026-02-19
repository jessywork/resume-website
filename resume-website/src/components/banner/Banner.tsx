import { FC } from "react";
import './Banner.css'
import Button from "../button/Button";
import { ButtonVariant } from "@/src/types/components/button";
import Media from "../media/Media";
import { MediaVariants } from "@/src/types/components/media";

const Banner: FC = () => {
    return (
        <div className="banner-container">
            <div className="banner-text">
                <span className="banner-pre-title">FULLSTACK DEVELOPER</span>
                <div className="banner-content">
                    <span className="banner-title">Hi,  my name is Jéssica Carvalho</span>
                    <span className="banner-description">I am currently working as a fullstack developer at Metyis</span>
                    <Button variant={ButtonVariant.Primary} className="banner-button">Button</Button>
                </div>
            </div>
            <div className="banner-media">
                <Media file={{ src: '/homelogo.svg', alt: 'Home Logo' }} type={MediaVariants.Image} />
            </div>
        </div>
    )
};

export default Banner;