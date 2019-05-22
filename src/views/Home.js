import React from 'react';
import '.././App.scss';
import Bridge from '.././img/bridge_black.svg';
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function Home() {
  return (
    <div className="container">
        <div className="header">
            <img className="logo" src={Bridge} alt="Tilta attēls" />
        </div>
        <div className="body">    
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc gravida ullamcorper lacus a venenatis. Phasellus ac mi et tortor hendrerit vestibulum a quis justo. Cras eget erat at ex viverra dignissim. Proin vitae nisl sed leo luctus placerat. Morbi mollis pretium velit eget cursus. Quisque sit amet ex eu magna bibendum sollicitudin. Duis at tincidunt enim, sit amet finibus arcu. In volutpat lacus vel mi sodales interdum eu eget ante. Sed at dictum ligula. Donec porta sodales tincidunt. Maecenas commodo leo eget tortor tempor, eu rutrum eros feugiat. Vestibulum vitae ultricies quam. Fusce ornare augue nec orci facilisis iaculis. Maecenas massa nibh, fringilla at tortor a, sagittis ornare mauris.
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
