import React from 'react';
import Conversion from './conversion';
import '../App.css'







function Layout(props) {
  return (
    <div className='layout'>
      <input type="number" placeholder='Enter Pounds..' /><br />
      <Conversion name= {'Gram:'} cons= {'0'}/>
      <Conversion name= {'Kilogram:'} cons= {'0'} />
      <Conversion name= {'Ounce:'} cons= {'0'}/>
    </div>
  )
}

export default Layout
