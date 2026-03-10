import Projects from "@/src/components/spotlight/Spotlight";
import { MediaVariants } from "@/src/types/components/media";

const projectsItems = [
    { 
        id: 'project-1', 
        image: {
            file: {
            src: '/project-1.png', 
            alt: 'Project 1' 
            },
            type: MediaVariants.Image
        }, 
        title: 'Project Name', 
        description: 'I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.', 
        url: '/' 
    },
    { 
        id: 'project-2', 
        image: {
            file: {
            src: '/project-2.png', 
            alt: 'Project 2' 
            },
            type: MediaVariants.Image
        }, 
        title: 'Project Name', 
        description: 'What was your role, your deliverables, if the project was personal, freelancing.', 
        url: '/' 
    },
    { 
        id: 'project-3', 
        image: {
            file: {
            src: '/project-3.png', 
            alt: 'Project 3' 
            },
            type: MediaVariants.Image
        },
        title: 'Project Name', 
        description: 'You can also add in this description the type of the project, if it was for web, mobile, electron.', 
        url: '/' 
    },
];

export default function Contacts() {
  return (
    <div className="p-30">
      <Projects projects={projectsItems} />
    </div>
  );
}
