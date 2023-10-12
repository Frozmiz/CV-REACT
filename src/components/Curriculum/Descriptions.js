import "./Descriptions.scss";

function Descriptions({ descriptions }) {
  return (
    <div className="Descriptions">
      {descriptions.map((description, index) => {
        return (
          <article
            className="Descriptions__item"
            key={description.title + index}
          >
            <h3>{description.title}</h3>
            <span className="Descriptions_year">{description.year}</span>
            <p>{description.where}</p>
            <p>{description.description}</p>
          </article>
        );
      })}
    </div>
  );
}

export default Descriptions;
