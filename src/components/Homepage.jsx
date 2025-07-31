import React from 'react'
import Home from '../shared/components/Home'
import HelmetComponent from './HelmetComponent'

function Homepage() {
  return (
    <div>
      <HelmetComponent title={'Home - International Conference on Internet of Things, Machine Learning, and Data Analytics'} canonical={'https://icitmlda.com'} />
      <Home />
    </div>
  )
}

export default Homepage