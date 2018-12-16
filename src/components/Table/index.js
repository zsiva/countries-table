import React, { Component, Fragment } from 'react';
import Table from '@trendmicro/react-table';
import { Input } from 'semantic-ui-react';
import sortAttributes from '../../utils/sortAttributes';

export default class CountryTable extends Component {
  state = {
    sortColumnKey: '',
    sortOrder: 'asc',
    sortedItems: this.props.items.sort(sortAttributes('name', 'asc')),
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

  onChange = (event, { value }) => {
    this.setState(state => ({
      filterString: value,
      sortedItems: this.props.items.filter(it =>
        it.name.toLowerCase().includes(value.toLowerCase()),
      ),
    }));
  };

  render() {
    const { sortColumnKey, sortOrder } = this.state;
    const columns = Object.keys(this.props.items[0]).map(it => ({
      title: it.replace(/_/g, ' '),
      dataIndex: it,
    }));

    return (
      <Fragment>
        <Input
          onChange={this.onChange}
          icon={{ name: 'search', circular: true, link: true }}
          placeholder="Search..."
        />

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
      </Fragment>
    );
  }
}
