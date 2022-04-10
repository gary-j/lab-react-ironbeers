import React from 'react'
// import { Link } from 'react-router-dom'

const HomePage = () => {
    console.log('COUCOU COUCOU')
  return (
    <div>
        <p>COUCOU COUCOU</p>
        <div class="card bg-dark text-white">
            <img src='../../../src/assets/beers.png' class="card-img" alt="ALL BEERS"/>
            <div class="card-img-overlay">
                <h3 class="card-title">ALL BEERS</h3>
                <p class="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias libero culpa pariatur ipsam laborum fuga voluptates quis possimus laudantium labore, nemo illo doloremque nisi excepturi totam vel quas molestiae natus. </p>
            </div>
        </div>
    </div>
  )
}

export default HomePage