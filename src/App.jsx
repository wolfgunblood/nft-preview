import React from 'react';
import "./App.scss";
import Equi from "./assets/images/image-equilibrium.jpg";
import NFT from "./assets/images/icon-ethereum.svg";
import Avatar from "./assets/images/image-avatar.png";
import View from "./assets/images/icon-view.svg";
import Clock from "./assets/images/icon-clock.svg";

const App = () => {
  return (
    <div className='nft-container'>
      <div className='bg-wrapper'>
        <img src={Equi} alt="NFt Main bg" className='main-img' />
        <div className='view-wrapper'>
          <img src={View} alt="View Image" className='view-img' />
        </div>
      </div>

      <h2 className='nft-header'>Equilibrium #3429</h2>
      <p className='nft-desc'>Our Equilibrium collection promotes balance and calm.</p>
      <div className='eth-container'>
        <div className='eth-quant'>
          <img src={NFT} alt="Etherreum" />
          <p> 0.041 ETH</p>
        </div>
        <div className='time-left'>
          <img src={Clock} alt="Clock" />
          <p> 3 days left</p>
        </div>
      </div>
      <div className='hz-line'></div>
      <div className='avatar-container'>
        <img src={Avatar} alt="avatar" className='avatar' />
        <p className='avatar-text'>Creation of <span className='name'>Jules Wyvern</span></p>
      </div>

    </div>
  )
}

export default App