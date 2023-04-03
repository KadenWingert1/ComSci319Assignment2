import React from "react";

function Cart({ isCartVisible }) {
  return (
<>
{isCartVisible && (
    <div className="cart-section fixed">
      {
        /* Cart content here */
        <div class="container">
          <div class="row">
            <div class="col-2"></div>
            <div class="col-8">
              <h1>View Your Cart</h1>
              <div id="liveAlertPlaceholder"></div>

              <form class="row g-3" id="checkout-form">
                {/* <!-- Full Name --> */}
                <div class="col-md-6">
                  <label for="inputName" class="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputName"
                  />
                  <div class="valid-feedback">Looks good!</div>
                  <div class="invalid-feedback">
                    Must be like, "John Doe"
                  </div>
                </div>

                {/* <-- Email --> */}
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

                {/* <!-- Credit Card --> */}
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
                  <input
                    type="text"
                    class="form-control"
                    id="inputCity"
                  />
                </div>
                <div class="col-md-4">
                  <label for="inputState" class="form-label" />
                  State
                  <select id="inputState" class="form-select">
                    <option selected>Choose...</option>
                  </select>
                </div>
                <div class="col-md-2">
                  <label for="inputZip" class="form-label">
                    Zip
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputZip"
                  />
                </div>
                <div class="col-12">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="gridCheck"
                    />
                    <label class="form-check-label" for="gridCheck">
                      Check Out
                    </label>
                  </div>
                </div>
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
                  <p class="card-text">
                    Here is a summary of your order.
                  </p>
                </div>
                <ul class="list-group list-group-flush"></ul>
                {/* <a href="" onclick="location.reload()" class="btn btn-secondary"> <i class="bi-arrow-left-circle"></i>
Return</a> */}
              </div>
              <footer class="bd-footer py-4 py-md-5 mt-5 bg-light">
                <div class="container py-4 py-md-5 px-4 px-md-3">
                  <div class="row">
                    <div class="col-lg-12 mb-3"></div>
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
  </>
  )};

  export default Cart;
