import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

import { useState, useEffect } from 'react';
import axios from 'axios';

const ListBeers = () => {

    const [beers, setBeers] = useState([]);

    // const addNewBeer = (newBeer) => {
    //   const updatedBeersList = [...beers, newBeer];

    //   setBeers(updatedBeersList);
    // };

    useEffect(() => {
      axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((res) => {
        console.log(res.data)
        setBeers(res.data);
      })
      .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <Navbar />
            <div>
                {beers.map(singleBeer => {

                    return (
                    
                    <div>
                    <img src={singleBeer.image_url} alt="img" />
                    <h1>{singleBeer.name}</h1>
                    <h3>{singleBeer.tagline}</h3>
                    <h5>{singleBeer.contributed_by}</h5>
                    <Link to={`/beers/${singleBeer._id}`}>Details</Link>
                    </div>
                    
                    )
                })}
                
            </div>
        </div>
    );
};

export default ListBeers;