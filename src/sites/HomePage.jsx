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
import project from './../assets/images/project.png';
import { Link } from 'react-router-dom';
import Program from '../components/program';
// import {BrowserRouter as useLocation, Route, Routes, Router } from 'react-router-dom';
// import React, { useEffect } from "react";

const HomePage = () => {
  const {t} = useTranslation()

  // const location = useLocation();

  // useEffect(() => {
  //   if (location.hash) {
  //     const element = document.querySelector(location.hash);
  //     if (element) {
  //       element.scrollIntoView({ behavior: "smooth" });
  //     }
  //   }
  // }, [location]);


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
        {/* <div className='animated-text-box'>
          <h3 className='animated-text'>&lt;/&gt; BACKEND DEVELOPER &lt;/&gt; BACKEND DEVELOPER &lt;/&gt; BACKEND DEVELOPER &lt;/&gt; BACKEND DEVELOPER &lt;/&gt; BACKEND DEVELOPER &lt;/&gt; BACKEND DEVELOPER &lt;/&gt; BACKEND DEVELOPER &lt;/&gt; BACKEND DEVELOPER &lt;/&gt;</h3>
        </div> */}
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
          <div className='languages-boxes' id="#languages">
            <Link to='/restapi'>
              <div className='lang-box' id='l1'> 
                <h3 className='lang-name'>RestAPI</h3>
                <img src={restapi} />
              </div>
            </Link>
            <Link to='/django'>
              <div className='lang-box' id='l2'>
                <h3 className='lang-name'>Django</h3>
                <img src={django} />
              </div>
            </Link>
            <Link to='/python'>
              <div className='lang-box' id='l3'>
                <h3 className='lang-name'>Phyton</h3>
                <img src={phyton} />
              </div>
            </Link>
            <Link to=''>
              <div className='lang-box' id='l4'>
                <h3 className='lang-name'>Postgres</h3>
                <img src={postgres} />
              </div>
            </Link>
            <Link to=''>
              <div className='lang-box' id='l5'>
                <h3 className='lang-name'>Angular</h3>
                <img src={angular} />
              </div>
            </Link>
          </div>
        </div>
        <div className='projects-box'>
          <h2 className='programmer-text-h2'>Lorem ipsum</h2>
          <Program />
          <div className="projects">
            <img src={project} id='pr1' className='fadeIn'/>
            <img src={project} id='pr2' className='fadeIn'/>
            <img src={project} id='pr3' className='fadeIn'/>
            <img src={project} id='pr4' className='fadeIn'/>
          </div>
          <Link to='' className='bottom-projects-btn fadeIn'>Zobacz wszystkie projekty</Link>
        </div>
      </div>
    </>
  )
}

export default HomePage