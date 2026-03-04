import Banner from "@/src/components/banner/Banner";
import { footerItems } from "@/src/components/footer/Footer";
import { MediaVariants } from "@/src/types/components/media";

const bannerData = {
    preTitle: 'MY CONTACTS',
    title: 'Let’s build something together?',
    description: 'I’m available for new projects and collaborations, Shall we talk?',
    media: {
        file: {
        src: '/contactslogo.svg', 
        alt: 'Contacts Logo' 
        },
        type: MediaVariants.Image
    }
};

export default function Contacts() {
  return (
    <div className="p-30">
      <Banner {...bannerData} >
        <div className="flex gap-6 items-center">
            {footerItems.map((item) => (
                <a href={item.url} target="_blank" key={`contacts-link-${item.id}`}>{item.icon}</a>
            ))}
        </div>
      </Banner>
    </div>
  );
}
