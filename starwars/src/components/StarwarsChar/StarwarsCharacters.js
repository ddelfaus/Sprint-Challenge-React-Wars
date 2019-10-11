import React from 'react';
import StarwarsCharactersCard from './StarwarsCharactersCard'







export default function StarwarsCharacters (props){

console.log("hello", props)




return (
<>

<h3>{props.name}</h3>
<h3>{props.height}</h3>
<h3>{props.mass}</h3>
<h3>{props.hair_color}</h3>
<h3>{props.skin_color}</h3>

</>


)
}