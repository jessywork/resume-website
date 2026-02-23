import Banner from "@/src/components/banner/Banner";
import Cards from "@/src/components/cards/Cards";
import { ButtonVariant } from "@/src/types/components/button";
import { MediaVariants } from "@/src/types/components/media";

const bannerData = {
  title: 'About me',
  description: 'I am a Fullstack Developer with experience since 2022, specializing in building robust, scalable, and user-focused applications across both frontend and backend environments. My background includes hands-on development with C# .NET, MAUI, and relational databases such as Microsoft SQL Server and PostgreSQL, enabling me to design efficient architectures and deliver reliable software solutions. I have developed and maintained RESTful APIs, implemented secure data flows, and worked extensively with modern web frameworks including React, Blazor, NestJS, and Next.js. My proficiency in TypeScript and JavaScript allows me to create clean, maintainable code and dynamic interfaces that enhance user experience.',
  cta: {
    variant: ButtonVariant.Primary,
    children: 'Resume'
  },
  media: {
    file: {
      src: '/aboutlogo.svg', 
      alt: 'About Logo' 
    },
    type: MediaVariants.Image
  }
};

export default function About() {
  return (
    <div className="p-30">
      <Banner {...bannerData} classNameContainer="items-start" classNameText="w-[55%]" classNameImage="w-[45%]" />
      <Cards />
    </div>
  );
}
