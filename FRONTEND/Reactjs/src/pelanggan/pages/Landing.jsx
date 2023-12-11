import banner from "./../asset/banner.jpg"
import Footer from "./../component/Footer.jsx";
import './Button.css'
import { useNavigate } from "react-router-dom";
import Navbarlanding from "../component/Navbarlanding";
import Isilanding from "../component/Isilanding";
const Landing = () =>{
    const navigate = useNavigate ()
    return (
        <div>
            <div className="col-12">
               <Navbarlanding></Navbarlanding>
            </div>
            <div className="container">
                <div className="row justify-content-md-center ">
                    <div className="mt-3 mb-5 col-11 p-0">
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
export default Landing; 