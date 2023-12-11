import React from 'react'
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

function Modalubah() {
    const navigate = useNavigate ()
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div>
        <a  id="button" onClick={handleShow} >UBAH</a>

       <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body style={{textAlign: 'center' }}>
          <p><h2>Berhasil!</h2></p>
          <p><h4>Sandi anda Telah diperbaharui</h4></p>
          <p> Login Untuk Masuk Kembali. </p>
        </Modal.Body>
        <Modal.Footer> 
          <Button style={{backgroundColor: '#ffff', borderColor:'#ffff'}} >
          <a onClick={() => navigate('/Landing')} id="button" href="" style={{width: '200px', left:'50%' }}>Lanjut</a>
          </Button>
          <br></br>
          <br></br>
        </Modal.Footer>
      </Modal>
            </div>
     
  )
}

export default Modalubah
