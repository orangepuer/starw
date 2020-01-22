import React, {Component} from "react";
import "./people-page.css";
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import ErrorIndicator from "../error-indicator";
import SwapiService from "../../services/swapi-service";
import Row from "../row";
import ErrorBoundary from "../error-boundary";

export default class PeoplePage extends Component {
  swapiService = new SwapiService();

  state = {
    selectedPerson: null
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

    const itemList = (
      <ItemList onItemSelected={this.onPersonSelected} getData={this.swapiService.getAllPeople} >
        {({name, gender, birthYear}) => `${name} (${gender} ${birthYear})`}
      </ItemList>
    );

    const personDetails = (
      <ErrorBoundary>
        <PersonDetails personId={this.state.selectedPerson} />
      </ErrorBoundary>
    );

    return (
      <ErrorBoundary>
        <Row left={itemList} right={personDetails} />
      </ErrorBoundary>
    )
  }
}