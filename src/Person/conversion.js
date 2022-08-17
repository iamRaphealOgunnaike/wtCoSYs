import React from "react";
import '../App.css'

const Ip = (props) => {
    return (
      <div className="Ip">
        <h2>{props.name}</h2>        
        <p>:{props.cons}</p>
      </div>
    );
  }
  
  export default Ip;