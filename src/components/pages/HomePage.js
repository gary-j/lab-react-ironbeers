import React from 'react'
import { Link } from 'react-router-dom'
import allBeers from '../../assets/beers.png'
import randomBeers from '../../assets/random-beer.png'
import newBeers from '../../assets/new-beer.png'
import './HomePage.css'


const HomePage = () => {
    console.log('COUCOU COUCOU')
  return (
    <div>
        <div className="card bg-dark text-white">
           <Link to='/beers'>
           <img src={allBeers} className="card-img" alt="ALL BEERS"/>
           </Link> 
            <div className="card-img-overlay">
                <h3 className="card-title btn btn-primary">ALL BEERS</h3>
                <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias libero culpa pariatur ipsam laborum fuga voluptates quis possimus laudantium labore, nemo illo doloremque nisi excepturi totam vel quas molestiae natus. </p>
            </div>
        </div>
        <div className="card bg-dark text-white">
           <Link to='/beers'>
           <img src={randomBeers} className="card-img" alt="RANDOM BEERS"/>
           </Link> 
            <div className="card-img-overlay">
                <h3 className="card-title btn btn-primary">RANDOM BEERS</h3>
                <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias libero culpa pariatur ipsam laborum fuga voluptates quis possimus laudantium labore, nemo illo doloremque nisi excepturi totam vel quas molestiae natus. </p>
            </div>
        </div>
        <div className="card bg-dark text-white">
           <Link to='/beers'>
           <img src={newBeers} className="card-img" alt="NEW BEERS"/>
           </Link> 
            <div className="card-img-overlay">
                <h3 className="card-title btn btn-primary">NEW BEERS</h3>
                <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias libero culpa pariatur ipsam laborum fuga voluptates quis possimus laudantium labore, nemo illo doloremque nisi excepturi totam vel quas molestiae natus. </p>
            </div>
        </div>
    </div>
  )
}

export default HomePage