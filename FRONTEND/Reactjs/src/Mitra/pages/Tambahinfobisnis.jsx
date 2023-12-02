import React from 'react'
import {Row,Col,Navbar,Container} from "react-bootstrap";

import Footertambah from "../component/Footertambah";
import './Button.css'
import { useNavigate } from "react-router-dom";
import Modalscancel from '../component/Modalscancel';



function Tambahinfobisnis() {
    const navigate = useNavigate ()
    
  return (
      <div className="col-12">
 <Navbar  className="shadow p-3 mb-5 ">
                        <Container className="">
                        <Navbar.Brand onClick={() => navigate('/')}>
                        <div class="container ">
                            <div class="row">
                                <div class="btn col " style={{marginLeft: '2rem', backgroundColor: '#fffff'}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"  fill="white" class="bi bi-arrow-left-circle" viewBox="0 0 16 16" >
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
                                        <li class="breadcrumb-item fw-bold">Bisnis</li>
                                        <li class="breadcrumb-item fw-normal">Barber</li>
                                        <li class="breadcrumb-item ">Paket</li>
                                        <li class="breadcrumb-item ">Waktu</li>
                                    </ol>
                                </nav>
                            </div>  
                         </div>
                    </div>
              </div>


<br></br>
<br></br>
<br></br>
        <div className='container' >
        <Row>
        <Col xs={6}>   
        <div className="col-8"style={{marginLeft: '3rem' }}>
            <div className="mb-3">
            <label for="input">Nama Bisnis</label>
                <input type="text" class="form-control" id="inputHalfWidth" placeholder="Nama Bisnis Anda"></input>
            </div>
            </div>
           
            <div className="col-8"style={{marginLeft: '3rem' }}>
            <div className="mb-3">
            <label for="input">Nomor Telepon</label>
            <input type="text" class="form-control" id="inputHalfWidth" placeholder="Nomor Telepon Bisnis Anda"></input>
            </div>
            </div>

            <div className="col-8"style={{marginLeft: '3rem' }}>
            <label for="input">Foto</label>
            <div class="input-group mb-3">
             <input type="text" class="form-control" placeholder="Masukkan Foto" aria-label="Recipient's username" aria-describedby="button-addon2"></input>
             <div className='Tombol'><button class="btn" type="button" id="button-addon2" style={{backgroundColor: '#4F5C92' }}><svg xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20" fill="none">
            <path d="M8.33269 14.666V5.15768L5.29935 8.19102L3.66602 6.49935L9.49935 0.666016L15.3327 6.49935L13.6994 8.19102L10.666 5.15768V14.666H8.33269ZM2.49935 19.3327C1.85768 19.3327 1.30818 19.104 0.850851 18.6467C0.393517 18.1894 0.16524 17.6402 0.166018 16.9993V13.4993H2.49935V16.9993H16.4994V13.4993H18.8327V16.9993C18.8327 17.641 18.604 18.1905 18.1467 18.6479C17.6894 19.1052 17.1402 19.3335 16.4994 19.3327H2.49935Z" fill="#F2F2F2"/>
            </svg></button></div>
        
            </div>
            </div>

            <div className="col-8"style={{marginLeft: '3rem' }}>
            <div className="mb-3">
            <label for="input">Alamat</label>
            <textarea class="form-control" aria-label="With textarea" placeholder="Masukkan Alamat Lengkap"></textarea>
            </div>
            </div>
            </Col>
        <Col xs={6}>
            <div className="col-10">
            <div className="mb-3">
            <div class="d-grid gap-2 col-6 mx-auto"  >        
                <a onClick={() => navigate('/Tambahinfobarber')}  id="button" href="" style={{marginLeft: '10rem'}}>Selanjutnya</a>
            </div>
            </div>
            </div>
            </Col>
      </Row>
             
        </div>

<br></br>
<br></br>
<br></br>
<div style={{ marginTop : '51px' }}> <Footertambah ></Footertambah></div>

        </div>
  )
}

export default Tambahinfobisnis
