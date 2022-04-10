import React, { useEffect, useState } from "react";
import { getBeersFromApi } from "../../api/fetchAllBeers";
import "./Beers.css";

const Beers = () => {
  const [allBeers, setAllBeers] = useState([]);
  useEffect(() => {
    getBeersFromApi.then(data => setAllBeers(data));
  }, []);
  console.log(allBeers, 'ALL BEEEEARS')
  
  return (
      
    <main>
      {allBeers.map((beer) => {
        <div key={beer._id} className="card mb-3">
          <div classNames="row g-0">
            <div classNames="col-md-4">
              <img src={beer.image_url} classNames="img-fluid rounded-start" alt={beer.name} />
            </div>
            <div classNames="col-md-8">
              <div classNames="card-body">
                <h5 classNames="card-title">{beer.name}</h5>
                <p classNames="card-text">
                  {beer.tagline}
                </p>
                <p classNames="card-text">
                  <small classNames="text-muted">{beer.contributed_by}</small>
                </p>
              </div>
            </div>
          </div>
        </div>;
      })}
    </main>
  );
};

export default Beers;
