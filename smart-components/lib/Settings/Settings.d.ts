import { ReactNode, ComponentType, RefObject, Component } from 'react';
import { PaneProps } from '../../../components';
import { StripesType } from '../../../core';

export interface SettingsProps {
  additionalRoutes?: ReactNode[];
  navPaneWidth?: PaneProps['defaultWidth'];
  pages: {
    route: string;
    label: ReactNode;
    component: ComponentType<Record<string, never>>;
    perm?: string;
  }[];
  paneTitle?: ReactNode;
  paneTitleRef?: RefObject<HTMLDivElement>;
  location: Location;
  showSettings?: boolean;
  forceRender: number;
  // omitted as its exported wrapped by withStripes
  // stripes: StripesType;
}

export default class Settings extends Component<SettingsProps> {}
