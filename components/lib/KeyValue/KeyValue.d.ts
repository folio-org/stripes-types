import { FunctionComponent, ReactNode } from 'react';
import { RequireExactlyOne } from 'type-fest';

export type KeyValueProps = {
  label: ReactNode;
  subValue?: ReactNode;
} & RequireExactlyOne<{ children: ReactNode; value: ReactNode }>;

export const KeyValue: FunctionComponent<KeyValueProps>;
export default KeyValue;
