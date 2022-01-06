
import React, { Component } from 'react';
import Navbar from './componets/Navbar';
import News from './componets/News';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

export default class App extends Component {
  
  pageSize=21;
  
  render() {
    return (
      <div>
        <Router>
        <Navbar />
        <Switch>
          <Route exact path="/"><News key="general" pageSize={this.pageSize} country="in" category="general" countryName="India" /></Route>
          <Route exact path="/business"><News key="business" pageSize={this.pageSize} country="in" category="business" countryName="India" /></Route>
          <Route exact path="/entertainment"><News key="entertainment" pageSize={this.pageSize} country="in" category="entertainment" countryName="India" /></Route>
          <Route exact path="/health"><News key="health" pageSize={this.pageSize} country="in" category="health" countryName="India" /></Route>
          <Route exact path="/sports"><News key="sports" pageSize={this.pageSize} country="in" category="sports" countryName="India" /></Route>
          <Route exact path="/science"><News key="science" pageSize={this.pageSize} country="in" category="science" countryName="India" /></Route>
          <Route exact path="/technology"><News key="technology" pageSize={this.pageSize} country="in" category="technology" countryName="India" /></Route>
          <Route exact path="/in"><News key="india" pageSize={this.pageSize}  country="in" category="general" countryName="India" /></Route>
          <Route exact path="/us"><News key="usa" pageSize={this.pageSize} country="us" category="general" countryName="USA" /></Route>
          <Route exact path="/ru"><News key="russia" pageSize={this.pageSize} country="ru" category="general" countryName="Russia" /></Route>
          <Route exact path="/ca"><News key="canada" pageSize={this.pageSize} country="ca" category="general" countryName="Canada" /></Route>
          <Route exact path="/gb"><News key="uk" pageSize={this.pageSize} country="gb" category="general" countryName="UK" /></Route>
        </Switch>
        </Router>
      </div>
    )
  }
}
