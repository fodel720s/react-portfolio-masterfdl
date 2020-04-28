import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import mypic from "C:\\Users\\ASUS I5\\Portfolio-React\\react-portfolio-master\\src\\img\\mypic.jpg";

class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Mohamed Fadhel Ben Hamida</h2>
            <img
              src={mypic}
              alt="fdl"  
              style={{height: '300px'}}
               />
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>
             As a BI developer I am capable of : <br></br>
             Working in close collaboration with BI analysts and developers as well as clients.<br></br>
             Understanding, manipulating data and statistics.<tr></tr>
             Datawarehouse modeling and mining. <br></br>
             Using analysis tools and software.<br></br>
          
              </p>

          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    +216 52 63 65 41
                  </ListItemContent>
                </ListItem>

                

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                  <a href="oogle.com/gmail/" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-envelope" aria-hidden="true"/>
          </a> mohelfadhel@gmail.com
                    
                   
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                  <a href="https://www.linkedin.com/in/mohamed-el-fadhel-ben-hamida-6b6647173/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" /> 
          </a> linkedin
                  </ListItemContent>
                </ListItem>


              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
