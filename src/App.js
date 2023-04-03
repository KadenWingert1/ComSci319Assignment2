import "./App.css";
import "./style.css"
import logo from "./logo.png";

import React, { useState } from "react";
import { Products } from "./Products";
import { Categories } from "./Categories";


export const App = () => {
  console.log("Step 1: After reading file :");
  const [ProductsCategory, setProductsCategory] = useState(Products);
  const [query, setQuery] = useState("");
  // var ProductsCategory = Products;
  const render_products = (ProductsCategory) => {
    return (
      <div className="category-section fixed">
        {console.log("Step 3 : in render_products ")}
        <h2
          className="text-3xl font-extrabold tracking-tight text-gray-600 category-
title"
        >
          Products ({ProductsCategory.length})
        </h2>
        <div
          className="m-6 p-3 mt-10 ml-0 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-
cols-2 lg:grid-cols-6 xl:gap-x-10"
          style={{ maxHeight: "800px", overflowY: "scroll" }}
        >
          {/* Loop Products */}
          {ProductsCategory.map((product, index) => (
            <div key={index} className="group relative shadow-lg">
              <div
                className=" min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md
overflow-hidden group-hover:opacity-75 lg:h-60 lg:aspect-none"
              >
                <img
                  alt="Product Image"
                  src={product.image}
                  className="w-full h-full object-center object-cover lg:w-full lg:h-
full"
                />
              </div>
              <div className="flex justify-between p-3">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      <span style={{ fontSize: "16px", fontWeight: "600" }}>
                        {product.title}
                      </span>
                    </a>
                    <p>Category:  {product.category}</p>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Rating:
                    {product.rating.rate}
                  </p>
                </div>
                <p
                  className="text-sm font-medium
text-green-600"
                >
                  ${product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

// function handleClick(tag) {
//     console.log("Step 4 : in handleClick", tag);
//     const filtered = Products.filter((product) => product.category === tag);
//     setProductsCategory(filtered);
//     console.log("Step 5 : ", Products.length, ProductsCategory.length);
//   }
function handleClick(tag) {
    console.log("Step 4 : in handleClick", tag);
    const filtered = Products.filter((product) => {
      console.log("product:", product);
      console.log("tag:", tag);
      console.log("product.category:", product.category);
      return product.category === tag;
    });
    console.log("filtered products:", filtered);
    setProductsCategory(filtered);
    console.log("Step 5 : ", ProductsCategory.length);
  }
//   const handleChange = (e) => {
//     setQuery(e.target.value);
//     console.log(
//       "Step 6 : in handleChange, Target Value :",
//       e.target.value,
//       " Query Value :",
//       query
//     );
//     const results = ProductsCategory.filter((eachProduct) => {
//       if (e.target.value === "") return ProductsCategory;
//       return eachProduct.title
//         .toLowerCase()
//         .includes(e.target.value.toLowerCase());
//     });
//     setProductsCategory(results);
//   };
const handleChange = (e) => {
    setQuery(e.target.value);
    const filtered = Products.filter((product) => {
      if (e.target.value === "") return true;
      return product.title.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setProductsCategory(filtered);
  };
  
  return (
    <div className="flex fixed flex-row">
      {console.log(
        "Step 2 : Return App :",
        Products.length,
        ProductsCategory.length
      )}
      <div
        className="h-screen bg-slate-800 p-3 xl:basis-1/5"
        style={{ minWidth: "65%" }}
      >
        <img className="w-full" src={logo} alt="Nordland Forge" />
        <div className="px-6 py-4">
          <h1 className="text-3xl mb-2 font-bold text-white">
            {" "}
            Browse Products
          </h1>
          <p className="text-gray-700 text-white">
            by -{" "}
            <b>
              Kaden Wingert & Bryce Maloy
            </b>
          </p>
          <div className="py-10">
            <input type="search" value={query} onChange={handleChange} placeholder = "Search..." style = {{backgroundColor: "white"}}/>
          </div>
          <div className="py-10">
            {Categories ? <p className="text-white" style = {{color: "rgb(220, 221, 255)", fontWeight: "700"}}>Filter By Category: </p> : ""}
            {Categories.map((tag) => (
              <button
                key={tag}
                className="inline-block bg-amber-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mt-2"
                style = {{color: "black", backgroundColor:"burlywood", fontSize: "20px"}}
                onClick={() => {
                  handleClick(tag);
                }}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="ml-5 p-10 xl:basis-4/5">
        {console.log(
          "Before render :",
          Products.length,
          ProductsCategory.length
        )}
        {render_products(ProductsCategory)}
      </div>
    </div>
  );
}; //end App
