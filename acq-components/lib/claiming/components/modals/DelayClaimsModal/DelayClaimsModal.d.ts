import React from 'react';
import {
  FormProps,
  FormRenderProps,
} from 'react-final-form';


interface DelayClaimsModalOwnProps {
  claimsCount: number;
  disabled: boolean;
  message?: React.JSX.Element,
  onCancel: () => void;
  open: boolean;
}

type DelayClaimsModalProps<FormValues = Record<string, unknown>> =
  DelayClaimsModalOwnProps &
  Pick<FormProps<FormValues>, 'onSubmit'> &
  Partial<FormRenderProps<FormValues>>;

export declare const DelayClaimsModal: <FormValues = Record<string, unknown>>(props: DelayClaimsModalProps<FormValues>) => React.JSX.Element;
