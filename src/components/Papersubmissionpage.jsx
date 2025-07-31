import React from 'react'
import Papersubmission from '../shared/components/Papersubmission'
import HelmetComponent from './HelmetComponent'

function Papersubmissionpage() {
  return (
    <div>
      <HelmetComponent title={'Paper Submission - International Conference on Internet of Things, Machine Learning, and Data Analytics'} canonical={'https://icitmlda.com/paper-submission'} />
      <Papersubmission />
    </div>
  )
}

export default Papersubmissionpage