/* eslint-disable */
import { MetaMaskInpageProvider } from '@metamask/providers';
import { Contract, providers } from 'ethers';
import { SWRResponse } from 'swr';
import { Web3Params } from './web3';

export interface CryptoHookFactory<D = any, P = any> {
  (data: Partial<Web3Params>): CryptoHandlerHook<D, P>;
}

export type CryptoHandlerHook<D = any, P = any> = (params?: P) => CryptoSWRResponse<D>;

export type CryptoSWRResponse<D> = SWRResponse<D>;

export type AccountHookFactory = CryptoHookFactory<string>;

export type UseAccountHook = ReturnType<AccountHookFactory>;

export interface Web3Hooks {
  useAccount: UseAccountHook;
}

export interface SetupHooks {
  (data: Web3Params): Web3Hooks;
}
// export interface CryptoHookFactory<D = any, P = any> {
//   (data: Partial<Web3Dependencies>): (params: P) => SWRResponse<D>;
// }
