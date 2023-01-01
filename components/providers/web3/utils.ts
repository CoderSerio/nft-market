import { Web3Params, Web3State } from '@_types/web3';
import { setupHooks } from 'components/hooks/web3/setupHooks';
import { Contract, ethers, providers } from 'ethers';

export const createDefaultState = () => {
  const res: Web3State = {
    ethereum: null,
    provider: null,
    contract: null,
    isLoading: true,
    hooks: setupHooks({} as any),
  };
  return res;
};

export const createWeb3State = ({
  ethereum,
  provider,
  contract,
  isLoading,
}: Web3Params & { isLoading: boolean }) => {
  const res: Web3State = {
    ethereum,
    provider,
    contract,
    isLoading,
    hooks: setupHooks({ ethereum, provider, contract }),
  };
  return res;
};

const NETWORK_ID = process.env.NEXT_PUBLIC_NETWORK_ID;

export const loadContract = async (
  name: string,
  provider: providers.Web3Provider
): Promise<Contract> => {
  if (!NETWORK_ID) {
    return Promise.reject('Network_ID is not defined!!!!!!!');
  }
  const res = await fetch(`/contracts/${name}.json`);
  // 一个合约JSON对象, 规范是叫做Artifact
  const Artifact = await res.json();
  if (Artifact.networks[NETWORK_ID].address) {
    const contract = new ethers.Contract(
      Artifact.networks[NETWORK_ID].address,
      Artifact.abi,
      provider
    );
    return contract;
  } else {
    return Promise.reject(`Contract: [${name}] Cannot be loaded!`);
  }
};
