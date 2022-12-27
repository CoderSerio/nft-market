import { Web3State } from '@_types/web3';

export const createDefaultState = () => {
  const res: Web3State = {
    ethereum: null,
    provider: null,
    contract: null,
    isLoading: true,
  };
  return res;
};
