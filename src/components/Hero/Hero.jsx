import "./Hero.scss";

function Hero({ nombre }) {
  return (
      <header className="Hero">
        <h1 className="Hero__title"> {nombre} </h1>
      </header>
  );
}

export default Hero;
