import React, {Component} from "react";
import Header from "../header";
import RandomPlanet from "../random-planet";
import ItemList from "../item-list";
import PersonDetails from "../person-details";

import './app.css';
import ErrorButton from "../error-button";
import ErrorIndicator from "../error-indicator";
import PeoplePage from "../people-page";
import SwapiService from "../../services/swapi-service";

export default class App extends Component {
  swapiService = new SwapiService();

  state = {
    showRandomPlanet: true,
    hasError: false
  };

  componentDidCatch(error, errorInfo) {
    this.setState({
      hasError: true
    })
  }

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    })
  };

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id
    })
  };

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />
    }

    const planet = this.state.showRandomPlanet? <RandomPlanet /> : null;

    return (
      <div className="stardb-app">
        <Header />
        { planet }

        <div className="row mb-2 button-row">
          <button className="btn btn-warning btn-lg" onClick={this.toggleRandomPlanet}>
            Toggle Random Planet
          </button>
          <ErrorButton />
        </div>
        <PeoplePage />
      </div>
    );
  }
};