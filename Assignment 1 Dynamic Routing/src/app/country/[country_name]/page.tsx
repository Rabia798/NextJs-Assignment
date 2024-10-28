import React from "react";

import Navbar from "@/app/component/Navbar"

function CountryName({params}:string){
  const Countries: {
    country_name: string;
    population: number;
    capitalcity: string;
  } []=[
  
    {country_name: "Pakistan",
    capitalcity: "Islamabad",
    population: 251_269_164},
    
    {country_name: "Russia",
    capitalcity: "Moscow",
    population: 144_820_423},
    
    {country_name: "Sweden",
    capitalcity: "Stockholm",
    population: 10_606_999},
    
    {country_name: "China",
    capitalcity: "Bejing",
    population: 1_419_321_278},
    
    {country_name: "Japan",
    capitalcity: "Tokyo",
    population: 123_753_041},
    
    {country_name: "South_Korea",
    capitalcity: "Seoul",
    population: 51_717_590}
    
  ]
  
  
  function FindCountry(country_url:string){
  return Countries.find(country=>country.country_name.toLowerCase() == country_url.toLowerCase())
     }
    let result=FindCountry(params.country_name)
    if (result) return(
    <>
        <h1 className="text-teal-800 text-center text-8xl font-bold my-6" style={{ fontFamily: "fantasy" }}> 
          Countries Around the World
        </h1>

        <Navbar/>

        <h2 className="text-orange-800 text-center text-3xl font-bold my-6 italic" style={{ fontFamily: "Callibri" }}>
          Country Name: {params.country_name}
        </h2>

        <h3 className="text-blue-950 text-left text-2xl font-bold mx-10 my-6 " style={{ fontFamily: "Callibri" }}>
          Country Details 
        </h3>

        <ul className="mx-10 "> 
          Country name: {result.country_name}
        </ul>
        <ul className="mx-10">
          Population: {result.population}
        </ul>
        <ul className="mx-10">
          Capital City: {result.capitalcity}
        </ul>
    </>
    );
  }
export default CountryName
