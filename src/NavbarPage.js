import React, { useState } from 'react'
import { Navbar } from 'react-bootstrap'
import './Components/styles/NavbarPage.css'
//import favicon from './favicon.ico'

function NavbarPage(props) {
  // const [isOpen, setIsOpen] = useState(false)
    
  //   const toggleCollapse = () => {
  //     setIsOpen(!isOpen)
  //   }
  
    return (
  <Navbar className='top'>
    {props.children}
    <Navbar.Brand className='logoarea' href="#home">
      <img 
        src='favicon.ico'
        width='100'
        height='100'
        className='d-inline-block align-top'
        alt='React Bootstrap logo'
      />  
      <div className='brandname'>  
        NATIONAL
       <br/>
       RANKED
       <br/>
       CHOICE
       <br/>
       VOTE</div>
    </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          <div className='twenty'>
          2020 US Presidential SHADOW ELECTION
          </div>
        </Navbar.Text>
      </Navbar.Collapse>
  </Navbar>
        )
}

// NavbarPage.propTypes = {
//   children: PropTypes.element.isRequired
// }

export default NavbarPage
