import { Navbar, Dropdown, Container, Button, ButtonGroup,  } from "react-bootstrap";
import person1 from "./../asset/person.jpeg";
import Footer from "../component/Footer.jsx";
import { useNavigate } from "react-router-dom";

const Detailpenilaian= () =>{

const navigate = useNavigate ()
    return (
        <div>
            <div className="col-12" onClick={() => navigate('/Landinguser')}>
            <Navbar  className="shadow mb-5 ">
                        <Container className="">
                        <Navbar.Brand>
                        <div class="container ">
                            <div class="row">
                                <div class="btn col " style={{marginLeft: '2rem'}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"  fill="currentColor" class="bi bi-arrow-left-circle" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        </Navbar.Brand>
                        <Navbar.Brand href="#home justify-content-end ">
                        <button type="button" style={{marginRight: '6rem'}} class="btn-close " aria-label="Close"></button>
                        </Navbar.Brand>
                        </Container>
            </Navbar>
            </div>
            <div className="container">
                <div className="row justify-content-md-center ">
                    <div className="mt-3 mb-5 col-7 p-0">
                            <div class="card " >
                                <div class="card-body p-4 "> 
                                    <h2 className="card-title fw-bold">Selasa 21 November 2023 at 10.45</h2>
                                    <h4 className="card-title mb-3 fw-semibold">Arfa Babershop</h4>
                                    <div>
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-1 text-center p-0">
                                                <img src={person1} alt="" width="25rem"  height="25rem"  className="bg-white  align-top  rounded-circle "  />
                                                </div>
                                                <div class="col-2 text-left p-0">
                                                <p class="card-text fw-semibold mb-2 fs-6">Yoga</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-1 text-center p-0">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                                                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                                                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                                </svg>
                                                </div>
                                                <div class="col-5 text-left p-0">
                                                <p class="card-text fw-semibold mb-4 fs-6">Sleman, Yogyakarta</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="container">
                                            <div className="row">
                                            <h5 className="card-title p-0 fw-semibold">Reservasi Detail</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="container p-0 mt-3 mb-4">
                                        <div class="row row-cols-2">
                                            <div class="col pb-2 border-bottom">Paket</div>
                                            <div class="col pb-2 text-end border-bottom">IDR 30,000Rp</div>
                                            <div class="col pt-2 border-bottom">Total</div>
                                            <div class="col pt-2 text-end border-bottom">IDR 30,000Rp</div>
                                        </div>
                                    </div>
                                    <div className="container mb-3">
                                            <div className="row">
                                            <h5 className="card-title p-0 fw-bold">Penilaian</h5>
                                            </div>
                                    </div>
                                    <div className="container p-0 mb-2">
                                        <div className="row row-cols-5">
                                            <div className="col-1">                                    
                                                <svg xmlns="http://www.w3.org/2000/svg" width="1.8rem" height="1.8rem"  fill="currentColor" className="bi bi-star-fill " viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                                </svg>
                                            </div>
                                            <div className="col-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="1.8rem" height="1.8rem"  fill="currentColor" className="bi bi-star-fill " viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                                </svg>
                                            </div>
                                            <div className="col-1">                                                
                                                <svg xmlns="http://www.w3.org/2000/svg" width="1.8rem" height="1.8rem"  fill="currentColor" className="bi bi-star-fill " viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                                </svg>

                                            </div>
                                            <div className="col-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="1.8rem" height="1.8rem"  fill="currentColor" className="bi bi-star-fill " viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                                </svg>
                                            </div>
                                            <div className="col-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="1.8rem" height="1.8rem"  fill="currentColor" className="bi bi-star-fill " viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="container">
                                            <div className="row">
                                            <h6 className="card-title mt-4 p-0 fw-semibold">Pelayanan Terbaik</h6>
                                            </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default Detailpenilaian; 