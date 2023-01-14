import { ReactElement } from 'react';

export interface FunctionComponentProps {
  children: string | ReactElement;
}

export type WalletbarProps = {
  isLoading: boolean;
  isInstalled: boolean;
  account: string;
  connect: () => void;
};
