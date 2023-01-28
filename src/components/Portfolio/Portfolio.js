import "./Portfolio.scss";
import Work from "./Work";

// {portfolio.map((work) => <Work key={work.alt} work={work}/>)}
// Esta función recorre el array "Portfolio" y renderiza el subcomponente "Work" para cada elemento del array.
// El componente recibe una prop "Key" con el VALOR del prop "alt" del objeto "work"
// También recibe el prop "work"con el objeto "work" completo como valor.

function Portfolio({ portfolio }) {
  return (
    <section className="Portfolio">
      <h2 className="Portfolio__title">skills</h2>
      <div className="Portfolio__wrap">
        {portfolio.map((work) => <Work key={work.alt} work={work}/>)}
      </div>
    </section>
  );
}

export default Portfolio;
