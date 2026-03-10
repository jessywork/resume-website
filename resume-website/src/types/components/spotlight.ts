import { MediaType } from './media';

export type ProjectType = {
  id: string;
  image: MediaType;
  title: string;
  description: string;
  url: string;
};

export type SpotlightType = {
  projects: ProjectType[];
};
