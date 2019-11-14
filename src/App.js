import React, { useState } from 'react';
//simport logo from './logo.svg';
import './App.css';
import ProductTable from './Tables/ProductTable';
import { Products } from './DataRepo/Products';
import AddProductForm from './Forms/AddProductForm'

const App = () => {
  const productsData = Products;
  const [products, setProducts] = useState(productsData);
  const addProduct = product => {
    product.id = products.length + 1
    setProducts([...products, product])
  }
  return (
    <div >
      <h1> Products </h1>
      <div>
        {/* <h2>Add Produts</h2> */}
        <h2>Add Product</h2>
        <AddProductForm addProduct={addProduct} />
        <h2>View Products</h2>
        <ProductTable products={products} />
      </div>
    </div>
  );
}

export default App;
