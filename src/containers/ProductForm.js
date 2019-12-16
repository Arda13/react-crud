import React, { Component } from 'react';

class ProductForm extends Component {
    state = {
        product : {
            

        }
    };

    render() {
        return(
                    <form>
        <div className="form-group">
            <label htmlFor="title">Title </label>
            <input type="text" className="form-control" id="title"  placeholder="Enter title " required/>
           
        </div>
        <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">Description</label>
            <textarea className="form-control" id="description" placeholder="Enter description" rows="3" required></textarea>
        </div>
        <div className="form-group">
            <label htmlFor="quantity">Quantity</label>
            <input type="number" step="1" min="0" className="form-control" id="quantity" placeholder="Enter quantity " required/>
           
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        );
    }
}

export default ProductForm;