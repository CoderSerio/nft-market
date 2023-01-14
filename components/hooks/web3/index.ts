import { useHooks } from '@providers/web3';

export const useAccount = () => {
  const hooks = useHooks();
  const swrRes = hooks.useAccount('');
  // const account = hooks.useAccount();
  return {
    account: swrRes,
  };
};
