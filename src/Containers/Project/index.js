import React, { Component } from 'react'
import './project.css'

  class Project extends Component {
    render(){
      return(
        <div className="MyProjects">
          <h2 className="title">My Projects </h2>
          <p className="subTitle">Hightlights of my Work</p>

          <div className="projectsBg">
            <Work project="Moto"/>
          </div>
        </div>
      )
    }
  }

  export default Project

  const Work = (props) => {
    return (
      <div className="Project">
        <h2>{props.project}</h2>
        <p>{props.children}</p>
      </div>
    )
  }
