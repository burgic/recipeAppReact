import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import './Recipe.css';
import {useTheme} from '../../hooks/useTheme'

export default function Recipe() {
    const {id} = useParams();
    const url = 'http://localhost:3000/recipes/' + id;
    const {error, isPending, data: recipe} = useFetch(url);
    const {mode} = useTheme()

    return (
        <div className={`recipe ${mode}`}>
            {error && <p className="Error">{error}</p>}
            {isPending && <p className="Loading">Loading...</p>}
            {recipe && (
            <>
            <h1 className="page-title">{recipe.title}</h1>
            <p>Takes {recipe.cookingTime} to cook.</p>
            <ul>
                {recipe.ingredients.map(ingredients => <li key={ingredients}>{ingredients}</li>)}

            </ul>
            <p className='method'>{recipe.method}</p>
            </>
        )}
        </div>
    );
}