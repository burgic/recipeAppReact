import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { useTheme } from '../hooks/useTheme';
import React from 'react';

import './Navbar.css';

import Searchbar from './Searchbar.js'
import { ThemeContext } from '../context/ThemeContext';

export default function Navbar() {

    const {color, changeColor} = useTheme()

    return (
        <div className="navbar" style={{background: color}}>
            <nav onClick={() => changeColor('pink')}>
                <Link to="/" className='brand'>
                    
                    <h1>Cooking Ninja</h1>
                
                </Link>

                <Searchbar />

                <Link to = '/create '>
                    <h1>Create Recipe</h1>

                </Link>

            </nav>
            <h1>Navbar</h1>
        </div>
    );
}