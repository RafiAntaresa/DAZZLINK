import React from 'react'
import {Container,Row,Col,Navbar} from "react-bootstrap";
import Footertambah from "../component/Footertambah";
import { useNavigate } from "react-router-dom";
import Modalscancel from '../component/Modalscancel';


function Tambahinfobarber() {
    const navigate = useNavigate ()
  return (
    <div className="col-12">
            <Navbar  className="shadow p-3 mb-5 ">
                        <Container className="">
                        <Navbar.Brand >
                        <div class="container ">
                            <div class="row">
                                <div class="btn col " style={{marginLeft: '2rem' }} onClick={() => navigate('/Tambahinfobisnis')}>
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
                                        <li class="breadcrumb-item fw-bold">Barber</li>
                                        <li class="breadcrumb-item ">Paket</li>
                                        <li class="breadcrumb-item ">Waktu</li>
                                    </ol>
                                </nav>
                            </div>  
                         </div>
                    </div>
             </div>

<br></br>


<div class="container text-left">
<Row>
        <Col>
        <div className="col-8"style={{marginLeft: '3rem' }}>
            <div className="mb-3">
            <label for="input">Nama Barber</label>
            <input type="text" class="form-control" id="inputHalfWidth" placeholder="Masukkan Nama Barber"></input>
            </div>
            </div>

            <div className="col-8"style={{marginLeft: '3rem' , }}>
            <label for="input">Foto Barber</label>
            <div class="input-group mb-3">
             <input  type="text" class="form-control" placeholder="Masukkan Foto Barber" aria-label="Recipient's username" aria-describedby="button-addon2" ></input>
             <div className='Tombol'><button class="btn" type="button" id="button-addon2" style={{backgroundColor: '#4F5C92' }}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" viewBox="0 0 37 36" fill="none">
        <path d="M29.75 7.875H25.8519L23.9352 5.00063C23.8325 4.84671 23.6934 4.7205 23.5303 4.63318C23.3672 4.54586 23.185 4.50011 23 4.5H14C13.815 4.50011 13.6328 4.54586 13.4697 4.63318C13.3066 4.7205 13.1675 4.84671 13.0648 5.00063L11.1467 7.875H7.25C6.35489 7.875 5.49645 8.23058 4.86351 8.86351C4.23058 9.49645 3.875 10.3549 3.875 11.25V27C3.875 27.8951 4.23058 28.7536 4.86351 29.3865C5.49645 30.0194 6.35489 30.375 7.25 30.375H29.75C30.6451 30.375 31.5036 30.0194 32.1365 29.3865C32.7694 28.7536 33.125 27.8951 33.125 27V11.25C33.125 10.3549 32.7694 9.49645 32.1365 8.86351C31.5036 8.23058 30.6451 7.875 29.75 7.875ZM30.875 27C30.875 27.2984 30.7565 27.5845 30.5455 27.7955C30.3345 28.0065 30.0484 28.125 29.75 28.125H7.25C6.95163 28.125 6.66548 28.0065 6.4545 27.7955C6.24353 27.5845 6.125 27.2984 6.125 27V11.25C6.125 10.9516 6.24353 10.6655 6.4545 10.4545C6.66548 10.2435 6.95163 10.125 7.25 10.125H11.75C11.9353 10.1251 12.1177 10.0795 12.2811 9.99215C12.4445 9.90482 12.5837 9.77849 12.6866 9.62438L14.6019 6.75H22.3967L24.3134 9.62438C24.4163 9.77849 24.5555 9.90482 24.7189 9.99215C24.8823 10.0795 25.0647 10.1251 25.25 10.125H29.75C30.0484 10.125 30.3345 10.2435 30.5455 10.4545C30.7565 10.6655 30.875 10.9516 30.875 11.25V27ZM18.5 12.375C17.2762 12.375 16.0799 12.7379 15.0624 13.4178C14.0449 14.0977 13.2518 15.064 12.7835 16.1946C12.3152 17.3253 12.1926 18.5694 12.4314 19.7696C12.6701 20.9699 13.2594 22.0724 14.1248 22.9377C14.9901 23.8031 16.0926 24.3924 17.2929 24.6311C18.4931 24.8699 19.7372 24.7473 20.8679 24.279C21.9985 23.8107 22.9648 23.0176 23.6447 22.0001C24.3246 20.9826 24.6875 19.7863 24.6875 18.5625C24.6856 16.922 24.0331 15.3493 22.8732 14.1893C21.7132 13.0294 20.1405 12.3769 18.5 12.375ZM18.5 22.5C17.7212 22.5 16.96 22.2691 16.3124 21.8364C15.6649 21.4038 15.1602 20.7888 14.8622 20.0693C14.5642 19.3498 14.4862 18.5581 14.6382 17.7943C14.7901 17.0305 15.1651 16.3289 15.7158 15.7783C16.2664 15.2276 16.968 14.8526 17.7318 14.7007C18.4956 14.5487 19.2873 14.6267 20.0068 14.9247C20.7263 15.2227 21.3413 15.7274 21.7739 16.3749C22.2066 17.0225 22.4375 17.7837 22.4375 18.5625C22.4375 19.6068 22.0227 20.6083 21.2842 21.3467C20.5458 22.0852 19.5443 22.5 18.5 22.5Z" fill="white"/>
        </svg></button></div>
            </div>
            </div>

            <br></br>
            <br></br>

            <div className="col-4"style={{marginLeft: '7rem' }}>
            <a  id="button" href="" style={{marginLeft: '10rem'}} onClick={() => navigate('/Modalbarber')}>Tambah</a>
            </div>
            
            </Col>

        <Col>
            <div className="col-6"style={{marginLeft: '9rem' }}>
            <a onClick={() => navigate('/Tambahinfopaket')}  id="button" href="" style={{marginLeft: '10rem'}}>Selanjutnya</a></div>
        </Col>
        </Row>
</div>


<br></br>
<br></br>
<br></br>

    <Container  >

    <Row style={{marginLeft: '3rem' }}>Pelanggan Anda dapat memilih Barber yang Anda sediakan di bawah</Row>
    <br></br>
    <br></br>
    <Row xs="auto" style={{marginLeft: '3rem' }}>
        <Col><img src='src/Mitra/assets/barber1.png'></img><Col style={{marginLeft: '1.5rem' }}>AGUS</Col></Col>
        <Col><img src='src/Mitra/assets/barber2.png'></img><Col style={{marginLeft: '1.5rem' }}>DAYAT</Col></Col>
        <Col><img src='src/Mitra/assets/barber3.png'></img><Col style={{marginLeft: '1.5rem' }}>TONI</Col></Col>
        <Col><img src='src/Mitra/assets/barber4.png'></img><Col style={{marginLeft: '1.5rem' }}>PATAR</Col></Col>
      </Row>
        
    </Container>


    <div style={{ marginTop : '-10px' }}> <Footertambah ></Footertambah></div>
           

        </div>
  )
}

export default Tambahinfobarber
