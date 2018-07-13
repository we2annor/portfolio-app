import React, { Component } from 'react'
import Header from './Components/Header/'
import Main from './Components/Main/'
import Footer from './Components/Footer/'
import NavBar from './Components/Drawer/'
//import { Provider } from 'react-redux'
import "./App.css"

class App extends Component {
  render() {

    let users = {
      name : "Ernest",
      age : 30,
      hubbies : ['gym','eating']
    }
    return (
      <div className="App">
          <Header />
          <NavBar visible={"true"} name={"Drawer"} color={"Blue"} users={users}/>
          <Main>
            {this.props.children}
          </Main>
          <Footer/>
      </div>
    );
  }
}

export default App;
