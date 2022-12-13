import React from "react";
import { Link } from "react-router-dom";
import beersImg from "../assets/beers.png";
import newBeerImg from "../assets/new-beer.png";
import randomBeerImg from "../assets/random-beer.png";

const HomePage = () => {
    return (
        <>
            <div>
                <Link to={'/beers'}>
                    <div>
                        <img src={beersImg} alt="beersImg" />
                        <h2>All Beers</h2>
                    </div>
                </Link>
                <p>test testestes tsetsest ts est etsts ets tststet stest </p>
            </div>
            <div>
                <Link to={'/randombeer'}>
                    <div>
                        <img src={randomBeerImg} alt="random beer" />
                        <h2>Random Beer</h2>                    </div>
                </Link>
                <p>test testestes tsetsest ts est etsts ets tststet stest </p>
            </div>
            <div>
                <Link to={'newbeer'}>
                    <div>
                        <img src={newBeerImg} alt="new beers" />
                        <h2>New Beer</h2>
                    </div>
                </Link>
                <p>test testestes tsetsest ts est etsts ets tststet stest </p>
            </div>
        </>
    )
}

export default HomePage;