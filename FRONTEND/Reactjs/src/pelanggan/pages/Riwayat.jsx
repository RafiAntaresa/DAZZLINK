import { Navbar, Dropdown, Container, Button, ButtonGroup,  } from "react-bootstrap";
import logo1 from "./../asset/Vector.png";
import person1 from "./../asset/person.jpeg";
import Footer from "../component/Footer";
import { useNavigate } from "react-router-dom";
import Navbarlandinguser from "../component/Navbarlandinguser";
const Riwayat = () =>{
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
                            <h5 class="card-title mb-4 fw-bold">Riwayat</h5>
                        </div>
                        <div className="row row-cols-6 text-center">
                            <div className="col pb-2 mb-3 border-bottom">Tanggal</div>
                            <div className="col mb-3 border-bottom">Status</div>
                            <div className="col mb-3 border-bottom">Jam</div>
                            <div className="col mb-3 border-bottom">Barber</div>
                            <div className="col mb-3 border-bottom">Paket</div>
                            <div className="col mb-3 border-bottom">Keterangan</div>
                        </div>
                        <div className="row row-cols-6 text-center">
                            <div className="col pb-2 mb-3 ">21-12-2023</div>
                            <div className="col ">Selesai</div>
                            <div className="col ">10.00</div>
                            <div className="col ">Dayat</div>
                            <div className="col ">Reguler</div>
                            <div className="col " onClick={() => navigate('/Detailpenilaian')} href="" style={{color: '#4F5C92'}}>Lihat Penilaian</div>
                        </div>
                        <div className="row row-cols-6 text-center">
                            <div className="col pb-2 mb-3 ">21-12-2023</div>
                            <div className="col ">Batal</div>
                            <div className="col ">10.00</div>
                            <div className="col ">Dayat</div>
                            <div className="col ">Reguler</div>
                            <div className="col "  onClick={() => navigate('/Detailpenilaian')}  href="" style={{color: '#4F5C92'}}>Lihat Penilaian</div>
                        </div>
                        <div className="row row-cols-6 text-center">
                            <div className="col pb-2 mb-3 ">21-12-2023</div>
                            <div className="col ">Batal</div>
                            <div className="col ">10.00</div>
                            <div className="col ">Dayat</div>
                            <div className="col ">Khusus</div>
                            <div className="col " onClick={() => navigate('/Detailpenilaian')}  href="" style={{color: '#4F5C92'}}>Lihat Penilaian</div>
                        </div>
                    </div>
                </div>
            </div>  
            <div style={{marginTop: '190px'}}>
            <Footer></Footer>
            </div>
        </div>
       
    )
}
export default Riwayat; 