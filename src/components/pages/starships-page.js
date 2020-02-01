import React, {Component} from "react";
import Row from "../row";
import {StarshipDetails, StarshipList} from "../sw-components";

export default class StarshipsPage extends Component {
  state = {
    selectedItem: null
  };

  onItemSelected = (id) => {
    this.setState({
      selectedItem: id
    })
  };

  render() {
    const itemList = <StarshipList onItemSelected={this.onItemSelected} />;
    const itemDetails = <StarshipDetails itemId={this.state.selectedItem} />;

    return (
      <Row left={itemList} right={itemDetails} />
    )
  }
}