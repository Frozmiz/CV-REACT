import { useState } from "react";
import Descriptions from "./Descriptions";
import "./Curriculum.scss";


function Curriculum({ curriculum }) {
    const {education, experience, projects} = curriculum;
    const [showEducation, setShowEducation] = useState(false);
    const [showExperience, setShowExperience] = useState(false);
    const [showProjects, setShowProjects] = useState(false);
    return (
        <section className="Curriculum">
            <nav>
                <button className="Curriculum__selection" onClick={() => { setShowExperience(false); setShowEducation(true); setShowProjects(false); }}>Education</button>
                <button className="Curriculum__selection" onClick={() => { setShowExperience(true); setShowEducation(false); setShowProjects(false); }}>Experience</button>
                <button className="Curriculum__selection" onClick={() => { setShowExperience(false); setShowEducation(false); setShowProjects(true); }}>Projects</button>
            </nav>
            {showExperience && <Descriptions descriptions={experience}/>}
            {showEducation && <Descriptions descriptions={education}/> }
            {showProjects && <Descriptions descriptions={projects}/>}

        </section>
    )
}

export default Curriculum;