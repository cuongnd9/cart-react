import React, { Component } from 'react';
import axios from 'axios';
import { 
  Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Col, Row, Container 
} from 'reactstrap';

import { CartContext } from '../contexts/Cart';

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
  }

  async componentDidMount() {
    const res= await axios.get('https://p72oo29jkx.sse.codesandbox.io/products');
    
    this.setState({
      products: res.data
    });
  }

  render() {
    const { products } = this.state;
    return (
      <Container>
        <h3 className="text text-primary">Products</h3>
        <Row>
          {
            !products.length && (
              <div className="spinner-grow text-danger" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            )
          }
          {
            products.length > 0 && products.map((product, index) => (
              <Col key={index} md="3" sm="4">
                <Card>
                  <CardImg top width="100%" src={product.imageURL} alt={product.name} />
                  <CardBody>
                    <CardTitle className="text-primary">{product.name}</CardTitle>
                    <CardSubtitle className="text-danger">${product.price}</CardSubtitle>
                    <CardText>{product.description}</CardText>
                    <CartContext.Consumer>
                      {({addToCart}) => <Button className="btn-success" onClick={addToCart.bind(this, product)} >Add To Cart</Button>}
                    </CartContext.Consumer>
                  </CardBody>
                </Card>
              </Col>
            ))
          }
        </Row>
      </Container>
    );
  }
}

export default Products;
