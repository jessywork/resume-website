import Banner from "@/src/components/banner/Banner";
import Button from "@/src/components/button";
import { ButtonVariant } from "@/src/types/components/button";
import { MediaVariants } from "@/src/types/components/media";

const bannerData = {
  preTitle: 'FULLSTACK DEVELOPER',
  title: 'Hi,  my name is Jéssica Carvalho',
  description: 'I am currently working as a fullstack developer at Metyis',
  media: {
    file: {
      src: '/homelogo.svg', 
      alt: 'Home Logo' 
    },
    type: MediaVariants.Image
  }
};

export default function Home() {
  return (
    <div className="pl-30">
      <Banner {...bannerData} >
        <Button variant={ButtonVariant.Primary} className="banner-button">Button</Button>
      </Banner>
    </div>
  );
}