import "./Work.scss";

// COMPONENTE PRIVADO DEL COMPONENTE "PORTFOLIO" (SUBCOMPONENTE) QUE PINTARÁ UNA POR UNA LAS IMAGENES SACADAS DEL ARRAY DENTRO DE alexDB.js 
// GRACIAS AL .map() AL QUE ESTÁ VINCULADO ESTE SUBCOMPONENTE

function Work({ work }) {
    return (
        <article className="Work">
            <img alt={work.alt} src={work.url}/>
        </article>
    )
}

export default Work;