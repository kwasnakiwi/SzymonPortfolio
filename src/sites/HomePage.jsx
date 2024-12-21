import './../styles/HomePage.css';
import git from './../assets/images/Git (2).png';
import linkedin from './../assets/images/in.png';
import hociak from './../assets/images/Zdjęcie.png';

function HomePage() {
  return(
    <>
      <div className="center-container">
        <div className="web-top">
          <div className="web-top-text">
            <span className="namer">Jestem Szymon</span>
            <h1 className="web-top-title">Lorem ipsum dolor sit amet consectetur. Nulla sodales.</h1>
            <p className="web-top-desc">
              Lorem ipsum dolor sit amet consectetur. In massa egestas arcu egestas suscipit 
              consectetur nunc. Etiam proin enim mattis malesuada lectus augue tempus nunc. 
              Risus ultrices sed at volutpat risus tellus velit. 
            </p>
            <div className='buttons'>
              <button className='cv'>Pobierz CV</button>
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