import { SetupHooks } from '@_types/hooks';
import { hookFactory as createAccountHook } from './useAccount';
import { hookFactory as createNetworkHook } from './useNetwork';

export const setupHooks: SetupHooks = (deps) => {
  return {
    useAccount: createAccountHook(deps),
    useNetwork: createNetworkHook(deps),
  };
};
