import React from 'react'
import Headrer from './components/Headrer'
import Hero from './components/Hero'
import Products from './components/Products'
import './index.css'

const App = ({iteam}) => {
  console.log(iteam);
  

  return (
    <div >
    <Headrer newLogo="Fake Store"/>
    <Hero/> <br/>
    <Products/>

    </div>
  )
}

export default App