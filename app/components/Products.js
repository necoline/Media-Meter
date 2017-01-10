import React from 'react';
import $ from 'jquery';

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.products = this.products.bind(this);
    this.getProducts = this.getProducts.bind(this);
    this.addProduct = this.addProduct.bind(this);
    this.baseUrl = "http://devpoint-ajax-example-server.herokuapp.com/api/v1";
    this.state= { products: [] };
  }

  getProducts() {
    $.ajax({
      url: `${this.baseUrl}/products`,
      type: 'GET'
    }).done( products => {
      this.setState({ products });
    })
  }

  deleteProduct(id) {
    //OPTIMISTIC UPDATING
    this.setState({ products: this.state.products.filter( product => product.id !== id ) });

    $.ajax({
      url: `${this.baseUrl}/products/${id}`,
      type: 'DELETE'
     }).fail( () => {
       alert('Product failed to delete');
       this.getProducts();
     });
   }

  products() {
    return this.state.products.map( product => {
       return (
         <tr key={product.id}>
           <td>{product.name}</td>
           <td>{product.description}</td>
           <td>${product.base_price || 0}</td>
           <td>
             <button className="btn red" onClick={() => this.deleteProduct(product.id)}>
             Delete
             </button>
           </td>
         </tr>
        )
      });
    }

  addProduct(e) {
    e.preventDefault();
    $.ajax({
      url: `${this.baseUrl}/products`,
      type: 'POST',
      data: {
        product: {
        name: this.refs.name.value,
        description: this.refs.description.value,
        base_price: this.refs.base_price.value
        }
      }
      }).done( product => {
        if (this.state.products.length === 0)
          this.getProducts();
        else
          this.setState({ products: [ { ...product }, ...this.state.products ] });
        this.refs.addForm.reset();
    });
  }

  render() {
    return (
      <div>
        <h3 className="center">Products</h3>
        <form ref="addForm" onSubmit={this.addProduct}>
          <input ref='name' placeholder='name' required="true" />
          <input ref='description' placeholder='description' />
          <input ref='base_price' placeholder='price' type="number" />
          <button className="btn">Submit</button>
        </form>
        <hr />
        <button className="btn" onClick={ this.getProducts }>Get Products</button>
        <table className="table">
          <thead>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Delete</th>
          </thead>
          <tbody>
            {this.products()}
          </tbody>
        </table>
      </div>
     )
   }
}

export default Products;
