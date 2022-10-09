import "./footer.css";
import React from "react";


const FooterView = () => {
  return (
    <>
      <section className="footer-wrapper mt-5">
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-4 mt-5 mb-5 footer-card "></div>
            <div className="col-md-4 mt-5 mb-5 footer-content">
              <h1>Dealerz.</h1>
              <p> Privacy Policy</p>
              <p><span>Terms and Condition</span></p>
              <p className="copyright">@2020 TanahAir Studio. All rights reserved.</p>
            </div>
            <div className="col-md-4 mt-5 mb-5 footer-right ">
            <div>
            <span className="footer-icon">Yt</span>
            </div>
            <div> 
            <span className="footer-icon">Fb</span>
            </div>
            <div>
            <span className="footer-icon">Tw</span>

            </div>
            <div>
            <span className="footer-icon">Ig</span>
            </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default FooterView;