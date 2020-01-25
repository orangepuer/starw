import React from "react";
import ItemDetails, { Record } from "../item-details";
import SwapiService from "../../services/swapi-service";

const { getPerson, getPlanet, getStarship, getPersonImage, getPlanetImage, getStarshipImage } = new SwapiService();

const PersonDetails = ({itemId}) => {
  return (
    <ItemDetails itemId={itemId} getData={getPerson} getImageUrl={getPersonImage} >
      <Record label='Gender' field='gender' />
      <Record label='Eye Color' field='eyeColor' />
    </ItemDetails>
  )
};
const PlanetDetails = ({itemId}) => {
  return (
    <ItemDetails itemId={itemId} getData={getPlanet} getImageUrl={getPlanetImage} >
      <Record label='Population' field='population' />
      <Record label='RotationPeriod' field='rotationPeriod' />
      <Record label='Diameter' field='diameter' />
    </ItemDetails>
  )
};
const StarshipDetails = ({itemId}) => {
  return (
    <ItemDetails itemId={itemId} getData={getStarship} getImageUrl={getStarshipImage} >
      <Record label='Model' field='model' />
      <Record label='Length' field='Length' />
      <Record label='Cost' field='costInCredits' />
    </ItemDetails>
  )
};

export {
  PersonDetails,
  PlanetDetails,
  StarshipDetails
};