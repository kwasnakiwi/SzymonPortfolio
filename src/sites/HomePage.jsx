import './../styles/HomePage.css';
import git from './../assets/images/Git (2).png';
import linkedin from './../assets/images/linkedin2.png';
import hociak from './../assets/images/Zdjęcie.png';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './../components/language-selector';
import phyton from './../assets/images/python (2) 1.png';
import django from './../assets/images/DJ.png';
import angular from './../assets/images/An.png';
import postgres from './../assets/images/Post.png';
import restapi from './../assets/images/Rest 2 1.png';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const {t} = useTranslation()

  return(
    <>
      <div className="center-container">
        <LanguageSelector />
        <div className="web-top">
          <div className="web-top-text">
            <span className='namer'>{t("name")}</span>
            <h1 className="web-top-title">{t("title")}</h1>
            <p className="web-top-desc">
              {t("desc")}
            </p>
            <div className='buttons'>
              <button className='cv'>{t("cvbutton")}</button>
              <div className='icons'>
                <img src={git} />
                <img src={linkedin} />
                <img src={linkedin} />
              </div>
            </div>
          </div>
          <img src={hociak} />
        </div>
        <div className='animated-text-box'>
          <h3 className='animated-text'>&lt;/&gt; BACKEND DEVELOPER &lt;/&gt; BACKEND DEVELOPER &lt;/&gt; BACKEND DEVELOPER &lt;/&gt; BACKEND DEVELOPER &lt;/&gt; BACKEND DEVELOPER &lt;/&gt; BACKEND DEVELOPER &lt;/&gt; BACKEND DEVELOPER &lt;/&gt; BACKEND DEVELOPER &lt;/&gt;</h3>
        </div>
        <div className='przejscie'>
          <h1 className='przejscie-title'>
            Lorem ipsum dolor sit amet consectetur. Nulla sodales.
          </h1>
        </div>
        <div className='umiejetnosci-box'>
          <div className="umiejetnosci-text">
            <h2 className='umiejetnosci-title'>
              Lorem ipsum dolor sit amet consectetur. Nulla sodales.
            </h2>
            <p className='umiejetnosci-desc'>
              Lorem ipsum dolor sit amet consectetur. In massa egestas arcu egestas suscipit consectetur nunc. Etiam proin enim mattis malesuada lectus augue tempus nunc. Risus ultrices sed at volutpat risus tellus velit. Etiam proin enim mattis malesuada lectus augue tempus nunc. Risus ultrices sed at volutpat risus tellus velit.  
            </p>
          </div>
          <div className='languages-boxes'>
            <Link to='/python'>
              <div className='lang-box' id='l1'> 
                <h3 className='lang-name'>Python</h3>
                <img src={phyton} />
              </div>
            </Link>
            <div className='lang-box' id='l2'>
              <h3 className='lang-name'>Django</h3>
              <img src={django} />
            </div>
            <div className='lang-box' id='l3'>
              <h3 className='lang-name'>Angular</h3>
              <img src={angular} />
            </div>
            <div className='lang-box' id='l4'>
              <h3 className='lang-name'>Postgres</h3>
              <img src={postgres} />
            </div>
            <div className='lang-box' id='l5'>
              <h3 className='lang-name'>RestAPI</h3>
              <img src={restapi} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage