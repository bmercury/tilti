import React from 'react';
import Navbar from "./Navbar";
import '.././App.scss';

function Schedule() {
  return (
    <div className="container">
        <div className="body schedule">    
            <h1>Novada svētki 2019 programma</h1>
            <hr/>

            <div className="day">
              <h2>29. maijs <small>Ezerē</small></h2>
              <p>
                <b>plkst. 19.00</b> Novada svētku ieskandināšanas koncerts ar grupu "Rumbas kvartets"
              </p>
            </div>

            <div className="day">
              <h2>30. maijs <small>Jaunlutriņos</small></h2>
              <p>
                <b>plkst. 19.00</b> Novada svētku ieskandināšanas koncerts ar grupu "Rumbas kvartets"
              </p>
            </div>

            <div className="day">
              <h2>31. maijs <small>Saldus pilsētā</small></h2>
              <p>
                <b>plkst. 15.30</b> Svētbrīdis Saldus Sv. Jāņa evaņģēliski luteriskās draudzes baznīcā <br/><br/>
                <b>plkst. 19.00</b> Svētku gājiens "Saldus piepilda ar skaņu" (noslēgums Kalnsētas parka estrādē) <br/><br/>
                <b>plkst. 20.30</b> Svētku atklāšanas koncerts Kalnsētas parka estrādē <br/>
                <b>A.Andrejeva, A.Rakovska, A.Ieviņš, Igo, I.Pētersons, I.Kerēvica</b><br/><br/>
                <b>plkst. 22.00</b> Vides objekta atklāšana Saldus pilskalna stāvlaukuma <br/><br/>
                <b>plkst. 22.00 - 23.50</b> Muzikālās dzejas un sporta programmas pie pieciem tiltiem <br/><br/>
                <b>plkst. 23.50</b> Laulību ceremonijas uz diviem tiltiem <br/><br/>
                <b>plkst. 00.10</b> Mičošana pie Rozentāla akmens
              </p>
            </div>

            <div className="day">
              <h2>1. jūnijs <small>Saldus pilsētā</small></h2>
              <p>
                <b>plkst. 4.00 - 9.00</b> Pludiņmakšķerēšanas sacensības (no Saules ielas līdz Skrundas ielas tiltam)<br/><br/>
                <b>plkst. 9.00</b> Svētku tirgus O.Kalpaka laukumā<br/><br/>
                <b>no plkst. 10.00</b> Sportiskas aktivitātes Saldus sporta kompleksa teritorijā<br/>
                <b>Flagbols, PRO basket biatlons</b><br/><br/>
                <b>plkst. 10.00</b> 66North BALTIK velomaratons no Cieceres internātpamatskolas stadiona<br/><br/>
                <b>plkst. 10.00 - 15.00</b> Dienas skatuve Lielajā ielā<br/>
                <b>Saldus mazo vokālistu koncerts, Rīgas cirka skola, ansamblis "Akords", "Kas te? Es te!", burvju mākslinieks Dante Pecolli, grupa "rock'n'berries"</b><br/><br/>
                <b>plkst. 10.00 - 15.00</b> Jauniešu pļava (sētā aiz Saldus novada pašvaldības ēkas)<br/>
                <b>Kendamas sacensības, grafiti meistarklases, sarunu šovs ar iedvesmotājiem</b><br/><br/>
                <b>plkst. 10.00 - 16.00</b> Bērnu jampadracis spēļu laukumā "Pīļuks"<br/><br/>
                <b>plkst. 10.00 - 16.00</b> Zemessardzes, Valsts policijas, Saldus Tehnikuma u.c. aktivitātes tirgus laukuma stāvlaukumā<br/><br/>
                <b>plkst. 13.00</b> Draiskais skrējiens "Ciecernieks"<br/><br/>
                <b>plkst. 13.00 - 16.00</b> Bārmeņu konkurss "Saldus 2019", degustācijas, šovs O.Kalpaka laukumā<br/><br/>
                <b>plkst. 14.00</b> Cepļa atvēršana Kapelleru nama dārzā<br/><br/>
                <b>plkst. 15.30</b> Motoparāde Saldus pilsētas ielās<br/><br/>
                <b>plkst. 17.00 - 19.00</b> Senās Kalnmuižas spēles Saldus Tehnikuma teritorijā<br/><br/>
                <b>plkst. 19.00</b> Svētku lielkoncerts "Saldus piepilda - Saldus vieno" Kalnsētas parka estrādē<br/><br/>
                <b>plkst. 21.00</b> Svētku balle kopā ar grupām "Sudden Lights" un "Labvēlīgais Tips", kā arī DJ<br/><br/>
                <b>plkst. 22.00 - 03.30</b> Tiltu gaismošana<br/><br/>
              </p>
            </div>

            <div className="day">
              <h2>2. jūnijs <small>Jaunaucē</small></h2>
              <p>
                <b>plkst. 12.00</b> Jaunauces pils dārza svētki
              </p>
            </div>

        </div>
        <Navbar />
    </div>
  );
}

export default Schedule;
