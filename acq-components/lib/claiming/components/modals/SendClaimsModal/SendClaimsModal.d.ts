import React from 'react';
import {
  FormProps,
  FormRenderProps,
} from 'react-final-form';

interface SendClaimsModalOwnProps {
  claimsCount: number;
  disabled: boolean;
  message?: React.JSX.Element,
  onCancel: () => void;
  open: boolean;
}

type SendClaimsModalProps<FormValues = Record<string, unknown>> =
  SendClaimsModalOwnProps &
  Pick<FormProps<FormValues>, 'onSubmit'> &
  Partial<FormRenderProps<FormValues>>;

export declare const SendClaimsModal: <FormValues = Record<string, unknown>>(props: SendClaimsModalProps<FormValues>) => React.JSX.Element;
