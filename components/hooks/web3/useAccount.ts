import { AccountHookFactory } from '@_types/hooks';
import { Web3Params } from '@_types/web3';
// useSWR是一个专门用来处理并发请求数据更新不同步问题的库
import useSWR from 'swr';

// 顾名思义, hookFatory也就是工厂模式生产hook
// 从类型上可以看出它到底是哪个hook的factory
export const hookFactory: AccountHookFactory =
  ({ provider }: Web3Params) =>
  (params: any) => {
    const swrRes = useSWR(provider ? 'web3/useAccount' : null, async () => {
      console.log(params);
      const accounts = await provider!.listAccounts();
      const account = accounts[0];

      if (!account) {
        throw 'Can not retreive account! Please';
      }

      return account;
    });
    return swrRes;
  };
