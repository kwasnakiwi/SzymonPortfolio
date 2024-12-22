import './../styles/HomePage.css';
import git from './../assets/images/Git (2).png';
import linkedin from './../assets/images/in.png';
import hociak from './../assets/images/Zdjęcie.png';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../components/language-selector';

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
          <h3 className='animated-text'>&lt;/&gt; BACKEND DEVELOPER &lt;/&gt;</h3>
        </div>
      </div>
    </>
  )
}

export default HomePage