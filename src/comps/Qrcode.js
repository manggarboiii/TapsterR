import React, {useState} from 'react';
import QR1 from "../assets/qricon.svg";
import QR2 from "../assets/QrImport.svg";
import './Qrcode.css';
import CopyButton from './CopyButton';

function Qrcode() {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal (!modal)
    }
  return (<>
      <div className="qrcontainer">
        <button onClick={toggleModal} className="circle">
            <div className="qrcenter">
            <img src={QR1} alt="icon" />        
            </div>
        </button>
        </div>
    {modal &&(
        <div onClick={toggleModal} className="modal">
            <div  className="ovelray"></div>
            <div className="modalcontent">
                <div className="image">
                <img src={QR2} alt="QRopen" />
                </div>
                <CopyButton text='http://manggarboiii.github.io/TapsterR'/>
            </div>
        </div>
    )}      
  </>
  )
}

export default Qrcode