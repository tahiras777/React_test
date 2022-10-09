import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './TopNavbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faPhone } from '@fortawesome/free-solid-svg-icons';



const TopNavbar = () => {
  return(
    <>
      
      <nav className="navbar navbar-expand-lg top-nav">
  <div className="container-fluid ms-2 me-2">
    <a className="navbar-brand" href="#">Tech Unicorn</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav ">
        
        <li className="nav-item">
        
          <a className="nav-link" href="#"><span className='me-2'><FontAwesomeIcon icon={faPhone} /></span>Call center</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"><span className='me-2'><FontAwesomeIcon icon={faTruck} /></span>Shipping & returns</a>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
      
    </>

  );
};

export default TopNavbar;