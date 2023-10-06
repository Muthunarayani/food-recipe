import React from "react";

const SearchBar = ({
    handleSubmit,
    query,
    isLoading,
    setQuery
}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className="flex justify-center">
            <input 
                value={query}
                className="px-4 py-2  border-black  focus:outline-none"
                placeholder="Search Recipe"
                name="query"
                disabled={isLoading}
                onChange={(event) => setQuery(event.target.value)}
            />   
            <input
                disabled={isLoading || !query}
                type="submit"
                className=" px-4 py-2 cursor-pointer  bg-yellow-300 focus:outline-none"
                value="🔍"
            />
            </div>
        </form>
        
    )
};

export default SearchBar;