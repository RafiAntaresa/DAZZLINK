import { Navbar, Dropdown, Container, Button, ButtonGroup,  } from "react-bootstrap";
import baber1 from "./../asset/baber1.jpg";
import logo1 from "./../asset/Vector.png";
import person1 from "./../asset/person.jpeg";
import Footer from "../component/Footer.jsx";
import { useNavigate } from "react-router-dom";
const Maincontent = () =>{
    const navigate = useNavigate ()
    return(
        <div>
            <div className="col-12">
                <Navbar className=" px-5 shadow p-3 mb-5 ">
                    <Container>
                        <Navbar.Brand  onClick={() => navigate('/Landinguser')}>
                            <img
                            src={logo1}
                            width="50%"
                            className="btn d-inline-block align-top"
                            alt="React Bootstrap logo"
                            />
                        </Navbar.Brand>
                        <Navbar.Collapse className="justify-content-end rounded-5 " >
                        <Dropdown as={ButtonGroup} >
                            <Button variant="light" className="rounded-start-pill border-end-0 bg-white border border-dark-subtle">Halo Dazzlink <img src={person1} alt="" width="25rem"  height="25rem"  className="bg-white  align-top  rounded-circle "  /></Button>

                            <Dropdown.Toggle split variant="light" className="rounded-end-pill bg-white border border-dark-subtle border-start-0" id="dropdown-split-basic" />

                            <Dropdown.Menu>
                            <Dropdown.Item onClick={() => navigate('/Riwayat')}>Riwayat</Dropdown.Item>
                                <Dropdown.Item onClick={() => navigate('/Profile')}>Profile</Dropdown.Item>
                                <Dropdown.Item onClick={() => navigate('/Landing')}>Keluar</Dropdown.Item>
                            </Dropdown.Menu>
                            </Dropdown>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        <div className="container ">
        <div className="row justify-content-md-center">
            <div className="col-lg-6  mx-3 ">
            
            <div className="card border-0 " style={{width: '100%'}}>
            <div className="card-body">
                <h4 className="card-title fw-bold">Arfa Babershop</h4>
                <h6 className="card-subtitle fw-semibold mb-3 " style={{fontSize:'0.8rem'}}>4.9  
                <svg xmlns="http://www.w3.org/2000/svg" width="0.7rem" height="0.7rem"  fill="currentColor" className="bi bi-star-fill mb-1 mx-1" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg> Sleman, Yogyakarta</h6>
                <img src={baber1} 
                    width="100%"
                    height="100%"
                    
                    className="d-inline-block rounded"
                alt="" />
            </div>
            </div>


            <div className="container">
            <h4 className="card-title fw-bold mt-5">Layanan</h4>
    
            <div class="card mt-5 p-0">
                <div class="card-body pb-0 ">
                    <div class="row">
                    <div class="col">
                    <h5 class="card-title">Paket Reguler</h5>
                    <p class="card-text fs-6">30 Menit</p>
                    <h6 class="card-title m-0">IDR 30.000 Rp</h6>
                    </div>

                    <div class="col p-5">
                    <div class="form-check form-radio form-check-reverse">
                    <input style={{width:'1.5rem', height:'1.5rem'}} class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    </div>
                    {/* <div class="form-check form-switch form-check-reverse ">
                    <input class="form-check-input w-25 " type="checkbox" id="flexSwitchCheckReverse"/>
                    </div> */}
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
                            <input style={{width:'1.5rem', height:'1.5rem'}} class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                        </div>
                    </div>
                    </div>
                </div>
            </div>

            <div class="card mt-4 p-0">
                <div class="card-body pb-0">
                    <div class="row">
                    <div class="col">
                    <h5 class="card-title">Paket Khusus</h5>
                    <p class="card-text fs-6">60 Menit</p>
                    <h6 class="card-title m-0">IDR 50.000 Rp</h6>
                    </div>

                    <div class="col p-5">
                        <div class="form-check form-radio form-check-reverse">
                            <input style={{width:'1.5rem', height:'1.5rem', }} class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            </div>

            <div className="container">
            <h4 className="card-title fw-bold mt-5">Barber</h4>
            <div class="container text-center">
            <div class="row">
                <div class="col">
                <img
                    src={baber1}
                    width="80rem"  height="80rem"
                    className="mt-5 mb-3 rounded-circle"
                    alt="React Bootstrap logo"
                />
                <p class="card-text  fw-semibold fs-6">Adit</p>
                </div>

                <div class="col">
                <img
              src={baber1}
              width="80rem"  height="80rem"
              className="mt-5 mb-3 rounded-circle"
              alt="React Bootstrap logo"
                />
                <p class="card-text fw-semibold fs-6">Doni</p>
                </div>
                <div class="col">
                <img
              src={baber1}
              width="80rem"  height="80rem"
              className="mt-5 mb-3 rounded-circle"
              alt="React Bootstrap logo"
                />
                <p class="card-text fw-semibold fs-6">Yoga</p>
                </div>
                <div class="col">
                <img
              src={baber1}
              width="80rem"  height="80rem"
              className="mt-5 mb-3 rounded-circle"
              alt="React Bootstrap logo"
                />
                <p class="card-text fw-semibold fs-6">Guntur</p>
                </div>
            </div>
            </div>

            </div>
            
            </div>
            <div className="col-lg-4 mx-4 mt-5 pt-5" >
            <div class="card " >
            <div class="card-body p-3"> 
                <h4 className="card-title fw-bold">Arfa Babershop</h4>
                <h6 className="card-subtitle fw-semibold my-2 " style={{fontSize:'0.8rem'}}>4.9  
                <svg xmlns="http://www.w3.org/2000/svg" width="0.7rem" height="0.7rem"  fill="currentColor" className="bi bi-star-fill mb-1 mx-1" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg> Sleman, Yogyakarta</h6>
                <a onClick={() => navigate('/Reservasi')}  id="button" href="" style={{marginLeft: '13rem',  marginTop: '3rem'}}>reservasi</a> 
                <br></br>
                <br></br>
                <br></br>
            </div>
            </div>
            </div>
        </div>
        </div>
            <Footer/>
        </div>
    )
}
export default Maincontent;