import React from "react";
import "./collection.css";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CollectionView = () => {
  return (
    <section className="collection mt-5">
      <div className="title">
        <h4 className="text-center">Our Premium Collection</h4>
      </div>

      <div className="menu mt-4">
        <ul className="nav justify-content-around d-flex flex-wrap">
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#">
              All products
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Coats & Jackets
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Dressed
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              Playsuit
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#">
              Shorts
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#">
              Skirt
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#">
              T-shirt
            </a>
          </li>
        </ul>
      </div>

      <div className="cards">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mt-4">
              <div className="card">
                <div className="top-wrapper">

                </div>
                <div className="card-body">
                  <p className="mb-0">Card title</p>
                  <h2 className="card-title">Tropical Suit</h2>
                  <a href="#" className="arrow-btn">
                  <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-4">
              <div className="card">
                <div className="top-wrapper">

                </div>
                <div className="card-body">
                  <p className="mb-0">Card title</p>
                  <h2 className="card-title">Tropical Suit</h2>
                  <a href="#" className="arrow-btn">
                  <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-4">
              <div className="card">
                <div className="top-wrapper">

                </div>
                <div className="card-body">
                  <p className="mb-0">Card title</p>
                  <h2 className="card-title">Tropical Suit</h2>
                  <a href="#" className="arrow-btn">
                  <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-4">
              <div className="card">
                <div className="top-wrapper">

                </div>
                <div className="card-body">
                  <p className="mb-0">Card title</p>
                  <h2 className="card-title">Tropical Suit</h2>
                  <a href="#" className="arrow-btn">
                  <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-4">
              <div className="card">
                <div className="top-wrapper">

                </div>
                <div className="card-body">
                  <p className="mb-0">Card title</p>
                  <h2 className="card-title">Tropical Suit</h2>
                  <a href="#" className="arrow-btn">
                  <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-4">
              <div className="card">
                <div className="top-wrapper">

                </div>
                <div className="card-body">
                  <p className="mb-0">Card title</p>
                  <h2 className="card-title">Tropical Suit</h2>
                  <a href="#" className="arrow-btn">
                  <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
                  </a>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>

      <div className="collection-button">
        <button className="btn btn-sm">Find out more</button>
      </div>
    </section>
  );
};

export default CollectionView;
