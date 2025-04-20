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
        <div className="row align-items-center">
          <div className="col-md-7" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="100">
            <h1>
              Build Your Future <br />
              on the <span className="highlight">Fllower Gruop</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quod
              eligendi autem, cum, dolorum voluptatum quia quaerat commodi,
              similique asperiores quae sint eos? Eveniet eum tenetur,
              cupiditate adipisci facilis quasi.
            </p>
            <button className="learn-more">Learn more</button>
          </div>
          <div className="col-md-5">
            <img src={first} data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="100"/>
          </div>
        </div>
        {/* second section -- service*/}
        <div className="row service" data-aos="fade-down" data-aos-duration="1500" data-aos-delay="100">
          <div className="col-md-6">
            {" "}
            <h3>
              Advantages of <br />
              <span className="highlight"> Flower Shop </span>
            </h3>
            <p className="mt-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
              vel obcaecati eveniet dolorum, excepturi non fugiat, sapiente
              iure.
            </p>
          </div>
        </div>
        {/* service items */}
        <div className="row gap-3 mt-4 service-items">
          <div className="col-md-3 service-item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
            <img src={service1} />
            <h6> Flowershop's service</h6>
            <p>
              Lorem ipsum dolor, sit Lorem ipsum dolor, sit amet amet
              consectetur adipisicing elit.
            </p>
          </div>
          <div className="col-md-4 service-item" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="100">
            <img src={service2}/>
            <h6> Flowershop's service</h6>
            <p>
              Lorem ipsum dolor, sit Lorem ipsum dolor, sit amet amet
              consectetur adipisicing elit.
            </p>
          </div>
          <div className="col-md-3 service-item" data-aos="fade-up" data-aos-duration="2500" data-aos-delay="100">
            <img src={service3} />
            <h6> Flowershop's service</h6>
            <p>
              Lorem ipsum dolor, sit Lorem ipsum dolor, sit amet amet
              consectetur adipisicing elit.
            </p>
          </div>
        </div>
        {/* more section - Product*/}
        <div className="Product row mt-5">
          <div className="col-md-7">
            <img src={product1} data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="100"/>
          </div>
          <div className="col-md-5" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="100">
            <span>TAKE A LOOK</span>
            <h3 >Flower Shop</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam repellendus nam debitis asperiores velit laboriosam
              voluptas deserunt, molestiae hic cum, cumque, praesentium
            </p>

            <button className="btn-cutsom">LEARN MORE</button>
          </div>
        </div>
        {/* more section - Product - 2*/}
        <div className="Product2 row mt-5">
          <div className="col-md-5" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="100">
            <span>CONTUCT US</span>
            <h3>Flower Shop</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam repellendus nam debitis asperiores velit laboriosam
              voluptas deserunt, molestiae hic cum, cumque, praesentium
            </p>

            <button className="btn-contuctus">LEARN MORE</button>
            <button className="btn-contuctus">CONTCUT US</button>
          </div>
          <div className="col-md-7">
            <img src={service2} alt="" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="100"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
