import { Component, ComponentType, ReactNode, Ref } from 'react';
import { PaneProps } from '../../../components';

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
  paneTitleRef?: Ref<HTMLDivElement>;
  location: Location;
  showSettings?: boolean;
  forceRender: number;
  // omitted as its exported wrapped by withStripes
  // stripes: StripesType;
}

export default class Settings extends Component<SettingsProps> {}
