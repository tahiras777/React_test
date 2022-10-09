import React from "react";
import "./saller.css";

const SallerView = () => {
  return (
    <>
      <section className="saller-wrapper mt-5 mb-5">
        <div className="container mt-5 mb-5">
          <div className="row">
            <div className="col-md-4 mt-5 mb-5 saller-card "></div>
            <div className="col-md-8 mt-5 mb-5 saller-content">
              <h1>Good Saller</h1>
              <p>
                I am very happy with the services provided, it is very helpful,
                starting from the insight that the company gave from the start
                that I did not understand what it was so I got knowledge and
                made my website look better
              </p>
              <h4>Anna Saraspova</h4>
              <p><span>Your Beloved Buyer</span></p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default SallerView;
