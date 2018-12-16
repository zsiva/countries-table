import React from 'react';
import { Icon } from 'semantic-ui-react';
import './styles.css';

export default function ItemDetail({ name, value, icon }) {
  return (
    <div className="itemWrapper">
      <Icon name={icon} />
      <strong>{name}:</strong>
      {value}
    </div>
  );
}
