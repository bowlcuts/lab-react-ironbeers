import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";


const NewBeer = () => {

    const navigate = useNavigate();

    const [state, setState] = useState({
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level: 0,
        contributed_by: ''
    });

    const updateState = e => setState({
        ...state,
        [e.target.name]: e.target.value
    });

    const formSubmitHandler = e => {
        e.preventDefault();
        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', {
            name: state.name,
            tagline: state.tagline,
            description: state.description,
            first_brewed: state.first_brewed,
            brewers_tips: state.brewers_tips,
            attenuation_level: state.attenuation_level,
            contributed_by: state.contributed_by
            
        })
        .then(axiosResponse => {
            console.log(axiosResponse.data)
            navigate('/beers')
        })
        .catch(err => console.log(err))
    };

    return (
        <div>
        <Navbar />
            <h1>hi</h1>
            <form onSubmit={formSubmitHandler}>
                <label>Name</label>
                <input onChange={updateState} value={state.name} name="name"/>
                <label>Tagline</label>
                <input onChange={updateState} value={state.tagline} name="tagline"/>
                <label>Description</label>
                <textarea onChange={updateState} value={state.description} name="description" />
                
                <label>First brewed</label>
                <input onChange={updateState} value={state.first_brewed} name="first_brewed"/>
                <label>Brewers tips</label>
                <input onChange={updateState} value={state.brewers_tips} name="brewers_tips"/>
                <label>Attenuation level</label>
                <input onChange={updateState} value={state.attenuation_level} name="attenuation_level"/>
                <label>Contributed by</label>
                <input onChange={updateState} value={state.contributed_by} name="contributed_by"/>
                <button>Create beer</button>
            </form>
        </div>
    );
};

export default NewBeer;