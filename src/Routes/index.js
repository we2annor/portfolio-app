import React from 'react'
import { Route } from 'react-router-dom'
import Home from '../Containers/Home/'
import About from '../Containers/About/'
import Experience from '../Containers/Experience/'
import Project from '../Containers/Project/'
import App from '../App'

  const CreateRoutes = () => {
    return (
      <App>
        <Route exact path={'/'} component={Home}/>
        <Route path={'/about'} component={About}/>
        <Route path={'/Experience'} component={Experience}/>
        <Route path={'/Projects'} component={Project}/>
      </App>
    )
  }

  const Routes = CreateRoutes
  export default Routes
