import React from "react";
import '../App.css'

function Ip() {

    const [convKg, setConvKg] = React.useState('');
    const [convGram, setConvGram] = React.useState('');
    const [convOunce, setConvOunce] = React.useState('');
    
    
   
    const onResultChange =(event)=>{
     if(event.target.value){
      setConvKg(parseFloat(event.target.value))
      setConvGram(parseFloat(event.target.value)/1000)
      setConvOunce(parseFloat(event.target.value)/76.54)
      }
      else {
        setConvKg('');
        setConvGram('');
        setConvOunce('');
      
      }    
     
      }
      

    return (
      <div className="Ip">
        <input type="number" placeholder='Enter Pounds..' id='ibsInput' onChange ={onResultChange} /><br />
        <div className="Kg">
          <h2>KG</h2>        
          <p>:{convKg}</p>
        </div>

        <div className="Gram">
            <h2>Gram</h2>        
            <p>:{convGram}</p>
        </div>

        <div className="Ounce">
            <h2>Ounce</h2>        
            <p>:{convOunce}</p>
        </div>
        
      </div>
    );
  }
  
  export default Ip;