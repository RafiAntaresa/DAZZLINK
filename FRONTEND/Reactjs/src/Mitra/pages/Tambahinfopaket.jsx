import { Container,Row,Col,Navbar} from "react-bootstrap";
import Footertambah from "../component/Footertambah";
import './Button.css'
import { useNavigate } from "react-router-dom"
import Modalscancel from "../component/Modalscancel";



function Tambahinfopaket() {
  const navigate = useNavigate ()
  
  return (
    <div className="col-12">
  <Navbar  className="shadow p-3 mb-5 ">
                        <Container className="">
                        <Navbar.Brand >
                        <div class="container ">
                            <div class="row">
                                <div class="btn col " style={{marginLeft: '2rem' }} onClick={() => navigate('/Tambahinfobarber')}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"  fill="currentColor" class="bi bi-arrow-left-circle" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
                                    </svg>
                                </div>
                                <div class="col"  >
                                <h5 class="card-title mt-1  fs-4 fw-semibold">Tambahkan Info Bisnis Anda</h5>
                                </div>
                            </div>
                        </div>
                        </Navbar.Brand>
                        <Navbar.Brand href="#home justify-content-end ">
                        <Modalscancel></Modalscancel>
                        </Navbar.Brand>
                        </Container>
            </Navbar>
    <div className="container">
            <div className="row justify-content" style={{marginLeft: '3rem' }}>
                <div className="col-6  p-0">
                    <div className="">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item fw-normal">Bisnis</li>
                                <li class="breadcrumb-item fw-normal">Barber</li>
                                <li class="breadcrumb-item  fw-bold">Paket</li>
                                <li class="breadcrumb-item ">Waktu</li>
                            </ol>
                        </nav>
                    </div>  
                 </div>
            </div>
      </div>


<br></br>


<div className='container' >

<Row>
<Col xs={6}>   
<div className="col-8"style={{marginLeft: '3rem' }}>
<div className="mb-3">
<label for="input">Nama Paket</label>
    <input type="text" class="form-control" id="inputHalfWidth" placeholder="Nama Paket anda"></input>
</div>
</div>

<div className="col-8"style={{marginLeft: '3rem' }}>
<div className="mb-3">
<label for="input">Estimasi Waktu Pelayanan</label>
<input type="text" class="form-control" id="inputHalfWidth" placeholder="Estimasi waktu anda"></input>
</div>
</div>

<div className="col-8"style={{marginLeft: '3rem' }}>
<div className="mb-3">
<label for="input">Harga</label>
<input type="text" class="form-control" id="inputHalfWidth" placeholder="Harga"></input>
</div>
</div>
            <div className="col-4"style={{marginLeft: '16rem' }}>
            
              <br></br>
              <br></br>
              <br></br>
            <a  id="button" href="" >Tambah</a>
            </div>

</Col>
<Col xs={6}>
<div className="col-10">
<div className="mb-3">
<div class="d-grid gap-2 col-6 mx-auto">
<a onClick={() => navigate('/Tambahinfowaktu')}  id="button" href="" style={{marginLeft: '10rem'}}>Selanjutnya</a>
</div>
</div>
</div>
</Col>
</Row>
</div>

<Container fluid="md" style={{marginTop: '50px' }} >
<Row style={{textAlign: 'center' }}>
        <hr></hr>
        <Col><b>Nomor kursi</b></Col>
        <Col><b>Jam</b></Col>
        <Col><b>Barber</b></Col>
        <Col><b>Paket</b></Col>
        </Row>
        <hr></hr>

        <Row style={{textAlign: 'center' }}>
        <Col>Paket Regular</Col>
        <Col>45 Menit</Col>
        <Col>Rp.30.000</Col>
        <Col><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.78 2C15.1998 2.00011 15.6088 2.13229 15.9493 2.37781C16.2898 2.62333 16.5444 2.96975 16.677 3.368L17.22 5H20.5C20.7652 5 21.0196 5.10536 21.2071 5.29289C21.3946 5.48043 21.5 5.73478 21.5 6C21.5 6.26522 21.3946 6.51957 21.2071 6.70711C21.0196 6.89464 20.7652 7 20.5 7H19.5V19C19.5 19.7957 19.1839 20.5587 18.6213 21.1213C18.0587 21.6839 17.2956 22 16.5 22H8.5C7.70435 22 6.94129 21.6839 6.37868 21.1213C5.81607 20.5587 5.5 19.7957 5.5 19V7H4.5C4.23478 7 3.98043 6.89464 3.79289 6.70711C3.60536 6.51957 3.5 6.26522 3.5 6C3.5 5.73478 3.60536 5.48043 3.79289 5.29289C3.98043 5.10536 4.23478 5 4.5 5H7.78L8.323 3.368C8.4557 2.96959 8.71043 2.62305 9.0511 2.37752C9.39176 2.13198 9.80107 1.9999 10.221 2H14.78ZM17.5 7H7.5V19C7.5 19.2652 7.60536 19.5196 7.79289 19.7071C7.98043 19.8946 8.23478 20 8.5 20H16.5C16.7652 20 17.0196 19.8946 17.2071 19.7071C17.3946 19.5196 17.5 19.2652 17.5 19V7ZM14.78 4H10.22L9.887 5H15.113L14.78 4Z" fill="#BFBFBF"/>
</svg></Col>
        </Row>
        <br></br>
        <Row style={{textAlign: 'center' }}>
        <Col>Paket Premium</Col>
        <Col>45 Menit</Col>
        <Col>Rp.40.000</Col>
        <Col><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.78 2C15.1998 2.00011 15.6088 2.13229 15.9493 2.37781C16.2898 2.62333 16.5444 2.96975 16.677 3.368L17.22 5H20.5C20.7652 5 21.0196 5.10536 21.2071 5.29289C21.3946 5.48043 21.5 5.73478 21.5 6C21.5 6.26522 21.3946 6.51957 21.2071 6.70711C21.0196 6.89464 20.7652 7 20.5 7H19.5V19C19.5 19.7957 19.1839 20.5587 18.6213 21.1213C18.0587 21.6839 17.2956 22 16.5 22H8.5C7.70435 22 6.94129 21.6839 6.37868 21.1213C5.81607 20.5587 5.5 19.7957 5.5 19V7H4.5C4.23478 7 3.98043 6.89464 3.79289 6.70711C3.60536 6.51957 3.5 6.26522 3.5 6C3.5 5.73478 3.60536 5.48043 3.79289 5.29289C3.98043 5.10536 4.23478 5 4.5 5H7.78L8.323 3.368C8.4557 2.96959 8.71043 2.62305 9.0511 2.37752C9.39176 2.13198 9.80107 1.9999 10.221 2H14.78ZM17.5 7H7.5V19C7.5 19.2652 7.60536 19.5196 7.79289 19.7071C7.98043 19.8946 8.23478 20 8.5 20H16.5C16.7652 20 17.0196 19.8946 17.2071 19.7071C17.3946 19.5196 17.5 19.2652 17.5 19V7ZM14.78 4H10.22L9.887 5H15.113L14.78 4Z" fill="#BFBFBF"/>
</svg></Col>
        </Row>
        <br></br>
        <Row style={{textAlign: 'center' }}>
        <Col>Paket Khusus</Col>
        <Col>45 Menit</Col>
        <Col>Rp.50.000</Col>
        <Col><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.78 2C15.1998 2.00011 15.6088 2.13229 15.9493 2.37781C16.2898 2.62333 16.5444 2.96975 16.677 3.368L17.22 5H20.5C20.7652 5 21.0196 5.10536 21.2071 5.29289C21.3946 5.48043 21.5 5.73478 21.5 6C21.5 6.26522 21.3946 6.51957 21.2071 6.70711C21.0196 6.89464 20.7652 7 20.5 7H19.5V19C19.5 19.7957 19.1839 20.5587 18.6213 21.1213C18.0587 21.6839 17.2956 22 16.5 22H8.5C7.70435 22 6.94129 21.6839 6.37868 21.1213C5.81607 20.5587 5.5 19.7957 5.5 19V7H4.5C4.23478 7 3.98043 6.89464 3.79289 6.70711C3.60536 6.51957 3.5 6.26522 3.5 6C3.5 5.73478 3.60536 5.48043 3.79289 5.29289C3.98043 5.10536 4.23478 5 4.5 5H7.78L8.323 3.368C8.4557 2.96959 8.71043 2.62305 9.0511 2.37752C9.39176 2.13198 9.80107 1.9999 10.221 2H14.78ZM17.5 7H7.5V19C7.5 19.2652 7.60536 19.5196 7.79289 19.7071C7.98043 19.8946 8.23478 20 8.5 20H16.5C16.7652 20 17.0196 19.8946 17.2071 19.7071C17.3946 19.5196 17.5 19.2652 17.5 19V7ZM14.78 4H10.22L9.887 5H15.113L14.78 4Z" fill="#BFBFBF"/>
</svg></Col>
        </Row>
        <br></br>
        

        <div style={{ marginTop : '50px' }}> <Footertambah ></Footertambah></div>
       
    </Container>


</div>
  )
}

export default Tambahinfopaket
