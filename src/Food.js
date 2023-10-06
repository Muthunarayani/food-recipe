import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import RecipeCard from "./components/RecipeCard";
const searchApi = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
const Food = (props) => {
  const navigate = useNavigate();
  
    const [isLoading, setIsLoading] = useState(false);
    const [query, setQuery] = useState("");
    const [recipes, setRecipes] = useState([]);
    
    // search for the recipe
    const searchRecipes = async () => {
      setIsLoading(true);
      const url = searchApi + query
      const res = await fetch(url);
      const data = await res.json();
      setRecipes(data.meals);
      setIsLoading(false);
    };
  
    useEffect(() => {
      searchRecipes()
    }, []);
  
    const handleSubmit = (event) => {
      event.preventDefault();
      searchRecipes();
    }
  
    return (
    <>
      
      <div className="bg-white m-3 p-3 border-r-8 sm:h-50 w-30">
      <div className="relative  isolate overflow-hidden bg-black bg-opacity-100 py-24 mb-10 w-full">
        <div className="w-full">
          <img
            src="/img2.jpg"
            alt=""
            className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center opacity-40"
          />
        </div>

        <div className="text-center">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <p className="mt-10 text-lg leading-8 text-gray-300 font-bold tracking-wider uppercase">
             our food recipes
            </p>
            <br />
            <SearchBar
          isLoading={isLoading}
          query={query}
          setQuery={setQuery}
          handleSubmit={handleSubmit} />
  
          </div>
        </div>
      </div>
  
        
        
  
        <div className="flex flex-row flex-wrap justify-center mt-20 ">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          
          {recipes ? recipes.map(recipe => (
            <RecipeCard
               key={recipe.idMeal}
               recipe={recipe}
            />
          )) : "No Results."}
         </div>
      
        
        <button onClick={() => navigate(-1)} className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 mt-5 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 text-center items-center">Go Back</button>
      </div>
      
      </div>
      
     </> 
    );
  }
  
  export default Food;