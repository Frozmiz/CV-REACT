import { useState } from "react";
import "./Curriculum.scss";


function Curriculum({ curriculum }) {
    const {experience, education} = curriculum;
    const {showExperience, setShowExperience} = useState(false);
    return (
        <section className="Curriculum">
            <nav>
                <button onClick={() => setShowExperience(false)}>Education</button>
                <button onClick={() => setShowExperience(true)}>Experience</button>
            </nav>
            <p>{showExperience}</p>

        </section>
    )
}

export default Curriculum;