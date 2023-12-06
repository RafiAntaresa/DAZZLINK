import { Navbar, Container } from "react-bootstrap";
import Footer from "../component/Footer.jsx";
import { useNavigate } from "react-router-dom";
import Nilai from "./Nilai";
import Modalcancel from "../component/modalcancel";
const Penilaian= () =>{
    const navigate = useNavigate ()
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
                        <Navbar.Brand >
                        <Modalcancel></Modalcancel>
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
                                            <Nilai></Nilai>
                                        </div>
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