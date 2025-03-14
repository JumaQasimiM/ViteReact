import React from "react";
import nader from "../../assets/nader.jpg";
import background from "../../assets/background.webp";
const serviceData = [
  {
    title: "SOLAR PANEL INSTALIATION",
    description: "install the Solar Panels install the Solar Panels",
    image: nader,
  },
  {
    title: "MAINTENANCE INSTELLANCE",
    description: "install the Solar Panels install the Solar Panels",
    image: nader,
  },
  {
    title: "MAINTENANCE & REPAIR",
    description: "install the Solar Panels install the Solar Panels",
    image: nader,
  },
];

const Service = () => {
  return (
    <div className="" style={{ backgroundImage: `url(${background})`,backgroundSize:'cover' ,minHeight:'600px'}}>
      <section
        className="text-center col-md-12 p-3 w-50 border p-1"
        style={{margin:'0 auto',marginBottom:'-60'}}
        
      >
        <h2 className="m-1 p-1 bg-info">Our Service</h2>
        <div className="row mt-3">
          {serviceData.map((service, index) => (
            <div key={index} className="col-md-4">
              <img
                src={nader}
                alt={service.title}
                className="rounded-circle"
                width={100}
                height={100}
              />
              <h4>{service.title}</h4>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
        <button className="btn btn-info">betrag kostenlos</button>
      </section>
      {/* section about */}
    </div>
  );
};

export default Service;
