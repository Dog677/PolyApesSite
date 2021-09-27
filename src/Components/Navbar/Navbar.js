import React, { Component, useState, useEffect  } from "react";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";
import logo from "../../images/logo.png";
import "../Buttons/Buttons.css";
import Web3 from "web3";
import WalletConnectProvider from "@maticnetwork/walletconnect-provider"
import Matic from "maticjs"



class NavBar extends Component {
  state = { clicked: false};
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };


  
  componentWillMount() {
 
    this.Check();
  }

  async Connect() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      window.ethereum.enable();
      

      
      
    }
  }
async getConnect () {
  const ethereum = window.ethereum
  const web3 = new Web3(window.ethereum);

  this.setState({isConnected:  ethereum.isConnected()}) 
  console.log(this.state.isConnected)

  
}


  async Check () {

    if (window.ethereum) {
    const ethereum = window.ethereum
    const web3 = new Web3(window.ethereum);

    const accounts = await web3.eth.getAccounts()
    this.setState({account: accounts[0]})
    

    var chainId = await web3.eth.net.getId()

        
    if (chainId === 137) {
      console.log('connected to matic!')
    } else {
      alert('Please change to Polygon Network');
    }


    
    if (ethereum) {
      // Listening to Event
      ethereum.on('disconnect', () => {
        console.log("MetaMask discconnected")
        this.setState({ isConnected: false })
  })
}

if (ethereum) {
  // Listening to Event
  ethereum.on('connect', () => {
    console.log("MetaMask connected")
    this.getConnect();
})
}
    
  

    if (ethereum) {
      ethereum.on('accountsChanged', async function (accountscheck) {
        
        window.location.reload();
        if (chainId === 137) {
          console.log('connected to matic!')
        } else {
          alert('Please change to Polygon Network');
        }
        this.getConnect();
      }); 
    }

    
  }
 
  
  }

  constructor(props) {
    super(props)
    this.state = { account: '', isConnected: false }
  }

  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">
          <img src={logo} alt="" className="logo"></img>
        </h1>
        <h1 className="navbar-logo">PolyApes</h1>
        <div className="menu-icon" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.link}>
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
        <div className="remove">
          <button onClick={this.Connect} className="btn btn--primary btn--medium"> {this.state.account ? this.state.account :  'Connect Wallet'} </button>
        </div>
      </nav>
      
    );
  }

}


export default NavBar;
