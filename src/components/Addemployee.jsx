import React from 'react'
import Navbar from './Navbar'

const Addemployee = () => {
  return (
    <div>
        <Navbar/>
        <h2
        style={{
          textAlign: "center",
          textDecoration: "underline",
          fontStyle: "italic",
        }}
      >
        Registration Form
      </h2>
      <br />
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row">
              <div className="container col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <form
                  class="row g-3 needs-validation"
                  novalidate
                  style={{
                    backgroundColor: "rgb(137, 219, 230)",
                    border: "solid 2px black",
                   
                    paddingTop: "20px",
                    paddingBottom: "40px",
                    paddingLeft: "20px",
                    paddingRight: "20px",
                  }}
                >
                  <div class="col-md-6">
                    <label for="validationCustom01" class="form-label">
                      First name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="validationCustomUsername"
                      aria-describedby="inputGroupPrepend"
                      required
                    />
                    <div class="valid-feedback">Looks good!</div>
                  </div>
                  <div class="col-md-6">
                    <label for="validationCustom02" class="form-label">
                      Last name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="validationCustomUsername"
                      aria-describedby="inputGroupPrepend"
                      required
                    />
                  </div>
                  <div class="col-md-12">
                    <label for="validationCustomUsername" class="form-label">
                      Designation
                    </label>
                    <div class="input-group has-validation">
                      <input
                        type="text"
                        class="form-control"
                        id="validationCustomUsername"
                        aria-describedby="inputGroupPrepend"
                        required
                      />
                      <div class="invalid-feedback">Please add designation</div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <label for="validationCustom03" class="form-label">
                      Location
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="validationCustom03"
                      required
                    />
                    <div class="invalid-feedback">
                      Please provide a valid city.
                    </div>
                  </div>
                  <div class="col-md-6">
                    <label for="validationCustom03" class="form-label">
                      Salary
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="validationCustom03"
                      required
                    />
                    <div class="invalid-feedback">
                      Please provide salary details
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="invalidCheck"
                        required
                      />
                      <label class="form-check-label" for="invalidCheck">
                        Agree to terms and conditions
                      </label>
                      <div class="invalid-feedback">
                        You must agree before submitting.
                      </div>
                    </div>
                  </div>
                  <div class="col-12">
                    <button class="btn btn-primary" type="submit">
                      Submit form
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Addemployee