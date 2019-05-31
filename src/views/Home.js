import React from 'react';
import Navbar from "./Navbar";
import '.././App.scss';
import Logo from "../img/logo.png";

function Home() {
  return (
    <div className="container">
        <div className="header">
            <img className="logo" src={Logo} alt="Tilta attēls" />
        </div>
        <div className="body">    
            Sadaļā "Karte" ir iespējams apskatīt visu izgaismoto tiltu izvietojumu. Uzspiežot uz tilta numuru, redzēsi tā aprakstu, programmu un atbalstītājus.<br/> <br/>
            Vairāk informācijas par katru tiltu atradīsi sadaļā "tilti".<br/> <br/>
            Sadaļā "Programma" vari aplūkot pilnu svētku programmu ar visiem paredzētajiem pasākumiem un notikumiem.<br/><br/>
            Ja tomēr ir radušās šaubas vai vēlies uzzināt vairāk, apmeklē <a href="https://saldus.lv">saldus.lv</a> mājaslapu.
        </div>
        <Navbar />
        {/* <div className="buttons">
            <Link to="/map">
                <button className="button button--blue">Kur es atrodos</button>
            </Link>
            <Link to="/bridges">
                <button className="button button--black">Skatīt visus tiltus</button>
            </Link>
        </div> */}
    </div>
  );
}

export default Home;
