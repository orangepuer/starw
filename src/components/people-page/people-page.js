import React, {Component} from "react";
import "./people-page.css";
import ItemList from "../item-list";
import ItemDetails from "../item-details";
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

    const { getPerson, getPersonImage } = this.swapiService;

    const itemList = (
      <ItemList onItemSelected={this.onPersonSelected} getData={this.swapiService.getAllPeople} >
        {({name, gender, birthYear}) => `${name} (${gender} ${birthYear})`}
      </ItemList>
    );

    const personDetails = (
      <ErrorBoundary>
        <ItemDetails itemId={this.state.selectedPerson} getData={getPerson} getImageUrl={getPersonImage} />
      </ErrorBoundary>
    );

    return (
      <ErrorBoundary>
        <Row left={itemList} right={personDetails} />
      </ErrorBoundary>
    )
  }
}