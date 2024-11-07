interface AddressOption {
  label: string;
  value: string;
}

export const getAddressOptions: (address: ACQ.Address[]) => AddressOption[];
