import React, {Component} from "react";
import Row from "../row";
import {PersonDetails, PersonList} from "../sw-components";

export default class PeoplePage extends Component {
  state = {
    selectedItem: null
  };

  onItemSelected = (id) => {
    this.setState({
      selectedItem: id
    })
  };

  render() {
    const itemList = <PersonList onItemSelected={this.onItemSelected} />;
    const itemDetails = <PersonDetails itemId={this.state.selectedItem} />;

    return (
        <Row left={itemList} right={itemDetails} />
    )
  }
}