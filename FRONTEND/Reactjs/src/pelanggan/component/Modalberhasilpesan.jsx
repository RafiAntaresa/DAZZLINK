import React from 'react'
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

function Modalberhasilpesan() {
    const navigate = useNavigate ()
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div>
        <a   onClick={handleShow}  id="button"  style={{marginLeft: '13rem',  marginTop: '3rem'}}>Selesai</a> 

       <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body style={{textAlign: 'center' }}>
          <p><h2>Selamat!</h2></p>
          <p><h4>Pesanan anda sudah masuk</h4></p>
          <p>Anda sudah dapat datang ke barber "jangan telat ya". </p>
        </Modal.Body>
        <Modal.Footer> 
          <Button style={{backgroundColor: '#ffff', borderColor:'#ffff'}} >
          <a onClick={() => navigate('/Landingreservasi')} id="button" href="" style={{width: '200px', left:'50%' }}>Lanjut</a>
          </Button>
          <br></br>
          <br></br>
        </Modal.Footer>
      </Modal>
            </div>
     
  )
}

export default Modalberhasilpesan
