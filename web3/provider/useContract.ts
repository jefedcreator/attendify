import { getProviderOrSigner } from "@utils/helper";
import { useWeb3React } from "@web3-react/core";
import { useMemo } from "react";
import { getPoapContract } from "./contractHelper";

export const usePoapContract = (
  address: string,
  withSignerIfPossible = true
) => {
  const { library, account } = useWeb3React();
  const signer = useMemo(
    () =>
      withSignerIfPossible ? getProviderOrSigner(library, account!) : null,
    [withSignerIfPossible, library, account]
  );
  return useMemo(() => getPoapContract(signer!), [address, signer]);
};
