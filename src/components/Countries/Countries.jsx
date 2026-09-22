import { use, useState } from 'react';
import Country from '../Country/Country';
import "./Countries.css"


const Countries = ({countriesPromise}) => {
    const [visitedCountries,setVisitedCountries]=useState([])
    const [visitedFlags,setVisitedFlags]=useState([])

    const handlevisitedCountries = (country)=>{
        const newVisitedCountries = [...visitedCountries,country]
        setVisitedCountries(newVisitedCountries);
    }

  
    const handleVisitedFlags=(flag)=>{
        const newVisitedFlags=[...visitedFlags,flag];
        setVisitedFlags(newVisitedFlags);
    }


    const countriesData=use(countriesPromise);
    const countries=countriesData.countries;
    return (
        <div>
           <h1>In the countries : {countries.length}</h1>
           <h3>Total Country Visited: {visitedCountries.length} </h3>
           <h3>Total Flags Visited: {visitedFlags.length}</h3>
           <ol>
       
          <div className='visited-flags-container'>
            {
                visitedFlags.map((flag,index) => <img key={index} src={flag}></img>)
            }
          </div>


            {
                visitedCountries.map(country => <li key={country.cca3.cca3}>{country.name.common}</li>)
            }
           </ol>
          <div className='countries'>
             {
            countries.map(country => <Country key={country.cca3.cca3} country={country} handlevisitedCountries={handlevisitedCountries} handleVisitedFlags={handleVisitedFlags}></Country>)
           }
          </div>

        </div>
    );
};

export default Countries;