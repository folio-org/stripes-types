import { CalloutContextType } from '../../../../core';

type ShowCalloutFnArgs = Omit<Parameters<CalloutContextType['sendCallout']>[0], 'message'> & {
  message?: string | React.ReactNode,
  messageId?: string,
  values?: Record<string, string>,
};

type ShowCalloutFn = (args: ShowCalloutFnArgs) => void;

export declare function useShowCallout(): ShowCalloutFn;
