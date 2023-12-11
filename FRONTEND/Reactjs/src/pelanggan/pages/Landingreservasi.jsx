import { Navbar, Dropdown, Container, Button, ButtonGroup,  } from "react-bootstrap";
import baber1 from "./../asset/baber1.jpg";
import logo1 from "./../asset/Vector.png";
import gunting from "./../asset/gunting.png";
import pelayanan from "./../asset/pelayanan.png";
import banner from "./../asset/banner.jpg"
import reservasi from "./../asset/reservasi.png"
import about1 from "./../asset/about1.png"
import Footer from "../component/Footer.jsx";
import { useNavigate } from "react-router-dom";
import Navbarlandinguser from "../component/Navbarlandinguser";
import Isilanding from "../component/Isilanding";
const Landingreservasi = () =>{
    const navigate = useNavigate()
    return (
        <div>
            <div className="col-12">
           <Navbarlandinguser></Navbarlandinguser>
            </div>
            <div className="container">
                <div className="row ">
                    <div style={{marginLeft:'4rem'}} className="mt-3 mb-5 col-11 p-0">
                        <img
                            src={banner}
                            width="100%"
                            style={{objectFit:'cover'}}
                            className="btn align-top"
                            alt="React Bootstrap logo"
                        />
                    </div>

                    <div style={{marginLeft:'4rem'}} className=" mt-5 col-4 ">
                    <div class="card " >
                                <div class="card-body p-4 "> 
                                    <h4 className="card-title ms-3 fw-bold">Arfa Babershop</h4>
                                    <h6 className="card-subtitle ms-3 fw-semibold my-2 " style={{fontSize:'0.8rem'}}>4.9  
                                    <svg xmlns="http://www.w3.org/2000/svg" width="0.7rem" height="0.7rem"  fill="currentColor" className="bi bi-star-fill mb-1 mx-1" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                    </svg> Sleman, Yogyakarta</h6>
                                    <div>
                                        <div class="container">
                                            <div class="row mt-3">
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
                                    <div class="d-grid gap-2"  >
                                    <a onClick={() => navigate('/Tiket')}  id="button" href="" style={{marginLeft: '12.5rem',  marginTop: '3rem'}}>E-tiket</a> 
                                    <br></br>  
                                    <br></br>  
                                    <br></br>  
                                       
                                    </div>
                                </div>
                            </div>
                    </div>

                    <Isilanding></Isilanding>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default Landingreservasi; 