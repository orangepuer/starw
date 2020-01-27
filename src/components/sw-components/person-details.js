import React from "react";
import ItemDetails, {Record} from "../item-details";
import {WithSwapiService} from "../hoc-helpers";

const PersonDetails = ({itemId, swapiService}) => {
  const {getPerson, getPersonImage} = swapiService;

  return (
    <ItemDetails itemId={itemId} getData={getPerson} getImageUrl={getPersonImage} >
      <Record label='Gender' field='gender' />
      <Record label='Eye Color' field='eyeColor' />
    </ItemDetails>
  )
};

export default WithSwapiService(PersonDetails);