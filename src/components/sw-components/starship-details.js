import React from "react";
import ItemDetails, {Record} from "../item-details";
import {WithSwapiService} from "../hoc-helpers";

const StarshipDetails = ({itemId, swapiService}) => {
  const {getStarship, getStarshipImage} = swapiService;

  return (
    <ItemDetails itemId={itemId} getData={getStarship} getImageUrl={getStarshipImage} >
      <Record label='Model' field='model' />
      <Record label='Length' field='Length' />
      <Record label='Cost' field='costInCredits' />
    </ItemDetails>
  )
};

export default WithSwapiService(StarshipDetails);