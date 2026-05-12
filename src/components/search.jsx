import React from 'react';

const Search = ({searchTerm, setSearchTerm}) => {
    return (
        <div>
            <div className="search">
                <div>
                    <img src="search.svg" alt="search"/>
                    <input
                        type="text"
                        placeholder="search through thousands of movies."
                        value= {searchTerm}
                        onChange={(e)=> setSearchTerm(e.target.value)}
                    />

                </div>
            </div>
        </div>
    )
}
export default Search;