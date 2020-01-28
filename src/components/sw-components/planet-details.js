import React from "react";
import ItemDetails, {Record} from "../item-details";
import {WithSwapiService} from "../hoc-helpers";

const PlanetDetails = (props) => {
  return (
    <ItemDetails {...props} >
      <Record label='Population' field='population' />
      <Record label='RotationPeriod' field='rotationPeriod' />
      <Record label='Diameter' field='diameter' />
    </ItemDetails>
  )
};

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getPlanet,
    getImageUrl: swapiService.getPlanetImage
  }
};

export default WithSwapiService(PlanetDetails, mapMethodsToProps);