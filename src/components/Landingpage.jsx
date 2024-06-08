import React from 'react'
import { useLocation} from 'react-router-dom'

const Landingpage = () => {

    const location = useLocation()

  return (
    <div>
        <h1>hello{location.state.id}welcome</h1>
    </div>
  )
}

export default Landingpage