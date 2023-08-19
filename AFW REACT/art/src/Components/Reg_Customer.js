import React, { useReducer } from 'react'
import { useState } from 'react';


function Reg_Customer() {



  const init =
  {
    fname: "",
    lname: "",
    email: "",
    contactNumber: "",
    address: "",
    area: "",
    city: "",
    state: "",
    username: "",
    pwd: ""
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case 'update':
        return { ...state, [action.fld]: action.value }
      case 'reset':
        return init;
    }

  }

  const [info, dispatch] = useReducer(reducer, init);

  const sendData = (e) => {
    e.preventDefault();
    const reqOptions = {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(info)
    }
  }




  return (
    <div>
      <h2 className='header d-flex justify-content-center align-items-center'>Customer Registration Form</h2>
      <div className='container d-flex justify-content-center align-items-center' >

        <form className='col-md-6 p-4 rounded bg-light' >
          <div className="mb-3">
            <label className="form-label">First Name:</label>
            <input
              type="text"
              className="form-control"
              id="fname"
              value={info.firstName}
              onChange={(e) => dispatch({
                type: 'update', fld: 'fname', val: e.target.value
              })}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Last Name:</label>
            <input
              type="text"
              className="form-control"
              id="lname"
              value={info.lastName}
              onChange={(e) => dispatch({
                type: 'update', fld: 'lname', val: e.target.value
              })}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email:</label>
            <input
              type="email"
              id="email"
              className="form-control"
              value={info.email}
              onChange={(e) => dispatch({
                type: 'update', fld: 'email', val: e.target.value
              })}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Contact Number:</label>
            <input
              type="tel"
              className="form-control"
              id="contactNumber"
              value={info.contactNumber}
              onChange={(e) => dispatch({
                type: 'update', fld: 'contactNumber', val: e.target.value
              })}
            />
          </div>
          <div class="col-12">
            <label for="Address" class="form-label">Address</label>
            <input type="text" class="form-control" id="address" value={info.address}
              onChange={(e) => dispatch({
                type: 'update', fld: 'address', val: e.target.value
              })} />
          </div>
          <div class="col-12">
            <label for="Area" class="form-label">Area</label>
            <input type="text" class="form-control" id="area" value={info.area}
              onChange={(e) => dispatch({
                type: 'update', fld: 'area', val: e.target.value
              })} />
          </div>
          <div class="col-md-6">
            <label for="inputCity" class="form-label">City</label>
            <input type="text" class="form-control" id="city" value={info.city}
              onChange={(e) => dispatch({
                type: 'update', fld: 'city', val: e.target.value
              })} />
          </div>
          <div class="col-md-6">
            <label for="inputState" class="form-label">State</label>
            <select id="state" class="form-select" value={info.state}
              onChange={(e) => dispatch({
                type: 'update', fld: 'state', val: e.target.value
              })} >
              <option selected>Choose...</option>

            </select>
          </div>
          <br />
          <div className="mb-3">
            <label className="form-label"> User Name:</label>
            <input
              type="tel"
              className="form-control"
              id="username"
              value={info.userName}
              onChange={(e) => dispatch({
                type: 'update', fld: 'username', val: e.target.value
              })}
            />
          </div>
          <div className="mb-3">
            <label className="form-label"> Password:</label>
            <input
              type="password"
              id="password"
              className="form-control"
              value={info.password}
              onChange={(e) => dispatch({
                type: 'update', fld: 'password', val: e.target.value
              })}
            />
          </div>
          <button type="submit" className="btn btn-primary" onClick={(e) => { sendData(e) }}>
            Register
          </button>
          &nbsp;
          <button type="reset" className="btn btn-primary" onClick={(e) => { dispatch({ type: 'reset' }) }}>
            Reset
          </button>
        </form>
      </ div >
    </div >
  )
}

export default Reg_Customer;
