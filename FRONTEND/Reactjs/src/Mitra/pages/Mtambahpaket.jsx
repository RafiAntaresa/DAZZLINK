import { Container,Row,Col,Navbar} from "react-bootstrap";
import './Button.css'
import { useNavigate } from "react-router-dom"
import Modalscancel1 from '../component/Modalscancel1';
import ModalcancelM from '../component/ModalcancelM';




function Modalpaket() {
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
                                <h5 class="card-title mt-1  fs-4 fw-semibold">Tambah Paket Anda</h5>
                                </div>
                            </div>
                        </div>
                        </Navbar.Brand>
                        <Navbar.Brand href="#home justify-content-end ">
                        <ModalcancelM ></ModalcancelM>
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
<label for="input">Nama Paket</label>
    <input type="text" class="form-control" id="inputHalfWidth" placeholder="Masukkan Nama Paket"></input>
</div>
</div>

<div className="col-5"style={{marginLeft: '25rem' }}><div className="mb-3">
<label for="input">Waktu Pelayanan</label>
<input type="text" class="form-control" id="inputHalfWidth" placeholder="Masukkan waktu"></input>
</div>
</div>

<div className="col-5"style={{marginLeft: '25rem' }}><div className="mb-3">
<label for="input">Harga</label>
<input type="password" id="pass" class="form-control" placeholder="Masukkan Harga"></input>
</div>
</div>
<div className="col-5"style={{marginLeft: '25rem' }}><div className="mb-3">
<label for="input">Deskripsi</label>
<textarea class="form-control" aria-label="With textarea" placeholder="Masukkan Deskripsi anda"></textarea>
</div>
</div>
<div className="col-5"style={{marginLeft: '32rem' }}  >            
              <br></br>
              <br></br>
              <br></br>        
             <Modalscancel1></Modalscancel1>
  
</div>

</Col>
</Row>
</div>

</div>
  )
}

export default Modalpaket
