import React, { Fragment } from 'react';
import '../App.css';
import BgImg from '../Components/Img/bgimg.jpg';

const MainPage = () => {
    return <Fragment>
    <section style = {{ backgroundImage:`url(${BgImg})`, 
    backgroundSize:"cover", backgroundPosition:"center", 
    marginRight:"-20px", height:"980px"}}>
      <section style={{textAlign:"center", padding:"120px"}}>
        <div className="intro">
          <div className="im">I'm</div>
          <div className="rvl"> <span>N.Abashidze</span></div>
          <div className="btmrvl"> <span>from republic of georgia</span></div>
        </div>
      </section>
    </section>
    </Fragment>
  }

export default MainPage;