import React from "react";
import ItemList from "../item-list/item-list";
import { WithData, WithSwapiService } from "../hoc-helpers";

const WithChildFunction = (Wrapped, fn) => {
  return (props) => {
    return (
      <Wrapped {...props}>
        {fn}
      </Wrapped>
    )
  }
};

const renderPerson = ({name, gender, birthYear}) => `${name} (${gender} ${birthYear})`;
const renderName = ({name}) => <span>{name}</span>;

const mapPersonMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPeople
  }
};

const mapPlanetMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPlanets
  }
};

const mapStarshipMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllStarships
  }
};

const PersonList = WithSwapiService(WithData(WithChildFunction(ItemList, renderPerson)), mapPersonMethodsToProps);
const PlanetList = WithSwapiService(WithData(WithChildFunction(ItemList, renderName)), mapPlanetMethodsToProps);
const StarshipList = WithSwapiService(WithData(WithChildFunction(ItemList, renderName)), mapStarshipMethodsToProps);

export {
  PersonList,
  PlanetList,
  StarshipList
};