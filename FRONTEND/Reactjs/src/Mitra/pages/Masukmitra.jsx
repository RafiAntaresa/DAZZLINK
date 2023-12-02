import { Navbar, Container, } from "react-bootstrap";
import './Button.css'
import { useNavigate } from "react-router-dom";


const Masukmitra = () => {
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
                                </div>
                            </div>
                        </div>
                        </Navbar.Brand>
                        <Navbar.Brand href="#home justify-content-end ">
                        <button type="button" style={{marginRight: '6rem'}} class="btn-close " aria-label="Close" onClick={() => navigate('/Landing')}></button>
                        </Navbar.Brand>
                        </Container>
            </Navbar>
            </div>
            <div className="container">
                <div className="row justify-content-md-center ">
                    <div className="mt-3 mb-5 col-7 p-0">
                            <div class="card "  style={{borderColor: '#4F5C92'}} >
                                <div class="card-body p-4 "> 
                                    <h2 className="card-title mt-4 text-center fw-bold">Masuk</h2>
                                    <h6 className="card-title text-center mb-5 fw-semibold">Masuk untuk melayani pelanggan anda</h6>
                                    <div>
                                        <div class="container">
                                            <div class="row justify-content-md-center">
                                            <div class="col-10 mb-4">
                                            <label for="exampleFormControlInput1" class="fw-bold fs-5 form-label">Email Kamu</label>
                                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Masukkan Email Bisnis Kamu"/>
                                            </div>
                                            </div>
                                        </div>
                                        <div class="container">
                                            <div class="row justify-content-md-center">
                                            <div class="col-10 mb-5">
                                            <label for="exampleFormControlInput1" class="fw-bold fs-5 form-label">Kata Sandi</label>
                                            <input type="password" id="pass" class="form-control" placeholder="Masukkan Password Anda"></input>
                                             <div class="input-group-append">
                                            </div>
                                            </div>
                                            </div>
                                        </div>
                                        <div class="container text-center">
                                            <div class="row justify-content-md-center">
                                            <div class="col-10 mb-5 mt-2">
                                            <a onClick={() => navigate('/Jadwalhari')}  id="button" href="" style={{left:'50%' ,  right:'50%' }}>Masuk</a>
                                            </div>
                                            </div>
                                        </div>
                                        <div class="container text-center">
                                            <div class="row justify-content-md-center">
                                            <div class="col-10 mb-5">
                                            <h6 className=" fw-semibold">Belum punya akun?</h6>
                                            <p ><a class="link-offset-2 link-underline link-underline-opacity-0"  onClick={() => navigate('/Daftarmitra')} href="" style={{color: '#4F5C92'}} >Buat Akun Sebagai Mitra</a></p>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Masukmitra;