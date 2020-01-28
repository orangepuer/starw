import React from "react";
import ItemDetails, {Record} from "../item-details";
import {WithSwapiService} from "../hoc-helpers";

const StarshipDetails = (props) => {
  return (
    <ItemDetails {...props} >
      <Record label='Model' field='model' />
      <Record label='Length' field='Length' />
      <Record label='Cost' field='costInCredits' />
    </ItemDetails>
  )
};

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getStarship,
    getImageUrl: swapiService.getStarshipImage
  }
};

export default WithSwapiService(StarshipDetails, mapMethodsToProps);