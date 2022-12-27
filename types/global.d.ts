/* eslint-disable */

// 仿佛在逗我笑, TS v3.25+这么写无效了
// declare global {
//   interface Window {
//     ethereum: MetaMaskInpageProvider;
//     [key: string]: string;
//   }
// }

interface Window {
  ethereum: MetaMaskInpageProvider;
  [key: string]: string;
}
