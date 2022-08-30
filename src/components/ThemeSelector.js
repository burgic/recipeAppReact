
import './ThemeSelector.css';
import modeIcon from '../assets/mode-icon.svg'
import React from 'react';
import { useTheme } from '../hooks/useTheme';

const themeColors = ['#58249c','#249c6b','#70233']

export default function ThemeSelector () {
    const {changeColor, changeMode, mode} = useTheme()

    const toggleMode = () => {
        changeMode(mode === 'dark' ? 'light' : 'dark')
    }

    console.log(mode)

    return (
        <div className='theme-selector'>
            <div className = "mode-toggle">
                <img 
                onClick={toggleMode}
                src = {modeIcon} 
                alt = "dark/light toggle"
                style={{filter: mode === 'dark' ? 'invert(100%)' : 'invert(20%)'}}/>
                </div>
            <div className='theme-buttons'>
                {themeColors.map(color => (
                    <div
                        key={color}
                        onClick={() => changeColor(color)}
                        style={{background : color}}
                    />
                ))}

            </div>


        </div>
    )
}