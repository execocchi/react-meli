import React from 'react'
import freeShippingImage from '../../../../Assets/ic_shipping@2x.png.png.png';
import freeShippingImageMobile from '../../../../Assets/ic_shipping.png';
import './itemContent.scss';

const ItemContent = ({ item }) => {
  return (
    
    <>
    <div className="item-content">
      <div className="item-content__info">
        <div className="item-content__price">
          <span className="item-content__currency">
            {item.price.currency}
          </span>
          <span>
            {Math.ceil(item.price.amount).toLocaleString()}
          </span>
          <div>
            {item.free_shipping &&
              <picture >
                <source media="(max-width: 768px)" srcset={freeShippingImageMobile} />
                <source media="(min-width: 769px)" srcset={freeShippingImage} className="item-content__image" />
                <img src={freeShippingImage} size='max' alt='envio-gratis' className="item-content__image" />
              </picture>
            }
          </div>
        </div>
        <div >
          <p className="item-content__title">
            {item.title}
          </p>
        </div>
      </div>
      <div className="item-content__address-container">
        <span className="item-content__address">
          {item.address}
        </span>
      </div>
    </div>
    </>
    
  )
}

export default ItemContent
