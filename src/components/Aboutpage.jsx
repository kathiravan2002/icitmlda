import React from 'react'
import About from '../shared/components/About'
import HelmetComponent from './HelmetComponent'

function Aboutpage() {
  return (
    <div>
      <HelmetComponent title={'About us - International Conference on Internet of Things, Machine Learning, and Data Analytics'} canonical={'https://icitmlda.com/about'}/>
      <About/>
      </div>
  )
}

export default Aboutpage