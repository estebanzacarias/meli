import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Products from "./items";
import ProductDetail from "./description";


function App() {
  return (
    <div>


      <Router>
        <Route exact path="/">
          <Products />
        </Route>
        <Route path="/items/:id" component={ProductDetail}>

        </Route>

      </Router>

    </div>
  );
}

export default App;
