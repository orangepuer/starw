import React, {Component} from "react";
import Header from "../header";
import RandomPlanet from "../random-planet";
import './app.css';
import ErrorIndicator from "../error-indicator";
import SwapiService from "../../services/swapi-service";
import {SwapiServiceProvider} from "../swapi-service-context";
import {PeoplePage, PlanetsPage, StarshipsPage} from "../pages"

export default class App extends Component {
  swapiService = new SwapiService();

  state = {
    hasError: false
  };

  componentDidCatch(error, errorInfo) {
    this.setState({
      hasError: true
    })
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />
    }

    return (
      <SwapiServiceProvider value={this.swapiService}>
        <div className="stardb-app">
          <Header />
          <RandomPlanet />
          <PeoplePage />
          <PlanetsPage />
          <StarshipsPage />
        </div>
      </SwapiServiceProvider>
    );
  }
};