export interface UpdatePiecesStatusData {
  pieceIds: string[],
  receivingStatus: ACQ.Piece.ReceivingStatus,
  claimingInterval?: number,
}

interface UpdatePiecesStatusErrorResponse {
  errors: Array<{
    message: string;
    code?: string;
  }>
}

export type UpdatePiecesStatusResponse = null | UpdatePiecesStatusErrorResponse;

interface usePiecesStatusBatchUpdateReturn {
  isLoading: boolean;
  updatePiecesStatus: ({ data }: { data: UpdatePiecesStatusData }) => Promise<UpdatePiecesStatusResponse>;
}

export declare function usePiecesStatusBatchUpdate(): usePiecesStatusBatchUpdateReturn;
