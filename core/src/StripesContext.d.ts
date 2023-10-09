import { ComponentType, Context } from 'react';
import { StripesType } from '..';

export const StripesContext: Context<StripesType>;

export const useStripes: () => StripesType;

export function withStripes<Props extends { stripes: StripesType }>(
  component: ComponentType<Props>,
): ComponentType<Omit<Props, 'stripes'>>;
