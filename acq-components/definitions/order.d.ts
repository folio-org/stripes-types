declare namespace ACQ {
  interface Order {
    id: string;
    /** Whether or not the purchase order has been approved */
    approved?: boolean;
    /** UUID of the user approving the order */
    approvedById?: string;
    /** Date and time when purchase order was approved */
    approvalDate?: string;
    /** UUID of the user this purchase order his assigned to */
    assignedTo?: string;
    /** UUID of the billing address */
    billTo?: string;
    /** Close reason for purchase order. Some values are predefined and can trigger actions, such as Cancelled. See mod-orders-storage/src/main/resources/data/system/reasons-for-closure */
    closeReason?: Order.CloseReason;
    /** Date and time when purchase order was opened */
    dateOrdered?: string;
    /** If true, order cannot be sent automatically, e.g. via EDI */
    manualPo?: boolean;
    /** Free-form notes associated with this purchase order */
    notes?: string[];
    /** A human readable ID assigned to this purchase order */
    poNumber?: string;
    /** Purchase order number prefix */
    poNumberPrefix?: string;
    /** Purchase order number suffix */
    poNumberSuffix?: string;
    /** The purchase order type */
    orderType: Order.Type;
    /** Indicates this purchase order should be re-encumbered each fiscal year. Only applies to ongoing orders */
    reEncumber?: boolean;
    /** Ongoing information associated with this order */
    ongoing?: Order.OngoingDetails;
    /** UUID of the shipping address */
    shipTo?: string;
    /** The ID of the order template used for this order. Applies to both PO and POL */
    template?: string;
    /** Total credited for the order */
    totalCredited?: number;
    /** Total estimated price of this purchase order */
    totalEstimatedPrice?: number;
    /** Total encumbered for the order */
    totalEncumbered?: number;
    /** Total expended for the order */
    totalExpended?: number;
    /** Total number of items included in the purchase order */
    totalItems?: number;
    /** UUID of the vendorDetails record */
    vendor: string;
    /** The workflow status for this purchase order */
    workflowStatus?: Order.WorkflowStatus;
    /** Acquisition unit ids associated with this purchase order */
    acqUnitIds?: string[];
    /** Number that will be used next time a purchase order line is created */
    nextPolNumber?: number;
    tags?: Tags;
    /** Object that contains custom field */
    customFields?: Record<string, any>;
    metadata?: Metadata;
    /** Indicates that order needs to be re-encumbered */
    needReEncumber?: boolean;
    /** Array of associated PO Lines */
    compositePoLines?: OrderLine[];
  }

  namespace Order {
    interface CloseReason {
      /** Close reason description */
      reason?: string;
      /** Free-form notes related to closing reason */
      note?: string;
    }

    interface OngoingDetails {
      /** Renewal interval (in days) */
      interval?: number;
      /** Whether or not this is a subscription */
      isSubscription?: boolean;
      /** Whether or not this is a manual renewal */
      manualRenewal?: boolean;
      /** Notes associated with the Ongoing order */
      notes?: string;
      /** Time prior to renewal where changes can be made to subscription */
      reviewPeriod?: number;
      /** The date this Ongoing PO's order lines were renewed */
      renewalDate?: string;
      /** Date when Order has to be reviewed */
      reviewDate?: string;
    }

    type Type = 'One-Time' | 'Ongoing';
    type WorkflowStatus = 'Pending' | 'Open' | 'Closed';
  }
}
