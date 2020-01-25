import React, {Component} from "react";
import "./people-page.css";
import ErrorIndicator from "../error-indicator";
import Row from "../row";
import ErrorBoundary from "../error-boundary";
import {PersonDetails, PersonList} from "../sw-components";

export default class PeoplePage extends Component {
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
      <PersonList onItemSelected={this.onPersonSelected} >
        {({name, gender, birthYear}) => `${name} (${gender} ${birthYear})`}
      </PersonList>
    );

    const personDetails = (
      <ErrorBoundary>
        <PersonDetails itemId={this.state.selectedPerson} />
      </ErrorBoundary>
    );

    return (
      <ErrorBoundary>
        <Row left={itemList} right={personDetails} />
      </ErrorBoundary>
    )
  }
}