import React, { useState } from 'react'
import Image from 'next/image';

// INTERNAL IMPORT
import Style from './SearchToken.module.css';
import images from '../../assets';

const SearchToken = ({openToken, tokens, tokenData}) => {

  // UseState
  const [active, setActive] = useState(1)

  const coin = [
    {
      img: images.ether,
      name: "ETH"
    },
    {
      img: images.ether,
      name: "DAI"
    },
    {
      img: images.ether,
      name: "SOL"
    },
    {
      img: images.ether,
      name: "AVAX"
    },
    {
      img: images.ether,
      name: "ARB"
    },
    {
      img: images.ether,
      name: "DOG"
    }
  ]
  return (
    <div className={Style.SearchToken}>
      <div className={Style.SearchToken_box}>
        <div className={Style.SearchToken_box_heading}>
          <h4>Select a token</h4>
          <Image src={images.close} alt='close'
          width={30}
          height={30}
          onClick={() => openToken(false)}/>
        </div>

        <div className={Style.SearchToken_box_search}>
          <div className={Style.SearchToken_box_search_img}>
            <Image src={images.search} alt='img' width={20} height={20} />
          </div>

          <input type="text" placeholder="Search name and paste the address" />
        </div>

        <div className={Style.SearchToken_box_token}>
          {coin.map((item, i) => (
            <span key={i + 1} className={active == i+1? `${Style.active}`: ""}
            onClick={() => (setActive(i + 1), tokens({name: item.name, image: item.img })
            )}
            >
              <Image src={item.img || images.ether}
              alt='image'
              width={20}
              height={20}
              />
              {item.name}
            </span>
          ))}
        </div>
      </div>
      
    </div>
  )
}

export default SearchToken