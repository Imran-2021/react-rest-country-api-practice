import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CountryDetail = () => {
    const {countryDetail}=useParams([]);
    const [country,setcountry]=useState([0])
    useEffect(()=>{
        const url =`https://restcountries.eu/rest/v2/name/${countryDetail}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setcountry(data[0]))
    },[])
    const {name,capital,flag,population,nativeName,subregion,region,area}=country
    
    return (
        <div style={{marginLeft:'10%'}}>
            <h2 style={{textAlign:'center',padding:'5%'}}>Country :  {countryDetail} </h2> 
            <img style={{width:'250px'}} src={flag} alt=""/>
            <h2> <small> Here the details of</small> {name} </h2>
            <h3>Capital : {capital}</h3>
            <h3>Region : {region}</h3>
            <h3>Subregion : {subregion}</h3>
            <h3>Population : {population}</h3>
            <h3>Aria : {area}</h3>
            <h3>NativeName : {nativeName}</h3>       
        </div>
    );
};

export default CountryDetail;