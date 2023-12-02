import { Container,Row,Col,Navbar} from "react-bootstrap";
import './Button.css'
import { useNavigate } from "react-router-dom"
import Modalcancel from "../component/modalcancel";
import Modalubah from "../component/modalubah";




function Ubah() {
  const navigate = useNavigate ()
  
  return (
    <div className="col-12">
  <Navbar  className="shadow p-3 mb-5 ">
                        <Container className="">
                        <Navbar.Brand >
                        <div class="container ">
                            <div class="row">
                                <div class="btn col " style={{marginLeft: '2rem' }} >
                                </div>
                                <div class="col"  >
                                <h5 class="card-title mt-1  fs-4 fw-semibold">Ubah Profil Anda</h5>
                                </div>
                            </div>
                        </div>
                        </Navbar.Brand>
                        <Navbar.Brand href="#home justify-content-end ">
                        <Modalcancel></Modalcancel>
                        </Navbar.Brand>
                        </Container>
            </Navbar>
    <div className="container">
            <div className="row justify-content" style={{marginLeft: '3rem' }}>
                <div className="col-6  p-0">
                    <div className="">
                        
                    </div>  
                 </div>
            </div>
      </div>


<br></br>


<div className='container' >

<Row>
<Col xs={12}>   
<div className="col-5"style={{marginLeft: '25rem' }}>
<div className="mb-3">
<label for="input">Nama Lengkap</label>
    <input type="text" class="form-control" id="inputHalfWidth" placeholder="DAZZLINK"></input>
</div>
</div>

<div className="col-5"style={{marginLeft: '25rem' }}><div className="mb-3">
<label for="input">Email Kamu</label>
<input type="text" class="form-control" id="inputHalfWidth" placeholder="dazzlinkoke07@gmail.com"></input>
</div>
</div>

<div className="col-5"style={{marginLeft: '25rem' }}><div className="mb-3">
<label for="input">Kata Sandi baru</label>
<input type="password" id="pass" class="form-control" placeholder="Masukkan Password Anda"></input>
</div>
</div>
<div className="col-5"style={{marginLeft: '43rem' }}>            
              <br></br>
              <br></br>
              <br></br>
<Modalubah></Modalubah>            
</div>

</Col>
<Col xs={6}>
<div className="col-10">
<div className="mb-3">
<div class="d-grid gap-2 col-6 mx-auto">
{/* <a onClick={() => navigate('/Tambahinfowaktu')}  id="button" href="" style={{marginLeft: '10rem'}}>Selanjutnya</a> */}
</div>
</div>
</div>
</Col>
</Row>
</div>

</div>
  )
}

export default Ubah
