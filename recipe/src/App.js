import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import RecipesGrid from "./components/RecipesGrid/RecipesGrid";
import RecipeView from "./components/RecipeView/RecipeView";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" component={Home} />
          <Route path="/recipes/:type" component={RecipesGrid} />
          <Route path="/viewRecipe" component={RecipeView} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
