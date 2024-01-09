import * as H from 'history';

export default function buildUrl(
  location: H.Location,
  values: Record<string, unknown>,
  basePath?: string,
): string;
