import { MetaMaskInpageProvider } from '@metamask/providers';
import { Contract, providers } from 'ethers';
import { Web3Hooks } from './hooks';
import { Nullable } from './utils';

export interface Web3Params {
  ethereum?: MetaMaskInpageProvider | null;
  provider?: providers.Web3Provider | null;
  contract?: Contract | null;
}

export type Web3State = {
  isLoading: boolean;
  hooks: Web3Hooks;
} & Nullable<Web3Params>;
