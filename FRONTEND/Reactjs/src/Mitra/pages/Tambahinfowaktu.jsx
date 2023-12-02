import React from 'react'
import { Row,Col,Container,Navbar} from "react-bootstrap";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Footertambah from "../component/Footertambah";
import { useNavigate } from "react-router-dom";
import Modalscancel from '../component/Modalscancel';


function Tambahinfowaktu() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const navigate = useNavigate ()
  return (
    <div className="col-12">
      <Navbar  className="shadow p-3 mb-5 ">
                        <Container className="">
                        <Navbar.Brand >
                        <div class="container ">
                            <div class="row">
                                <div class="btn col " style={{marginLeft: '2rem' }} onClick={() => navigate('/Tambahinfopaket')}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"  fill="currentColor" class="bi bi-arrow-left-circle" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
                                    </svg>
                                </div>
                                <div class="col"  >
                                <h5 class="card-title mt-1  fs-4 fw-semibold">Tambahkan Info Bisnis Anda</h5>
                                </div>
                            </div>
                        </div>
                        </Navbar.Brand>
                        <Navbar.Brand href="#home justify-content-end ">
                        <Modalscancel></Modalscancel>
                        </Navbar.Brand>
                        </Container>
            </Navbar>
            <div className="container">
                    <div className="row justify-content" style={{marginLeft: '3rem' }}>
                        <div className="col-6  p-0">
                            <div className="">
                                <nav aria-label="breadcrumb">
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item fw-normal">Bisnis</li>
                                        <li class="breadcrumb-item fw-normal">Barber</li>
                                        <li class="breadcrumb-item fw-normal ">Paket</li>
                                        <li class="breadcrumb-item fw-bold">Waktu</li>
                                    </ol>
                                </nav>
                            </div>  
                         </div>
                    </div>
              </div>

              <div className='container' >
        <Row>
        <Col xs={6}>   
        <div className="col-8"style={{marginLeft: '3rem' }}>
            <div className="mb-3">
            <label for="input">Jumlah Kursi</label>
                <input type="text" class="form-control" id="inputHalfWidth" placeholder="Masukkan Jumlah Kursi"></input>
            </div>
            </div>
           
            <div className="col-8"style={{marginLeft: '3rem' }}>
            <div className="mb-3">
            <div class="row">
            <div class="col">
            <label for="input">Waktu buka</label>
             <input type="text" class="form-control" placeholder="10.00" aria-label="First name"></input>
            </div>
            <div class="col">
            <label for="input">Waktu Tutup</label>
            <input type="text" class="form-control" placeholder="21.00" aria-label="Last name"></input>
            </div>
            </div>
            </div>
            </div>

            <div className="col-8"style={{marginLeft: '3rem' }}>
            <label for="input">Pilihan Waktu</label>
            <label for="input" style={{color: 'grey' }}>Kami menyarankan jarak tiap Pilihan Waktu adalah 45 menit</label>
            <div class="input-group mb-4">
             <input type="text" class="form-control" placeholder="10.00" aria-label="Recipient's username" aria-describedby="button-addon2" ></input>
            <button class="btn" type="button" id="button-addon2" style={{backgroundColor: '#4F5C92' }}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 17 18" fill="none">
            <path d="M16.6673 10.1634H9.66732V17.1634H7.33398V10.1634H0.333984V7.83008H7.33398V0.830078H9.66732V7.83008H16.6673V10.1634Z" fill="white"/>
            </svg></button>
            </div>
            </div>


            <div className="col-8"style={{marginLeft: '3rem' }}>
            <div className="mb-3">
            <label for="input" style={{color: 'grey' }}>Pelanggan Anda dapat memilih Pilihan Waktu yang Anda sediakan di bawah</label>
            
            </div>
            </div>
            </Col>
        <Col xs={6}>
            <div className="col-10" >
            <div className="mb-3">
            <div class="d-grid gap-2 col-6 mx-auto">
            <a id="button" style={{marginLeft: '10rem'}} onClick={handleShow}>Selesai</a>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body style={{textAlign: 'center' }}>
          <p><h2>Selamat!</h2></p>
          <p><h4>Pengisian Informasi Anda Sudah Lengkap</h4></p>
          <p>Anda sudah dapat menjalankan bisnis bersama kami. </p>
        </Modal.Body>
        <Modal.Footer> 
          <Button style={{backgroundColor: '#ffff', borderColor:'#ffff'}} >
          <a onClick={() => navigate('/Jadwalhari')}  id="button" href="" style={{width: '200px', left:'50%' }}>Dashboard Mitra</a>
          </Button>
          <br></br>
          <br></br>
        </Modal.Footer>
      </Modal>
            </div>
            </div>
            </div>
            </Col>
      </Row>
        <div className='col-6'style={{marginLeft: '6rem' }}>
        <Row xs="auto">
        <Col><button type="button" class="btn btn-outline-dark">10.00</button></Col>
        <Col><button type="button" class="btn btn-outline-dark">11.00</button></Col>
        <Col><button type="button" class="btn btn-outline-dark">13.00</button></Col>
        <Col><button type="button" class="btn btn-outline-dark">14.00</button></Col>
      </Row>
        </div>
        <br></br>
        <div className='col-6' style={{marginLeft: '6rem' }}>
        <Row xs="auto">
        <Col><button type="button" class="btn btn-outline-dark">15.00</button></Col>
        <Col><button type="button" class="btn btn-outline-dark">17.00</button></Col>
        <Col><button type="button" class="btn btn-outline-dark">20.00</button></Col>
        <Col><button type="button" class="btn btn-outline-dark">21.00</button></Col>
      </Row>
        </div>
        
            
        </div>
        <br></br> 
        <br></br> 
        <div style={{ marginTop : '84px' }}> <Footertambah ></Footertambah></div>
        </div>
            
  )
}

export default Tambahinfowaktu;
