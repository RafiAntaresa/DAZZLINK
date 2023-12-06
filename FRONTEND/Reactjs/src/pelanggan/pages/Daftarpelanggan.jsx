import { Navbar,Container } from "react-bootstrap";

import { useNavigate } from "react-router-dom";
import ModalberhasiLdaftar from "../component/modalberhasildaftar";

const Daftarpelanggan= () =>{

    const navigate = useNavigate ()
    
    return (
        <div>
            <div className="col-12">
            <Navbar  className="shadow mb-5 ">
                        <Container className="">
                        <Navbar.Brand>
                        <div class="container ">
                            <div class="row">
                                <div onClick={() => navigate('/Landing')} class="btn col " style={{marginLeft: '2rem'}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"  fill="currentColor" class="bi bi-arrow-left-circle" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        </Navbar.Brand>
                        <Navbar.Brand href="#home justify-content-end ">
                        <button onClick={() => navigate('/Landing')} type="button" style={{marginRight: '6rem'}} class="btn-close " aria-label="Close"></button>
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
                                    <h6 className="card-title text-center mb-5 fw-semibold">Buat akun untuk memesan Barbershop pilihan Anda</h6>
                                    <div>
                                        <div class="container">
                                            <div class="row justify-content-md-center">
                                            <div class="col-10 mb-4">
                                            <label for="exampleFormControlInput1" class="fw-bold fs-5 form-label">Nama Lengkap</label>
                                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Masukkan Nama Anda"/>
                                            </div>
                                            </div>
                                        </div>
                                        <div class="container">
                                            <div class="row justify-content-md-center">
                                            <div class="col-10 mb-4">
                                            <label for="exampleFormControlInput1" class="fw-bold fs-5 form-label">Email Kamu</label>
                                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Masukkan Email Kamu"/>
                                            </div>
                                            </div>
                                        </div>

                                        <div className="col-10"style={{marginLeft: '4.7rem' }}>
                                        <label for="exampleFormControlInput1" class="fw-bold fs-5 form-label">Foto</label>
                                        <div class="input-group mb-3">
                                        <input type="text" class="form-control" placeholder="Masukkan Foto" aria-label="Recipient's username" aria-describedby="button-addon2"></input>
                                        <div className='Tombol'><button class="btn" type="button" id="button-addon2" style={{backgroundColor: '#4F5C92' }}><svg xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20" fill="none">
                                        <path d="M8.33269 14.666V5.15768L5.29935 8.19102L3.66602 6.49935L9.49935 0.666016L15.3327 6.49935L13.6994 8.19102L10.666 5.15768V14.666H8.33269ZM2.49935 19.3327C1.85768 19.3327 1.30818 19.104 0.850851 18.6467C0.393517 18.1894 0.16524 17.6402 0.166018 16.9993V13.4993H2.49935V16.9993H16.4994V13.4993H18.8327V16.9993C18.8327 17.641 18.604 18.1905 18.1467 18.6479C17.6894 19.1052 17.1402 19.3335 16.4994 19.3327H2.49935Z" fill="#F2F2F2"/>
                                        </svg></button>
                                        </div>
                                    
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
                                        <br></br>
                                        <div class="container text-center">
                                            <div class="row justify-content-md-center">
                                            <div class="col-10 mb-4">
                                           <ModalberhasiLdaftar></ModalberhasiLdaftar>
                                           
                                            </div>
                                            </div>
                                        </div>
                                        <br></br>
                                        <div class="container text-center">
                                            <div class="row justify-content-md-center">
                                            <div class="col-10 mb-5">
                                            <h6 className=" fw-semibold">Sudah Punya Akun?</h6>
                                            <p onClick={() => navigate('/Masukpelanggan')}><a class="link-offset-2 link-underline link-underline-opacity-0" href="#" style={{color: '#4F5C92'}}>Masuk Sebagai Pelanggan</a></p>
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
export default Daftarpelanggan; 