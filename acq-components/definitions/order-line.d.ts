declare namespace ACQ {
  interface OrderLine {
    /** UUID identifying this purchase order line */
    id: string;
    /** Edition of the material */
    edition?: string;
    /** If true this will toggle the Check-in workflow for details associated with this PO line */
    checkinItems?: boolean;
    /** UUID of the instance record this purchase order line is related to */
    instanceId?: string;
    /** UUID of the agreement this purchase order line is related to */
    agreementId?: string;
    /** UUID of the acquisition method for this purchase order line */
    acquisitionMethod: string;
    /** If true then line will be marked as available to export in the EDIFACT format or other format */
    automaticExport?: boolean;
    /** Alerts associated with this purchase order line */
    alerts?: OrderLine.Alert[];
    /** Whether or not there are cancellation restrictions for this purchase order line */
    cancellationRestriction?: boolean;
    /** Free-form notes related to cancellation restrictions */
    cancellationRestrictionNote?: string;
    /** Claims associated with this purchase order line */
    claims?: OrderLine.Claim[];
    /** Indicates if there is an active claim or dispute */
    claimingActive?: boolean;
    /** Specifies the time interval, in days, within which claims or disputes must be initiated */
    claimingInterval?: number;
    /** Whether or not this purchase order line is for a collection */
    collection?: boolean;
    /** List of contributors to the material */
    contributors?: OrderLine.Contributor[];
    /** Cost details associated with this purchase order line */
    cost: OrderLine.Cost;
    /** Description of the material */
    description?: string;
    /** Details about this purchase order line */
    details?: OrderLine.Details;
    /** The donor contributing to this purchase order line */
    donor?: string;
    /** Donor organization ids associated with this fund */
    donorOrganizationIds?: string[];
    /** Eresource-related details of this purchase order line */
    eresource?: OrderLine.ElectronicResource;
    /** The UUIDs of the fund distribution records for this purchase order line */
    fundDistribution?: OrderLine.FundDistribution[];
    /** Indicates that this POL is for a package */
    isPackage?: boolean;
    /** A list of the location records for this purchase order line */
    locations: Location[];
    /** Location ids used for search */
    searchLocationIds?: string[];
    /** The last date when line was exported in the EDIFACT file */
    lastEDIExportDate?: string;
    /** The purchase order line format */
    orderFormat: OrderLine.Format;
    /** UUID referencing the poLine that represents the package that this POLs title belongs to */
    packagePoLineId?: string;
    /** The purchase order line payment status */
    paymentStatus?: OrderLine.PaymentStatus;
    /** Details of this purchase order line relating to physical materials */
    physical?: OrderLine.PhysicalResource;
    /** Purchase order line description */
    poLineDescription?: string;
    /** A human readable number assigned to this PO line */
    poLineNumber?: string;
    /** Date (year) of the material's publication */
    publicationDate?: string;
    /** Publisher of the material */
    publisher?: string;
    /** UUID of this parent purchase order */
    purchaseOrderId: string;
    /** Date the purchase order line was received */
    receiptDate?: string | null;
    /** The purchase order line receipt status */
    receiptStatus?: OrderLine.ReceiptStatus;
    /** Renewal note for this purchase order line */
    renewalNote?: string;
    /** A list of reporting codes associated with this purchase order line */
    reportingCodes?: OrderLine.ReportingCode[];
    /** Who requested this purchase order line */
    requester?: string;
    /** Whether or not this is a rush order */
    rush?: boolean;
    /** Who selected this material */
    selector?: string;
    /** The source of this purchase order line */
    source: 'User' | 'API' | 'EDI' | 'MARC' | 'EBSCONET';
    /** Arbitrary tags associated with this purchase order line */
    tags?: Tags;
    /** Title of the material */
    titleOrPackage: string;
    /** Details related to the vendor of this purchase order line */
    vendorDetail?: OrderLine.VendorDetail;
    /** Object that contains custom field */
    customFields?: Record<string, any>;
    /** Metadata about creation and changes to records, provided by the server (client should not provide) */
    metadata: Metadata;
  }

  namespace OrderLine {
    interface Alert {
      /** UUID of this alert record */
      id?: string;
      /** The alert text */
      alert: string;
    }

    /* not-stable: possibly changed in the future */
    interface Claim {
      /** Whether or not this purchase order line has been claimed */
      claimed?: boolean;
      /** Date a claim was sent */
      sent?: string;
      /** The number of days after the expected receipt date during which claims should not be processed */
      grace?: number;
    }

    interface Contributor {
      /** The name of a contributor to the material */
      contributor?: string;
      /** UUID of the contributor type */
      contributorNameTypeId: string;
    }

    interface Cost {
      /** The per-item list price for physical or resources of 'Other' order format */
      listUnitPrice?: number;
      /** The e-resource per-item list price */
      listUnitPriceElectronic?: number;
      /** An ISO currency code */
      currency: string;
      /** Lump sum that is added to the total estimated price - not affected by discount */
      additionalCost?: number;
      /** Percentage (0 to 100) or amount (positive number) that is subtracted from the list price time quantities calculation before additional cost */
      discount?: number;
      /** Percentage or amount discount type */
      discountType?: DiscountType;
      /** Exchange rate */
      exchangeRate?: number;
      /** Quantity of physical items or resources of 'Other' order format in this purchase order line */
      quantityPhysical?: number;
      /** Quantity of electronic items in this purchase order line */
      quantityElectronic?: number;
      /** The calculated total estimated price for this purchase order line: list price time quantities minus discount amount plus additional cost */
      poLineEstimatedPrice?: number;
      /** Adjustment amount if rollover was happen */
      fyroAdjustmentAmount?: number;
    }

    interface Details {
      /** Notes regarding receiving instructions */
      receivingNote?: string;
      /** Flag for acknowledge receiving note */
      isAcknowledged?: boolean;
      /** Indicates that this POL is designated as required binding */
      isBinderyActive?: boolean;
      /** A list of product identifiers */
      productIds?: ProductId[];
      /** The start date of the subscription */
      subscriptionFrom?: string | null;
      /** The subscription interval in days */
      subscriptionInterval?: number;
      /** The end date of the subscription */
      subscriptionTo?: string | null;
    }

    interface ProductId {
      /** The actual product identifier */
      productId?: string;
      /** The type of product identifier */
      productIdType?: string;
      /** Information about the binding, format, volume numbers, part of a set, publisher, distributor, etc. which might be enclosed in parenthesis */
      qualifier?: string;
    }

    interface ElectronicResource {
      /** Whether or not this resource is activated */
      activated?: boolean;
      /** Number of days until activation, from date of order placement */
      activationDue?: number;
      /** Shows what inventory objects need to be created for electronic resource */
      createInventory?: CreateInventory;
      /** Whether or not this is a trial */
      trial?: boolean;
      /** Expected date the resource will be activated */
      expectedActivation?: string;
      /** The concurrent user-limit */
      userLimit?: number;
      /** UUID of the access provider */
      accessProvider?: string;
      /** License record */
      license?: License;
      /** UUID of the material Type */
      materialType?: string;
      /** Electronic resource can be accessed via this URL */
      resourceUrl?: string;
    }

    interface License {
      /** License code */
      code?: string;
      /** License description */
      description?: string;
      /** License reference */
      reference?: string;
    }

    interface FundDistribution {
      /** The fund code */
      code?: string;
      /** UUID of encumbrance record associated with this fund distribution */
      encumbrance?: string;
      /** UUID of the fund associated with this fund distribution */
      fundId: string;
      /** UUID of the expense class associated with this fund distribution */
      expenseClassId?: string;
      /** Percentage or amount type of the value property */
      distributionType: FundDistributionType;
      /** The value of the cost to be applied to this fund */
      value: number;
    }

    interface Location {
      /** UUID of the (inventory) location record */
      locationId?: string;
      /** Holding UUID associated with order line */
      holdingId?: string;
      /** Combined/total quantity of physical and electronic items */
      quantity?: number;
      /** Quantity of electronic items */
      quantityElectronic?: number;
      /** Quantity of physical items */
      quantityPhysical?: number;
      /** Associated tenant for ECS-enabled clusters */
      tenantId?: string;
    }

    interface PhysicalResource {
      /** Shows what inventory objects need to be created for physical resource */
      createInventory?: CreateInventory;
      /** UUID of the material Type */
      materialType?: string;
      /** UUID of the material supplier record */
      materialSupplier?: string;
      /** Vendor agreed date prior to the Receipt Due date item is expected to be received by */
      expectedReceiptDate?: string | null;
      /** Date item should be received by */
      receiptDue?: string | null;
      /** List of volumes included to the physical material */
      volumes: string[];
    }

    interface ReportingCode {
      /** UUID of this reporting code record */
      id?: string;
      /** A reporting code */
      code: string;
      /** Description of this reporting code */
      description?: string;
    }

    interface VendorDetail {
      /** Special instructions for the vendor */
      instructions?: string;
      /** Free-form notes from the vendor */
      noteFromVendor?: string;
      /** The account number on the vendor's end associated with this purchase order line */
      vendorAccount?: string;
      /** Collection of reference number items */
      referenceNumbers?: ReferenceNumber[];
    }

    interface ReferenceNumber {
      /** A reference number for this purchase order line */
      refNumber?: string;
      /** The reference number type */
      refNumberType?: ReferenceNumberType;
      /** The reference number type */
      vendorDetailsSource?: 'OrderLine' | 'InvoiceLine';
    }

    type Format = (
      'Electronic Resource'
      | 'P/E Mix'
      | 'Physical Resource'
      | 'Other'
    );

    type PaymentStatus = (
      'Awaiting Payment'
      | 'Cancelled'
      | 'Fully Paid'
      | 'Partially Paid'
      | 'Payment Not Required'
      | 'Pending'
      | 'Ongoing'
    );

    type ReceiptStatus = (
      'Awaiting Receipt'
      | 'Cancelled'
      | 'Fully Received'
      | 'Partially Received'
      | 'Pending'
      | 'Receipt Not Required'
      | 'Ongoing'
    );

    type DiscountType = 'amount' | 'percentage';
    type FundDistributionType = 'amount' | 'percentage';

    type CreateInventory = (
      'Instance, Holding, Item'
      | 'Instance, Holding'
      | 'Instance'
      | 'None'
    );

    type ReferenceNumberType = (
      'Vendor continuation reference number'
      | 'Vendor order reference number'
      | 'Vendor subscription reference number'
      | 'Vendor internal number'
      | 'Vendor title number'
    );
  }
}
