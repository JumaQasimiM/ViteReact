import background from "../assets/background.webp";
import Button from "../components/button";
const Home = () => {
  return (
    <>
      <div className="row border">
        <div className="col-md-4">
          <h1>Laptop HP</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            incidunt, illo nesciunt dele incidunt, illo nesciunt dele incidunt,
            illo nesciunt dele
          </p>
          <Button
            className="bg-info border-0 rounded p-2 font-weight-bold"
            onClick={() => {
              alert("Product added!");
            }}
            text={"BUY NOW"}
          />
          <h2>Pr. 349$</h2>
          <img src={background} width={120} />
        </div>
        <div className="col-md-4">
          <h1>Laptop HP</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            incidunt, illo nesciunt dele incidunt, illo nesciunt dele incidunt,
            illo nesciunt dele
          </p>
          <Button
            className="bg-info border-0 rounded p-2 font-weight-bold"
            onClick={() => {
              alert("Product added!");
            }}
            text={"BUY NOW"}
          />
          <h2>Pr. 349$</h2>
          <img src={background} width={120} />
        </div>
        <div className="col-md-4">
          <h1>Laptop HP</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            incidunt, illo nesciunt dele incidunt, illo nesciunt dele incidunt,
            illo nesciunt dele
          </p>
          <Button
            className="bg-info border-0 rounded p-2 font-weight-bold"
            onClick={() => {
              alert("Product added!");
            }}
            text={"BUY NOW"}
          />
          <h2>Pr. 349$</h2>
          <img src={background} width={120} />
        </div>
      </div>
      {/* service */}
      {/* Product */}
      {/* boss p´foto and cv */}
      {/* contuct us */}
      {/* footer */}
    </>
  );
};

export default Home;
