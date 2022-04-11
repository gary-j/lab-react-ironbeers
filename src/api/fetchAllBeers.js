import axios from 'axios';

const BASE_URL = 'https://ih-beers-api2.herokuapp.com/beers'

const getBeersFromApi = async ()=>{
    // Api renvoi un tableau d'objet [{}]
    const {data} = await axios.get(BASE_URL)
    return data
}

export {getBeersFromApi, BASE_URL};