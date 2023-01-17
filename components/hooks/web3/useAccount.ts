import { AccountHookFactory } from '@_types/hooks';
import { Web3Params } from '@_types/web3';
import { useEffect } from 'react';
// useSWR是一个专门用来处理并发请求数据更新不同步问题的库
import useSWR from 'swr';

// 顾名思义, hookFatory也就是工厂模式生产hook
// 从类型上可以看出它到底是哪个hook的factory
export const hookFactory: AccountHookFactory =
  ({ provider, ethereum, isLoading }: Web3Params) =>
  (params: any) => {
    const { data, isValidating, mutate, ...swr } = useSWR(
      provider ? 'web3/useAccount' : null,
      async () => {
        console.log(params);
        const accounts = await provider!.listAccounts();
        const account = accounts[0];

        if (!account) {
          throw 'Can not retreive account! Please';
        }

        return account;
      },
      {
        revalidateOnFocus: false,
      }
    );

    useEffect(() => {
      ethereum?.on('accountsChanged', handleAccountsChanged);
      return () => {
        ethereum?.removeListener('accountChanged', handleAccountsChanged);
      };
    });

    const handleAccountsChanged = (...args: unknown[]) => {
      const accounts = args[0] as string[];
      if (accounts.length === 0) {
        console.error('Please, connect to Web3 wallet');
      } else if (accounts[0] !== data) {
        mutate(accounts[0]);
      }
    };

    const connect = async () => {
      try {
        ethereum?.request({ method: 'eth_requestAccounts' });
      } catch (e) {
        console.error(e);
      }
    };

    return {
      ...swr,
      data,
      isValidating,
      isLoading: isLoading as boolean,
      isInstalled: ethereum?.isMetaMask || false,
      mutate,
      connect,
    };
  };
