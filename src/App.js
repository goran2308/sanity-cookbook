import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllRecipes from "./components/AllRecipes";
import Recipe from "./components/Recipe";

function App() {
  return (
    <div>
      <div className="mainTitle">
        <h1>Cookbook</h1>
      </div>
      <Router>
        <Routes>
          <Route exact path="/" element={<AllRecipes />} />
          <Route exact path="/:slug" element={<Recipe />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
