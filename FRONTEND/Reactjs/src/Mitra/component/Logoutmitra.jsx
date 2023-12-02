import React from 'react'
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";


function Logoutmitra() {
    const navigate = useNavigate ()
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div>
       <li className="nav-item mt-2">
                 <a  className="" onClick={handleShow}>
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-in-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M10 3.5a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 1 0v2A1.5 1.5 0 0 1 9.5 14h-8A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2h8A1.5 1.5 0 0 1 11 3.5v2a.5.5 0 0 1-1 0v-2z"/>
  <path fill-rule="evenodd" d="M4.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H14.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
</svg>&nbsp;logout
                 </a>
             </li>
             <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body style={{textAlign: 'center' }}>
          <p><h2>Perhatian!</h2></p>
          <p><h3>Yakin mau keluar?</h3></p>
          <p>Pastikan Anda telah memerhatikan Status Reservasi </p>
        </Modal.Body>
        <Modal.Footer> 
          
        <Button variant="secondary" onClick={handleClose}>
        <a onClick={() => navigate('/')}   id="button" href="" style={{marginLeft: '-210px',width: '200px' }}>Lanjutkan</a>
          </Button>
          <Button variant="primary" onClick={() => navigate('')} style={{marginRight: '90px' }} >
          <a onClick={handleClose}  id="button" href="" style={{marginLeft: '-20px',width: '200px' , backgroundColor: 'grey'}}>Batal</a>
          </Button>
          <br></br>
          <br></br>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Logoutmitra
