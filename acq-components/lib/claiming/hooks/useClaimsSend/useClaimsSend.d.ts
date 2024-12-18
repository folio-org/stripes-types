interface SendClaimsData {
  claimingPieceIds: string[];
  claimingInterval: number;
  internalNote?: string;
  externalNote?: string;
}

export interface ClaimingPieceResult {
  pieceId: string;
  type: 'success' | 'failure';
  error?: {
    code?: string;
    message: string;
    type?: string;
  };
}

export interface SendClaimsResponse {
  claimingPieceResults: ClaimingPieceResult[];
  totalRecords: number;
}

interface useClaimsSendReturn {
  isLoading: boolean;
  sendClaims: ({ data }: { data: SendClaimsData }) => Promise<SendClaimsResponse>;
}

export declare function useClaimsSend(): useClaimsSendReturn;
