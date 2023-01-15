import { NetworkHookFactory } from '@_types/hooks';
import { channel } from 'diagnostics_channel';
import useSWR from 'swr';

const NETWORK: Record<string, string> = {
  1: 'Ethereum Main Network',
  3: 'Ropsten Test Network',
  4: 'Rinkeby Test Network',
  5: 'Goerli Test Network',
  42: 'Kovan Test Network',
  56: 'Binance Smart Chain',
  1337: 'Ganache',
};

export const hookFactory: NetworkHookFactory =
  ({ provider, isLoading }) => () => {
    const { data, isValidating, ...swr } = useSWR(
      provider ? 'web3/useNetwork' : null,
      async () => {
        const { chainId } = await provider!.getNetwork();
        if (!chainId) {
          throw 'Cannot retreive network. Please refresh browser or connect other one';
        }
        return NETWORK[chainId];
      },
      {
        revalidateOnFocus: false,
      }
    );

    return {
      ...swr,
      data,
      isValidating,
      isLoading: isLoading as boolean,
    };
  };
