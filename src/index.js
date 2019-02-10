import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Container } from 'reactstrap';

import "bootstrap/dist/css/bootstrap.min.css";
import TopMenu from "./components/TopMenu";
import Products from "./pages/Products";

const Index = () => <h2 className="text-primary">Index</h2>

function App() {
  return (
    <Router>
      <Container fluid="true">
        <TopMenu />
        <Route path="/" exact component={Index} />
        <Route path="/products" component={Products} />
      </Container>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
