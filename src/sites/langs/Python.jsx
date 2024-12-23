import { Link } from "react-router-dom";
import LanguageSelector from "../../components/language-selector";
import arrow from './../../assets/images/arrow.png';
import python from './../../assets/images/python (2) 1 (1).png';
import './../../styles/langs.css';

function Python() {
  return(
    <>
      <div className="center-container">
        <div className="content">
          <div className="left">
            <Link to='/'><img src={arrow} /> Python</Link>
            <img className="left-img" src={python} />
          </div>
          <div className="right">

          </div>
        </div>
      </div>
    </>
  )
}

export default Python