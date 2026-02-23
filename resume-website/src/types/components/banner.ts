import { ReactNode } from 'react';
import { ButtonType } from './button';
import { MediaType } from './media';

export enum ButtonVariant {
  Primary = 'primary',
  Secondary = 'secondary',
  Tertiary = 'tertiary',
}

export type BannerType = {
  preTitle?: string;
  title?: ReactNode;
  description?: string;
  cta?: ButtonType;
  media?: MediaType;
  classNameContainer?: string;
  classNameText?: string;
  classNameImage?: string;
};
