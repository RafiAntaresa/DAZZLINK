import { Navbar, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Modalcancel from "../component/modalcancel";
import baber1 from "./../asset/baber1.jpg";
import person1 from "./../asset/person.jpeg";
import Footer2 from "./../component/Footer2.jsx";
const Barber = () =>{
    const navigate = useNavigate()
    return(
        <div>
            <div className="col-12">
            <Navbar  className="shadow p-3 mb-5 ">
                        <Container className="">
                        <Navbar.Brand onClick={() => navigate('/reservasi')}>
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
                                        <li class="breadcrumb-item ">Paket</li>
                                        <li class="breadcrumb-item fw-bold">Barber</li>
                                        <li class="breadcrumb-item ">Waktu</li>
                                        <li class="breadcrumb-item ">Konfirmasi</li>
                                    </ol>
                                </nav>
                            </div>

        <div className="p-0 mt-5">
            <div class=" text-center">
                <div class="row">

                    <div class=" py-0 col pb-4 rounded-3 border border-3 ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" fill="currentColor" class=" mt-4 mb-2 bi bi-people-fill" viewBox="0 0 16 16">
                        <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
                        </svg>
                            <p class="card-text fw-semibold fs-6">Yang Tersedia</p>
                    </div>

                    <div class=" py-0 col pb-4 mx-3 rounded-3 border border-3 ">
                        <img
                            src={baber1}
                            width="70rem"  height="70rem"
                            className="mt-4 mb-2 rounded-circle"
                            alt="React Bootstrap logo"
                        />
                        <p class="card-text fw-semibold fs-6">Yoga</p>
                    </div>

                    <div class=" py-0 pb-4 col rounded-3 border border-3 ">
                            <img
                                src={baber1}
                                width="70rem"  height="70rem"
                                className="mt-4 mb-2 rounded-circle"
                                alt="React Bootstrap logo"
                            />
                        <p class="card-text fw-semibold fs-6">Guntur</p>
                    </div>
            </div>
            </div>

            </div>
                        </div>
                        <div className="col-lg-4 mx-5 mb-5 mt-4 pt-5" >
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
                                    <div>
                                        <p class="card-text fw-semibold mb-1 fs-6">Reservasi Barber</p>
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-2 text-center p-0">
                                                <img src={person1} alt="" width="25rem"  height="25rem"  className="bg-white  align-top  rounded-circle "  />
                                                </div>
                                                <div class="col-3 text-left p-0">
                                                <p class="card-text fw-semibold mb-5 fs-6">Yoga</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="d-grid gap-2" >
                                    <div class="d-grid gap-2" >
                                    <a onClick={() => navigate('/Waktu')}  id="button" href="" style={{marginLeft: '13rem',  marginTop: '3rem'}}>Selanjutnya</a> 
                                    </div>
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
export default Barber;