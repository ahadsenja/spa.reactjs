import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './Home/Home'
import About from './About/About'
import Contact from './Contact/Contact'
import Project from './Project/Project'


const Main = () => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/home' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='/project' component={Project} />
    </Switch>
)

export default Main