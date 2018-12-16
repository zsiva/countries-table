import React, { Component } from 'react';
import Table from '@trendmicro/react-table';
import sortAttributes from '../../utils/sortAttributes';

export default class CountryTable extends Component {
  state = {
    sortColumnKey: '',
    sortOrder: 'asc',
    sortedItems: this.props.items.sort(sortAttributes('countryName', 'asc')),
    filterString: '',
  };

  toggleSortOrder = column => event => {
    this.setState(state => ({
      sortedItems: state.sortedItems.sort(
        sortAttributes(column.dataIndex, state.sortOrder === 'asc' ? 'desc' : 'asc'),
      ),
      sortColumnKey: column.dataIndex,
      sortOrder: state.sortOrder === 'asc' ? 'desc' : 'asc',
    }));
  };

  render() {
    const { sortColumnKey, sortOrder } = this.state;
    const columns = Object.keys(this.state.sortedItems[0]).map(it => ({
      title: it.replace(/_/g, ' '),
      dataIndex: it,
    }));

    return (
      <Table
        className="ui celled striped table"
        data={this.state.sortedItems}
        onRowClick={(record, index, e) => {
          this.props.onSelect(record.name);
        }}
        columns={columns.map(column => ({
          ...column,
          sortable: true,
          onClick: this.toggleSortOrder(column),
          sortOrder: column.dataIndex === sortColumnKey ? sortOrder : '',
        }))}
      />
    );
  }
}
