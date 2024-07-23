import React from 'react'
import { useLocation } from 'react-router-dom'

const SoftwareDetails = () => {
    const location = useLocation()
  return (
    <div>
      {location.state.id}
    </div>
  )
}

export default SoftwareDetails
