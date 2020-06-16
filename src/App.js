import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Products from "./components/items";
import ProductDetail from "./components/description";
import Query from "./components/results";


function App() {
  return (
    <div>
      <Router>
       <Route
         exact
         path="/"
         component={Products}>
       </Route>
       <Route
         path="/items/:id"
         component={ProductDetail}>
       </Route>
       <Route
         path="/item/search/:query"
         component={Query}>
        </Route>
      </Router>
    </div>
  );
}

export default App;
