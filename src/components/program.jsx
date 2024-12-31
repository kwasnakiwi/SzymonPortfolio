import React, { useEffect } from "react";
import "./../styles/Components.css";
import vector1 from "./../assets/images/-.png";
import vector2 from "./../assets/images/-x-.png";
import vector3 from "./../assets/images/x.png";

const Program = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const containerContainer = entry.target; // .container-container
          const overContainer = containerContainer.querySelector(".over-container");
          const container = containerContainer.querySelector(".container");

          if (entry.isIntersecting) {
            // Dodajemy DWIE klasy równocześnie
            containerContainer.classList.add("animated"); 
            overContainer?.classList.add("animated2");
            container?.classList.add("animated2");
          } else {
            // (opcjonalnie) usuwa klasy po wyjściu z pola widzenia
            containerContainer.classList.remove("animated");
            overContainer?.classList.remove("animated2");
            container?.classList.remove("animated2");
          }
        });
      },
      { threshold: 0.1 } // 10% widoczności
    );

    // Obserwujemy elementy .container-container
    const targets = document.querySelectorAll(".container-container");
    targets.forEach((target) => observer.observe(target));

    // Gdy komponent się unmountuje, rozłączamy obserwatora
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="container-container">
        <div className="over-container">
          <h4>python</h4>
          <div className="vectors">
            <img src={vector1} alt="Vector 1" />
            <img src={vector2} alt="Vector 2" />
            <img src={vector3} alt="Vector 3" />
          </div>
        </div>
        <div className="container">
          <p className="text">
            <tt>
              coffee = <span className="green">“Espresso”</span>
            </tt>
          </p>
          <p className="text text2">
            <tt>
              strenght = <span className="pink-red">2</span>
            </tt>
          </p>
          <p className="text text3">
            <tt>
              <span className="orange">print</span>(
              <span className="green">
                f” &#123;coffee&#125; with &#123;strenght&#125; Shots is ready!”
              </span>
              )
            </tt>
          </p>
        </div>
      </div>
    </>
  );
};

export default Program;
