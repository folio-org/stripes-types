import { usePiecesStatusBatchUpdate } from '../../../hooks';

interface useClaimsDelayReturn {
  isLoading: boolean;
  delayClaims: ({
    claimingInterval,
    pieceIds,
  }: {
    claimingInterval: number,
    pieceIds: string[],
  }) => Promise<ReturnType<typeof usePiecesStatusBatchUpdate>>;
}

export declare function useClaimsDelay(): useClaimsDelayReturn;
