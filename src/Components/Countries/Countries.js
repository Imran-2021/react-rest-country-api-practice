import React from 'react';
import { Link } from 'react-router-dom';
import './Countries.css'
const Countries = (props) => {
    const {name,capital,region,population,flag} = props.country;
    return (
        <div style={{border:'1px solid  #282c34',padding:'2%',margin:'6%'}}>
           
            <img style={{width:'250px',height:'200px'}} src={flag} alt=""/>
            <h3 style={{textAlign:'center',borderBottom:'1px solid #282c34',paddingBottom:'2px'}}>{name}</h3>
            <h3>Capital : {capital}</h3>
            <h3>Region : {region}</h3>
            <h3>Population : {population}</h3>
            <h3 ><Link to={`/Country/${name}`}> <button  style={{padding:'2%',cursor:'pointer'}}>Learn More</button> </Link></h3>
        </div>
    );
};

export default Countries;