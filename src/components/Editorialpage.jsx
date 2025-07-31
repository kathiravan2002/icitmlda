import React from 'react'
import Editorial from '../shared/components/Editorial'
import HelmetComponent from './HelmetComponent'

function Editorialpage() {
  return (
    <div>
      <HelmetComponent title={'Editorial Board - International Conference on Internet of Things, Machine Learning, and Data Analytics'} canonical={'https://icitmlda.com/editorial-board'} />
      <Editorial />
    </div>
  )
}

export default Editorialpage