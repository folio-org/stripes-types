import type ky from 'ky';

export interface useOkapiKyOptions {
  tenant?: string;
}

export default function useOkapiKy(options?: useOkapiKyOptions): typeof ky;
