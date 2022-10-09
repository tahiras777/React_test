import React from "react";
import "./achivement.css";
import company1 from "../../assets/icons/company-1.svg";
import company2 from "../../assets/icons/company-2.svg";
import company3 from "../../assets/icons/company-3.svg";
import company4 from "../../assets/icons/company-4.svg";
import company5 from "../../assets/icons/company-5.svg";


 const AchivementView = () => {
  return (
    <>
      <section className=" achivement-title mt-5 mb-5">
      <div className="container mt-5 mb-5">
      <div className="title-achivement">
        <h4 className="text-center">Our Achivement</h4>
      </div>

      <div className="menu mt-4">
        <ul className="nav justify-content-around d-flex flex-wrap align-items-center">
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#">
            <img src={company1} />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <img src={company2} />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
            <img src={company3}  />
              
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
            <img src={company4} />
              
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#">
            <img src={company5} className="icons-achivement" />
              
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#">
            <img src={company1} />
              
            </a>
          </li>
        </ul>
      </div>
      </div>
      
      </section>
    </>
  );
 };

 export default AchivementView;