import axios from "axios";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";

const RandomBeer = () => {


    const [beers, setBeers] = useState(null);

    const { beerId } = useParams();

    useEffect(() => {
        axios
        .get('https://ih-beers-api2.herokuapp.com/beers/random')
        .then((res) => {
          console.log(res.data)
          setBeers(res.data);
        })
        .catch(err => console.log(err))
      }, [beerId])


    return (
        <div>
        <Navbar />
            <div>
             {beers && 
             <>
                <img src={beers.image_url} alt='img' />
                <h1>{beers.name}</h1>
                <h2>{beers.attenuation_level}</h2>
                <h3>{beers.tagline}</h3>
                <h3>{beers.first_brewed}</h3>
                <p>{beers.description}</p>
                <h5>{beers.contributed_by}</h5>
             </>
             }
            </div>
        </div>
    );
};

export default RandomBeer;