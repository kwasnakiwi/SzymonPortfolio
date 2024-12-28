import { Link } from "react-router-dom";
import LanguageSelector from "../../components/language-selector";
import arrow from './../../assets/images/arrow.png';
import python from './../../assets/images/python (2) 1 (1).png';
import fullstar from './../../assets/images/fullstar.png';
import emptystar from './../../assets/images/emptystar.png';
import './../../styles/langs.css';

function Django() {
  return(
    <>
      <div className="center-container">
        <div className="content">
          <div className="left">
            <Link to='/' className="hideThisButton"><img src={arrow} /> Django</Link>
            <Link to='/' className="showThisButton"><img src={arrow} /></Link>
            <img className="left-img" src={python} />
          </div>
          <div className="right">
            <p className="right-desc">
              Lorem ipsum dolor sit amet consectetur. In massa egestas arcu egestas suscipit consectetur nunc. Etiam proin enim mattis malesuada lectus augue tempus nunc. Risus ultrices sed at volutpat risus tellus velit. Etiam proin enim mattis malesuada lectus augue tempus nunc. Risus ultrices sed at volutpat risus tellus velit.  
            </p>
            <div className="right-lists">
              <ul className="right-list hideOnMobile">
                <li>Lorem ipsum dolor sit</li>
                <li>Lorem ipsum dolor sit</li>
                <li>Lorem ipsum dolor sit</li>
                <li>Lorem ipsum dolor sit</li>
              </ul>
              <ul className="right-list hideOnMobile">
                <li>Lorem ipsum dolor sit</li>
                <li>Lorem ipsum dolor sit</li>
                <li>Lorem ipsum dolor sit</li>
                <li>Lorem ipsum dolor sit</li>
              </ul>
              <ul className="right-list showOnMobile">
                <li>Lorem ipsum dolor sit</li>
                <li>Lorem ipsum dolor sit</li>
                <li>Lorem ipsum dolor sit</li>
                <li>Lorem ipsum dolor sit</li>
                <li>Lorem ipsum dolor sit</li>
                <li>Lorem ipsum dolor sit</li>
                <li>Lorem ipsum dolor sit</li>
                <li>Lorem ipsum dolor sit</li>
              </ul>
            </div> 
            <div className="stars-box">
              <img src={fullstar} id="i1" />
              <img src={fullstar} id="i2" />
              <img src={fullstar} id="i3" />
              <img src={fullstar} id="i4" />
              <img src={emptystar} id="i5" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Django