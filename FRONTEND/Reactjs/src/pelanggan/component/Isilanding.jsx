import React from 'react'
import gunting from "./../asset/gunting.png";
import pelayanan from "./../asset/pelayanan.png";
import reservasi from "./../asset/reservasi.png"
import about1 from "./../asset/about1.png"
import { useNavigate } from "react-router-dom";


function Isilanding() {
    const navigate = useNavigate ()
  return (
    <div>
          <div className="mt-5 col-11 " style={{marginLeft: '58px'}}>
                        <h5 class="card-title mb-4 fs-5 fw-bold">Rekomendasi</h5>
                    </div>
      <div className="col-11 ps-4 mb-5" style={{marginLeft: '40px'}}>
                        <div className="row row-cols-3">
                            <div className="col">
                                <div className="card p-0" >
                                    <div className="p-0 card-body border-1">
                                    <img src='src/Pelanggan/asset/R1.png'
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
                                        <button class=" mb-1 py-2 fw-semibold btn btn-secondary" id='button4' style={{background: 'white', marginTop: '29px' , marginLeft: '4rem', fontSize: '14px'}} onClick={() => navigate('/Maincontent')} >Reservasi</button>
                                    <br></br>
                                    <br></br>                                  
                                    <br></br>                                      
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                            <div className="card p-0" style={{width: '100%'}}>
                                    <div className="p-0 card-body border-1">
                                    <img src='src/Pelanggan/asset/R3.png'
                                            width="100%"
                                            height="100%"
                                            className="d-inline-block rounded"
                                            alt="" 
                                        />
                                        <h6 className="card-title m-2 fw-bold">Multi Babershop</h6>
                                        <h6 className="card-subtitle ms-2 fw-semibold mb-1 " style={{fontSize:'0.8rem'}}>4.3
                                        <svg xmlns="http://www.w3.org/2000/svg" width="0.7rem" height="0.7rem"  fill="currentColor" className="bi bi-star-fill mb-1 mx-1" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                        </svg> Gunung kidul, Yogyakarta</h6>
                                        <button class=" mb-1 py-2 fw-semibold btn btn-secondary" id='button4' style={{background: 'white', marginTop: '29px' , marginLeft: '4rem', fontSize: '14px'}}  onClick={() => navigate('/Masukpelanggan')} >Reservasi</button>
                                    <br></br>
                                    <br></br>                                  
                                    <br></br>                                   </div>
                                </div>
                            </div>
                            <div className="col">                                <div className="card p-0" style={{width: '100%'}}>
                                    <div className="p-0 card-body border-1">
                                        <img src='src/Pelanggan/asset/R2.png'
                                            width="100%"
                                            height="100%"
                                            className="d-inline-block rounded"
                                            alt="" 
                                        />
                                        <h6 className="card-title m-2 fw-bold">Kew Babershop</h6>
                                        <h6 className="card-subtitle ms-2 fw-semibold mb-1 " style={{fontSize:'0.8rem'}}>4.4
                                        <svg xmlns="http://www.w3.org/2000/svg" width="0.7rem" height="0.7rem"  fill="currentColor" className="bi bi-star-fill mb-1 mx-1" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                        </svg> Bantu, Yogyakarta</h6>
                                        <button class=" mb-1 py-2 fw-semibold btn btn-secondary" id='button4' style={{background: 'white', marginTop: '29px' , marginLeft: '4rem' , fontSize: '14px'}} onClick={() => navigate('/Masukpelanggan')} >Reservasi</button>
                                    <br></br>
                                    <br></br>                                  
                                    <br></br>                                  </div>
                            </div>
                          </div>
                            <div className="col mt-3">
                                <div className="card p-0" style={{width: '100%'}}>
                                    <div className="p-0 card-body border-1">
                                    <img src='src/Pelanggan/asset/R4.png'
                                            width="100%"
                                            height="100%"
                                            className="d-inline-block rounded"
                                            alt="" 
                                        />
                                        <h6 className="card-title m-2 fw-bold">Sentosa Babershop</h6>
                                        <h6 className="card-subtitle ms-2 fw-semibold mb-1 " style={{fontSize:'0.8rem'}}>4.6
                                        <svg xmlns="http://www.w3.org/2000/svg" width="0.7rem" height="0.7rem"  fill="currentColor" className="bi bi-star-fill mb-1 mx-1" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                        </svg> Sleman, Yogyakarta</h6>
                                        <button class=" mb-1 py-2 fw-semibold btn btn-secondary" id='button4' style={{background: 'white', marginTop: '29px' , marginLeft: '4rem' , fontSize: '14px'}} onClick={() => navigate('/Masukpelanggan')} >Reservasi</button>
                                    <br></br>
                                    <br></br>                                  
                                    <br></br>                                   </div>
                                </div>
                            </div>
                            <div className="col mt-3">
                            <div className="card p-0" style={{width: '100%'}}>
                                    <div className="p-0 card-body border-1">
                                    <img src='src/Pelanggan/asset/R5.jpg'
                                            width="100%"
                                            height="100%"
                                            className="d-inline-block rounded"
                                            alt="" 
                                        />
                                        <h6 className="card-title m-2 fw-bold">Newall Babershop</h6>
                                        <h6 className="card-subtitle ms-2 fw-semibold mb-1 " style={{fontSize:'0.8rem'}}>4.8
                                        <svg xmlns="http://www.w3.org/2000/svg" width="0.7rem" height="0.7rem"  fill="currentColor" className="bi bi-star-fill mb-1 mx-1" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                        </svg> Kota matya, Yogyakarta</h6>
                                        <button class=" mb-1 py-2 fw-semibold btn btn-secondary" id='button4' style={{background: 'white', marginTop: '29px' , marginLeft: '4rem'}}  onClick={() => navigate('/Masukpelanggan')}>Reservasi</button>
                                    <br></br>
                                    <br></br>                                  
                                    <br></br>                                     </div>
                                </div>
                            </div>
                            <div className="col mt-3">                                
                            <div className="card p-0" style={{width: '100%'}}>
                                    <div className="p-0 card-body border-1">
                                    <img src='src/Pelanggan/asset/R6.png'
                                            width="100%"
                                            height="100%"
                                            className="d-inline-block rounded"
                                            alt="" 
                                        />
                                        <h6 className="card-title m-2 fw-bold">Out stand Babershop</h6>
                                        <h6 className="card-subtitle ms-2 fw-semibold mb-1 " style={{fontSize:'0.8rem'}}>4.7  
                                        <svg xmlns="http://www.w3.org/2000/svg" width="0.7rem" height="0.7rem"  fill="currentColor" className="bi bi-star-fill mb-1 mx-1" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                        </svg> Kulan, Yogyakarta</h6>
                                        <button class=" mb-1 py-2 fw-semibold btn btn-secondary" id='button4' style={{background: 'white', marginTop: '29px' , marginLeft: '4rem'}}  onClick={() => navigate('/Masukpelanggan')}>Reservasi</button>
                                    <br></br>
                                    <br></br>                                  
                                    <br></br>                                 
                                     </div>
                            </div>
                          </div>
                        </div>
                    </div>
                    <div className="mt-5 col-11 text-center"  style={{marginLeft: '40px'}}>
                        <h2 class="card-title mb-3 fw-bold" style={{marginLeft: '40px'}}>Keunggulan Kami</h2>
                        <h3 class="card-title mb-4 fw-semibold" style={{marginLeft: '40px'}}>Nilai-nilai  yang kami kembangkan</h3>
                    </div>
                    <div className="col-11 mt-5 ps-4 mb-5 text-center" style={{marginLeft: '40px'}}>
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
                    <div className="col-11 ps-4 mb-5" style={{marginLeft: '40px'}}>
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
                    <div className="col-11 ps-4 mb-4" style={{marginLeft: '40px'}}>
                        <div>
                        <h6 style={{fontSize:'19px'}} className="card-title my-2 fw-bold">Tim Kami</h6>
                        </div>
                    </div>
                    <div className="col-11 ps-4 mb-5" style={{marginLeft: '40px'}}>
                        <div className="row row-cols-7 text-center">
                            <div className="col ">
                            <img src='src/Pelanggan/asset/O1.png'
                                width="80rem"  height="80rem"
                                className=" rounded-circle"
                                alt="React Bootstrap logo"
                            />
                            <p class="card-text mt-3 fw-semibold fs-6">DZAKA</p>
                            </div>
                            <div className="col">
                            <img src='src/Pelanggan/asset/O2.png'
                                width="80rem"  height="80rem"
                                className=" rounded-circle"
                                alt="React Bootstrap logo"
                            />
                            <p class="card-text mt-3 fw-semibold fs-6">APRI</p>
                            </div>
                            <div className="col">                             <img src='src/Pelanggan/asset/O3.png'
                                width="80rem"  height="80rem"
                                className=" rounded-circle"
                                alt="React Bootstrap logo"
                            />
                            <p class="card-text mt-3 fw-semibold fs-6">SUCI</p></div>
                            <div className="col">                            <img src='src/Pelanggan/asset/O4.png'
                                width="80rem"  height="80rem"
                                className=" rounded-circle"
                                alt="React Bootstrap logo"
                            />
                            <p class="card-text mt-3 fw-semibold fs-6">RAFI</p></div>
                            <div className="col">                             <img src='src/Pelanggan/asset/O5.png'
                                width="80rem"  height="80rem"
                                className=" rounded-circle"
                                alt="React Bootstrap logo"
                            />
                            <p class="card-text mt-3 fw-semibold fs-6">SYAWAL</p></div>
                            <div className="col">                            <img src='src/Pelanggan/asset/O6.png'
                                width="80rem"  height="80rem"
                                className=" rounded-circle"
                                alt="React Bootstrap logo"
                            />
                            <p class="card-text mt-3 fw-semibold fs-6">IKSAN</p></div>
                            <div className="col">                           <img src='src/Pelanggan/asset/O7.png'
                                width="80rem"  height="80rem"
                                className=" rounded-circle"
                                alt="React Bootstrap logo"
                            />
                            <p class="card-text mt-3 fw-semibold fs-6">ULIL</p></div>
                        </div>
                    </div>
                </div>
  )
}

export default Isilanding
