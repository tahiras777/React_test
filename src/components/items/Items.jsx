import { useState, useEffect } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./items.css";
import { getRecords } from "../../api/index";

const Items = () => {
  const [resData, setresData] = useState([]);
  useEffect(() => {
    getRecords().then((res) => {
      setresData(res);
      console.log("new fetch", res);
    });
  }, []);

  return (
    <section className="items-wrapper">
      <div className="title mt-4">
        <h4>Top Items</h4>
      </div>
      <div className="description mt-4">
        <p>
          Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable.
        </p>
      </div>
      <div className="cards">
        <div className="container">
          <div className="row">
            <AliceCarousel
              responsive={{
                0: {
                  items: 1,
                },
                568: {
                  items: 2,
                },
                1024: {
                  items: 3,
                },
              }}
              mouseDragEnabled
            >
              {resData.map((item) => (
                <div className="col-md-3 mt-4">
                  <div className="card">
                    <div className="top-wrapper">
                      <span>SALE</span>
                      <img src={item.image} className="card-image" />
                    </div>
                    <div className="card-body">
                      <h4 className="card-title">{item.title}</h4>
                      
                      <p>
                        <span>${item.price}</span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </AliceCarousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Items;
