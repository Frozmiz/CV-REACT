import { useState } from "react";
import Descriptions from "./Descriptions";
import "./Curriculum.scss";


function Curriculum({ curriculum }) {
    const {education, experience} = curriculum;
    const [showExperience, setShowExperience] = useState(false);
    return (
        <section className="Curriculum">
            <nav>
                <button className="Curriculum__selection" onClick={() => setShowExperience(false)}>Education</button>
                <button className="Curriculum__selection" onClick={() => setShowExperience(true)}>Experience</button>
            </nav>
            {showExperience
            ? <Descriptions descriptions={experience}/>
            : <Descriptions descriptions={education}/>
            }

        </section>
    )
}

export default Curriculum;