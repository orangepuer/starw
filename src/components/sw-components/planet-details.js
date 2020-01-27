import React from "react";
import ItemDetails, {Record} from "../item-details";
import {WithSwapiService} from "../hoc-helpers";

const PlanetDetails = ({itemId, swapiService}) => {
  const {getPlanet,getPlanetImage} = swapiService;

  return (
    <ItemDetails itemId={itemId} getData={getPlanet} getImageUrl={getPlanetImage} >
      <Record label='Population' field='population' />
      <Record label='RotationPeriod' field='rotationPeriod' />
      <Record label='Diameter' field='diameter' />
    </ItemDetails>
  )
};

export default WithSwapiService(PlanetDetails);