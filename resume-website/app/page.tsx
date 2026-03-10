'use client'

import Banner from "@/src/components/banner/Banner";
import Button from "@/src/components/button";
import Label from "@/src/components/label";
import { ButtonVariant } from "@/src/types/components/button";
import { MediaVariants } from "@/src/types/components/media";

const bannerData = {
  preTitle: 'FULLSTACK DEVELOPER',
  title: 'Hello, I am Jéssica Carvalho',
  description: 'Full Stack Developer with professional experience in software development since 2022. Throughout my professional career, I have worked with C# and .NET, Blazor, .NET MAUI, SQL Server, and PostgreSQL, contributing to the development of applications and projects across different contexts. Currently, I am more focused on frontend development using React, TypeScript, and Next.js, including the use of Strapi as a CMS. I am interested in web development, application architecture, and creating efficient, scalable, and maintainable solutions.',
  media: {
    file: {
      src: '/aboutlogo.svg', 
      alt: 'About Logo' 
    },
    type: MediaVariants.Image
  }
};

const handleOnClick = () => {
  window.open("https://github.com/jessywork", "_blank", "noopener,noreferrer");
};

export default function Home() {
  return (
    <div className="p-120">
      <Banner {...bannerData} >
        <div className="flex flex-col justify-center gap-64">
          <Button
            variant={ButtonVariant.Primary}
            onClick={handleOnClick}
          >
            Check GitHub
          </Button>
          <div className="flex items-center gap-16">
            <Label text="React" />
            <Label text="Next.js" />
            <Label text="TypeScript" />
            <Label text="Tailwind CSS" />
            <Label text="Styled Components" />
          </div>
        </div>
      </Banner>
    </div>
  );
}