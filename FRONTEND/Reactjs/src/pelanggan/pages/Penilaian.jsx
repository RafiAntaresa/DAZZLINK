import { Navbar, Dropdown, Container, } from "react-bootstrap";
import baber1 from "./../asset/baber1.jpg";
import Footer from "../component/Footer.jsx";
import { useNavigate } from "react-router-dom";
const Penilaian= () =>{
    const navigate = useNavigate()
    return (
        <div>
            <div className="col-12">
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
                    <div className="mt-3  col-7 p-0">
                            <div class="card" >
                                <div class="card-body p-4 "> 
                                    <div className="container p-0 mb-2 ">
                                        
                                        <div className="row  justify-content-md-center mb-3">
                                            <div className="col-5">
                                            <img src={baber1} 
                                            width="100%"
                                            height="100%"
                                            className="d-inline-block  rounded"
                                            alt="" 
                                        />
                                        </div>
                                        </div>
                                        <h4 className="text-center card-title mb-2 fw-bold">Penilaian</h4>
                                        <div className="row mb-4 row-cols-5 justify-content-md-center">
                                            <div className="col-1 btn">                                    
                                                <svg xmlns="http://www.w3.org/2000/svg" width="1.8rem" height="1.8rem"  fill="currentColor" className="bi bi-star-fill " viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                                </svg>
                                            </div>
                                            <div className="col-1 btn">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="1.8rem" height="1.8rem"  fill="currentColor" className="bi bi-star-fill " viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                                </svg>
                                            </div>
                                            <div className="col-1 btn">                                                
                                                <svg xmlns="http://www.w3.org/2000/svg" width="1.8rem" height="1.8rem"  fill="currentColor" className="bi bi-star-fill " viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                                </svg>

                                            </div>
                                            <div className="col-1 btn">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="1.8rem" height="1.8rem"  fill="currentColor" className="bi bi-star-fill " viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                                </svg>
                                            </div>
                                            <div className="col-1 btn">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="1.8rem" height="1.8rem"  fill="currentColor" className="bi bi-star-fill " viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="">
                                            <p style={{marginLeft:'8rem'}} class=" fw-semibold fs-6 mb-1">Komentar</p>
                                            <input style={{width:'25rem', marginLeft:'7rem',  height:'4rem'}} type="text" class=" form-control border-dark-subtle rounded-3 border-2  border" id="exampleFormControlInput1" placeholder=""/> 
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
export default Penilaian; 