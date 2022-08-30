import {useState} from 'react'
import { useHistory } from 'react-router-dom'
import React from 'react'

import './Searchbar.css'

export default function Searchbar() {
    const [term, setTerm] = useState('')
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()

        // ?q=query
        history.push(`/search?q=${term}`)
        

    }

    return (
        <div className="Searchbar">
            <form onSubmit={handleSubmit}>
                <label htmlFor="search">Search</label>
                <input
                    type="text"
                    id="search"
                    onChange={(e) => setTerm(e.target.value)}
                    required
                    
                />

            </form>
        
        </div>
    )
}