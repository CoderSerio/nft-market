# web3探究

## 前言

为什么要学习web3？

因为我认为这是一个具有广阔前景的技术。基于区块链，数据安全堪比银行，除此之外还带来了更多的可能性——据此，我认为国内就算是没法完整地应用它，也能产生相当大的价值。而且，我也相信精英们的眼光，他们相信区块链一定有他们的道理，我所扮演的角色并非领路人，但是也能抢在一众人前面。

总结就是，接受新事物，拥抱先进技术。

## 概念

**本章节内容参考资料**：[以太坊官网](https://ethereum.org/)

### 什么是去中心化

> **Transactions directly connect sender and recipient** without having to deal with any central authority. Nobody else will have access to your funds and **nobody can tell you what services you can use**. This is possible because of the blockchain technology upon which cryptocurrencies operate.

举个例子就是交易没有第三方，是两者直接交易的。而区块链就是一种去中心化的实现形式。

### 什么是区块链

> **A blockchain is a database of transactions** that is updated and shared across many computers in a network. Every time a new set of transactions is added, its called a “block” - hence the name blockchain. Most blockchains are public, and you **can only add data, not remove**. If someone wanted to alter any of the information or cheat the system, they’d need to do so on the majority of computers on the network. That is a lot! This makes established blockchains like Ethereum **highly secure**.
>
> Blockchains use cryptographic techniques to ensure that your funds are safe. Similar techniques have been used in the banking industries to ensure the security of monetary transactions for years. So you could say cryptocurrencies have a bank level of security.

总结一下就是：**一种通过网络共享的数据库，只能增加数据而不能删除。每一条数据都叫一个区块。数据非常安全**

之所以安全，是因为要篡改这个区块链的某个数据的话，需要在该数据库所在网络上的每一个计算机上篡改数据，这就使得篡改数据的成本异常巨大——据说银行也是采用了类似的方式来保证数据的安全性，所以可以说区块链有银行级别的安全性。

### 什么是加密货币

> Crypto (short for cryptocurrency) is **a new form of digital money** powered by cryptography.

就是基于密码学的数字货币，非常安全且去中心化（不被第三方干预）。

比特币（bitcoin）是区块链1.0时代的标志，创建于2008年，是最早的去中心化数字货币。

以太坊（ethereum）是区块链2.0的标志，创建于2015年，是在比特币的基础上进行了创新，增加了可编程性，这意味着可以基于以太坊开发去中心化的应用程序，这种应用程序即decentralized application，简称DAPP。

至于区块链3.0，还存在争议，暂不讨论。

### DAPP如何工作

DAPP要与一条区块链产生关联，于是用一个节点来代表这个应用，并把这个节点加入到区块链，这个过程就叫做“上链”。

![区块链单个节点构造](https://ethereum.org/static/b29d7b80246f42235d1d2a03274b2ef2/d4713/diagram.png)

节点之间通过RPC通信直接访问执行层，这层是各个开源社区维护的客户端，可能由不同的语言实现。利用这个客户端提供的API，通过JWT完成身份认证访问共识层，共识层执行共识机制通知该链上其他节点，其他节点一致认可后即完成上链。

### 开发前悉知

**本章节内容参考资料**：

[Truffle Suit官网](https://trufflesuite.com/docs/)

[solidity wiki](https://en.wikipedia.org/wiki/Solidity)

#### **solidity**

> Solidity is a [statically typed programming language](https://en.wikipedia.org/wiki/Statically_typed_programming_language) designed for developing smart contracts that run on the [Ethereum Virtual Machine](https://en.wikipedia.org/wiki/Ethereum#Virtual_machine) (EVM).
>
> Solidity uses ECMAScript-like syntax which makes it familiar for existing web developers;
>
> however unlike ECMAScript it has static typing and [variadic](https://en.wikipedia.org/wiki/Variadic) return types.

solidity是为了**智能合约（Contract）**开发而设计的语言，智能合约可以类比OOP中Class这么一个概念，并且它需要**以太坊虚拟机（EVM）**作为自己的运行环境。

而且前端开发者易于上手solidity，因为它和ES语法很像，只不过是静态类型+明确函数返回类型的。当作TS和Java写就行了。

#### **Ganache**

> Ganache is **a personal blockchain** for rapid Ethereum and Corda distributed application development.
>
> Ganache comes in two flavors: a UI and CLI

可以类比postman，是一个区块链本地开发辅助工具，原理就是开一个本地的临时区块链用于开发。会提供**应用程序二进制接口**，即**ABI（Application Binary Interface）**，给应用程序调用。

这些ABI通常以JSON文件的形式存在。

> ABI和API的区别是什么？
>
> API是两个软件间通信的接口。
>
> ABI则是更为底层，定义了软件如何与OS内核交互、如何与自身交互等。这样是区块链节点间使用RPC通信的体现。

#### **Truffle**

> A world class development environment, testing framework and asset pipeline for blockchains using the Ethereum Virtual Machine (EVM)

一个区块链开发框架，使用以太坊虚拟机，语言是solidity。

#### **Pinata**

就是一个免费的静态资源托管，懒得写后端做数据持久化，就上传到这里存着。

至于为什么这里写一点关于它的介绍呢，是因为觉得拥抱一点新工具或许可以拓宽视野吧，也算是避免在舒适圈太久。

#### **IERC和ERC**

IERC是**Interface Ethereum Request for Comment（以太坊意见征求 的 接口）**ERC的接口，规定了ERC需要实现的函数和事件。

ERC是**Ethereum Request for Comment**，是IERC的具体实现，可以看作是以太坊应用开发的标准，实现了一些基本的函数和事件。

> 直接类比C/C++中.h文件与.c/.cpp文件的关系就行了

所以需要[IERC].sol和[ERC].sol两个文件才能实现一个合约。

#### **Remix**

由以太坊官方开发的，一个专用于solidity智能合约开发的IDE，特点是在web端。

使得调试、部署智能合约变得更简单。

> 推荐使用VSCode编写，然后远程连接Remix进行后续操作



## Solidity基础

**本章节内容参考资料: [WTF Solidity](https://github.com/AmazingAng/WTF-Solidity)**

还是要学一下基本语法，据说能读懂代码的话，能避免很多亏钱项目（虽然不知道为什么，但是还是先学一下吧，没有坏处）

### HelloWorld

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;
contract HelloWeb3{
    string public _string = "Hello Web3!";
}
```

第一行注释是指明开源协议，不写能运行但是会有警告。

第二行是指定solidity版本，可以是一个区间，不同版本的语法可能存在差别。

第三行，contract即合约，可以类比为class。



然后在Remix的这个位置点deploy就行了，成功后下方会出现_string，点击一下就能看到我们的HelloWorld了

![remix](C:\Users\Serio\AppData\Roaming\Typora\typora-user-images\image-20221228192332823.png)

### 数据类型和函数

变量类型这里主要介绍一些特殊的，其他简要提一下就好：

| 类型                                  | 简介                                                         |
| ------------------------------------- | ------------------------------------------------------------ |
| bool、string、int、uint uint256、enum | 通识，不再赘述                                               |
| address                               | 20个字节，一个以太坊地址；<br />**可以被payable关键字修饰，变为可转账地址** |
| bytes                                 | 分为两类：定长（byte、bytes8、bytes32），为基本数据类型<br />不定长（byte1），为引用数据类型<br />（其实就是字面意思） |
| mapping                               | 键值对（感觉像是一个容器，放到类型这里有些怪异）             |



注意变量声明要带上修饰符，像这样：

```solidity
bytes32 public a = "hhhhhhhh";
// 不满32位会在末尾补0
```

变量修饰符如下：

| 修饰符名称                | 简介                                 |
| ------------------------- | ------------------------------------ |
| public、private、internal | 参考下文函数修饰符部分               |
| memory                    | 修饰后变为引用数据类型，分配临时内存 |
| storage                   | 同上，但为永久存储                   |



至于数组，就是像C语言一样就行了。

solidity的函数比较特殊，先看看完整结构怎么写：

```solidity
// 反正就是稀里哗啦一堆修饰符
function <function name>(<parameter types>) {internal|external|public|private} [pure|view|payable] [returns (<return types>)]

// 来看个实例清爽一点
function numPlus(int num) external pure returns(int newNum, bool) {
	newNum += 1;
	return(newNum, false);
}
```

> **internal|external|public|private**
>
> - `public`: 完全公开。
> - `private`: 仅限内部访问。
> - `external`: 仅限外部访问（但可以用`this.f()`来调用，`f`是函数名）。
> - `internal`: 相当于protected，内部和继承的可访问。
>
> tips: 除了external之外，其他三个都可以用于修饰变量，其中public还会为变量自动生成同名的getter
>
> **[pure|view|payable]**
>
> - `payable` 修饰的函数可以向合约转入ETH
> - `pure`不能读写区块链上的状态
> - `view` 只可读取链上状态
> - `什么都不写` 即default，可以读也可以写

返回值需要提前声明，可以指定名称也可以不指定（感觉非常神奇），对于函数返回多个值的情况可以使用解构赋值：

```solidity
int num;
int[3] arr;
(num, arr) = func();
```

