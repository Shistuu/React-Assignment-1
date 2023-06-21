import React, { useState } from "react";
import "./AddProduct.css";

interface AddProductFormProps {
  prod_name: string;
  qty: number;
  price: number;
  remark: string;
  description: string;
}

const AddProductForm: React.FC<AddProductFormProps> = (props) => {
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [productPrice, setProductPrice] = useState(0);
  const [productRemark, setProductRemark] = useState("");
  const [productDescription, setProductDescription] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Product Name:", productName);
    console.log("Quantity:", quantity);
    console.log("Price:", productPrice);
    console.log("Remark:", productRemark);
    console.log("Description:", productDescription);
  };

  return (
    <form className="add-product-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Product Name"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(parseInt(e.target.value))}
      />
      <input
        type="number"
        placeholder="Price"
        value={productPrice}
        onChange={(e) => setProductPrice(parseFloat(e.target.value))}
      />
      <input
        type="text"
        placeholder="Remark"
        value={productRemark}
        onChange={(e) => setProductRemark(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={productDescription}
        onChange={(e) => setProductDescription(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddProductForm;
