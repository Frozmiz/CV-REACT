import "./Hero.scss";
import Sphere from "../../assets/sphere2.svg";

function Hero({ hero }) {
  return (
    <section className="Hero">
      <div className="Hero_info">
        <h1>{hero.name}</h1>
        <h2 className="Hero__title">{hero.profession}</h2>
        <ul>
          <li>
            <span className="Hero__icon">📲</span>
            <a href={`tel:${hero.mobile}`} className="Hero__link">
              {hero.mobile}
            </a>
          </li>
          <li>
            <span className="Hero__icon">🖥️</span>
            <a href={`mailto:${hero.email}`} className="Hero__link">
              {hero.email}
            </a>
          </li>
          <li>
            <span className="Hero__icon">👾</span>
            <a href={`${hero.gitHub}`} className="Hero__link">
              {hero.gitHub}
            </a>
          </li>
          <li>
            <span className="Hero__icon">🌍</span>
            <a href={`${hero.linkedin}`} className="Hero__link">
              Linkedin profile
            </a>
          </li>
        </ul>
      </div>
      <div className="Hero__image">
        <img src={Sphere} alt="Networks" />
      </div>
      <div className="Hero__about"> 
        <h1> ABOUT ME </h1>
        {hero.aboutMe.split('\n\n').map((parrafo, index) => (
        <p key={index}>{parrafo}</p>
      ))}
      </div>
    </section>
  );
}

export default Hero;
