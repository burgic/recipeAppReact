import RecipeList from '../../components/RecipeList';
import { useFetch } from '../../hooks/useFetch';
import './Home.css';

const getRecipes = () => {
    fetch('http://localhost:3000/recipes')
}

export default function Home() {
    const {data, isPending, error } = useFetch('http://localhost:3000/recipes')
    return (
        <div className="Home">
            {error && <p className='error'>{error}</p>}
            {isPending && <p className='loading'>Loading...</p>}
            {data && <RecipeList recipes={data}/>}
        </div>
    );
}