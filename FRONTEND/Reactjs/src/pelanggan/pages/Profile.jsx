import profile from "./../asset/profile.jpg";
import Footer from "../component/Footer.jsx";

import { useNavigate } from "react-router-dom";
import Navbarlandinguser from "../component/Navbarlandinguser";
const Profile = () =>{
    const navigate = useNavigate()
    return (
        <div>
            <div className="col-12">
           <Navbarlandinguser></Navbarlandinguser>
            </div>
            <div className="container">
                <div className="row justify-content-md-center ">
                    <div className=" mb-5 col-9 p-0">
                        <div className="col">
                            <h5 class="card-title mb-5 fw-bold">Profile Dazzlink</h5>
                        </div>
                        <div className="row row-cols-2 ">
                            <div style={{height:'13.6rem', width:'15rem' , marginLeft:'10rem', }} className="col-5 pt-3 ps-4 me-2   border rounded-3 border-2 ">
                                <img
                                src={profile}
                                width="180rem"  height="180rem"
                                style={{objectFit:'cover'}}
                                className=" border border-5  rounded-circle"
                                alt="React Bootstrap logo"
                                />
                            </div>

                            <div className="col-5 ps-3 pt-2  border mb-5 rounded-3  border-2 bg-white">
                                <div className="mb-4">
                                    <h6 class="card-title  fw-bold">Nama Lengkap</h6>
                                    <p class="fs-6 mt-1">Dazzlink</p>
                                </div>
                                <div className="mb-4">
                                    <h6 class="card-title fw-bold">Email Kamu</h6>
                                    <p class="fs-6 mt-1">dazzlinkoke07@gmail.com</p>
                                </div>
                                    <div className="">
                                    <h6 class="card-title  fw-bold">Kata Sandi</h6>
                                    <p class="fs-6 mt-1">**********</p>
                                </div>
                            </div>
                        </div>
                            <div className="col">
                                <button style={{marginLeft:'44.5rem'}} class="btn col-3 rounded-3 py-2 border-1 bg-white"  onClick={() => navigate('/Ubah')} id='button3'>Ubah Profil</button>
                            </div>
                    </div>


                </div>
            </div>
            <div style={{marginTop: '100px'}}>
            <Footer></Footer>
            </div>
        </div>
    )
}
export default Profile; 