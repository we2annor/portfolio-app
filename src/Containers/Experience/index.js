import React, { Component } from 'react'
import './experience.css'

    class Experience extends Component {
      render(){
        return(
          <div className="About">
            <h2 className="title">My Experience</h2>
            <p className="subTitle">Web Development</p>
            <MyExperience/>
          </div>
        )
      }
    }

    export default Experience

     const MyExperience = () => {
      return(
        <div className="Experience">
            <div>
              <h2>01 Design</h2>
            </div>
        </div>
      )
    }
