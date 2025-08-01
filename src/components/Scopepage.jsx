import React from 'react'
import Scope from '../shared/components/Scope'
import HelmetComponent from './HelmetComponent'

function Scopepage() {
  return (
    <div>
      <HelmetComponent title={'Scope of Conference - International Conference on Internet of Things, Machine Learning, and Data Analytics'} canonical={'https://icitmlda.com/scope'} />
      <Scope />
    </div>
  )
}

export default Scopepage