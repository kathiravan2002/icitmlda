import React from 'react'
import Contactus from '../shared/components/Contactus'
import HelmetComponent from './HelmetComponent'

function Contactuspage() {
  return (
    <div>
      <HelmetComponent title={'Contact us - International Conference on Internet of Things, Machine Learning, and Data Analytics'} canonical={'https://icitmlda.com/contact-us'} />
      <Contactus />
    </div>
  )
}

export default Contactuspage