import React, {Component} from "react";
import Row from "../row";
import {PlanetDetails, PlanetList} from "../sw-components";

export default class PlanetsPage extends Component {
  state = {
    selectedItem: null
  };

  onItemSelected = (id) => {
    this.setState({
      selectedItem: id
    })
  };

  render() {
    const itemList = <PlanetList onItemSelected={this.onItemSelected} />;
    const itemDetails = <PlanetDetails itemId={this.state.selectedItem} />;

    return (
      <Row left={itemList} right={itemDetails} />
    )
  }
}