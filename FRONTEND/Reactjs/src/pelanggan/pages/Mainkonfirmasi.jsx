import { Navbar, Container,Dropdown, ButtonGroup, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import person1 from "./../asset/person.jpeg";
import Footer2 from "../component/Footer2.jsx";
import Modalberhasilpesan from "../component/modalberhasilpesan";
import Modalcancel from "../component/modalcancel";
const Konfirmasi = () =>{
    const navigate = useNavigate ()
    return(
        <div>
            <div className="col-12" >
            <Navbar  className="shadow p-3 mb-5 ">
                        <Container className="">
                        <Navbar.Brand onClick={() => navigate('/waktu')}>
                        <div class="container ">
                            <div class="row">
                                <div class="btn col " style={{marginLeft: '2rem'}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"  fill="currentColor" class="bi bi-arrow-left-circle" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
                                    </svg>
                                </div>
                                <div class="col">
                                <h5 class="card-title mt-1  fs-4 fw-semibold">Pilih Paket</h5>
                                </div>
                            </div>
                        </div>
                        </Navbar.Brand>
                        <Navbar.Brand>
                        <Modalcancel></Modalcancel>
                        </Navbar.Brand>
                        </Container>
            </Navbar>
            </div>
            <div className="container">
                    <div className="row justify-content-md-center">
                        <div className="col-6  p-0">
                            <div className="mb-5" style={{marginLeft:'1rem'}}>
                                <nav aria-label="breadcrumb">
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item ">Paket</li>
                                        <li class="breadcrumb-item ">Barber</li>
                                        <li class="breadcrumb-item ">Waktu</li>
                                        <li class="breadcrumb-item fw-bold">Konfirmasi</li>
                                    </ol>
                                </nav> 
                            </div>

                            <div style={{height:'6rem' , marginLeft:'1.2rem'}} className="border-dark-subtle rounded-4 border-2 col-11 border">
                                <div class="container mb-5 ">
                                    <div class="row ">
                                        <div class="col-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" style={{marginLeft:'1.5rem', marginTop:'1.2rem'}} width="3rem" height="3rem" fill="currentColor" class="bi bi-shop-window" viewBox="0 0 16 16">
                                            <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h12V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zm2 .5a.5.5 0 0 1 .5.5V13h8V9.5a.5.5 0 0 1 1 0V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5a.5.5 0 0 1 .5-.5z"/>
                                            </svg>
                                        </div>
                                        <div class="col">
                                        <p class="card-text fw-bold mt-4 pt-2 ms-5 fs-6">Bayar di Tempat</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div >
                                    <p class="card-text  mb-2 fw-semibold fs-6 mb-3">Catatan Pesanan</p>
                                    <input style={{width:'32.6rem', height:'4rem'}} type="text" class="form-control border-dark-subtle rounded-4 border-2  border" id="exampleFormControlInput1" placeholder=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        

                        <div className="col-lg-4 mx-5 mb-5 mt-4 pt-5" >
                            <div class="card " >
                                <div class="card-body p-4 "> 
                                    <h4 className="card-title fw-bold">Arfa Babershop</h4>
                                    <h6 className="card-subtitle fw-semibold my-2 " style={{fontSize:'0.8rem'}}>4.9  
                                    <svg xmlns="http://www.w3.org/2000/svg" width="0.7rem" height="0.7rem"  fill="currentColor" className="bi bi-star-fill mb-1 mx-1" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                    </svg> Sleman, Yogyakarta</h6>
                                    <div class="container p-0 mt-5 mb-4">
                                        <div class="row row-cols-2">
                                            <div class="col pb-2 border-bottom">Paket</div>
                                            <div class="col pb-2 text-end border-bottom">IDR 30,000Rp</div>
                                            <div class="col pt-2">Total</div>
                                            <div class="col pt-2 text-end">IDR 30,000Rp</div>
                                        </div>
                                    </div>
                                    <div>
                                        <p class="card-text fw-semibold mb-3 fs-6">Reservasi Barber</p>
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-2 text-center p-0">
                                                <img src={person1} alt="" width="25rem"  height="25rem"  className="bg-white  align-top  rounded-circle "  />
                                                </div>
                                                <div class="col-3 text-left p-0">
                                                <p class="card-text fw-semibold mb-3 fs-6">Yoga</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-2 text-center p-0">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-calendar3" viewBox="0 0 16 16">
                                                <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"/>
                                                <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                                                </svg>
                                                </div>
                                                <div class="col-9 text-left p-0">
                                                <p class="card-text fw-semibold mb-3 fs-6">Selasa , 21 November</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-2 text-center p-0">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
                                                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                                                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                                                </svg>
                                                </div>
                                                <div class="col-3 text-left p-0">
                                                <p class="card-text fw-semibold mb-3 fs-6">10.45</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="d-grid gap-2" >
                                    <Modalberhasilpesan></Modalberhasilpesan>                                   
                                    <br></br>  
                                    <br></br>  
                                    <br></br>  
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        </div>
        <Footer2/>
    </div>


    )
} 
export default Konfirmasi;