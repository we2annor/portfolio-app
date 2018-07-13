import React, { Component } from 'react'
import './Home.css'


  class Home extends Component {

    render(){
      return(
          <div className="Home">
            <Board
              pageTitle="My Story"
              subTitle="From 1982 - Today"
              count="01"
            />
            <Board
              pageTitle="My Experience"
              subTitle="Web Development"
              count="02"
            />
            <Board
              pageTitle="My Projects"
              subTitle="Moto. My Portfolio"
              count="03"
            />
          </div>
      )
    }
  }

  export default Home

  export const Board = (props) => {
    return(
      <div className="Board">
        <div className="boardContainer">
          <h1>{props.count}</h1>

          <div className="title">
            <h2>{props.pageTitle}</h2>
            <p>{props.subTitle}</p>
          </div>
        </div>
      </div>
    )
  }
