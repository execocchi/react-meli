import React from 'react';
import './itemDescription.scss'; 

const ItemDescription = ({ item }) => {
    return (
        <div className='item-description'>
            <div className='item-description__image-container'>
                <img src={item.picture} alt='imagen-del-producto' className='item-description__image' />
            </div>
            <div className='item-description__description-container'>
                <h3 className='item-description__description-title'>
                    Descripción de producto
                </h3>
                <p className='item-description__description-label'>
                    {item.description}
                </p>
            </div>
            <div className='item-description__right-column'>
                <div className='item-description__right-column-inner-wrapper'>
                    <p className='item-description__condition'>
                        <span>
                            {`${item.condition} - `}
                        </span>
                        <span>
                            {`${item.sold_quantity} vendidos`}
                        </span>
                    </p>
                    <h1 className='item-description__title'>
                        {item.title}
                    </h1>
                    <div className='item-description__price'>
                        <span className='item-description__currency'>
                            {item.price.currency}
                        </span>
                        <span className=''>
                            {Math.ceil(item.price.amount).toLocaleString()}
                        </span>
                    </div>
                    <button className='item-description__button'>
                        Comprar
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ItemDescription;