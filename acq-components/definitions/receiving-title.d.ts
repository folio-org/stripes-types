declare namespace ACQ {
  interface Title {
    id?: string;
    /** Vendor agreed date prior to the Receipt Due date item is expected to be received by */
    expectedReceiptDate?: string;
    /** The title name */
    title: string;
    poLineId: string;
    instanceId?: string;
    /** List of product identifiers */
    productIds?: OrderLine.ProductId[];
    /** List of contributors to the material */
    contributors?: OrderLine.Contributor[];
    /** Publisher of the material */
    publisher?: string;
    /** Edition of the material */
    edition?: string;
    /** The name of the package */
    packageName?: string;
    /** The number of the POL identified by poLineId */
    poLineNumber?: string;
    /** Year of the material's publication */
    publishedDate?: string;
    /** Receiving note of the POL identified by poLineId */
    receivingNote?: string;
    /** The start date of the subscription */
    subscriptionFrom?: string;
    /** The end date of the subscription */
    subscriptionTo?: string;
    /** The subscription interval in days */
    subscriptionInterval?: number;
    /** Indicates if there is an active claim or dispute */
    claimingActive?: boolean;
    /** Specifies the time interval, in days, within which claims or disputes must be initiated */
    claimingInterval?: number;
    /** Flag for acknowledge receiving note */
    isAcknowledged?: boolean;
    /** Item ids which bound to this title for independent receiving workflow */
    bindItemIds?: string[];
    /** Acquisition unit ids associated with this title */
    acqUnitIds?: string[];
    metadata: Metadata;
  }
}
