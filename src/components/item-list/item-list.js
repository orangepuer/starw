import React from "react";
import './item-list.css';
import PropTypes from 'prop-types';

const ItemList = (props) => {
  const {data, children: renderLabel, onItemSelected} = props;

  const items = data.map((item) => {
    const label = renderLabel(item);

    return (
      <li className="list-group-item" key={ item.id } onClick={() => onItemSelected(item.id) } >
        { label }
      </li>
    )
  });

  return (
    <ul className="item-list list-group">
      { items }
    </ul>
  );
};

ItemList.defaultProps = {
  onItemSelected: () => {}
};

ItemList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  children: PropTypes.func.isRequired,
  onItemSelected: PropTypes.func
};

export default ItemList;