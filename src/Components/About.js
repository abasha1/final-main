import React, {Fragment} from 'react';
import '../App.css';

import image1 from '../Components/Img/fb.jpg';
import image2 from '../Components/Img/github.jpg';
import image3 from '../Components/Img/twitter.jpg';
import image4 from '../Components/Img/linkedin.jpg';

const AboutPage = () => {
    return <Fragment>
      <div>
          <a className="as" target="_blank" href="call +995(577-999-676">
          <h5 className="aa">Contact Telephone +995(577-999-676)</h5></a>
          <a className="as" target="_blank" href="call">
            <h5 className="aa">Email nikoloz.abashidze.2@btu.edu.ge</h5></a>
      </div>
      <div style={{margin:"70px"}}>
        <a target="_blank" href="https://www.facebook.com/Nika.Abashidze0/">
          <img src={image1} alt="image" class="pic1"></img></a>
        <a target="_blank" href="hhttps://github.com/abasha1">
          <img src={image2} alt="image" class="pic1"></img></a>
        <a target="_blank" href="https://www.facebook.com/Nika.Abashidze0/">
          <img src={image3} alt="image" class="pic1"></img></a>
        <a target="_blank" href="https://www.facebook.com/Nika.Abashidze0/">
          <img src={image4} alt="image" class="pic1"></img></a>
        </div>
      </Fragment>
  }
export default AboutPage;