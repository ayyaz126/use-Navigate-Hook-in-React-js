import React from 'react'
import { Link , useNavigate } from 'react-router-dom'


function Home() {
   const navigate = useNavigate();
     
  return (
    <div>
        <h1> First page </h1>
          <Link to="/abut" >  Go to about page </Link>
             <br/>
        <button   onClick={()=>navigate('/abt')}   > Click me!  </button>
    </div>
  )
}

export default Home