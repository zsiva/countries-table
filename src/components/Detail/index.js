import React from 'react';
import ItemDetail from './ItemDetail';
import './styles.css';

export default function Detail(props) {
  return (
    <div className="detailWrapper">
      <h2>{props.name}</h2>
      <ItemDetail name="Current population" value={props.population} icon="users" />
      <ItemDetail name="Happiness index" value={props.happiness_index} icon="smile outline" />
      <ItemDetail name="Average age" value={props.median_age} icon="user" />
      <ItemDetail name="Bigmac average price" value={props.bigmac_index} icon="dollar" />
    </div>
  );
}
