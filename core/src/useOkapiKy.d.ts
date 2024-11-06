import type ky from 'ky';

export interface useOkapiKyOptions {
  tenant?: string;
}

export default function useOkapiKy({ tenant }: useOkapiKyOptions): typeof ky;
