import React, { Component } from "react";
import './random-planet.css';
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import PropTypes from 'prop-types';


export default class RandomPlanet extends Component {
  static propTypes = {
    updateInterval: PropTypes.number
  };

  swapiService = new SwapiService();

  state = {
    planet: {},
    loading: true,
    error: false
  };

  onPlanetLoaded = (planet) => {
    this.setState({
      planet,
      loading: false
    })
  };

  onError = (planet) => {
    this.setState({
      planet,
      error: true,
      loading: false
    })
  };

  updatePlanet = () => {
    const id = Math.floor(Math.random() * 25) + 2;

    this.swapiService.getPlanet(id).then(this.onPlanetLoaded).catch(this.onError);
  };

  componentDidMount() {
    const { updateInterval } = this.props;

    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, updateInterval);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { planet, loading, error } = this.state;
    const hasData = !(loading || error);
    const errorMessage = error ? <ErrorIndicator /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = hasData ? <PlanetView planet={ planet } /> : null;

    return (
      <div className="random-planet jumbotron rounded">
        { spinner }
        { errorMessage }
        { content }
      </div>
    );
  }
}

RandomPlanet.defaultProps = {
  updateInterval: 100000
};

const PlanetView = ({ planet }) => {
  const { id, name, population, rotationPeriod, diameter } = planet;

  return (
    <React.Fragment>
      <img className="planet-image" src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt=""/>
      <div>
        <h4>{ name }</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>{ population }</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period</span>
            <span>{ rotationPeriod }</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diametr</span>
            <span>{ diameter }</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};