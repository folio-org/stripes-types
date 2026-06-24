import { Component, ComponentType, ReactNode, Ref } from 'react';
import { PaneProps } from '../../../components';

interface Page {
  route: string;
  label: ReactNode;
  component: ComponentType<Record<string, never>>;
  perm?: string;
}

interface Section {
  label: ReactNode;
  pages: Page[];
}

export interface SettingsProps {
  additionalRoutes?: ReactNode[];
  navPaneWidth?: PaneProps['defaultWidth'];
  pages: Page[];
  paneTitle?: ReactNode;
  paneTitleRef?: Ref<HTMLDivElement>;
  location: Location;
  showSettings?: boolean;
  forceRender: number;
  sections?: any;
  // omitted as its exported wrapped by withStripes
  // stripes: StripesType;
}

export default class Settings extends Component<SettingsProps> {}
