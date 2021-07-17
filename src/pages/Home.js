import { makeStyles } from "@material-ui/core";
import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="imgContainerH">
      <div className="containerH">
        <section className="sectionH">
          <h1 className="h1H">Résumés moments ICC</h1>
          <p className="pH">
            Bonjour bien-aimé(e)s dans le Seigneur,
            <br /> Le but de ce site est de partager quelques notes prises lors
            de différents moments de partage de la Parole de Dieu au sein de la
            famille ICC(études bibliques, Méga Impact conférence, cultes
            dominicales, ...).
            <br />
            <p className="warning">
              Ce site ainsi que son contenu ne sont pas officiels d'ICC !!!
            </p>
          </p>
        </section>
        <section className="sectionH">
          <h1 className="h1H">Laissez un commentaire</h1>
          <p className="pH">
            N'hésitons pas à le partager afin de toucher le maximum de personnes
          </p>
          <p className="pH">
            Vous pouvez également laisser un commentaire, suggession, ... dans
            de but de faire avancer l'oeuvre du Seigneur{" "}
          </p>
        </section>
      </div>
      <div className="cursH"></div>
    </div>
  );
};

export default Home;
