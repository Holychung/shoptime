import React from 'react'

import './Manuel.css'

class Manuel extends React.Component{
  render(){
    return(
      <div className="order-item-2 d-flex pt-3">
        <div className="text-left ml-2 col-2">
          <input className='ian' id='name' type="checkbox"  />
          <label for="name" className="ml-2">Manuel Stephens</label>
        </div>
        <div className="product col-2 pl-0 ml-0">
          <div className="col">
            <div>Donec facili.</div>
            <div className="d-inline-block w-50" style={{ color: '#9B9B9B' }}>$1,400</div>
            <div className="d-inline-block w-50 text-right">1</div>        
          </div>
        </div>
        <span>$1,400</span>
        <span className="col-2">2018/6/8 13:39</span>
        <span className="col-2">2018/6/8 20:23</span>
        <span className="col-2">531 Orval Mission<br />Suite 134</span>
        <span className="col-1">
          <div className="dropdown">
            <a className="btn btn-paid dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              PAID
            </a>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <a className="dropdown-item" href="#">Paid</a>
              <a className="dropdown-item" href="#">Unpaid</a>
              <a className="dropdown-item" href="#">Shipping</a>
              <a className="dropdown-item" href="#">Done</a>
            </div>
          </div>
        </span>
      </div>
    )
  }
}

export default Manuel
