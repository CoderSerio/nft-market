/* eslint-disable */
import { MetaMaskInpageProvider } from '@metamask/providers';
import { Contract, providers } from 'ethers';
import { SWRResponse } from 'swr';
import { Web3Params } from './web3';

export interface CryptoHookFactory<D = any, R = any, P = any> {
  (data: Partial<Web3Params>): CryptoHandlerHook<D, R, P>;
}

export type UseAccountResponse = {
  connect: () => void;
  isLoading: boolean;
  isInstalled: boolean;
}

export type AccountHookFactory = CryptoHookFactory<string, UseAccountResponse>;

export type CryptoHandlerHook<D = any, R = any, P = any> = (params?: P) => CryptoSWRResponse<D, R>;

export type CryptoSWRResponse<D = any, R = any> = SWRResponse<D> & R;


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
