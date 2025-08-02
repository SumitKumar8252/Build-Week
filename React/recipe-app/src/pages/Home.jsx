import React, { useEffect, useState} from 'react'
import axios from 'axios'
import RecipeCard from '../components/ReciepeCard'

function Home() {
  const [recipes, setRecipes]= useState([])

  useEffect(()=>{
    axios.get('https://dummyjson.com/recipes')
    .then((res)=> setRecipes(res.data.recipes))
    .catch((err)=> alert(err))
  }, []);

  return (
    <div className='home'>
        <h1>Recipe Finder</h1>
        <div style={{display: "grid",  gridAutoColumns: "repeat( 3, 1fr)", gap: "20px"}}>
            {recipes.map(recipe =>{
                <RecipeCard key= {recipe.id} recipe= {recipe}/>
            })}
        </div>
    </div>
  )
}

export default Home;