import React, { useEffect, useState } from "react";
import { getBeersFromApi } from "../../api/fetchAllBeers";
import "./Beers.css";

const Beers = () => {
  const [allBeers, setAllBeers] = useState([]);
  useEffect(() => {
    getBeersFromApi().then((data) => setAllBeers(data));
  }, [allBeers]);
  console.log(allBeers, "ALL BEEEEARS");

  return (
    <main>
      <div className="container">
        <div class="row">
          {allBeers.map((beer) => {
            return (
              <div key={beer._id} className="card col-6 ">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={beer.image_url}
                      className="img-fluid rounded-start"
                      alt={beer.name}
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{beer.name}</h5>
                      <p className="card-text">{beer.tagline}</p>
                      <p className="card-text">
                        <small className="text-muted">
                          {beer.contributed_by}
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Beers;
