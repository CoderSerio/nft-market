import { SetupHooks } from '@_types/hooks';
import { hookFactory as createAccountHook } from './useAccount';

export const setupHooks: SetupHooks = (deps) => {
  return {
    useAccount: createAccountHook(deps),
  };
};
