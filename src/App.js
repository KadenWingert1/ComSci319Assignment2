import logo from "./logo.png";
import "./App.css";
import React, { useState } from "react";
import { Categories } from "./Categories";
import { Products } from "./Products";




export function App() {


  console.log("Step 1 : Started App");
  const [ProductsCategory, setProductsCategory] = useState(Products);
  const [query, setQuery] = useState('');
  //var ProductsCategory = Products;

  const render_products = (ProductsCategory) => {
    return (
    <div>
    {console.log("Step 3 : in render_products ")}
    <h2>Products ({ProductsCategory.length})</h2>
    {/* Loop Products */}
    {ProductsCategory.map((product, index) => (
    <img key={index} alt="Product Image" src={product.image} />
    ))}
    </div>
    
    );
    };
  
    function handleClick(tag) {
    console.log("Step 4 : in handleClick", tag);
    let filtered = Products.filter((cat) => cat.category === tag);
     setProductsCategory(filtered);
    //ProductsCategory = filtered;
    console.log("Step 5 : ", Products.length, ProductsCategory.length);
    }

    const handleChange = (e) => {
      setQuery(e.target.value);
      console.log("Step 6 : in handleChange, Target Value :",e.target.value," Query Value :",query);
      const results = ProductsCategory.filter(eachProduct => {
      if (e.target.value === "") return ProductsCategory;
      return eachProduct.title.toLowerCase().includes(e.target.value.toLowerCase())
      });
      setProductsCategory(results);
      }

    // Return App
    return (
    <div>
    {console.log("Step 2 : Return App :",Products.length,ProductsCategory.length)}
    {Categories.map((tag) => (
    <button
    key={tag}
    className="inline-block bg-amber-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mt-2"
    onClick={() => {handleClick(tag);}}
    >
    {tag}
    </button>
    ))}
    {render_products(ProductsCategory)}
    </div>
    );
}