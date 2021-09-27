import React, { Component } from "react";
import "./Mint.css";
import polyape0 from "../../images/polyape0.png";
import WalletConnectProvider from "@maticnetwork/walletconnect-provider"
import Matic from "maticjs"
import ContractAbi from '../../Abi/ContractAbi.json'
import Web3 from "web3";
import BN from "bn.js";


class Mint extends Component {

  componentWillMount () {
    this.getTotalSupply();
    }

    async getTotalSupply () {
      const maticProvider = new WalletConnectProvider(
        {
          host: `https://rpc-mainnet.matic.quiknode.pro`,
          callbacks: {
            onConnect: console.log('connected'),
            onDisconnect: console.log('disconnected!')
          }
        }
      )
        
      const maticWeb3 = new Web3(maticProvider);
      const myContractInstance = new maticWeb3.eth.Contract(ContractAbi, '0xDba706c13BA8c67529d65C2A979Aa918e286F5e5');
      
      
      const result = await myContractInstance.methods.totalSupply().call()
      this.setState({amount: result})
      
    }
    
    constructor(props) {
      super(props)
      this.state = { amount: '' }
    }

  async purchase () {



    var input = document.getElementById('get')
    var amountOfNFTs = input.value;
    console.log(amountOfNFTs)
  
    const maticWeb3 = new Web3(`https://rpc-mainnet.matic.quiknode.pro`);

    const ethereum = window.ethereum
    const web3 = new Web3(window.ethereum);
  
    const accounts = await web3.eth.getAccounts()
    var account = accounts[0]

    const myContractInstance = new maticWeb3.eth.Contract(ContractAbi, '0xDba706c13BA8c67529d65C2A979Aa918e286F5e5');

    const enter = 10 * amountOfNFTs;
    const amount = web3.utils.toWei(enter.toString(), 'ether');
    const value = web3.utils.toHex(amount);

    const transactionParameters = {
      to: '0xDba706c13BA8c67529d65C2A979Aa918e286F5e5', // Required except during contract publications.
      from: account, // must match user's active address.
      value: value, // Only required to send ether to the recipient from the initiating external account.
      data: '0xa0712d68000000000000000000000000000000000000000000000000000000000000000' + amountOfNFTs,
    };
/*
    await ethereum.request({
      method: 'mint',
      params: [transactionParameters],
    });
*/    
ethereum.request({  method: 'eth_sendTransaction',  params: [transactionParameters], })
    // txHash is a hex string
    // As with any RPC call, it may throw an error
  
}

  render() {
    return (
      <div className="mintbody">
        <img className="mintimage" src={polyape0} alt=""></img>
        <h1 className="mintnft">Mint a PolyApe</h1>
        <ul className='nftinfo'>
          <li>Price 10 Matic</li>
          <li>Total Supply: 1000</li>
          <li>Amount minted : {this.state.amount}/1000</li>
          <li>Random Distrubtion (random ape on purchase)</li>
          <li>Max of 9 NFTs at a time</li>
          <input id='get' className='amount' placeholder='Amount of nfts'></input>
        </ul>
        <button onClick={this.purchase} className="mintbtn"> Mint</button>
      </div>
    );
  }
}

export default Mint;
