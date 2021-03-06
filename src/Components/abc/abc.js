import React, { useEffect, useState } from 'react';
import Countries from '../Countries/Countries';

const Abc = () => {
    const [country, setCountry]=useState([]);

    useEffect(()=>{
      fetch('https://restcountries.eu/rest/v2/all')
      .then(res=> res.json())
      .then(data =>setCountry(data))
  },[])
    return (
        <div>
            <h3 style={{textAlign:'center'}}>All Countries : {country.length}</h3>
            <h3 style={{textAlign:'center'}}>select the country you need to know.</h3>
      
             <div  className="imran">
            {
            country.map(country => <Countries country={country}/>)
            }
        </div>
        </div>
    );
};

export default Abc;