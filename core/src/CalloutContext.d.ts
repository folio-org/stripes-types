import { Context, ReactNode } from 'react';

export type CalloutContextType = {
  sendCallout: (args: {
    type?: 'success' | 'error' | 'warning' | 'info';
    timeout?: number;
    message: ReactNode;
  }) => void;
};

export const CalloutContext: Context<CalloutContextType>;

export const useCallout: () => CalloutContextType;
