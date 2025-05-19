import background from "../assets/background.webp";
import Button from "../components/button";
import first_home from "../assets/first_home.png";
import first from "../assets/first.png";
import service1 from "../assets/service-1.png";
import service2 from "../assets/service-2.png";
import service3 from "../assets/service-3.png";
import product1 from "../assets/product1.png";

import "./home.css";
const Home = () => {
  return (
    <>
      <div className="container">
        {/* first section */}
        <div
          style={{
            backgroundImage: `url(${product1})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "400px auto",
            backgroundPosition: "bottom right",
            // backgroundAttachment: "fixed",
            padding: "50px 0px",
            minHeight: "75vh",
          }}
          className=""
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="100"
        >
          <h2 className="">
            Send Love,
            <span className="highlight">Send Flowers</span>
            <br />
            <span className="">
              Fresh Flowers Delivered with
              <span className="highlight">Love</span>
            </span>
          </h2><br />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
            blanditiis, aliquid officiis maxime incidunt repellat, corrupti
            accusamus voluptatem ipsum quisquam voluptatibus possimus beatae
            quaerat tempora! Repudiandae dolorum a dolorem quas?
          </p>
          <button className="btn btn-outline-info mt-2">Shop Now</button>
        </div>

        {/* About us */}
        {/* more section - Product*/}

        <div id="Product"
          style={{
            backgroundImage: `url(${product1})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "300px auto",
            backgroundPosition: "bottom right",
            backgroundAttachment: "fixed",
            backgroundColor: "#29335c",
            // backgroundColor:'#f9f9f9',
            padding: "40px",
            color: "#fff",
          }}
          className="Product mt-5"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="100"
        >
          <span>TAKE A LOOK</span>
          <h3>About us</h3>
          <p data-aos="fade-up" data-aos-duration="1500" data-aos-delay="100">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            repellendus nam debitis asperiores velit laboriosam voluptas
            deserunt, molestiae hic cum, cumque, praesentium Lorem, ipsum dolor
            sit amet consectetur adipisicing elit. Quibusdam repellendus nam
            debitis asperiores velit laboriosam voluptas deserunt, molestiae hic
            cum, cumque, praesentium Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Quibusdam repellendus nam debitis asperiores velit
            laboriosam voluptas deserunt, molestiae hic cum, cumque, praesentium
          </p>

          <button className="btn btn-outline-info ">LEARN MORE</button>
        </div>

        {/* service items */}
        <div
          className="row gap-3 mt-4 service-items"
          style={{
            backgroundImage: `url(${product1})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "300px auto",
            backgroundPosition: "bottom left",
            backgroundAttachment: "fixed",
            // backgroundColor:'#29335c',
            backgroundColor: "#5767aa",
            padding: "50px",
            color: "#fff",
          }}
        >
          <div
            className="col-12 col-md-4 card service-item "
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            <img src={service1} className="" />
            <div className="card-body">
              <h6 className="card-title text-center"> Flowershop's service</h6>
              <p className="card-text text-center">
                Lorem ipsum dolor, sit Lorem ipsum dolor, sit amet amet
                consectetur adipisicing elit.
              </p>
              {/* btn div */}
              <div className="d-flex gap-2 card-buttons">
                <a href="" className="btn btn-outline-primary ">
                  read more
                </a>
              </div>
            </div>
          </div>

          <div
            className="col-12 col-md-3 card service-item "
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            <img src={service2} className="" />
            <div className="card-body">
              <h6 className="card-title text-center"> Flowershop's service</h6>
              <p className="card-text text-center">
                Lorem ipsum dolor, sit Lorem ipsum dolor, sit amet amet
                consectetur adipisicing elit.
              </p>
              {/* btn div */}
              <div className="d-flex gap-2 card-buttons">
                <a href="" className="btn btn-outline-primary ">
                  read more
                </a>
              </div>
            </div>
          </div>
          <div
            className="col-12 col-md-4 card service-item "
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            <img src={service3} className="" />
            <div className="card-body">
              <h6 className="card-title text-center"> Flowershop's service</h6>
              <p className="card-text text-center">
                Lorem ipsum dolor, sit Lorem ipsum dolor, sit amet amet
                consectetur adipisicing elit.
              </p>
              {/* btn div */}
              <div className="d-flex gap-2 card-buttons">
                <a href="" className="btn btn-outline-primary ">
                  read more
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* more section - Product - 2*/}
        <div className="Product2 row mt-5">
          <div
            className="col-md-5"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="100"
          >
            <span>CONTUCT US</span>
            <h3>Flower Shop</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam repellendus nam debitis asperiores velit laboriosam
              voluptas deserunt, molestiae hic cum, cumque, praesentium
            </p>

            <button className="btn btn-outline-info m-3">LEARN MORE</button>
            <button className="btn btn-outline-primary m-3">CONTCUT US</button>
          </div>
          <div className="col-md-7">
            <img
              src={service2}
              alt=""
              height={400}
              data-aos="zoom-in"
              data-aos-duration="1500"
              data-aos-delay="100"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
