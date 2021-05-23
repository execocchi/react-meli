import React from 'react'
import Button from '../../../Button'
import './rightColumnDescription.scss'

const RightColumnDescription = ({item}) => {
    return (
        <div className='right-column'>
            <div className='right-column__inner-wrapper'>
                    <p className='right-column__condition'>
                        <span>
                            {`${item.condition} - `}
                        </span>
                        <span>
                            {`${item.sold_quantity} vendidos`}
                        </span>
                    </p>
                    <h1 className='right-column__title'>
                        {item.title}
                    </h1>
                    <div className='right-column__price'>
                        <span className='right-column__currency'>
                            {item.price.currency}
                        </span>
                        <span className=''>
                            {Math.ceil(item.price.amount).toLocaleString()}
                        </span>
                    </div>
                    <Button className='right-column__button'>
                        Comprar
                    </Button>
            </div>
        </div>
    )
}

export default RightColumnDescription
