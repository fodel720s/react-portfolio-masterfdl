import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import bi from "C:\\Users\\ASUS I5\\Portfolio-React\\react-portfolio-master\\src\\img\\bi.png"

class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src={bi}
              alt="avatar"
              style={{height: '150px'}}
              className="avatar-img"
              />

            <div className="banner-text">
              <h1>Business Intelligence developer</h1>

            <hr/>

          <p> Python-Master Data Management(MDM)- DQS Cleansing - Integration Services (SSIS)-Analysis Services (SSAS)- Reporting Services (SSRS)- Rstudio - SPSS - OLAP(R-OLAP, H-OLAP,W-OLAP,M-OLAP)</p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/mohamed-el-fadhel-ben-hamida-6b6647173/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="https://github.com/fodel720s" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>


        

        </div>
            </div>
          
          </Cell>
        </Grid>
      </div>
    
    )
  }
}

export default Landing;
