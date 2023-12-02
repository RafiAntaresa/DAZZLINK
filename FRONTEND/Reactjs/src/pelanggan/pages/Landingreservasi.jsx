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

                    <div style={{marginLeft:'4rem'}} className="mt-5 col-11 ">
                        <h5 class="card-title mb-4 fs-5 fw-bold">Rekomendasi</h5>
                    </div>
                    <div style={{marginLeft:'4rem'}} className="justify-content-md-center col-11 ps-4 mb-5">
                        <div className=" row row-cols-3">
                            <div className="col">
                                <div className="card p-0" style={{width: '100%'}}>
                                    <div className="p-0 card-body border-1">
                                        <img src={baber1} 
                                            width="100%"
                                            height="100%"
                                            className="d-inline-block rounded"
                                            alt="" 
                                        />
                                        <h6 className="card-title m-2 fw-bold">Arfa Babershop</h6>
                                        <h6 className="card-subtitle ms-2 fw-semibold mb-1 " style={{fontSize:'0.8rem'}}>4.9  
                                        <svg xmlns="http://www.w3.org/2000/svg" width="0.7rem" height="0.7rem"  fill="currentColor" className="bi bi-star-fill mb-1 mx-1" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                        </svg> Sleman, Yogyakarta</h6>
                                        <button class=" mb-1 py-2 fw-semibold btn btn-secondary" id='button4' style={{background: 'white', marginTop: '29px' , marginLeft: '4rem'}}  >Reservasi</button>
                                    <br></br>
                                    <br></br>                                  
                                    <br></br> 
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                            <div className="card p-0" style={{width: '100%'}}>
                                    <div className="p-0 card-body border-1">
                                        <img src={baber1} 
                                            width="100%"
                                            height="100%"
                                            className="d-inline-block rounded"
                                            alt="" 
                                        />
                                        <h6 className="card-title m-2 fw-bold">Arfa Babershop</h6>
                                        <h6 className="card-subtitle ms-2 fw-semibold mb-1 " style={{fontSize:'0.8rem'}}>4.9  
                                        <svg xmlns="http://www.w3.org/2000/svg" width="0.7rem" height="0.7rem"  fill="currentColor" className="bi bi-star-fill mb-1 mx-1" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                        </svg> Sleman, Yogyakarta</h6>
                                        <button class=" mb-1 py-2 fw-semibold btn btn-secondary" id='button4' style={{background: 'white', marginTop: '29px' , marginLeft: '4rem'}}  >Reservasi</button>
                                    <br></br>
                                    <br></br>                                  
                                    <br></br>                                   </div>
                                </div>
                            </div>
                            <div className="col">                                <div className="card p-0" style={{width: '100%'}}>
                                    <div className="p-0 card-body border-1">
                                        <img src={baber1} 
                                            width="100%"
                                            height="100%"
                                            className="d-inline-block rounded"
                                            alt="" 
                                        />
                                        <h6 className="card-title m-2 fw-bold">Arfa Babershop</h6>
                                        <h6 className="card-subtitle ms-2 fw-semibold mb-1 " style={{fontSize:'0.8rem'}}>4.9  
                                        <svg xmlns="http://www.w3.org/2000/svg" width="0.7rem" height="0.7rem"  fill="currentColor" className="bi bi-star-fill mb-1 mx-1" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                        </svg> Sleman, Yogyakarta</h6>
                                        <button class=" mb-1 py-2 fw-semibold btn btn-secondary" id='button4' style={{background: 'white', marginTop: '29px' , marginLeft: '4rem'}}  >Reservasi</button>
                                    <br></br>
                                    <br></br>                                  
                                    <br></br>                                  </div>
                            </div>
                          </div>
                            <div className="col mt-3">
                                <div className="card p-0" style={{width: '100%'}}>
                                    <div className="p-0 card-body border-1">
                                        <img src={baber1} 
                                            width="100%"
                                            height="100%"
                                            className="d-inline-block rounded"
                                            alt="" 
                                        />
                                        <h6 className="card-title m-2 fw-bold">Arfa Babershop</h6>
                                        <h6 className="card-subtitle ms-2 fw-semibold mb-1 " style={{fontSize:'0.8rem'}}>4.9  
                                        <svg xmlns="http://www.w3.org/2000/svg" width="0.7rem" height="0.7rem"  fill="currentColor" className="bi bi-star-fill mb-1 mx-1" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                        </svg> Sleman, Yogyakarta</h6>
                                        <button class=" mb-1 py-2 fw-semibold btn btn-secondary" id='button4' style={{background: 'white', marginTop: '29px' , marginLeft: '4rem'}}  >Reservasi</button>
                                    <br></br>
                                    <br></br>                                  
                                    <br></br>                                   </div>
                                </div>
                            </div>
                            <div className="col mt-3">
                            <div className="card p-0" style={{width: '100%'}}>
                                    <div className="p-0 card-body border-1">
                                        <img src={baber1} 
                                            width="100%"
                                            height="100%"
                                            className="d-inline-block rounded"
                                            alt="" 
                                        />
                                        <h6 className="card-title m-2 fw-bold">Arfa Babershop</h6>
                                        <h6 className="card-subtitle ms-2 fw-semibold mb-1 " style={{fontSize:'0.8rem'}}>4.9  
                                        <svg xmlns="http://www.w3.org/2000/svg" width="0.7rem" height="0.7rem"  fill="currentColor" className="bi bi-star-fill mb-1 mx-1" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                        </svg> Sleman, Yogyakarta</h6>
                                        <button class=" mb-1 py-2 fw-semibold btn btn-secondary" id='button4' style={{background: 'white', marginTop: '29px' , marginLeft: '4rem'}}  >Reservasi</button>
                                    <br></br>
                                    <br></br>                                  
                                    <br></br>                                     </div>
                                </div>
                            </div>
                            <div className="col mt-3">                                
                            <div className="card p-0" style={{width: '100%'}}>
                                    <div className="p-0 card-body border-1">
                                        <img src={baber1} 
                                            width="100%"
                                            height="100%"
                                            className="d-inline-block rounded"
                                            alt="" 
                                        />
                                        <h6 className="card-title m-2 fw-bold">Arfa Babershop</h6>
                                        <h6 className="card-subtitle ms-2 fw-semibold mb-1 " style={{fontSize:'0.8rem'}}>4.9  
                                        <svg xmlns="http://www.w3.org/2000/svg" width="0.7rem" height="0.7rem"  fill="currentColor" className="bi bi-star-fill mb-1 mx-1" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                        </svg> Sleman, Yogyakarta</h6>
                                        <button class=" mb-1 py-2 fw-semibold btn btn-secondary" id='button4' style={{background: 'white', marginTop: '29px' , marginLeft: '4rem'}}  >Reservasi</button>
                                    <br></br>
                                    <br></br>                                  
                                    <br></br>                                  
                                      </div>
                            </div>
                          </div>
                        </div>
                    </div>
                    <div style={{marginLeft:'4rem'}} className="mt-5 col-11 text-center" >
                        <h2 class="card-title mb-3 fw-bold">Keunggulan Kami</h2>
                        <h3 class="card-title mb-4 fw-semibold">Nilai-nilai  yang kami kembangkan</h3>
                    </div>
                    <div style={{marginLeft:'4rem'}} className="col-11 mt-5 ps-4 mb-5 text-center">
                        <div className="row row-cols-3">
                            <div className="col">
                                <img src={gunting} 
                                            width="70rem"
                                            height="60rem"
                                            className="mb-2 d-inline-block"
                                            alt="" 
                                />
                                <h6 style={{fontSize:'19px'}} className="card-title my-2 fw-bold">Tukang Cukur Berpengalaman</h6>
                                <h6 style={{fontSize:'14px'}} className="card-title fw-semibold">Dengan pengalaman luas di industri perbarberan, barber expert kami siap melayani berbagai kebutuhan gaya Anda</h6>                  
                            </div>
                            <div className="col">
                                <img src={pelayanan} 
                                            width="70rem"
                                            height="60rem"
                                            className="mb-2 d-inline-block"
                                            alt="" 
                                />
                                <h6 style={{fontSize:'19px'}} className="card-title my-2 fw-bold">Pelayanan Terbaik</h6>
                                <h6 style={{fontSize:'14px'}} className="card-title fw-semibold">Kami berkomitmen untuk memberikan pelayanan terbaik kepada setiap pelanggan</h6>
                            
                            </div>
                            <div className="col">
                                <img src={reservasi} 
                                            width="70rem"
                                            height="60rem"
                                            className="mb-2 d-inline-block"
                                            alt="" 
                                />
                                <h6 style={{fontSize:'19px'}} className="card-title my-2 fw-bold">Kemudahan Reservasi</h6>
                                <h6 style={{fontSize:'14px'}} className="card-title fw-semibold">Pelanggan dapat dengan mudah membuka jadwal dan mereservasi waktu potong rambut melalui situs/aplikasi kami.</h6>
                            
                            </div>
                                
                            </div>
                    </div>
                    <div style={{marginLeft:'4rem'}} className="col-11 ps-4 mb-5">
                        <div className="row row-cols-2">
                            <div className="col mt-3 pt-5">
                            <h4 class="card-title mb-3 fw-bold">Tentang Pantasin</h4>
                            <h6 style={{fontSize:'14px'}} className="card-title fw-semibold">Kami adalah tim bernama Pantasin. Tujuan dari tim ini adalah
dibentuk untuk memecahkan masalah yang dialami pengguna. Untuk mengatasi masalah ini
kami membuat situs web reservasi untuk pelanggan barbershop yang tidak ingin mengalami antrian secara konvensional dengan memilih jadwal dan barber yang diinginkan secara real-time. Serta menampilkan rekomendasi barbershop, informasi jadwal, paket dan harga.</h6>
                            </div>
                            <div className="col">
                                <img src={about1} 
                                            width="90%"
                                            height="90%"
                                            className="m-0 d-inline-block"
                                            alt="" 
                                />
                            </div>
                        </div>
                    </div>
                    <div style={{marginLeft:'4rem'}} className="col-11 ps-4 mb-4">
                        <div>
                        <h6 style={{fontSize:'19px'}} className="card-title my-2 fw-bold">Tim Kami</h6>
                        </div>
                    </div>
                    <div style={{marginLeft:'4rem'}} className="col-11 ps-4 mb-5">
                        <div className="row row-cols-7 text-center">
                            <div className="col ">
                            <img
                                src={baber1}
                                width="80rem"  height="80rem"
                                className=" rounded-circle"
                                alt="React Bootstrap logo"
                            />
                            <p class="card-text mt-3 fw-semibold fs-6">Adit</p>
                            </div>
                            <div className="col">
                            <img
                                src={baber1}
                                width="80rem"  height="80rem"
                                className=" rounded-circle"
                                alt="React Bootstrap logo"
                            />
                            <p class="card-text mt-3 fw-semibold fs-6">Adit</p>
                            </div>
                            <div className="col">                            <img
                                src={baber1}
                                width="80rem"  height="80rem"
                                className=" rounded-circle"
                                alt="React Bootstrap logo"
                            />
                            <p class="card-text mt-3 fw-semibold fs-6">Adit</p></div>
                            <div className="col">                            <img
                                src={baber1}
                                width="80rem"  height="80rem"
                                className=" rounded-circle"
                                alt="React Bootstrap logo"
                            />
                            <p class="card-text mt-3 fw-semibold fs-6">Adit</p></div>
                            <div className="col">                            <img
                                src={baber1}
                                width="80rem"  height="80rem"
                                className=" rounded-circle"
                                alt="React Bootstrap logo"
                            />
                            <p class="card-text mt-3 fw-semibold fs-6">Adit</p></div>
                            <div className="col">                            <img
                                src={baber1}
                                width="80rem"  height="80rem"
                                className=" rounded-circle"
                                alt="React Bootstrap logo"
                            />
                            <p class="card-text mt-3 fw-semibold fs-6">Adit</p></div>
                            <div className="col">                            <img
                                src={baber1}
                                width="80rem"  height="80rem"
                                className=" rounded-circle"
                                alt="React Bootstrap logo"
                            />
                            <p class="card-text mt-3 fw-semibold fs-6">Adit</p></div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default Landingreservasi; 