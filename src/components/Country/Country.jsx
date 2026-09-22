import { useState } from 'react';
import './Country.css';

const Country = ({country, handlevisitedCountries,handleVisitedFlags}) => {
    // console.log(country.area.area)
    const [Visited,setVisited]=useState(false);

    const handleVisited=()=>{
        // basic system
    //   if(Visited){
    //     setVisited(false);
    //   }else{
    //     setVisited(true);
    //   }

    // setVisited(Visited ? false:true)

    setVisited(!Visited)
    handlevisitedCountries(country);
    } 

    return (
        //  <div className={`country ${Visited ? 'country-visited' : 'country-not-visited'}`}></div>
        <div className={`country ${Visited && 'country-visited'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name: {country.name.common}</h3>
            <p>Population: {country.population.population}</p>
            <p>Area: {country.area.area} {country.area.area>30000 ? "Big Country" : "Small country"} </p>
            <button onClick={handleVisited}>
                {Visited ? "Visited" : "Not Visited"}
                </button>
                <button onClick={()=>{handleVisitedFlags(country.flags.flags.png) }}>Add Visited Flag</button>
        </div>
        
    );
};

export default Country;