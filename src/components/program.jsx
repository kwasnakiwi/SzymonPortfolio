import React, { useEffect } from "react";
import './../styles/Components.css';
import vector1 from './../assets/images/-.png'
import vector2 from './../assets/images/-x-.png'
import vector3 from './../assets/images/x.png'

const Program = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animated");
          } else {
            entry.target.classList.remove("animated"); // Opcjonalnie usuń klasę
          }
        });
      },
      { threshold: 0.1 } // 10% widoczności
    );

    const targets = document.querySelectorAll(".container-container");
    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="container-container">
        <div className="over-container">
          <h4>python</h4>
        </div>
        <div className="container">
          <p className="text"><tt>coffee = <span className="green">"Espresso"</span></tt></p>
          <p className="text text2"><tt>strenght = <span className="pink-red">2</span></tt></p>
          <p className="text text3"><tt><span className="orange">print</span>(<span className="green">f" &#123;coffee&#125; with &#123;strenght&#125; Shots is ready!"</span>)</tt></p>
        </div>
      </div>
    </>
  );
};

export default Program;
