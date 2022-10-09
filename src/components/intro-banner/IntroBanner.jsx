import "./intro-banner.css";

const IntroBanner = () => {
  return (
    <section className="main-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-md-6"></div>
          <div className="col-md-6 mt-5 mb-5">
            <div className="banner-content d-flex justify-center">
              <div className="title mt-2">
                <h1>your premium sound, unplugged!</h1>
              </div>
              <div className="descrption mt-2">
                <p>
                  Lorem ipsum dolar sit amet, consectuter adipicing elite, sed
                  do eiusmod tempor incididunt ut labour et dolore manga aliqua.
                </p>
              </div>
              <div className="banner-button mt-2">
                <button className="btn btn-sm">Find out more</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default IntroBanner;
