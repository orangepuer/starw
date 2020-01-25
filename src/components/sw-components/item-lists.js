import React from "react";
import ItemList from "../item-list/item-list";
import { WithData } from "../hoc-helpers";
import SwapiService from "../../services/swapi-service";

const { getAllPeople, getAllPlanets, getAllStarships } = new SwapiService();

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

const PersonList = WithData(WithChildFunction(ItemList, renderPerson), getAllPeople);
const PlanetList = WithData(WithChildFunction(ItemList, renderName), getAllPlanets);
const StarshipList = WithData(WithChildFunction(ItemList, renderName), getAllStarships);

export {
  PersonList,
  PlanetList,
  StarshipList
};