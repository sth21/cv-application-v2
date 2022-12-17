/* eslint-disable no-useless-constructor */

import { Component } from 'react';
import uniqid from 'uniqid';

class CV extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="CV">
        <div className="personalInfo">
          <h1>{ this.props.personalInfo.firstName + " " + this.props.personalInfo.lastName }</h1>
          <h4>{ this.props.personalInfo.title }</h4>
          <h2>Professional Profile</h2>
          <p>{ this.props.personalInfo.description }</p>
        </div>
        <div className="experience">
          <h2>Experience</h2>
          { this.props.experiences.map((singleExperience => {
            return (
              <div className="experience-wrapper" key={ uniqid() }>
                <h3>{ singleExperience.position }</h3>
                <h4>{ singleExperience.company } / { singleExperience.startDate } - { singleExperience.endDate }</h4>
                <p>{ singleExperience.description }</p>
              </div>
            );
          })) }
        </div>
        <div className="sidebar">
          <div className="contact">
            <h2>Contact Information</h2>
            <p>{ this.props.personalInfo.address }</p>
            <p>{ this.props.personalInfo.phoneNumber }</p>
            <p>{ this.props.personalInfo.email }</p>
            <p>{ this.props.personalInfo.url }</p>
          </div>
          <div className="education">
            <h2>Education</h2>
            { this.props.education.map((singleEdu) => {
              return (
                <div className="education-wrapper" key={ uniqid() }>
                  <h3>{ singleEdu.degreeLevel } / { singleEdu.degreeSubject }</h3>
                  <p>{ singleEdu.universityName } { singleEdu.startDate } - { singleEdu.endDate }</p>
                </div>
              );
            })}
          </div>
          <div className="skills">
            <h2>Skills</h2>
              { this.props.skills.map((singleSkill) => {
                return (
                  <div className="skill-wrapper" key={ uniqid() }>
                    <p>{ singleSkill.content }</p>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    );
    }
}

export default CV;
