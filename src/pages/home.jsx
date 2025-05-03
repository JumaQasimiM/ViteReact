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
      <div className="container mt-5">
        {/* first section */}
        <div className="row align-items-center mt-3" >
          <div className="col-md-7 order-2 order-md-1" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="100">
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
            <button className="btn btn-outline-info">Learn more</button>
          </div>
          <div className="col-md-5 order-1 order-md-2">
            <img src={first} className=""  data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="100"/>
          </div>
        </div>
        {/* second section -- service*/}
        <div className="row service mt-4" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="100">
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

          <div className="col-12 col-md-3 card service-item " data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
            <img src={service1} className=""/>
            <div className="card-body">
            <h6 className="card-title text-center"> Flowershop's service</h6>
            <p className="card-text text-center">
              Lorem ipsum dolor, sit Lorem ipsum dolor, sit amet amet
              consectetur adipisicing elit.
            </p>
            {/* btn div */}
            <div className="d-flex gap-2 card-buttons">
            <a href="" className="btn btn-outline-primary ">read more</a>
            <a href="" className="btn btn-outline-secondary">shear  </a>
            </div>
            </div>
          </div>

          <div className="col-12 col-md-4 card service-item " data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
            <img src={service2} className=""/>
            <div className="card-body">
            <h6 className="card-title text-center"> Flowershop's service</h6>
            <p className="card-text text-center">
              Lorem ipsum dolor, sit Lorem ipsum dolor, sit amet amet
              consectetur adipisicing elit.
            </p>
            {/* btn div */}
            <div className="d-flex gap-2 card-buttons">
            <a href="" className="btn btn-outline-primary ">read more</a>
            <a href="" className="btn btn-outline-secondary">shear  </a>
            </div>
            </div>
          </div>
          <div className="col-12 col-md-3 card service-item " data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
            <img src={service3} className=""/>
            <div className="card-body">
            <h6 className="card-title text-center"> Flowershop's service</h6>
            <p className="card-text text-center">
              Lorem ipsum dolor, sit Lorem ipsum dolor, sit amet amet
              consectetur adipisicing elit.
            </p>
            {/* btn div */}
            <div className="d-flex gap-2 card-buttons">
            <a href="" className="btn btn-outline-primary ">read more</a>
            <a href="" className="btn btn-outline-secondary">shear  </a>
            </div>
            </div>
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

            <button className="btn btn-outline-success">LEARN MORE</button>
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

            <button className="btn btn-outline-info m-1">LEARN MORE</button>
            <button className="btn btn-outline-primary m-1">CONTCUT US</button>
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
