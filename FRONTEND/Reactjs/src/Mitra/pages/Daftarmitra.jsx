import { Navbar, Container, } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Daftarmitra= () =>{
    const navigate = useNavigate ()
    return (
        <div>
            <div className="col-12">
            <Navbar  className="shadow mb-5 ">
                        <Container className="">
                        <Navbar.Brand>
                        <div class="container ">
                            <div class="row">
                               
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
                            <div class="card "  style={{borderColor: '#4F5C92'}}>
                                <div class="card-body p-4 "> 
                                    <h2 className="card-title mt-4 text-center fw-bold">Buat Akun</h2>
                                    <h6 className="card-title text-center mb-5 fw-semibold">Buat akun untuk Bisnis Barbershop Anda</h6>
                                    <div>
                                        <div class="container">
                                            <div class="row justify-content-md-center">
                                            <div class="col-10 ">
                                            <label for="exampleFormControlInput1" class="fw-bold fs-5 form-label">Nama Babershop</label>
                                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Masukan Nama Babershop Kamu"/>
                                            </div>
                                            </div>
                                        </div>
                                        <div class="container">
                                            <div class="row justify-content-md-center">
                                            <div class="col-10 mb-2">
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
                                            <div class="col-10 mb-4 mt-3">
                                            <a onClick={() => navigate('/Tambahinfobisnis')}  id="button" href="" style={{left:'50%' ,  right:'50%' }}>Selanjutnya</a>
                                            </div>
                                            </div>
                                        </div>
                                        <div class="container text-center">
                                            <div class="row justify-content-md-center">
                                            <div class="col-10 mb-3 mt-3">
                                            <h6 className=" fw-semibold">Sudah Punya Akun?</h6>
                                            <p><a class="link-offset-2 link-underline link-underline-opacity-0"  onClick={() => navigate('/Masukmitra')} href="" style={{color: '#4F5C92'}}>Masuk Sebagai mitra</a></p>
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
export default Daftarmitra;