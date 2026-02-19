type ImageType = {
  src: string;
  alt: string;
  className?: string;
};

type VideoType = {
  src: string;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
};

export enum MediaVariants {
  Image = 'image',
  Video = 'video',
}

export type MediaType =
  | {
      type: MediaVariants.Image;
      file: ImageType;
      className?: string;
    }
  | {
      type: MediaVariants.Video;
      file: VideoType;
      className?: string;
    };
