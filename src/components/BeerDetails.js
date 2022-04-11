import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../api/fetchAllBeers";
import './BeerDetails.css'

const BeerDetails = () => {
  console.log(useParams(), "PARAMS");
  const { beerId } = useParams();

  const [beer, setBeer] = useState({});

  useEffect(() => {
    axios.get(`${BASE_URL}/${beerId}`).then((response) => {
      console.log(response.data, "REPONNNNSE");
      setBeer(response.data);
    });
  }, []);

  return (
    <>
      <div>BeerDetails</div>
      {
        
      <div className="card beerDetails">
        <img src={beer.image_url} className="card-img-top" alt={beer.name} />
        <div className="card-body">
          <h2 className="card-title">{beer.name}</h2>
          <h3 className="card-title">{beer.tagline}</h3>
          <p>First Brewed : {beer.first_brewed}</p>
          <p className="card-text">
          <span>Attenuation Level: <em>{beer.attenuation_level}</em></span><br/>
            {beer.description}
          </p>
          <p className="card-text">
            <small className="text-muted">{beer.contributed_by}</small>
          </p>
        </div>
      </div>
      }
    </>
  );
};

export default BeerDetails;
