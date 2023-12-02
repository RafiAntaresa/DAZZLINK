import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Maincontent from './Pelanggan/pages/Maincontent.jsx';
import Reservasi from './Pelanggan/pages/Mainreservasi.jsx';
import Barber from './Pelanggan/pages/Mainbarber.jsx';
import Waktu from './Pelanggan/pages/Mainwaktu.jsx';
import Konfirmasi from './Pelanggan/pages/Mainkonfirmasi.jsx';
import Landing from './Pelanggan/pages/Landing.jsx';
import Daftarpelanggan from './Pelanggan/pages/Daftarpelanggan.jsx';
import Masukpelanggan from './Pelanggan/pages/Masukpelanggan.jsx';
import Riwayat from './Pelanggan/pages/Riwayat.jsx';
import Landingreservasi from './Pelanggan/pages/Landingreservasi.jsx';
import Landinguser from './Pelanggan/pages/Landinguser.jsx';
import Tiket from './Pelanggan/pages/Reservasitiket.jsx';
import Profile from './Pelanggan/pages/Profile.jsx';
import Masukmitra from './Mitra/pages/Masukmitra.jsx';
import Tambahinfobisnis from './Mitra/pages/Tambahinfobisnis.jsx';
import Tambahinfobarber from './Mitra/pages/Tambahinfobarber.jsx';
import Tambahinfopaket from './Mitra/pages/Tambahinfopaket.jsx';
import Tambahinfowaktu from './Mitra/pages/Tambahinfowaktu.jsx';
import Jadwalhari from './Mitra/pages/Jadwalhari.jsx';
import Infobisnis from './Mitra/pages/Infobisnis.jsx';
import Infobarber from './Mitra/pages/Infobarber.jsx';
import Infopaket from './Mitra/pages/Infopaket.jsx';
import Pilihanwaktu from './Mitra/pages/Infopilihanwaktu.jsx';
import Daftarmitra from './Mitra/pages/Daftarmitra.jsx';
import Riwayatmitra from './Mitra/pages/Riwayat.jsx';
import Detailpenilaian from './Pelanggan/pages/Detailpenilaian.jsx';
import Ubah from './pelanggan/pages/Ubah.jsx';
import Modalpaket from './Mitra/pages/Mtambahpaket.jsx';
import Modalbarber from './Mitra/pages/Mtambahbarber.jsx';





function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/Landing' element={<Landing/>} />
        <Route path='/Daftarpelanggan' element={<Daftarpelanggan/>} />
        <Route path='/Masukpelanggan' element={<Masukpelanggan/>} />
        <Route path='/Maincontent' element={<Maincontent/>} />
        <Route path='/Landinguser' element={<Landinguser/>} />
        <Route path='/Reservasi' element={<Reservasi/>} />
        <Route path='/Barber' element={<Barber/>} />
        <Route path='/Waktu' element={<Waktu/>} />
        <Route path='/Tiket' element={<Tiket/>} />
        <Route path='/Riwayat' element={<Riwayat/>} />
        <Route path='/Profile' element={<Profile/>} />
        <Route path='/Konfirmasi' element={<Konfirmasi/>} />
        <Route path='/Landingreservasi' element={<Landingreservasi/>} />
        <Route path='/Masukmitra' element={<Masukmitra/>} />
        <Route path='/Daftarmitra' element={<Daftarmitra/>} />
        <Route path='/Tambahinfobisnis' element={<Tambahinfobisnis/>} />
        <Route path='/Tambahinfobarber' element={<Tambahinfobarber/>} />
        <Route path='/Tambahinfopaket' element={<Tambahinfopaket/>} />
        <Route path='/Tambahinfowaktu' element={<Tambahinfowaktu/>} />
        <Route path='/Jadwalhari' element={<Jadwalhari/>} />
        <Route path='/Infobisnis' element={<Infobisnis/>} />
        <Route path='/Infobarber' element={<Infobarber/>} />
        <Route path='/Infopaket' element={<Infopaket/>} />
        <Route path='/Infopilihanwaktu' element={<Pilihanwaktu/>} />
        <Route path='/Riwayatmitra' element={<Riwayatmitra/>} />
        <Route path='/Detailpenilaian' element={<Detailpenilaian/>}/>
        <Route path='/Ubah' element={<Ubah/>}/>
        <Route path='/Modalpaket' element={<Modalpaket/>}/>
        <Route path='/Modalbarber' element={<Modalbarber/>}/>
      </Routes>
    </Router>
  )
}

export default App;
