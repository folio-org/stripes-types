import { ReactNode } from 'react';
import { ConnectedSource } from '../../ConnectedSource';

export interface NoResultsMessageProps {
  source: ConnectedSource;
  searchTerm: string;
  filterPaneIsVisible: boolean;
  toggleFilterPane: () => void;
  notLoadedMessage?: ReactNode;
}

export default function NoResultsMessage(props: NoResultsMessageProps): JSX.Element;
