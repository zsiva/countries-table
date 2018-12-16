import React from 'react';
import { Icon } from 'semantic-ui-react';
import formatNumber from '../../utils/formatNumber';
import './styles.css';

export default function ItemDetail({ name, value, icon }) {
  return (
    <div className="itemWrapper">
      <Icon name={icon} />
      <strong>{name}:</strong>
      {formatNumber(value)}
    </div>
  );
}
