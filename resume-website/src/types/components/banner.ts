import { ReactNode } from 'react';
import { MediaType } from './media';

export enum ButtonVariant {
  Primary = 'primary',
  Secondary = 'secondary',
  Tertiary = 'tertiary',
}

export type BannerType = {
  preTitle?: string;
  title?: string;
  description?: string;
  children?: ReactNode;
  media?: MediaType;
  classNameContainer?: string;
  classNameText?: string;
  classNameImage?: string;
};
