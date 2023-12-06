import { useState } from "react";
import { FaStar } from "react-icons/fa";
import baber1 from "./../asset/baber1.jpg";
import { useNavigate } from "react-router-dom";


const colors = {
    black: "#000000",
    grey: "#a9a9a9"
    
};



function Nilai() {
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0)

  const handleClick = value => {
    setCurrentValue(value)
  }

  const handleMouseOver = newHoverValue => {
    setHoverValue(newHoverValue)
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined)
  }

  const navigate = useNavigate ()

  return (
    <div >
    <div style={styles.container}>
        <div className="col-12">
       
<div>   
       <h3 className="text-center card-title mb-2 fw-bold">Penilaian</h3>
       <div style={{marginLeft: '-7.5rem'}}> <img src='src/Pelanggan/asset/R1.png' 
                                            width="500px"
                                            height="325px"
                                            className="d-inline-block rounded"
                                            alt="" 
                                        />
</div>
<br></br>
       
       <h5 className="text-center card-title mb-2 fw-bold">Arfa Barbershop</h5> 
       <div style={{marginLeft: '4.3rem'}}>   
    
        <div style= {styles.stars} >
        {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={24}
              onClick={() => handleClick(index + 1)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
              color={(hoverValue || currentValue) > index ? colors.black : colors.grey}
              style={{
                marginRight: 10,
                cursor: "pointer"
              }}
            />
          )
        })}
      </div>
      </div>  
      </div> 
      <div style={{marginLeft: '0.5rem'}}>
      <p  class=" fw-semibold fs-7 " style={{marginBottom: ' -10px', marginTop: '20px'}}>Komentar</p>
      <textarea
        placeholder="Tambahkan Komentar dan saran anda!"
        style={styles.textarea}
      />
      <br></br>
      <br></br>
</div>
      <div id='button' style={{marginLeft: '10rem'}}  onClick={() => navigate('/Detailpenilaian')}>
        
        Kirim
      </div>
    </div>
    </div>
    </div>
  );
};


const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  stars: {
    display: "flex",
    flexDirection: "row",
  },
  textarea: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    padding: 10,
    margin: "20px 0",
    minHeight: 100,
    width: 300
  },
  button: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    width: 300,
    padding: 10,
  }

};




export default Nilai;
 