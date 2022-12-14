import { useState, useRef, useEffect } from 'react';
import React from 'react';
import { useFetch } from '../../hooks/useFetch';


import './Create.css';
import { useHistory } from 'react-router-dom';

export default function Create() {
    const[title, setTitle] = useState('');
    const[method, setMethod] = useState('');
    const[cookingTime, setCookingTime] = useState('');
    const [newIngredient, setNewIngredient] = useState('');
    const [ingredients, setIngredients] = useState([]);
    const ingredientInput = useRef(null);
    const history = useHistory

    const {postData, data, error} = useFetch('http://localhost:3000/recipes', 'POST');

    const handleSubmit = (e) => {
        e.preventDefault();
        postData({title, ingredients, method, cookingTime: cookingTime + ' minutes'})
    }

    const handleAdd = (e) => {
        e.preventDefault();
        const ingredient = newIngredient.trim();

        if(ingredient && !ingredients.includes(ingredient)) {
            setIngredients([prevIngredients => [...prevIngredients, newIngredient]]);
        }
        setNewIngredient('');
        ingredientInput.current.focus();
    }

    // reidrect user

    useEffect(() => {
        if(data){
            history.push('/')
        }
    }, [data])

    return (
    <div className="create">
        <h2 className='page-title'>Add a new Recipe</h2>
        <form onSubmit={handleSubmit}>

            <label>
                <span>Recipe Title:</span>

                <input
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                required
                />
            </label>

            <label>
                <span>Recipe ingredients:</span>
                <div className="ingredients">
                    <input 
                    type="text" 
                    onChange={(e) => setNewIngredient(e.target.value)}
                    value={newIngredient}
                    ref={ingredientInput}
                    />
                    <button onClick={handleAdd} className='btn'>add</button>
                </div>
            </label>
            <p>Current ingredients: {ingredients.map(i => <em key={i}>{i}, </em>)}</p>

            <label>
                <span>Method:</span>
                <textarea 
                onChange={(e) => setMethod(e.target.value)}
                value={method}
                required
                />
            </label>



            <label>
                <span>Cooking time (minutes):</span>
                <input
                type="number"
                onChange={(e) => setCookingTime(e.target.value)}
                value={cookingTime}
                required
                />
            </label>

            <button className='btn'>Submit</button>
        </form>
    </div>
    );
}