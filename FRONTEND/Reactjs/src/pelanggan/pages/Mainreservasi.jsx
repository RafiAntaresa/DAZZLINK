import { Navbar, Container,Dropdown, ButtonGroup, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Footer2 from "../component/Footer2.jsx";
import Modalcancel from "../component/modalcancel.jsx";
const Reservasi = () =>{
    const navigate  = useNavigate() 
    return(
        <div>
            <div className="col-12">
            <Navbar  className="shadow p-3 mb-5 ">
                        <Container className="">
                        <Navbar.Brand >
                        <div class="container ">
                            <div class="row">
                                <div onClick={() => navigate('/Maincontent')} class="btn col " style={{marginLeft: '2rem'}}>
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
                        <Navbar.Brand >
                       <Modalcancel></Modalcancel>
                        </Navbar.Brand>
                        </Container>
            </Navbar>
            </div>
            <div className="container">
                    <div className="row justify-content-md-center">
                        <div className="col-6  p-0">
                            <div className="">
                                <nav aria-label="breadcrumb">
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item fw-bold">Paket</li>
                                        <li class="breadcrumb-item fw-normal">Barber</li>
                                        <li class="breadcrumb-item ">Waktu</li>
                                        <li class="breadcrumb-item ">Konfirmasi</li>
                                    </ol>
                                </nav>
                            </div>

                            <div>
            <div class="card mt-5">
                <div class="card-body pb-0">
                    <div class="row ">
                    <div class="col "> 
                    <h5 class="card-title">Paket Reguler</h5>
                    <p class="card-text fs-6">30 Menit</p>
                    <h6 class="card-title">IDR 30.000 Rp</h6>
                    </div>

                    <div class="col p-5">
                        <div class="form-check form-radio form-check-reverse">
                                <input style={{width:'1.5rem', height:'1.5rem'}} class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                        </div>
                    </div>
                    </div>
                </div>
            </div>

            <div class="card mt-4 p-0">
                <div class="card-body pb-0">
                    <div class="row">
                    <div class="col">
                    <h5 class="card-title">Paket Premium</h5>
                    <p class="card-text fs-6">50 Menit</p>
                    <h6 class="card-title m-0">IDR 40.000 Rp</h6>
                    </div>

                    <div class="col p-5">
                        <div class="form-check form-radio form-check-reverse">
                                <input style={{width:'1.5rem', height:'1.5rem'}} class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                        </div>
                    </div>
                    </div>
                </div>
            </div>

            <div class="card mt-4 mb-5">
                <div class="card-body pb-0">
                    <div class="row">
                    <div class="col">
                    <h5 class="card-title">Paket Khusus</h5>
                    <p class="card-text fs-6">60 Menit</p>
                    <h6 class="card-title m-0">IDR 50.000 Rp</h6>
                    </div>

                    <div class="col p-5">
                        <div class="form-check form-radio form-check-reverse">
                                <input style={{width:'1.5rem', height:'1.5rem'}} class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                        </div>
                    </div>
                    </div>
                </div>
            </div>    
                            </div>
                        </div>
                        <div className="col-lg-4 mx-4 mt-4 pt-5" >
                            <div class="card " >
                                <div class="card-body p-4"> 
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
                                    <div class="d-grid gap-2" >
                                    <a onClick={() => navigate('/Barber')}  id="button" href="" style={{marginLeft: '13rem',  marginTop: '3rem'}}>Selanjutnya</a> 
                                    </div>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
        </div>
        <Footer2/>
    </div>


    )
} 
export default Reservasi;