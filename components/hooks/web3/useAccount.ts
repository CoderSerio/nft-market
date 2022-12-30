import useSWR from 'swr';
// useSWR是一个专门用来处理并发请求数据更新不同步问题的库

// 顾名思义, hookFatory也就是工厂模式生产hook
export const hookFactory = (deps: any) => (params: any) => {
  const swrRes = useSWR('web3/useAccount', () => {
    console.log(deps);
    console.log(params);
    return 'test user';
  });
  return swrRes;
};

export const useAccount = hookFactory({
  ethereum: null,
  provider: null,
});
