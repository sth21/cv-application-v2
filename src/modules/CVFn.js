import uniqid from 'uniqid';

export default function CV(props) {
    return (
      <div className="CV">
        <div className="personalInfo">
          <h1>{ props.personalInfo.firstName + " " + props.personalInfo.lastName }</h1>
          <h4>{ props.personalInfo.title }</h4>
          <h2>Professional Profile</h2>
          <p>{ props.personalInfo.description }</p>
        </div>
        <div className="experience">
          <h2>Experience</h2>
          { props.experiences.map((singleExperience => {
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
            <p>{ props.personalInfo.address }</p>
            <p>{ props.personalInfo.phoneNumber }</p>
            <p>{ props.personalInfo.email }</p>
            <p>{ props.personalInfo.url }</p>
          </div>
          <div className="education">
            <h2>Education</h2>
            { props.education.map((singleEdu) => {
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
              { props.skills.map((singleSkill) => {
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