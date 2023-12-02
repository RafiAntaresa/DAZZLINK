import { Navbar, Dropdown, Container, Button, ButtonGroup,  } from "react-bootstrap";
import person1 from "./../asset/person.jpeg";
import Footer2 from "../component/Footer2.jsx";
import { useNavigate } from "react-router-dom";
const Tiket= () =>{
    const navigate = useNavigate()
    return (
        <div>
            <div className="col-12">
            <Navbar  className="shadow mb-5 ">
                        <Container className="">
                        <Navbar.Brand>
                        <div class="container ">
                            <div class="row">
                                <div class=" col " style={{marginLeft: '2rem'}}>
                                <h4 className="card-title fw-bold">Tiket</h4>
                                </div>
                            </div>
                        </div>
                        </Navbar.Brand>
                        <Navbar.Brand onClick={() => navigate('/Landingreservasi')}>
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
                                    <div className="container">
                                            <div className="row">
                                            <h5 className="card-title mt-1 p-0 fw-bold">Kode Tiket</h5>
                                            <h5 className="card-title text-center mt-5 p-0 fw-bold">ARF01</h5>
                                            </div>
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
export default Tiket; 