import "./newsletter.css";
import React from "react";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NewsletterView = () => {
  return (
    <>
      <section className="newsletter-wrapper mt-5">
        <div className="container mt-5 mb-5">
          <div className="row">
            <div className="col-md-6 mt-5 mb-5 newsletter-content">
              <h1>Join Our News Letters</h1>
              <p>
                Leverage agile frameworks to provide a robust synopsis for high
                level overviews. Iterative approaches to corporate strategy
                foster
              </p>

              <div className="col-md-6 newsicon-wrapper">
                <span>Insert your mail here</span>

                <div className="icon-btn">
                <a href="#" className="icon-link">
                  <FontAwesomeIcon
                    icon={faCircleArrowRight} className="icon-fa"
                  />
                </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsletterView;
