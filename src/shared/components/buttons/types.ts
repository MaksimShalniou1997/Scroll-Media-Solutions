import { MouseEventHandler, ReactNode } from 'react';

export interface IButton {
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement | HTMLDivElement>;
  className?: string;
  disabled?: boolean;
  startIcon?: ReactNode;
}

export interface IMainButton extends IButton {
  longer?: boolean;
}
