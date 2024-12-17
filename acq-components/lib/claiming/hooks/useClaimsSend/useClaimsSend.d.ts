interface SendClaimsData {
  claimingPieceIds: string[];
}

export interface ClaimingResult {
  pieceId: string;
  type: 'success' | 'failure';
  error?: {
    code?: string;
    message: string;
    type?: string;
  };
}

export interface SendClaimsResponse {
  claimingPieceResults: ClaimingResult[];
  totalRecords: number;
}

interface useClaimsSendReturn {
  isLoading: boolean;
  sendClaims: ({ data }: { data: SendClaimsData }) => Promise<SendClaimsResponse>;
}

export declare function useClaimsSend(): useClaimsSendReturn;
