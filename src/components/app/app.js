import React, {Component} from "react";
import Header from "../header";
import RandomPlanet from "../random-planet";
import './app.css';
import ErrorIndicator from "../error-indicator";
import SwapiService from "../../services/swapi-service";
import {SwapiServiceProvider} from "../swapi-service-context";
import {PeoplePage, PlanetsPage, StarshipsPage, LoginPage, SecretPage} from "../pages"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import StarshipDetails from "../sw-components/starship-details";

export default class App extends Component {
  swapiService = new SwapiService();

  state = {
    hasError: false,
    isLoggedIn: false
  };

  componentDidCatch(error, errorInfo) {
    this.setState({
      hasError: true
    })
  }

  onLogin = () => {
    this.setState({isLoggedIn: true});
  };

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />
    }

    const {isLoggedIn} = this.state;

    return (
      <SwapiServiceProvider value={this.swapiService}>
        <Router>
          <div className="stardb-app">
            <Header />
            <RandomPlanet />
            <Switch>
              <Route path="/" render={() => <h2>Welcome to Starw</h2>} exact />
              <Route path="/people/:id?" component={PeoplePage} />
              <Route path="/planets" component={PlanetsPage} />
              <Route path="/starships" component={StarshipsPage} exact />
              <Route path="/starships/:id" render={({match}) => {
                const {id} = match.params;
                return <StarshipDetails itemId={id} />
              }} />
              <Route path="/Login" render={() => <LoginPage isLoggedIn={isLoggedIn} onLogin={this.onLogin} />} />
              <Route path="/Secret" render={() => <SecretPage isLoggedIn={isLoggedIn} />} />
              <Route render={() => <h2>Page not found</h2>} />
            </Switch>
          </div>
        </Router>
      </SwapiServiceProvider>
    );
  }
};