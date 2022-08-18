import React from 'react';
import Conversion from './conversion';
import '../App.css'

/*const convert = () => {
  
  const [value, setValue] =useState("")
  const [result, setResult] =useState("")
  const [currentConversion, setCurrentConversion]= useState("1")
  
}
*/



function Layout(props) {
  return (
    <div className='layout'>  
            
      <Conversion/>
      
    </div> 
  )
}

export default Layout
