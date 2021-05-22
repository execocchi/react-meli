import React from 'react';
import { Link } from 'react-router-dom';
import './error.scss';

const Error = () => (
    <div className="mainbox">
        <div className='err'>4</div>
        <i className='far fa-question-circle fa-spin'></i>
        <div className='err2'>4</div>
        <div className='mainbox__msg-container'>
            <p className='mainbox__msg'>Ups! No existen resultados relacionados con tu busqueda</p>
            <Link to='/'>
                <button className='mainbox__button'>Volver al inicio</button>
            </Link>
        </div>
    </div>
);

export default Error;
