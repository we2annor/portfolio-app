import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './drawer.css'

  class NavBar extends Component {
    constructor(props){
      super()
      this.state=({
        visible: 'false'
      })
    }

    render(){

      return(
        <div className="Drawer hide"
        >
          <nav className="navigationBar">
            <MenuItem
              name="Home"
              href="/"
            />
            <MenuItem
              name="My Story"
              href="about"
            />
            <MenuItem
              name="My Experience"
              href="Experience"
            />
            <MenuItem
              name="My Projects"
              href="Projects"
            />
          </nav>
        </div>
      )
    }
  }

export default NavBar

  const MenuItem = (props) => {

    return(
      <div className="navLink">
        <ul>
          <li>
            <NavLink to={props.href}>{props.name}
            </NavLink>
          </li>
        </ul>
      </div>
    )
  }
