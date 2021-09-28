import React, { Component } from "react";
import "./Stats.css";
import Web3 from "web3";
import WalletConnectProvider from "@maticnetwork/walletconnect-provider"
import Matic from "maticjs"
import ContractAbi from '../../Abi/ContractAbi.json'
import { getAllByDisplayValue } from "@testing-library/react";




class Stats extends Component {

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

  render() {
    return (
      <div className="bar">
        <h1 className="mint">
          <a class="fixlink" href="/mint">
            Total Minted {this.state.amount}/1000
          </a>
        </h1>
      </div>
    );
  }
}

export default Stats;
