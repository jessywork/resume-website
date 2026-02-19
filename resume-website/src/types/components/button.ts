import { ReactNode } from 'react';

export enum ButtonVariant {
  Primary = 'primary',
  Secondary = 'secondary',
  Tertiary = 'tertiary',
}

export type ButtonType = {
  variant?: ButtonVariant;
  children?: ReactNode;
  className?: string;
};
