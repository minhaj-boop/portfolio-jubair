import React, { Component } from 'react';
export default class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">

        <div className="row education">

          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>

          <div className="nine columns main-col">
            {
              resumeData.education && resumeData.education.map((item) => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>{item.UniversityName}</h3>
                      <p className="info">
                        {item.specialization}
                        <span>&bull;</span> <em className="date">{item.YearOfPassing}</em></p>
                      <p>
                        <span><b>CGPA: </b></span>{item.finalGrade}
                        <br />
                        <span><b>CGPA of last 2 years: </b></span>{item.cgpaLast2Years}
                        <br />
                      </p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>

        <div className="row work">
          <div className="three columns header-col">
            <h1><span>Research Interests</span></h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <p>
                  {resumeData.researchInterest}
                </p>
              </div>
            </div>
          </div>
        </div>


        <div className="row work">
          <div className="three columns header-col">
            <h1><span>Research Experience</span></h1>
          </div>

          <div className="nine columns main-col">

            <div className="row item">
              <div className="twelve columns">
                <h3>{resumeData.researchExperienceInfo.name}</h3>
                <p>
                  <span className="info">{resumeData.researchExperienceInfo.mainDesc}</span> <span>&bull;</span> <em className="date">{resumeData.researchExperienceInfo.date}</em>
                  <br />
                  {resumeData.researchExperienceInfo.address}
                </p>
              </div>
            </div>

            <h5>Ongoing Projects</h5>
            {
              resumeData.researchExperienceProjects && resumeData.researchExperienceProjects.map((item) => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <p>
                        <span><b>{item.project}: </b></span>
                        {item.desc}
                      </p>
                    </div>

                  </div>
                )
              })
            }
          </div>
        </div>


        <div className="row work">
          <div className="three columns header-col">
            <h1><span>Research Interests</span></h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <div className="row item">
                  <div className="twelve columns">
                    <p>
                      <span><b>Programming Language: </b></span>
                      {resumeData.keySkills.programmingLang}
                      <br />
                      <span><b>Research Tool: </b></span>
                      {resumeData.keySkills.researchTool}
                      <br />
                      <span><b>Simulation: </b></span>
                      {resumeData.keySkills.simulation}
                      <br />
                      <span><b>Embadded System: </b></span>
                      {resumeData.keySkills.embaddedSystem}
                      <br />
                      <span><b>Machine Operation: </b></span>
                      {resumeData.keySkills.machineOperation}
                      <br />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="row work">
          <div className="three columns header-col">
            <h1><span>Research Publications</span></h1>
          </div>

          <div className="nine columns main-col">
            {
              resumeData.researchPublications && resumeData.researchPublications.map((item) => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <p>
                        <span><b>{item.name}</b></span>{item.desc}
                        <br />
                        <a href={item.link} target="_blank">{item.link}</a>
                      </p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>


        <div className="row work">
          <div className="three columns header-col">
            <h1><span>Research Projects</span></h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <div className="row item">
                  <div className="twelve columns">
                    <p>
                      <span><b>{resumeData.rp1.name}</b></span>
                      <br />
                      &diams; {resumeData.rp1.d1}
                      <br />
                      &diams; {resumeData.rp1.d2}
                      <br />
                      &diams; {resumeData.rp1.d3}
                      <br />
                      &diams; {resumeData.rp1.d4}
                      <br />
                    </p>
                    <p>
                      <span><b>{resumeData.rp2.name}</b></span>
                      <br />
                      &diams; {resumeData.rp2.d1}
                      <br />
                      &diams; {resumeData.rp2.d2}
                      <br />
                      &diams; {resumeData.rp2.d3}
                      <br />
                    </p>
                    <p>
                      <span><b>{resumeData.rp3.name}</b></span>
                      <br />
                      &diams; {resumeData.rp3.d1}
                      <br />
                      &diams; {resumeData.rp3.d2}
                      <br />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="row work">
          <div className="three columns header-col">
            <h1><span>Selected Academic Projects</span></h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <div className="row item">
                  <div className="twelve columns">
                    <p>
                      <span><b>{resumeData.sap.name} </b></span> <span>&bull;</span> <em className="date">{resumeData.sap.date}</em>
                      <br />
                      &diams; {resumeData.sap.d1}
                      <br />
                      &diams; {resumeData.sap.d2}
                      <br />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="row work">
          <div className="three columns header-col">
            <h1><span>Standardized Test Scores</span></h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <div className="row item">
                  <div className="twelve columns">
                    <p>
                      <span><b>{resumeData.sts1.name} </b></span>
                      <br />
                      &rarr; {resumeData.sts1.overall}
                      <br />
                      &rarr; {resumeData.sts1.speaking}
                      <br />
                      &rarr; {resumeData.sts1.listening}
                      <br />
                      &rarr; {resumeData.sts1.writing}
                      <br />
                      &rarr; {resumeData.sts1.reading}
                      <br />
                    </p>
                    <p>
                      <span><b>{resumeData.sts2.name} </b></span>
                      <br />
                      &rarr; {resumeData.sts2.total}
                      <br />
                      &rarr; {resumeData.sts2.quantitative}
                      <br />
                      &rarr; {resumeData.sts2.verbal}
                      <br />
                      &rarr; {resumeData.sts2.awa}
                      <br />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="row skill">

          <div className="three columns header-col">
            <h1><span>References</span></h1>
          </div>

          <div className="nine columns main-col">

          </div>

        </div>

      </section>
    );
  }
}