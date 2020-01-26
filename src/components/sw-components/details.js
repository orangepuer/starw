import React from "react";
import ItemDetails, { Record } from "../item-details";
import {SwapiServiceConsumer} from "../swapi-service-context";

const PersonDetails = ({itemId}) => {
  return (
    <SwapiServiceConsumer>
      {
        ({getPerson, getPersonImage}) => {
          return (
            <ItemDetails itemId={itemId} getData={getPerson} getImageUrl={getPersonImage} >
              <Record label='Gender' field='gender' />
              <Record label='Eye Color' field='eyeColor' />
            </ItemDetails>
          )
        }
      }
    </SwapiServiceConsumer>
  )
};
const PlanetDetails = ({itemId}) => {
  return (
    <SwapiServiceConsumer>
      {
        ({getPlanet, getPlanetImage}) => {
          return (
            <ItemDetails itemId={itemId} getData={getPlanet} getImageUrl={getPlanetImage} >
              <Record label='Population' field='population' />
              <Record label='RotationPeriod' field='rotationPeriod' />
              <Record label='Diameter' field='diameter' />
            </ItemDetails>
          )
        }
      }
    </SwapiServiceConsumer>
  )
};
const StarshipDetails = ({itemId}) => {
  return (
    <SwapiServiceConsumer>
      {
        ({getStarship, getStarshipImage}) => {
          return (
            <ItemDetails itemId={itemId} getData={getStarship} getImageUrl={getStarshipImage} >
              <Record label='Model' field='model' />
              <Record label='Length' field='Length' />
              <Record label='Cost' field='costInCredits' />
            </ItemDetails>
          )
        }
      }
    </SwapiServiceConsumer>
  )
};

export {
  PersonDetails,
  PlanetDetails,
  StarshipDetails
};