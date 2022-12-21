import { useState } from 'react';
import CVFn from './CVFn'
import uniqid from 'uniqid';

export default function AppFn(props) {

    // EDUCATION FUNCTIONS

    const [ education, setEducation ] = useState([
        {
            universityName: "",
            degreeLevel: "",
            degreeSubject: "",
            startDate: "",
            endDate: "",
            key: uniqid(),
        }
    ]);

    const handleEducationChange = (e) => {
        const info = [ parseInt(e.target.parentNode.parentNode.dataset.index, 10) , e.target.getAttribute('id') ];
        const tempEducation = [ ...education ];
        tempEducation[info[0]][info[1]] = e.target.value;
        setEducation(tempEducation);
    };

    const addEducation = () => {
        setEducation(education.concat({
            universityName: "",
            degreeLevel: "",
            degreeSubject: "",
            startDate: "",
            endDate: "",
            key: uniqid(),
        }));
    };

    const removeEducation = (e) => {
        const index = parseInt(e.target.parentNode.dataset.index, 10);
        let tempEducation = [ ...education ];
        tempEducation.splice(index, 1);
        setEducation(education);
    };

    // EXPERIENCES FUNCTIONS

    const [ experiences, setExperiences ] = useState([
        {
            position: "",
            company: "",
            startDate: "",
            endDate: "",
            description: "",
            key: uniqid(),
        }
    ]);

    const handleExperienceChange = (e) => {
        const info = [ parseInt(e.target.parentNode.parentNode.dataset.index, 10) , e.target.getAttribute('id') ];
        const tempExperiences = [ ...experiences ];
        tempExperiences[info[0]][info[1]] = e.target.value;
        setExperiences(tempExperiences);
    };

    const addExperience = () => {
        setExperiences(experiences.concat({
            position: "",
            company: "",
            location: "",
            startDate: "",
            endDate: "",
            description: "",
            key: uniqid(),
        }));
    };

    const removeExperience = (e) => {
        const index = parseInt(e.target.parentNode.dataset.index, 10);
        let tempExperiences = [ ...experiences ];
        tempExperiences.splice(index, 1);
        setExperiences(tempExperiences);
    };

    // PERSONAL INFO FUNCTIONS

    const [ personalInfo, setPersonalInfo ] = useState(
        {
            firstName: "",
            lastName: "",
            title: "",
            address: "",
            phoneNumber: "",
            email: "",
            url: "",
            description: "",
        }
    );

    const handlePersonalInfoChange = (e) => {
        const info = e.target.getAttribute('id');
        const tempPersonalInfo = { ...personalInfo };
        tempPersonalInfo[info] = e.target.value;
        setPersonalInfo(tempPersonalInfo);
    };

    const [ skills, setSkills ] = useState([
        {
            content: "",
            key: uniqid(),
        }
    ]);

    const handleSkillChange = (e) => {
        const index = parseInt(e.target.parentNode.parentNode.dataset.index, 10);
        const tempSkills = [ ...skills ];
        tempSkills[index].content = e.target.value;
        setSkills(tempSkills);
    };

    const addSkill = () => {
        setSkills(skills.concat({
            content: "",
            key: uniqid(),
        }));
    };

    const removeSkill = (e) => {
        const index = parseInt(e.target.parentNode.dataset.index, 10);
        let tempSkills = [ ...skills ];
        tempSkills.splice(index, 1);
        setSkills(tempSkills);
    };

    // RENDER FUNCTIONS

    const educationArr = () => {
        return (
            education.map((edu, index) => {
                return (
                    <div className="single-edu" data-index={ index }>
                    <div className="input-wrapper">
                      <label htmlFor="universityName">University Name</label>
                      <input 
                        type="text" 
                        name="universityName" 
                        placeholder="University of California"
                        id="universityName" 
                        value={ edu.universityName || "" }
                        onChange={ handleEducationChange }
                      ></input>
                    </div>
                    <div className="input-wrapper">
                      <label htmlFor="degreeLevel">Level of Degree</label>
                      <input 
                        type="text" 
                        name="degreeLevel" 
                        id="degreeLevel"
                        placeholder="Bachelors" 
                        value={ edu.degreeLevel || "" }
                        onChange={ handleEducationChange }
                      ></input>
                    </div>
                    <div className="input-wrapper">
                      <label htmlFor="degreeSubject">Subject of Degree</label>
                      <input 
                        type="text" 
                        name="degreeSubject" 
                        id="degreeSubject"
                        placeholder="Chemistry" 
                        value={ edu.degreeSubject || "" }
                        onChange={ handleEducationChange }
                      ></input>
                    </div>
                    <div className="input-wrapper">
                      <label htmlFor="startDate">From</label>
                      <input 
                        type="month" 
                        name="startDate" 
                        id="startDate" 
                        value={ edu.startDate || "" }
                        onChange={ handleEducationChange }
                      ></input>
                    </div>
                    <div className="input-wrapper">
                      <label htmlFor="endDate">To</label>
                        <input 
                          type="month" 
                          name="endDate" 
                          id="endDate" 
                          value={ edu.endDate || "" }
                          onChange={ handleEducationChange }
                        ></input>
                    </div>
                    <button className="removeEducation" type="button" onClick={ removeEducation }>Remove Education</button>
                  </div>
                );
            })
        );
    };

    const experiencesArr = () => {
        return (
            experiences.map((experience, index) => {
                return (
                    <div className="single-experience" data-index={ index }>
                    <div className="input-wrapper">
                      <label htmlFor="position">Position</label>
                      <input 
                        type="text" 
                        name="position" 
                        id="position"
                        placeholder="Chemist" 
                        value={ experience.position || "" }
                        onChange={ handleExperienceChange }
                      ></input>
                    </div>
                    <div className="input-wrapper">
                      <label htmlFor="company">Company</label>
                      <input 
                        type="text" 
                        name="company" 
                        id="company"
                        placeholder="Grey Matter" 
                        value={ experience.company || "" }
                        onChange={ handleExperienceChange }
                      ></input>
                    </div>
                    <div className="input-wrapper">
                      <label htmlFor="startDate">From</label>
                      <input 
                        type="month" 
                        name="startDate" 
                        id="startDate"
                        value={ experience.startDate || "" }
                        onChange={ handleExperienceChange }
                      ></input>
                    </div>
                    <div className="input-wrapper">
                      <label htmlFor="endDate">To</label>
                      <input 
                        type="month" 
                        name="endDate" 
                        id="endDate" 
                        value={ experience.endDate || "" }
                        onChange={ handleExperienceChange }
                      ></input>
                    </div>
                    <div className="input-wrapper">
                      <label htmlFor="description">Describe the Position</label>
                      <textarea 
                        name="description" 
                        id="description" 
                        value={ experience.description || "" }
                        onChange={ handleExperienceChange }
                        placeholder="Through my laboratory experiments and data analysis, I have developed strong problem-solving skills and the ability to think critically and analytically. I have also gained proficiency in the use of specialized equipment and techniques, such as spectroscopy, chromatography, and microscopy, and have learned how to effectively use computer programs and statistical analysis software to support my work. In addition, I have had the opportunity to collaborate with other team members and contribute to a range of projects, further strengthening my teamwork and communication skills."
                      ></textarea>
                    </div>
                    <button className="removeExperience" type="button" onClick={ removeExperience }>Remove Education</button>
                  </div>
                );
            })
        );
    };

    const skillsArr = () => {
        return (
            skills.map((skill, index) => {
                return (
                    <div className="single-skill" data-index={ index }>
                    <div className="input-wrapper">
                      <label htmlFor={ "skill" + (index + 1) }>Skill { index + 1 }</label>
                      <input
                        type="text"
                        name={ "skill" + (index + 1) }
                        id={ "skill" + (index + 1) }
                        value={ skill.content || "" }
                        onChange={ handleSkillChange }
                        placeholder="Crystallography"
                      ></input>
                    </div>
                    <button className="removeSkill" type="button" onClick={ removeSkill }>Remove Skill</button>
                  </div>
                );
            })
        );
    };

    // JSX RETURN

    return (
      <div className="App">
        <header>
          <h1>CV Maker</h1>
        </header>
        <form>
          <fieldset id="personalInfo">
            <legend>Personal Information</legend>
            <div className="input-wrapper">
              <label htmlFor="firstName">First Name</label>
              <input 
                type="text" 
                name="firstName" 
                id="firstName"
                value={ personalInfo.firstName || "" }
                onChange={ handlePersonalInfoChange }
                placeholder="Walter"
              ></input>
            </div>
            <div className="input-wrapper">
              <label htmlFor="lastName">Last Name</label>
              <input 
                type="text"  
                name="lastName" 
                id="lastName"
                value={ personalInfo.lastName || "" }
                onChange={ handlePersonalInfoChange }
                placeholder="White"
              ></input>
            </div>
            <div className="input-wrapper">
              <label htmlFor="title">Title</label>
              <input 
                type="text" 
                name="title" 
                id="title"
                value={ personalInfo.title || "" }
                onChange={ handlePersonalInfoChange }
                placeholder="Chemistry Teacher"
              ></input>
            </div>
            <div className="input-wrapper">
              <label htmlFor="address">Address</label>
              <input 
                type="text" 
                name="address" 
                id="address"
                value={ personalInfo.address || "" }
                onChange={ handlePersonalInfoChange }
                placeholder="308 Negra Arroyo Lane, Albuquerque NM"
              ></input>
            </div>
            <div className="input-wrapper">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input 
                type="tel" 
                name="phoneNumber" 
                id="phoneNumber"
                value={ personalInfo.phoneNumber || "" }
                onChange={ handlePersonalInfoChange }
                placeholder="(505)-117-8987"
              ></input>
            </div>
            <div className="input-wrapper">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                name="email" 
                id="email"
                value={ personalInfo.email || "" }
                onChange={ handlePersonalInfoChange }
                placeholder="ww@jpwynne.com"
              ></input>
            </div>
            <div className="input-wrapper">
              <label htmlFor="url">Url</label>
              <input 
                type="text" 
                name="url" 
                id="url"
                value={ personalInfo.url || "" }
                onChange={ handlePersonalInfoChange }
                placeholder="http://www.savewalterwhite.com/"
              ></input>
            </div>
            <div className="input-wrapper">
              <label htmlFor="description">Briefly Describe Yourself</label>
              <textarea 
                name="description" 
                id="description"
                value={ personalInfo.description || "" }
                onChange={ handlePersonalInfoChange }
                placeholder="As a chemist, I am highly skilled in conducting laboratory experiments, analyzing and interpreting data, and utilizing specialized equipment and techniques to solve complex chemical problems. I have a strong foundation in both theoretical and practical chemistry, with a deep understanding of chemical reactions, molecular structures, and chemical analysis methods. I am also proficient in using computer programs and statistical analysis software to support my work. In addition to my technical skills, I am a proactive and detail-oriented team player, able to effectively communicate my findings and work well under tight deadlines."
              ></textarea>
            </div>
          </fieldset>
          <fieldset id="education">
            <legend>Education</legend>
            { educationArr() }
            <button className="addEducation" type="button" onClick={ addEducation }>Add Education</button>
          </fieldset>
          <fieldset id="experiences">
            <legend>Experiences</legend>
            { experiencesArr() }
            <button className="addExperience" type="button" onClick={ addExperience }>Add Experience</button>
          </fieldset>
          <fieldset id="skills">
            <legend>Skills</legend>
            { skillsArr() }
            <button className="addSkill" type="button" onClick={ addSkill }>Add Skill</button>
          </fieldset>
        </form>
        <CVFn personalInfo={ personalInfo } experiences={ experiences } education={ education } skills={ skills } />
      </div>
    );
}