import React from 'react';
import './breadcrumb.scss';
import Chevron from '../Chevron';

const BreadCrumb = ({ categories }) => (
    <div className='breadcrumb'>
        <ul className='breadcrumb__list'>
            {categories && categories.map((category, i, array) => {
                const currentCategory = i === array.length - 1;
                return (
                    <>
                        <li key={categories} className='breadcrumb__list-item'>
                            {category}
                        </li>
                        {!currentCategory && <Chevron className='chevron' />}
                    </>
                );
            })}
        </ul>
    </div>
);

export default BreadCrumb;

