import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { getProduct, deleteProduct } from '../API';
import Product from '../components/Product';

class ViewProduct extends Component {
    state = {
        isLoading: true,
        product: {}
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        getProduct(id)
        .then(product => {
            setTimeout( () => {
                this.setState({
                    product,
                    isLoading: false
                });
              },2000);
        });
    }

    deleteProduct = () => {
        deleteProduct(this.state.product.id)
        .then(() => {
            this.props.history.push('/products');
        });
    }
    render() {
        return this.state.isLoading ?
            <h2> Loading product...</h2> :
            <Product deleteProduct={this.deleteProduct} product={this.state.product} cols="col-12" showStock={true} editing={true}/>
    }
}

export default withRouter(ViewProduct);