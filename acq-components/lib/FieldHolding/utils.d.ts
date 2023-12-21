

export const getCallNumber({
  callNumber,
  callNumberPrefix,
  callNumberSuffix,
}: {
  callNumber?: string;
  callNumberPrefix?: string;
  callNumberSuffix?: string;
}): string;
export const getHoldingLocationName: any;
export const getHoldingOptions(
  holdings?: any[],
  locationsMap?: {},
): {
  value: any;
  label: string | React.JSX.Element;
}[];
