import type { FunctionComponent, ReactNode } from 'react';

export interface TestProps {
  /** Test prop 1 */
  children: ReactNode;
  /** Test prop 2 */
  testString: string;
  /** Test prop 3 */
  testNumber: number;
}

/**
 * Test component
 */
export const Test: FunctionComponent<TestProps>;
