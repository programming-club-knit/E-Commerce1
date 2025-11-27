import { useState } from "react";


// Modal is the pop up which will be used when we click on the button 
import Modal from "../UI/Modal";

import "./AddProduct.css";

function AddProduct({ showAddProduct, closeAddProduct, onAddProduct }) {
  
  return <div>
    {showAddProduct},
    {onAddProduct},
    {closeAddProduct}
  </div>

}

export default AddProduct;
