import React from 'react';
import "./about.css";


const AboutView = () => {
  return (
    <section className="main-wrapper-about">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mb-5 ">
              <div className="col-md-6 mt-5 About-image"></div>
          </div>
          <div className="col-md-6 mt-5 mb-5">
            <div className="about-content mt-5">
              <div className="title mt-2">
                <h1>Story About<br/> Our Brand</h1>
              </div>
              <div className="descrption mt-2">
                <p>
                  Lorem ipsum dolar sit amet, consectuter adipicing elite, sed
                  do eiusmod tempor incididunt ut labour et dolore manga aliqua.
                  Lorem ipsum dolar sit amet, consectuter adipicing elite, sed
                  do eiusmod tempor incididunt ut labour et dolore manga aliqua.
                  Lorem ipsum dolar sit amet, consectuter adipicing elite, sed
                  do eiusmod tempor incididunt ut labour et dolore manga aliqua.
                </p>
              </div>
              <div className="About-button mt-2">
                <button className="btn btn-sm">Read full story</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutView;