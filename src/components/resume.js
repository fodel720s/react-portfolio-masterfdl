import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import bi from "C:\\Users\\ASUS I5\\Portfolio-React\\react-portfolio-master\\src\\img\\bi.png"

class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src={bi}
                alt="FDL"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Fadhel Ben Hamida</h2>
            <h4 style={{color: 'grey'}}>Business Intelligence developper</h4>
            <hr style={{borderTop: '4px solid #833fb2', width: '80%'}}/>
            <p> 
             Through my experience as a Junior Marketer consultant in SMA_JE.
             I had the opportunity to explore more in depth the company ecosystem and by that
             learning more about the decision making problems an organization can face.
             <br></br> The main value that I have gained from 
              each working experience is the sense of team work and engagement.</p>
              <p>My professional experience gave me the opportunity to build a decent network in the Tunisian business ecosystem.
              Added to that, through my academic journey, I have worked on a set of both machine and deep learning projects.
             
              <br></br>(through ETL jobs),  worked with the Business Analysis team to make use of the data. This involves data visualization as well as potentially integrating these new insights into existing customer reports/dashboards.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '70%'}}/>
            <h5>Address</h5>
            <p>Bardo Center 1st Building, 2nd floor, Bardo, Tunis </p>
            <h5>Phone</h5>
            <p>+216 52 63 65 41</p>
            <h5>Email</h5>
            <p>mohelfadhel@gmail.com</p>
            <h5>Web</h5>
            <p>fbh.com</p>
            <hr style={{borderTop: '2px solid #833fb2', width: '60%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            2018-2021
            <Education
              
              schoolName="University Of Tunis - Université de Tunis: 
              Higher Institute Of Management Of Tunis - ISG Tunis"
              schoolDescription=""
             
             />
             <tr>41 Avenue de la Liberté, Bouchoucha, Bardo 2000, Tunis, Tunisia.</tr> 
              <tr>
             <td> General P.Number: +216 71 588 514  </td></tr>  
             <tr><td> General P.Number: +216 71 588 553  </td> </tr>
             <tr>  <td>Fax: +216 71 588 350</td> </tr>
              
              
               
                 
                <hr style={{borderTop: '3px solid white'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2018}
              endYear={2020}
              jobName="Project Manager"
              jobDescription="Head of the Marketing Department of Smart Marketing Advisors Junior Enterprise, it is 
              study office based in Tunisia that offers business plans, Market Studies and website building for small and medium enterprises "
              />

              <Experience
                startYear={-2019}
                jobName="Internship"
                jobDescription="I have participated in a 6weeks volunteer internship, fully organized by Aiesec Global which took place in Turkey, Bursa. 
                I was in charge of teaching the English language to the Turkish youth and to share with them 
              my culture and tradition. "
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Hard Skills</h2>
              <Skills
                skill="MSBI: SSRS/SSAS/SSIS, ETL."
                progress={100}
                />
                <Skills
                  skill="SQL,PL/SQL,NOSQL,DAX,MDX"
                  progress={95}
                  />
                  <Skills
                  skill="Power BI, Pentaho"
                    progress={95}
                    />
                    <Skills
                      skill="HTML/CSS/Javascript"
                      progress={80}
                      />
                    <Skills
                      skill="JavaEE-SPRINGBOOT-Maven"
                      progress={70}
                      />
                      <Skills
                      skill="Thymeleaf, ReactJS"
                      progress={60}
                      />
                       <Skills
                      skill="SEO/SEA tools"
                      progress={60}
                      />
                        <Skills
                      skill="SPSS/Rstudio"
                      progress={80}
                      />
<hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Soft Skills</h2>
              <h5>Communication</h5> Fluent-English, native-French, native-Arabic, intermediate-Spanish <br></br>
              <h5>Versatility</h5> 
               I am a BI developer that has got knowledge in different IT segments: <br></br> websites developement, website 
              optimization(SEO) and web application developement.<br></br>
              <h5>Fast learning</h5>
              I tend to be a strategic thinker and a good listener that applies the fastlearning 
              skills to the learning quickly.

                  


          </Cell>
        </Grid>
      </div>
      
    )
  }
}

export default Resume;
