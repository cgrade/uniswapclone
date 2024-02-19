import React , { useState, useEffect, useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';


// INTERNAL IMPORT
import Style from './NavBar.module.css';
import images from '../../assets';
import { Model, TokenList } from '../index';

const NavBar = () => {
  const menuItems = [
    {
      name: "Swap",
      link: "/",
    },
    {
      name: "Tokens",
      link: "/",
    },
    {
      name: "Pools",
      link: "/",
    },
  ]

  // UseState
  const [openModel, setOpenModel] = useState(false);
  const [openTokenBox, setOpenTokenBox] = useState(false);
  const [account, setAccount] = useState(true)
  return (
    <div className={Style.NavBar}>
      <div className={Style.NavBar_box}>
        <div className={Style.NavBar_box_left}>

          {/* LOGO IMAGE */}
          <div className={Style.NavBar_box_left_img}>
            <Image src={images.uniswap} alt='logo' width={50} height={50} />
          </div>

          {/* LEFT MENU ITEMS */}
          <div className={Style.NavBar_box_left_menu}>
            {menuItems.map((item, i) => (
              <Link
              key={i + 1}
              href={{ pathname: `${item.name}`, query: `${item.link}`}}
              >
                <p className={Style.NavBar_box_left_menu_item}>{item.name}</p>
              </Link>
            )) }
          </div>
          </div> 

          {/* MIDDLE MENU ITEMS */}
        <div className={Style.NavBar_box_middle}>
          <div className={Style.NavBar_box_middle_search}>
            <div className={Style.NavBar_box_middle_search_img}>
              <Image src={images.search} alt='search' width={20} height={20}/>
            </div>

            {/* INPUT SECTION */}
            <input type="text" placeholder='Search Tokens' />
          </div>
        </div>

          {/* RIGHT MENU ITEMS */}
        <div className={Style.NavBar_box_right}>
          <div className={Style.NavBar_box_right_box}>
            <div className={Style.NavBar_box_right_box_img}>
              <Image src={images.ether} alt='Network' height={30} width={30} />
            </div>
            <p>Network Name</p>
          </div>
          {
            account? (
              <button onClick={() => {setOpenTokenBox(true)}}>0xab4....4Da</button>
            ) : (
              <button onClick={() => {setOpenModel(true)}}>Connect Wallet</button>
            )
          }
         

          {openModel && (
            <Model setOpenModel ={setOpenModel} connectWallet ="Connect" />
          )}
        </div>
      </div> 
      {/* TOKEN LIST COMPONENT */}
      {openTokenBox && (
        <TokenList tokenDate="hey" setOpenTokenBox={setOpenTokenBox}/> 
      )} 

      <div className={Style.NavBar_box  }></div>
    </div>
  );
};

export default NavBar 