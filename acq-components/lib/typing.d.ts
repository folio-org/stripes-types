import type ky from 'ky';

export type HTTPClient = typeof ky;
export type HTTPClientOptions = Parameters<HTTPClient['extend']>[0];
export type HTTPClientSearchParams = HTTPClientOptions extends { searchParams?: infer S } ? S : never;
