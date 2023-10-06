import React from "react";
const RecipeCard = ({ recipe }) => {
    const {
        idMeal,
        strMeal,
        strCategory,
        strMealThumb,
    } = recipe;
    
    return (
       
        <div className=" max-w-sm p-1 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden relative hover:transform hover:scale-105 transition-transform duration-500">
            <img
                src={strMealThumb}
                alt={strMeal}
                className="h-auto w-30 max-w-full rounded-lg"
            />
            <div className="pt-2 text-center w-full ">
                <span className="pt-2">{strCategory}</span>
                <h3>{strMeal}</h3>
                <a href={"https://www.themealdb.com/meal/" + idMeal} target="_blank"><button className="px-5 py-2 mb-2 bg-yellow-300 pb-2 border-r-4">Get Recipe </button></a>
            </div>
        </div>
        
    )
};

export default RecipeCard;