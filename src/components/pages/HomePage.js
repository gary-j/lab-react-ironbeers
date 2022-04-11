import React from "react";
import { Link } from "react-router-dom";
import allBeers from "../../assets/beers.png";
import randomBeers from "../../assets/random-beer.png";
import newBeers from "../../assets/new-beer.png";
import "./HomePage.css";

const HomePage = () => {
  console.log("COUCOU COUCOU");
  return (
    <div>
      <div className="card bg-dark text-white allbeers">
        {/* <img src={allBeers} className="card-img" alt="ALL BEERS" /> */}
        <div className="card-img-overlay">
          <Link to="/beers">
            <h3 className="card-title btn btn-primary">ALL BEERS</h3>
          </Link>
          <p className="card-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
            libero culpa pariatur ipsam laborum fuga voluptates quis possimus
            laudantium labore, nemo illo doloremque nisi excepturi totam vel
            quas molestiae natus.{" "}
          </p>
        </div>
      </div>
      <div className="card bg-dark text-white randombeer">
        {/* <img src={randomBeers} className="card-img" alt="RANDOM BEERS" /> */}
        <div className="card-img-overlay">
          <Link to={`/random-beer`}>
            <h3 className="card-title btn btn-primary">RANDOM BEERS</h3>
          </Link>
          <p className="card-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
            libero culpa pariatur ipsam laborum fuga voluptates quis possimus
            laudantium labore, nemo illo doloremque nisi excepturi totam vel
            quas molestiae natus.{" "}
          </p>
        </div>
      </div>
      <div className="card bg-dark text-white newbeer">
        {/* <img src={newBeers} className="card-img" alt="NEW BEERS" /> */}
        <div className="card-img-overlay">
          <Link to="/new-beer">
            <h3 className="card-title btn btn-primary">NEW BEERS</h3>
          </Link>
          <p className="card-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
            libero culpa pariatur ipsam laborum fuga voluptates quis possimus
            laudantium labore, nemo illo doloremque nisi excepturi totam vel
            quas molestiae natus.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
