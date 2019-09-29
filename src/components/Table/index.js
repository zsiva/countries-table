import React, { Component, Fragment } from "react";
import Table from "@trendmicro/react-table";
import { Input, Button } from "semantic-ui-react";
import sortAttributes from "../../utils/sortAttributes";
import Detail from "../Detail";

export default class CountryTable extends Component {
  state = {
    sortColumnKey: "",
    sortOrder: "asc",
    sortedItems: this.props.items.sort(sortAttributes("name", "asc")),
    filterString: "",
    selectedCountryIndex: "",
    openDetail: false
  };

  toggleSortOrder = column => event => {
    this.setState(state => ({
      sortedItems: state.sortedItems.sort(
        sortAttributes(
          column.dataIndex,
          state.sortOrder === "asc" ? "desc" : "asc"
        )
      ),
      sortColumnKey: column.dataIndex,
      sortOrder: state.sortOrder === "asc" ? "desc" : "asc"
    }));
  };

  onChange = (event, { value }) => {
    this.setState(state => ({
      filterString: value,
      sortedItems: this.props.items.filter(it =>
        it.name.toLowerCase().includes(value.toLowerCase())
      )
    }));
  };

  selectCountry = name => {
    const countryIndex = this.props.items.findIndex(i => i.name === name);
    this.setState({
      selectedCountryIndex: countryIndex,
      openDetail: true
    });
  };

  clearFilters = () => {
    this.setState(state => ({
      filterString: "",
      sortedItems: this.props.items.sort(
        sortAttributes(state.sortColumnKey, state.sortOrder)
      )
    }));
  };
  render() {
    const { sortColumnKey, sortOrder, selectedCountryIndex } = this.state;
    const columns = Object.keys(this.props.items[0]).map(it => ({
      title: it.replace(/_/g, " "),
      dataIndex: it
    }));

    return (
      <Fragment>
        <Detail
          open={this.state.openDetail}
          onClose={() =>
            this.setState({
              openDetail: false
            })
          }
          {...this.props.items[selectedCountryIndex]}
        />

        <Input
          onChange={this.onChange}
          icon={{ name: "search", circular: true, link: true }}
          placeholder="Search..."
          value={this.state.filterString}
        />
        <Button
          floated="right"
          onClick={this.clearFilters}
          content="Clear filter"
        />

        <Table
          className="ui celled striped table"
          data={this.state.sortedItems}
          onRowClick={(record, index, e) => {
            this.selectCountry(record.name);
          }}
          columns={columns.map(column => ({
            ...column,
            sortable: true,
            onClick: this.toggleSortOrder(column),
            sortOrder: column.dataIndex === sortColumnKey ? sortOrder : ""
          }))}
        />
      </Fragment>
    );
  }
}
