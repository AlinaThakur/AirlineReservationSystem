import React from 'react'

function Flight() {
  const buttonHandler = (e) =>{
   e.preventDefault()
    alert("Your Data has been Submitted")
  }
  return (
    <div className='flight'>
    <form className="row g-3">
    <div className="col-md-4">
      <label htmlFor="validationDefault01" className="form-label">First name</label>
      <input type="text" className="form-control" id="validationDefault01" />
    </div>
    <div className="col-md-4">
      <label htmlFor="validationDefault02" className="form-label">Last name</label>
      <input type="text" className="form-control" id="validationDefault02" />
    </div>
    <div className="col-md-4">
      <label htmlFor="validationDefaultUsername" className="form-label">Contact</label>
      <div className="input-group">
        <span className="input-group-text" id="inputGroupPrepend2">Contact</span>
        <input type="text" className="form-control" id="validationDefaultUsername"  aria-describedby="inputGroupPrepend2" required/>
      </div>
    </div>
    <div className="col-md-6">
      <label htmlFor="validationDefault03" className="form-label">From</label>
      <select className="form-select" id="validationDefault04" required>
        <option  value="">Choose...</option>
        <option><li>Mumbai</li></option>
        <option><li>Delhi</li></option>
        <option><li>Bangalore</li></option>
        <option><li>...</li></option>
      </select>
    </div>
    <div className="col-md-3">
      <label htmlFor="validationDefault04" className="form-label">Select Flight</label>
      <select className="form-select" id="validationDefault04" required>
        <option  value="">Choose...</option>
        <option><li>Indigo</li></option>
        <option><li>Go Air</li></option>
        <option><li>SpiceJet</li></option>
        <option><li>...</li></option>
      </select>
    </div>
    <div className="col-md-3">
      <label htmlFor="validationDefault05" className="form-label">To</label>
      <select className="form-select" id="validationDefault04" required>
        <option  value="">Choose...</option>
        <option><li>Hyderabad</li></option>
        <option><li>Chennai</li></option>
        <option><li>Kolkata</li></option>
        <option><li>...</li></option>
      </select>
    </div>
    <div className="col-12">
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required/>
        <label className="form-check-label" htmlFor="invalidCheck2">
          Agree to terms and conditions
        </label>
      </div>
    </div>
    <div className="col-12">
      <button  onClick={ buttonHandler} className="btn btn-primary"  type="submit">Submit form</button>
    </div>
  </form>
  </div>
  )
}

export default Flight;