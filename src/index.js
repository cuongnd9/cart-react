import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import CartProvider from './contexts/Cart';

import TopMenu from "./components/TopMenu";
import Products from "./pages/Products";

const Home = () => <h3 className="text-primary">Home</h3>

function App() {
  return (
    <CartProvider>
      <Router>
        <div>
          <TopMenu />
          <Route path="/" exact component={Home} />
          <Route path="/products" component={Products} />
        </div>
      </Router>
    </CartProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
