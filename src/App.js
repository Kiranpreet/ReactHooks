import React from 'react';
//simport logo from './logo.svg';
import './App.css';
import ProductTable from './Tables/ProductTable';
import {Products} from './DataRepo/Products';


const App=()=>{
  return(
    <div > 
      <h1> Products </h1>
      <div>
        {/* <h2>Add Produts</h2> */}
        <h2>View Products</h2>
        <ProductTable products={Products}/>
      </div>
    </div>
  );
}

export default App;
