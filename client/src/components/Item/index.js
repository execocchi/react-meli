import React from 'react';
import './item.scss';
import { Link } from 'react-router-dom';
import ItemContent from './components/ItemContent';

const Item = ({ item, categories }) => {
    return (
        <li className="item">
            <div className="item__image-container">
                <Link to={{
                    pathname: `/items/${item.id}`,
                    state: {
                        categories
                    }
                }}>
                    <img src={item.picture} alt='imagen-del-producto' className="item__image" />
                </Link>
            </div>
            
            <ItemContent item={item} />
            
        </li>
    )
}

export default Item;