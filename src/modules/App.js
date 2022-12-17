import { Component } from 'react';
import CV from './CV';
import uniqid from 'uniqid';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      education: [
        {
          universityName: "",
          degreeLevel: "",
          degreeSubject: "",
          startDate: "",
          endDate: "",
          key: uniqid(),
        }
      ],
      experiences: [
        {
          position: "",
          company: "",
          startDate: "",
          endDate: "",
          description: "",
          key: uniqid(),
        }
      ],
      personalInfo: {
        firstName: "",
        lastName: "",
        title: "",
        address: "",
        phoneNumber: "",
        email: "",
        url: "",
        description: "",
      },
      skills: [
        {
          content: "",
          key: uniqid(),
        }
      ]
    }

    this.addExperience = this.addExperience.bind(this);
    this.addEducation = this.addEducation.bind(this);
    this.addSkill = this.addSkill.bind(this);
    this.removeExperience = this.removeExperience.bind(this);
    this.removeEducation = this.removeEducation.bind(this);
    this.removeSkill = this.removeSkill.bind(this);
    this.handleEducationChange = this.handleEducationChange.bind(this);
    this.handleExperienceChange = this.handleExperienceChange.bind(this);
    this.handlePersonalInfoChange = this.handlePersonalInfoChange.bind(this);
    this.handleSkillChange = this.handleSkillChange.bind(this);
  }

  handleSkillChange(e) {
    const index = parseInt(e.target.parentNode.parentNode.dataset.index, 10);
    const tempSkills = [ ...this.state.skills ];
    tempSkills[index].content = e.target.value;
    this.setState({ skills: tempSkills });
  }

  handleEducationChange(e) {
    const info = [ parseInt(e.target.parentNode.parentNode.dataset.index, 10) , e.target.getAttribute('id') ];
    const tempEducation = [ ...this.state.education ];
    tempEducation[info[0]][info[1]] = e.target.value;
    this.setState({ education: tempEducation });
  }

  handleExperienceChange(e) {
    const info = [ parseInt(e.target.parentNode.parentNode.dataset.index, 10) , e.target.getAttribute('id') ];
    const tempExperiences = [ ...this.state.experiences ];
    tempExperiences[info[0]][info[1]] = e.target.value;
    this.setState({ experiences: tempExperiences });
  }

  handlePersonalInfoChange(e) {
    const info = e.target.getAttribute('id');
    const tempPersonalInfo = { ...this.state.personalInfo };
    tempPersonalInfo[info] = e.target.value;
    this.setState({ personalInfo: tempPersonalInfo });
  }

  addExperience() {
    this.setState({ 
      experiences: this.state.experiences.concat({ 
        position: "",
        company: "",
        location: "",
        startDate: "",
        endDate: "",
        description: "",
        key: uniqid(),
       }),
     });
  }

  addEducation() {
    this.setState({ 
      education: this.state.education.concat({ 
        universityName: "",
        degreeLevel: "",
        degreeSubject: "",
        startDate: "",
        endDate: "",
        key: uniqid(),
       }),
     });
  }

  addSkill() {
    this.setState({ 
      skills: this.state.skills.concat({ 
        content: "",
        key: uniqid(),
       }),
     });
  }

  removeExperience(e) {
    const index = parseInt(e.target.parentNode.dataset.index, 10);
    let tempExperiences = [ ...this.state.experiences ];
    tempExperiences.splice(index, 1);
    this.setState({ experiences: tempExperiences });
  }

  removeEducation(e) {
    const index = parseInt(e.target.parentNode.dataset.index, 10);
    let tempEducation = [ ...this.state.education ];
    tempEducation.splice(index, 1);
    this.setState({ education: tempEducation });
  }

  removeSkill(e) {
    const index = parseInt(e.target.parentNode.dataset.index, 10);
    let tempSkills = [ ...this.state.skills ];
    tempSkills.splice(index, 1);
    this.setState({ skills: tempSkills });
  }
  
  render() {
    const { education, experiences, personalInfo, skills } = this.state;

    const educationArr = this.state.education.map((education, index) => {
      return (
        <div className="single-edu" data-index={ index }>
          <div className="input-wrapper">
            <label htmlFor="universityName">University Name</label>
            <input 
              type="text" 
              name="universityName" 
              placeholder="University of California"
              id="universityName" 
              value={ education.universityName || "" }
              onChange={ this.handleEducationChange }
            ></input>
          </div>
          <div className="input-wrapper">
            <label htmlFor="degreeLevel">Level of Degree</label>
            <input 
              type="text" 
              name="degreeLevel" 
              id="degreeLevel"
              placeholder="Bachelors" 
              value={ education.degreeLevel || "" }
              onChange={ this.handleEducationChange }
            ></input>
          </div>
          <div className="input-wrapper">
            <label htmlFor="degreeSubject">Subject of Degree</label>
            <input 
              type="text" 
              name="degreeSubject" 
              id="degreeSubject"
              placeholder="Chemistry" 
              value={ education.degreeSubject || "" }
              onChange={ this.handleEducationChange }
            ></input>
          </div>
          <div className="input-wrapper">
            <label htmlFor="startDate">From</label>
            <input 
              type="month" 
              name="startDate" 
              id="startDate" 
              value={ education.startDate || "" }
              onChange={ this.handleEducationChange }
            ></input>
          </div>
          <div className="input-wrapper">
            <label htmlFor="endDate">To</label>
              <input 
                type="month" 
                name="endDate" 
                id="endDate" 
                value={ education.endDate || "" }
                onChange={ this.handleEducationChange }
              ></input>
          </div>
          <button className="removeEducation" type="button" onClick={ this.removeEducation }>Remove Education</button>
        </div>
      );
    });

    const experiencesArr = this.state.experiences.map((experience, index) => {
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
              onChange={ this.handleExperienceChange }
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
              onChange={ this.handleExperienceChange }
            ></input>
          </div>
          <div className="input-wrapper">
            <label htmlFor="startDate">From</label>
            <input 
              type="month" 
              name="startDate" 
              id="startDate"
              value={ experience.startDate || "" }
              onChange={ this.handleExperienceChange }
            ></input>
          </div>
          <div className="input-wrapper">
            <label htmlFor="endDate">To</label>
            <input 
              type="month" 
              name="endDate" 
              id="endDate" 
              value={ experience.endDate || "" }
              onChange={ this.handleExperienceChange }
            ></input>
          </div>
          <div className="input-wrapper">
            <label htmlFor="description">Describe the Position</label>
            <textarea 
              name="description" 
              id="description" 
              value={ experience.description || "" }
              onChange={ this.handleExperienceChange }
              placeholder="Through my laboratory experiments and data analysis, I have developed strong problem-solving skills and the ability to think critically and analytically. I have also gained proficiency in the use of specialized equipment and techniques, such as spectroscopy, chromatography, and microscopy, and have learned how to effectively use computer programs and statistical analysis software to support my work. In addition, I have had the opportunity to collaborate with other team members and contribute to a range of projects, further strengthening my teamwork and communication skills."
            ></textarea>
          </div>
          <button className="removeExperience" type="button" onClick={ this.removeExperience }>Remove Education</button>
        </div>
      );
    });

    const skillsArr = this.state.skills.map((skill, index) => {
      return (
        <div className="single-skill" data-index={ index }>
          <div className="input-wrapper">
            <label htmlFor={ "skill" + (index + 1) }>Skill { index + 1 }</label>
            <input
              type="text"
              name={ "skill" + (index + 1) }
              id={ "skill" + (index + 1) }
              value={ skill.content || "" }
              onChange={ this.handleSkillChange }
              placeholder="Crystallography"
            ></input>
          </div>
          <button className="removeSkill" type="button" onClick={ this.removeSkill }>Remove Skill</button>
        </div>
      );
    });

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
                onChange={ this.handlePersonalInfoChange }
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
                onChange={ this.handlePersonalInfoChange }
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
                onChange={ this.handlePersonalInfoChange }
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
                onChange={ this.handlePersonalInfoChange }
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
                onChange={ this.handlePersonalInfoChange }
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
                onChange={ this.handlePersonalInfoChange }
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
                onChange={ this.handlePersonalInfoChange }
                placeholder="http://www.savewalterwhite.com/"
              ></input>
            </div>
            <div className="input-wrapper">
              <label htmlFor="description">Briefly Describe Yourself</label>
              <textarea 
                name="description" 
                id="description"
                value={ personalInfo.description || "" }
                onChange={ this.handlePersonalInfoChange }
                placeholder="As a chemist, I am highly skilled in conducting laboratory experiments, analyzing and interpreting data, and utilizing specialized equipment and techniques to solve complex chemical problems. I have a strong foundation in both theoretical and practical chemistry, with a deep understanding of chemical reactions, molecular structures, and chemical analysis methods. I am also proficient in using computer programs and statistical analysis software to support my work. In addition to my technical skills, I am a proactive and detail-oriented team player, able to effectively communicate my findings and work well under tight deadlines."
              ></textarea>
            </div>
          </fieldset>
          <fieldset id="education">
            <legend>Education</legend>
            { educationArr }
            <button className="addEducation" type="button" onClick={ this.addEducation }>Add Education</button>
          </fieldset>
          <fieldset id="experiences">
            <legend>Experiences</legend>
            { experiencesArr }
            <button className="addExperience" type="button" onClick={ this.addExperience }>Add Experience</button>
          </fieldset>
          <fieldset id="skills">
            <legend>Skills</legend>
            { skillsArr }
            <button className="addSkill" type="button" onClick={ this.addSkill }>Add Skill</button>
          </fieldset>
        </form>
        <CV personalInfo={ personalInfo } experiences={ experiences } education={ education } skills={ skills }/>
      </div>
    );
  }
}

export default App;
