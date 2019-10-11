import React from 'react';
import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";
import StarwarsCharacters from "./components/StarwarsChar/StarwarsCharacters"

import { Table } from 'reactstrap';
import styled from "styled-components";

const ContentWrap = styled.section`
color: #0E0E52;
margin-left:31%;
margin-top: 2%;
font-weight: bolder;
font-size: 1.5rem;
`;
const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  // https://swapi.co/api/people/
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [characterData, setCharacterData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/`)
      .then(response => {
        console.log("people", response.data.results);
        setCharacterData(response.data.results);
      })
      .catch(error => {
        console.log("The data was not returned", error);
      });
  }, []);


  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <h2>Characters</h2>
      <Table responsive>
      <ContentWrap>
    <thead>
      <tr>
        <th>Name</th>
        <th>Height</th>
        <th>Mass</th>
        <th>Hair Color</th>
        <th>Skin Color</th>
       
      </tr>
    </thead>
  

 
      {characterData.map(data => {
        return (
          <StarwarsCharacters  key ={data.name} name = {data.name} height = {data.height} mass = {data.mass} hair_color ={data.hair_color} skin_color ={data.skin_color}/>

        );
      })}
     </ContentWrap>
  </Table>
 
    </div>
  );
}

export default App;
