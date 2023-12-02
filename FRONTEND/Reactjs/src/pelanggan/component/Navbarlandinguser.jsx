import React from 'react'
import { Navbar, Dropdown, Container, Button, ButtonGroup,  } from "react-bootstrap";
import logo1 from "./../asset/Vector.png";
import person1 from "./../asset/person.jpeg";
import { useNavigate } from "react-router-dom";
import Modalkeluar from './modallogout';

function Navbarlandinguser() {
    const navigate  = useNavigate() 
  return (
    <div>
       <Navbar className=" px-5 shadow p-3 mb-5 ">
                    <Container>
                        <Navbar.Brand onClick={() => navigate('/Landinguser')} >
                            <img
                            src={logo1}
                            width="50%"
                            className="btn d-inline-block align-top"
                            alt="React Bootstrap logo"
                            />
                        </Navbar.Brand>
                        <Navbar.Collapse className="justify-content-end rounded-5 " >
                        <Dropdown as={ButtonGroup} >
                            <Button variant="light" className="rounded-start-pill border-end-0 bg-white border border-dark-subtle" >Halo Dazzlink <img src={person1} alt="" width="25rem"  height="25rem"  className="bg-white  align-top  rounded-circle "  /></Button>

                            <Dropdown.Toggle split variant="light" className="rounded-end-pill bg-white border border-dark-subtle border-start-0" id="dropdown-split-basic" />

                            <Modalkeluar></Modalkeluar>
                            </Dropdown>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
    </div>
  )
}

export default Navbarlandinguser
