// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";


contract NftMarket is ERC721URIStorage {
  // address 允许从指定合约进行访问， public用于权限控制+变量声明
  //
  constructor() ERC721("CreaturesNFT", "CNFT") {

  }
}
