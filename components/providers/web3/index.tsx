import {
  FunctionComponent,
  createContext,
  useState,
  useContext,
  useEffect,
} from 'react';
import { FunctionComponentProps } from '@_types/props';
import { Web3State } from '@_types/web3';
import { createDefaultState, createWeb3State, loadContract } from './utils';
import { ethers } from 'ethers';

const Web3Context = createContext<Web3State>(createDefaultState());

// 封装成函数是因为有些数据是异步加载的，具体怎么传递数据看下面的注释
const Web3Provider: FunctionComponent<FunctionComponentProps> = ({
  children,
}) => {
  const [web3Api, setWeb3Api] = useState<Web3State>(createDefaultState()); // defaultState是各个数据项为空的state

  useEffect(() => {
    async function initWeb3() {
      try {
        const ethereum = window.ethereum; // MetaMask的数据
        const provider = new ethers.providers.Web3Provider(ethereum); // 封装MetaMask的数据，可以得到一些方便的API
        const contract = await loadContract('NftMarket', provider); // 导入智能合约数据，得到一些方便的API

        setWeb3Api(
          // web3State是把default的几项初始化为特定的值
          createWeb3State({
            ethereum,
            provider,
            contract,
            isLoading: false,
          })
        );
      } catch (e: any) {
        // 主要是处理没有安装MetaMask的情况
        console.log(e);
        setWeb3Api((api) =>
          createWeb3State({
            ...(api as any),
            isLoading: false,
          })
        );
      }
    }
    initWeb3();
  }, []);

  // 之后要用数据的组件，都通过认Provider当父组件，所以就相当于可以通过父传子的形式传递数据
  // 如果要使用数据的话，需要调用下面的useWeb3来获取
  return (
    <Web3Context.Provider value={web3Api}>{children}</Web3Context.Provider>
  );
};

// 子组件调用这个方法，向上访问到距离自身最近的provider获取其数据
export function useWeb3() {
  return useContext(Web3Context);
}

// 把hooks这个部分从web3state上单独拆下来，创建一个所有hook的集合，之后调用都是hooks.xxx
export function useHooks() {
  const { hooks } = useWeb3();
  return hooks;
}

export default Web3Provider;
