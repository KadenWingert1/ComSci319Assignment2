import React from "react";
import { useState, useEffect } from "react";

function Cart({
  isCartVisible,
  cart,
  setCart,
  ProductsCategory,
  //setProductsCategory,
}) {
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    total();
  }, [cart]);

  const total = () => {
    let totalVal = 0;
    for (let i = 0; i < cart.length; i++) {
      totalVal += cart[i].price;
    }
    setCartTotal(totalVal);
  };

//Javascript form validation code... Gives errors right now
//Add your code under this line
// const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
// const form = document.getElementById('checkout-form')
// const inputCard = document.querySelector('#inputCard')
// const alertTrigger = document.getElementById('submit-btn')
// const summaryCard = document.querySelector('.card')
// const summaryList = document.querySelector('.card > ul')
// // console.log(summaryList);
// var order = { name: "", email: "", card: "" };

// const alert = (message, type) => {
//   const wrapper = document.createElement("div");
//   wrapper.innerHTML = [
//     `<div class="alert alert-${type} alert-dismissible" role="alert">`,
//     ` <div>${message}</div>`,
//     ' <button type="button" class="btn-close" data-bs-dismiss="alert" arialabel="Close"></button>',
//     "</div>",
//   ].join("");
//   alertPlaceholder.append(wrapper);
// };

// function isNumeric (n) {
//   return !isNaN(parseFloat(n)) && isFinite(n)
//   }
//   inputCard.addEventListener('input', event => {
//   if (!inputCard.value) {
//   return event.preventDefault() // stops modal from being shown
//   } else {
//   inputCard.value = inputCard.value.replace(/-/g, '')
//   let newVal = ''
//   for (var i = 0, nums = 0; i < inputCard.value.length; i++) {
//   if (nums != 0 && nums % 4 == 0) {
//   newVal += '-'
//   }
//   newVal += inputCard.value[i]
//   if (isNumeric(inputCard.value[i])) {
//   nums++
//   }
//   }
//   inputCard.value = newVal
//   }
//   })
//   form.addEventListener('submit', event => {
//     //if (!form.checkValidity()) {
//     if (!validate()) {
//     alertPlaceholder.innerHTML = ''
//     alert('<i class="bi-exclamation-circle"></i> Something went wrong!','danger')
//     }
//     event.preventDefault()
//     event.stopPropagation()
//     //form.classList.add('was-validated')
//     }, false )
    

// let validate = function () {
//   val = true;
//   let email = document.getElementById("inputEmail4");
//   let name = document.getElementById("inputName");
//   let card = document.getElementById("inputCard");
//   if (
//     !email.value.match(
//       /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//     )
//   ) {
//     email.setAttribute("class", "form-control is-invalid");
//     val = false;
//   } else {
//     email.setAttribute("class", "form-control is-valid");
//     order.email = email.value;
//   }
//   if (name.value.length == 0) {
//     name.setAttribute("class", "form-control is-invalid");
//     val = false;
//   } else {
//     name.setAttribute("class", "form-control is-valid");
//     order.name = name.value;
//   }
//   if (!card.value.match(/^[0-9]{4}\-[0-9]{4}\-[0-9]{4}\-[0-9]{4}$/)) {
//     card.setAttribute("class", "form-control is-invalid");
//     val = false;
//   } else {
//     card.setAttribute("class", "form-control is-valid");
//     order.card = card.value;
//   }
//   if (val) {
//     form.classList.add("collapse");
//     for (const [key, value] of Object.entries(order)) {
//       summaryList.innerHTML +=
//         '<li class="list-group-item"> <b>' +
//         `${key}` +
//         ": </b>" +
//         `${value}` +
//         "</li>";
//     }
//     summaryCard.classList.remove("collapse");
//     alertPlaceholder.innerHTML = "";
//     alert(
//       '<i class="bi-cart-check-fill"></i> You have made an order!',
//       "success"
//     );
//   }
//   return val;
// };
  

  return (
    <div>
      {isCartVisible && (
        <div className="cart-section fixed">
          {
            /* Cart content here */
            <div class="form-wrapper" id="form-wrapper">
              <div class="row">
                <div class="col-2"></div>
                <div class="col-8">
                  <h1>View Your Cart</h1>
                  <div className="cartItems">
                    {/* Loop Products */}
                    {ProductsCategory.filter(
                      (product) => cart[product.id - 1] >= 1
                    ).map((product, index) => (
                      <div key={index} className="group relative shadow-lg">
                        <div
                          className=" min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md
overflow-hidden group-hover:opacity-75 lg:h-60 lg:aspect-none"
                        >
                          <img
                            alt="Product"
                            src={product.image}
                            className="w-full h-full object-center object-cover lg:w-full lg:h-
full"
                          />
                        </div>
                        <div className="flex justify-between p-3">
                          <div>
                            <h3 className="text-sm text-gray-700">
                              <a href={product.href}>
                                <span
                                  style={{
                                    fontSize: "16px",
                                    fontWeight: "600",
                                  }}
                                >
                                  {product.title}
                                </span>
                              </a>
                              <p
                                className="text-sm font-medium
text-green-600"
                              >
                                ${product.price}
                              </p>
                              Category: {product.category}
                            </h3>
                            <p className="mt-1 text-sm text-gray-500">
                              Rating:
                              {product.rating.rate}
                            </p>
                            <div className="addsubContainer">
                              <button
                                className="inline-block bg-amber-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mt-2 addsub"
                                onClick={() => {
                                  const newState = [...cart];
                                  newState[product.id - 1] += 1;
                                  setCart(newState);
                                  console.log("ADD BUTTON:" + cart);
                                }}
                              >
                                Add
                              </button>
                              <button
                                className="inline-block bg-amber-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mt-2 addsub"
                                onClick={() => {
                                  const newState = [...cart];
                                  if (newState[product.id - 1] > 0) {
                                    newState[product.id - 1] -= 1;
                                    setCart(newState);
                                    console.log("SUB BUTTON:" + cart);
                                  }
                                }}
                              >
                                Remove
                              </button>
                            </div>
                            <p>Cart: {cart[product.id - 1]}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <h1>Payment Information</h1>

                  <div id="liveAlertPlaceholder"></div>

                  <form class="row g-3" id="checkout-form">
                    <div class="col-md-6">
                      <label for="inputName" class="form-label">
                        Full Name
                      </label>
                      <input type="text" class="form-control" id="inputName" />
                      <div class="valid-feedback">Looks good!</div>
                      <div class="invalid-feedback">
                        Must be like, "John Doe"
                      </div>
                    </div>

                    <div class="col-md-6">
                      <label for="inputEmail4" class="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        class="form-control"
                        id="inputEmail4"
                      />
                      <div class="valid-feedback">Looks good!</div>
                      <div class="invalid-feedback">
                        Must be like, "abc@xyz.efg"
                      </div>
                    </div>

                    <div class="col-12">
                      <label for="inputCard" class="form-label">
                        Card
                      </label>
                      <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">
                          <i class="bi-credit-card-fill"></i>
                        </span>
                        <input
                          type="text"
                          id="inputCard"
                          class="form-control"
                          placeholder="XXXX-XXXX-XXXX-XXXX"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                        />
                        <div class="valid-feedback">Looks good!</div>
                        <div class="invalid-feedback">
                          Must be like, "7777-7777-7777-7777"
                        </div>
                      </div>
                    </div>

                    <div class="col-12">
                      <label for="inputAddress" class="form-label">
                        Address
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="inputAddress"
                        placeholder="1234 Main St"
                      />
                    </div>
                    <div class="col-12">
                      <label for="inputAddress2" class="form-label">
                        Address 2
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="inputAddress2"
                        placeholder="Apartment, studio, or floor"
                      />
                    </div>
                    <div class="col-md-6">
                      <label for="inputCity" class="form-label">
                        City
                      </label>
                      <input type="text" class="form-control" id="inputCity" />
                    </div>
                    <div class="col-md-6">
                      <label for="inputCity" class="form-label">
                        State
                      </label>
                      <input type="text" class="form-control" id="inputCity" />
                    </div>
                    <div class="col-md-2">
                      <label for="inputZip" class="form-label">
                        Zip
                      </label>
                      <input type="text" class="form-control" id="inputZip" />
                    </div>
                    <div class="col-12"></div>
                    <div class="col-12">
                      <button type="submit" class="btn btn-success">
                        {" "}
                        <i class="bi-bag-check"></i> Order
                      </button>
                    </div>
                  </form>
                  <div class="card collapse" style={{ width: "18rem" }}>
                    <div class="card-body">
                      <h5 class="card-title">Order summary</h5>
                      <p class="card-text">Here is a summary of your order.</p>
                      <div>Order total to pay :{cartTotal}</div>
                    </div>
                    <ul class="list-group list-group-flush"></ul>
                    {/* <a href="" onclick="location.reload()" class="btn btn-secondary"> <i class="bi-arrow-left-circle"></i>
Return</a> */}
                  </div>
                  <footer class="bd-footer py-4 py-md-5 mt-5 bg-light">
                    <div class="container py-4 py-md-5 px-4 px-md-3">
                      <div class="row">
                        <div class="col-lg-12 mb-3">
                          <b>Nordland Forge</b>
                          <p>Thank you for supporting our business!</p>
                        </div>
                      </div>
                    </div>
                  </footer>
                </div>
                <div class="col-2"></div>
              </div>
            </div>
          }
        </div>
      )}
    </div>
  );
}
<script type="text/javascript" src="10_3_61_script.js"></script>;

export default Cart;
