import React from 'react'
import {  Routes,  Route} from 'react-router-dom'
import Home from '../Pages/Home/Home.jsx'
import About from '../Pages/About/About.jsx'
import Skills from '../Pages/Skills/Skills.jsx'
import Projects from '../Pages/Projects/Projects.jsx'
import Sidebar from '../Components/Sidebar/Sidebar.jsx'
import SoftwareDetails from '../Pages/SoftwareDetails.jsx'

const Navigation = () => {
  return (
    <div>
        <Sidebar >
          <Routes>
              <Route exact path='/'   element ={<Home />}/>
              <Route exact path='/details'  element ={ <SoftwareDetails />}/>
              <Route exact path='/skills' element={ <Skills />}/>
              <Route exact path='/projects'    element={<Projects />}/>
          </Routes>
        </Sidebar>
    </div>
  )
}

export default Navigation

