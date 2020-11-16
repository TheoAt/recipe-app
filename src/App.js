import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';
import './App.css';

const App = () => {

  const APP_ID = "21de2e8d";
  const APP_KEY = "edc167ea1f0f9eba19e53b68ac82fdab";

  const [recipies, setRecipies] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    getRecipies();
  }, [query]);

  const getRecipies = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipies(data.hits);
    console.log(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }

  const homePage = () => {
    if (query === "") {
      return (
        <div className="homePage">
          <h1 className="titleWild"><span>W</span>ild <span>R</span>ecipes</h1>
          <h2 className="titleh2">The first website to eat like a real wilder</h2>
          <p className="legend" onClick={cursorSearch}>Look for your favorite dish in the search bar</p>
        </div>
      );
    }
  }

  const cursorSearch = () => {
    var elem = document.querySelector('.search-bar');
    elem.focus();
    elem.selectionStart = elem.value.length;
  }

  return (
    <div className="App">

      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch} />
        <button className="search-button" type="submit">Search</button>
      </form>

      <div className="homepage">
        {homePage()}
      </div>

      <div className="recipes">
        {recipies.map(recipe => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredientLines}
            source={recipe.recipe.source}
            tags={recipe.recipe.healthLabels}
          />
        ))}
      </div>

    </div>
  );  
}

export default App;
