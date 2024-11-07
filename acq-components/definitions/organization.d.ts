declare namespace ACQ {
  interface Organization {
    id?: string;
    name: string;
    code: string;
    description?: string;
    /** This would keep the invoice from being feed into the batch process (i.e. not generate an external voucher/payment) but would still move values in the system. This might be defined by the vendor relationship and exposed for override on the invoice. */
    exportToAccounting?: boolean;
    status: Organization.Status;
    /** A list of organization types assigned to this organization */
    organizationTypes?: string[];
    /** The language for this organization */
    language?: string;
    /** The list of aliases for this organization */
    aliases?: Organization.Alias[];
    /** The list of addresses for this organization */
    addresses?: Organization.Address[];
    /** The list of phone numbers for this organization */
    phoneNumbers?: Organization.PhoneNumber[];
    /** The list of emails for this organization */
    emails?: Organization.Email[];
    /** The list of URLs for this organization */
    urls?: Organization.Url[];
    /** An array of contact record IDs */
    contacts?: string[];
    /** An array of privileged contact record IDs */
    privilegedContacts?: string[];
    /** The list of agreements for this organization */
    agreements?: Organization.Agreement[];
    /** The ERP code for this organization */
    erpCode?: string;
    /** The payment method for this organization */
    paymentMethod?: string;
    /** The access provider for this organization */
    accessProvider?: boolean;
    /** The setting to mark this organization as governmental */
    governmental?: boolean;
    /** The setting to mark this organization as a licensor */
    licensor?: boolean;
    /** The setting to mark this organization as a material supplier */
    materialSupplier?: boolean;
    /** The list of currencies used by this organization */
    vendorCurrencies?: string[];
    /** The claim interval for this organization */
    claimingInterval?: number;
    /** The discount percentage for this organization */
    discountPercent?: number;
    /** The expected activation interval (in days) for this organization */
    expectedActivationInterval?: number;
    /** The expected invoice interval (in days) for this organization */
    expectedInvoiceInterval?: number;
    /** The renewal activation interval (in days) for this organization */
    renewalActivationInterval?: number;
    /** The subscription interval (in days) for this organization */
    subscriptionInterval?: number;
    /** The receipt interval (in days) for this organization */
    expectedReceiptInterval?: number;
    /** The tax ID for this organization */
    taxId?: string;
    /** The setting to mark this organization liable to collect VAT */
    liableForVat?: boolean;
    /** The tax percentage value for this organization */
    taxPercentage?: number;
    /** The EDI object for this organization (only applicable when isVendor is true) */
    edi?: Organization.Edi;
    /** The list of interfaces assigned to this organization */
    interfaces?: string[];
    /** The list of accounts for this organization */
    accounts?: Organization.Account[];
    /** Used to indicate that this organization is also a vendor */
    isVendor?: boolean;
    /** Used to designate whether this organization is a donor */
    isDonor?: boolean;
    /** The SAN code for this organization address */
    sanCode?: string;
    /** The list of changes applied to this organization */
    changelogs?: Organization.ChangeLog[];
    /** Acquisition unit UUIDs associated with this organization */
    acqUnitIds?: string[];
    tags?: Tags;
    metadata?: Metadata;
  }

  namespace Organization {
    interface Alias {
      /** The unique name of this alias */
      value: string;
      /** The description of this alias */
      description?: string;
    }

    interface Address {
      /** UUID */
      id?: string;
      /** The first line of this address */
      addressLine1?: string;
      /** The second line of this address */
      addressLine2?: string;
      /** The city for this address */
      city?: string;
      /** The state or region for this address */
      stateRegion?: string;
      /** The zip code for this address */
      zipCode?: string;
      /** The country for this address */
      country?: string;
      /** Used to set this address as primary for the contact */
      isPrimary?: boolean;
      /** The list of categories for this organization address */
      categories?: string[];
      /** The language for this organization address */
      language?: string;
      /** Metadata about creation and changes to records, provided by the server (client should not provide) */
      metadata?: Metadata;
    }

    interface PhoneNumber {
      /** UUID */
      id?: string;
      /** The entire sequence of digits for this phone number */
      phoneNumber: string;
      /** The list of categories for this organization phone */
      categories?: string[];
      /** The type of this phone number */
      type?: string;
      /** Used to set this phone number as primary for the contact */
      isPrimary?: boolean;
      /** The language for this organization phone */
      language?: string;
      /** Metadata about creation and changes to records, provided by the server (client should not provide) */
      metadata?: Metadata;
    }

    interface Email {
      /** The unique id of this email */
      id?: string;
      /** The value for this email */
      value: string;
      /** The description for this email */
      description?: string;
      /** Used to set this email as primary for the contact */
      isPrimary?: boolean;
      /** The list of categories for this organization email */
      categories?: string[];
      /** The language for this organization email */
      language?: string;
      /** Metadata about creation and changes to records, provided by the server (client should not provide) */
      metadata?: Metadata;
    }

    interface Url {
      /** The unique id of this url */
      id?: string;
      /** The value for this URL */
      value: string;
      /** The description for this URL */
      description?: string;
      /** The language for this organization URL */
      language?: string;
      /** Used to set this url as primary for the contact */
      isPrimary?: boolean;
      /** The list of categories for this organization URL */
      categories?: string[];
      /** The notes for this organization URL */
      notes?: string;
      /** Metadata about creation and changes to records, provided by the server (client should not provide) */
      metadata?: Metadata;
    }

    interface Agreement {
      /** The unique name of this agreement */
      name: string;
      /** The discount amount of this agreement */
      discount?: number;
      /** The reference url for this agreement */
      referenceUrl?: string;
      /** The notes of this agreement */
      notes?: string;
    }

    interface Edi {
      /** The organization code for this EDI */
      vendorEdiCode?: string;
      /** The organization type for this EDI */
      vendorEdiType?: '014/EAN' | '31B/US-SAN' | '091/Vendor-assigned' | '092/Customer-assigned';
      /** The library code for this EDI */
      libEdiCode?: string;
      /** The library type for this EDI */
      libEdiType?: '014/EAN' | '31B/US-SAN' | '091/Vendor-assigned' | '092/Customer-assigned';
      /** The setting to prorate tax for this EDI */
      prorateTax?: boolean;
      /** The setting to prorate fees for this EDI */
      prorateFees?: boolean;
      /** The naming convention for this EDI */
      ediNamingConvention?: string;
      /** The setting to send the account number for this EDI */
      sendAcctNum?: boolean;
      /** The setting to support order for this EDI */
      supportOrder?: boolean;
      /** The setting to support invoice for this EDI */
      supportInvoice?: boolean;
      /** The notes for this EDI */
      notes?: string;
      /** The FTP object for this EDI */
      ediFtp?: Edi.EdiFtp;
      /** The job object for this EDI */
      ediJob?: Edi.EdiJob;
    }

    namespace Edi {
      interface EdiFtp {
        /** The FTP format for this EDI */
        ftpFormat?: 'SFTP' | 'FTP';
        /** The server address for this EDI */
        serverAddress?: string | null;
        /** The login username for this EDI */
        username?: string;
        /** The login password for this EDI */
        password?: string;
        /** The FTP mode for this EDI */
        ftpMode?: 'ASCII' | 'Binary';
        /** The FTP connection mode for this EDI */
        ftpConnMode?: 'Active' | 'Passive';
        /** The port for this EDI */
        ftpPort?: number;
        /** The order directory for this EDI */
        orderDirectory?: string;
        /** The invoice directory for this EDI */
        invoiceDirectory?: string;
        /** The notes for this EDI */
        notes?: string;
      }

      interface EdiJob {
        /** Activate the schedule for this EDI job */
        scheduleEdi?: boolean;
        /** The date (MM/DD/YYYY) for this EDI job to start running */
        schedulingDate?: string | null;
        /** The time (h:mm A) for this EDI job */
        time?: string | null;
        /** The setting to run this EDI job on Mondays */
        isMonday?: boolean;
        /** The setting to run this EDI job on Tuesdays */
        isTuesday?: boolean;
        /** The setting to run this EDI job on Wednesdays */
        isWednesday?: boolean;
        /** The setting to run this EDI job on Thursdays */
        isThursday?: boolean;
        /** The setting to run this EDI job on Fridays */
        isFriday?: boolean;
        /** The setting to run this EDI job on Saturdays */
        isSaturday?: boolean;
        /** The setting to run this EDI job on Sundays */
        isSunday?: boolean;
        /** The comma delimited list of email addresses to notify when this EDI job runs */
        sendToEmails?: string;
        /** The setting to notify all receivers when this EDI job runs */
        notifyAllEdi?: boolean;
        /** The setting to notify only the invoice receiver when this EDI job runs */
        notifyInvoiceOnly?: boolean;
        /** The setting to notify only the error receiver when this EDI job runs */
        notifyErrorOnly?: boolean;
        /** The schedule notes for this EDI job */
        schedulingNotes?: string;
      }
    }

    interface Account {
      /** The unique name of this account */
      name: string;
      /** The unique number of this account */
      accountNo: string;
      /** The description of this account */
      description?: string;
      /** The unique name of this group */
      appSystemNo?: string;
      /** The method of payment for this account */
      paymentMethod?: 'Cash' | 'Credit Card' | 'EFT' | 'Deposit Account' | 'Physical Check' | 'Bank Draft' | 'Internal Transfer' | 'Other';
      /** The status of this account */
      accountStatus: string;
      /** The contact info for the account */
      contactInfo?: string;
      /** The library code for this account */
      libraryCode?: string;
      /** The EDI code for this account */
      libraryEdiCode?: string;
      /** The notes for this account */
      notes?: string;
      /** Acquisition unit UUIDs associated with this organizations account */
      acqUnitIds?: string[];
    }

    interface ChangeLog {
      /** The description of the change */
      description: string;
      /** The timestamp for when the change occurred */
      timestamp: string;
    }

    type Status = 'Active' | 'Inactive' | 'Pending';
  }
}
