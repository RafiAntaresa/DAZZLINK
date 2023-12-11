import baber1 from "./../asset/baber1.jpg";
import gunting from "./../asset/gunting.png";
import pelayanan from "./../asset/pelayanan.png";
import banner from "./../asset/banner.jpg"
import reservasi from "./../asset/reservasi.png"
import about1 from "./../asset/about1.png"
import Footer from "../component/Footer.jsx";
import { useNavigate } from "react-router-dom";
import Navbarlandinguser from "../component/Navbarlandinguser";
import Isilanding from "../component/Isilanding";
const Landinguser = () =>{
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
            <Isilanding></Isilanding>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default Landinguser; 