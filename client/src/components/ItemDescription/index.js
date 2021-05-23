import React from 'react';
import './itemDescription.scss'; 
import RightColumnDescription from './components/RightColumnDescription'

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
            <RightColumnDescription item={item}/>     
        </div>
    )
}

export default ItemDescription;