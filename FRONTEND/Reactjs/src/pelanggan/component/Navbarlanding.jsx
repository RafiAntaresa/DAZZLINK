import React from 'react'
import { Navbar, Container, Button} from "react-bootstrap";
import logo1 from "./../asset/Vector.png";
import { useNavigate } from "react-router-dom";

function Navbarlanding() {
    const navigate = useNavigate ()
  return (
    <div>
       <Navbar className=" px-5 shadow  mb-5 ">
                    <Container>
                        <Navbar.Brand >
                            <img
                            src={logo1}
                            width="50%"
                            className="btn d-inline-block align-top"
                            alt="React Bootstrap logo"
                            />
                        </Navbar.Brand>
                        <Navbar.Collapse className="justify-content-end " >
                        <Button variant="light" onClick={() => navigate('/Daftarpelanggan')} style={{marginTop: '38px', marginRight: '110px'}} id='button2'>Daftar</Button>
                        <Button variant="light" onClick={() => navigate('/Masukpelanggan')} style={{marginTop: '38px',marginRight: '220px'}} id='button2'>Masuk</Button>
                        <p className="mt-3"><a class=" link-offset-2 link-underline link-underline-opacity-0" href="#" onClick={() => navigate('/Masukmitra')} style={{color: '#4F5C92'}}>Masuk Sebagai Mitra</a></p>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
    </div>
  )
}

export default Navbarlanding
