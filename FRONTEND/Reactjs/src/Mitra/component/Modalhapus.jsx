import React from 'react'
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

function Modalhapus() {
  const navigate = useNavigate ()
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div>
       <a onClick={handleShow}>Batalkan</a>   
         <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body style={{textAlign: 'center' }}>
          <p><h2>Pehatian!</h2></p>
          <p><h4>Apakah anda yakin menghapus data ini?</h4></p>
          <p>Jika lanjut data akan di hapus permanen. </p>
        </Modal.Body>
        <Modal.Footer> 
          <Button style={{backgroundColor: '#ffff', borderColor:'#ffff'}} >
          <a onClick={() => navigate('/Jadwalhari')}  id="button" href="" style={{width: '200px', left:'50%' }}>Lanjut</a>
          </Button>
          <br></br>
          <br></br>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Modalhapus
