import {
  FunctionComponent,
  createContext,
  useState,
  useContext,
  useEffect,
} from 'react';
import { FunctionComponentProps } from '@_types/props';
import { Web3State } from '@_types/web3';
import { createDefaultState, loadContract } from './utils';
import { ethers } from 'ethers';

const Web3Context = createContext<Web3State>(createDefaultState());

// 相当于创建一个传送点，调用useWeb3这个hook即可获取到最近的传送点的数据
const Web3Provider: FunctionComponent<FunctionComponentProps> = ({
  children,
}) => {
  const [web3Api, setWeb3Api] = useState<Web3State>(createDefaultState());
  useEffect(() => {
    async function initWeb3() {
      const ethereum = window.ethereum; // MetaMask的数据
      const provider = new ethers.providers.Web3Provider(ethereum); // 封装MetaMask的数据
      const contract = await loadContract('NftMarket', provider); // 导入智能合约

      setWeb3Api({
        ethereum,
        provider,
        contract,
        isLoading: false,
      });
    }
    initWeb3();
  }, []);
  return (
    <Web3Context.Provider value={web3Api}>{children}</Web3Context.Provider>
  );
};

export function useWeb3() {
  return useContext(Web3Context);
}

export default Web3Provider;
