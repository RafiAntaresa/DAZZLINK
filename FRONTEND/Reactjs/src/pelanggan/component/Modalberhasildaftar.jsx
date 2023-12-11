import React from 'react'
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

function ModalberhasiLdaftar() {
    const navigate = useNavigate ()
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div>
       <a onClick={handleShow}  id="button"  style={{marginLeft: '290px'}}>Buat Akun</a>
       <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body style={{textAlign: 'center' }}>
          <p><h2>Selamat!</h2></p>
          <p><h4>Bergabung dengan pantasin</h4></p>
          <p>Anda sudah dapat memesan barber pilihan anda. </p>
        </Modal.Body>
        <Modal.Footer> 
          <Button style={{backgroundColor: '#ffff', borderColor:'#ffff'}} >
          <a onClick={() => navigate('/Landinguser')}  id="button" href="" style={{width: '200px', left:'50%' }}>Lanjut</a>
          </Button>
          <br></br>
          <br></br>
        </Modal.Footer>
      </Modal>
            </div>
     
  )
}

export default ModalberhasiLdaftar
