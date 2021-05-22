import React, { useEffect, useRef, useState } from 'react';
import { useHistory,Link } from "react-router-dom";
import logo from '../../Assets/Logo_ML@2x.png.png.png';
import logoMobile from '../../Assets/Logo_ML.png';
import submitButton from '../../Assets/ic_Search@2x.png.png.png';
import mobileSubmitButton from '../../Assets/ic_Search.png';
import './navbar.scss';

const Navbar = () => {
    const [itemToSearch, setItemToSearch] = useState('');
    
    const inputRef = useRef()
    
    const history = useHistory();
    
    const handleChange = e => setItemToSearch(e.target.value);

    const handleSubmit = e => {
        e.preventDefault();

        itemToSearch.length > 0
            ? history.push(`/items?search=${itemToSearch}`)
            : inputRef.current.focus();
    }

    useEffect(() => {
        inputRef.current.focus();
    });

    return (
        <div className='header'>
            <nav className='header__nav'>
                <Link to='/'>
                    <picture >
                        <source media="(max-width: 768px)" srcSet={logoMobile} className='logo' />
                        <source media="(min-width: 769px)" srcSet={logo} className='logo' />
                        <img src={logo} alt="logo" className='logo'/>   
                    </picture>        
                </Link>
                <form onSubmit={handleSubmit} className='form'>
                    <input type='text' 
                        value={itemToSearch}
                        placeholder='Nunca dejes de buscar'
                        onChange={handleChange}
                        ref={inputRef} 
                        className='form__input'
                    />
                    <button type='submit' className='button'>
                        <picture >
                            <source media="(max-width: 768px)" srcSet={mobileSubmitButton} className='button__icon' />
                            <source media="(min-width: 769px)" srcSet={submitButton} className='button__icon' />
                            <img src={submitButton} alt="buscar" className='button__icon' />
                        </picture>
                    </button>
                </form>
            </nav>
        </div>
    );
};

export default Navbar;
