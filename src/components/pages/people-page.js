import React from "react";
import {withRouter} from "react-router-dom";
import Row from "../row";
import {PersonDetails, PersonList} from "../sw-components";

const PeoplePage = ({history, match}) => {
  const {id} = match.params;
  const itemList = <PersonList onItemSelected={(id) => history.push(id)} />;
  const itemDetails = <PersonDetails itemId={id} />;

  return (
      <Row left={itemList} right={itemDetails} />
  )
};

export default withRouter(PeoplePage);