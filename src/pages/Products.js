import React, { Component } from 'react';
import axios from 'axios';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Col, Row } from 'reactstrap';

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
  }

  async componentDidMount() {
    const res= await axios.get('https://p72oo29jkx.sse.codesandbox.io/products');
    console.log(res)
    this.setState({
      products: res.data
    });
  }

  render() {
    const { products } = this.state;
    return (
      <div>
        <h2 className="text text-primary">Products</h2>
        <Row>
          {
            !products.length && (
              <div className="spinner-grow text-danger" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            )
          }
          {
            products.length > 0 && products.map((product, item) => (
              <Col md="3" sm="4">
                <Card>
                  <CardImg top width="100%" src={product.imageURL} alt={product.name} />
                  <CardBody>
                    <CardTitle className="text-primary">{product.name}</CardTitle>
                    <CardSubtitle className="text-danger">${product.price}</CardSubtitle>
                    <CardText>{product.description}</CardText>
                    <Button className="btn-success" >Add To Cart</Button>
                  </CardBody>
                </Card>
              </Col>
            ))
          }
        </Row>
      </div>
    );
  }
}

export default Products;
