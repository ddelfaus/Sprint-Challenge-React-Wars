import React from 'react';

import { Table } from 'reactstrap';




export default function StarwarsCharacters (props){

console.log("hello", props)




return (
<>


<tbody>
        <tr key ={props.name}>
            
            <td>{props.name}</td>
            <td>{props.height}</td>
            <td>{props.mass}</td>
            <td>{props.hair_color}</td>
            <td>{props.skin_color}</td>
           
          </tr>
          </tbody>






{/* <h3>{props.name}</h3>
<h3>{props.height}</h3>
<h3>{props.mass}</h3>
<h3>{props.hair_color}</h3>
<h3>{props.skin_color}</h3>
 */}

</>


)
}