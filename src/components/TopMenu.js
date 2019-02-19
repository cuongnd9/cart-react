import React from "react";
import {
  Collapse, Navbar, NavbarToggler, Nav, NavItem
} from "reactstrap";
import { Link } from "react-router-dom";

import { CartContext } from '../contexts/Cart';

export default class TopMenu extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <Link className='navbar-brand' to='/'>React</Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link className='nav-link' to="/">Home</Link>
              </NavItem>
              <NavItem>
                <Link className='nav-link' to="/products">Products</Link>
              </NavItem>
              <CartContext.Consumer>
                {
                  ({cartItems}) => <NavItem>
                    <Link className='nav-link text-danger' to="/products">{`Cart(${cartItems.length})`}</Link>
                  </NavItem>
                }
              </CartContext.Consumer>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
