import React, { useState, useContext } from 'react';
import Image from 'next/image';

// INTERNAL IMPORT
import Style from './HeroSection.module.css';
import images from '../../assets/index';
import { Token, SearchToken } from '../index';


const HeroSection = ({accounts, tokenData}) => {

  // Usestate
  const [openSetting, setOpenSetting] = useState(false);
  const [openToken, setOpenToken] = useState(false);
  const [openTokensTwo, setOpenTokensTwo] = useState(false);

  //Token 1 State
  const [tokenOne, setTokenOne] = useState ({
    name: "",
    image: "",
  }); 

  //Token 2 State
  const [tokenTwo, setTokenTwo] = useState ({
    name: "",
    image: "",
  }); 

  // JSX
  return (
    <div className={Style.HeroSection}>
      <div className={Style.HeroSection_box}>
        <div className={Style.HeroSection_box_heading}>
          <p>Swap</p>
          <div className={Style.HeroSection_box_heading_img}>
            <Image 
              src={images.close}
              alt='image'
              width={30}
              height={30}
              onClick={() => setOpenSetting(true)}
            />
          </div>
        </div>
        <div className={Style.HeroSection_box_input}>
          <input type="text" placeholder='0'/>
          <button onClick={() => setOpenToken(true)}>
            <Image 
              src={images.image || images.etherlogo}
              width={12}
              height={12}
              alt='ether'
            />
            {tokenOne.name || "ETH"}
            <small>9474</small>
          </button>

        </div>
        <div className={Style.HeroSection_box_input}>
          <input type="text" placeholder='0'/>
          <button onClick={() => setOpenTokensTwo(true)}>
            <Image 
              src={images.image || images.etherlogo}
              width={10}
              height={10}
              alt='ether'
            />
          {tokenTwo.name || "ETH"}
          <small>9474</small>
          </button>
        </div>
        {accounts ? (
          <button className={Style.HeroSection_box_btn}>Connect Wallet</button>
        ) : (
          <button className={Style.HeroSection_box_btn} onClick={() =>{}}>
            Swap </button>
        )}
      </div>
      
      {openSetting && <Token setOpenSetting={setOpenSetting} />}

      {/* TokenOne */}
      {openToken && (
        <SearchToken 
          openToken={setOpenToken}
          tokens={setTokenOne}  
          tokenData={tokenData}
        />
      )}

      {/* TokenTwo */}
      {openTokensTwo && (
        <SearchToken 
        openToken={setOpenTokensTwo}
        tokens={setTokenTwo}  
        tokenData={tokenData}
        />
      )}
      {}
    </div>
  )
}

export default HeroSection