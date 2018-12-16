import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchData } from './actions';
import { Loader, Dimmer } from 'semantic-ui-react';
import Table from './components/Table';

class App extends Component {
  state = {
    selectedCountry: {},
  };

  componentDidMount() {
    this.props.fetchData();
  }

  onSelect = name => {
    const selected = this.props.items.find(it => it.countryName === name);
    this.setState({ selectedCountry: selected });
  };

  render() {
    if (this.props.loading) {
      return (
        <Dimmer active inverted>
          <Loader inverted>Fetching countries</Loader>
        </Dimmer>
      );
    }
    if (this.props.error) {
      return <p>There has been an error, try again later.</p>;
    }
    return (
      <Fragment>
        <header>
          <h4>
            Country information based on Happiness Index, Population, Life Expectancy, Media Age and
            Price for a Big Mac.
          </h4>
        </header>

        <div className="appWrapper">
          <h4>List of countries </h4>

          {this.props.items.length > 0 && (
            <Table items={this.props.items} onSelect={this.onSelect} />
          )}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.countries.items,
    loading: state.countries.loading,
    error: state.countries.error,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch(fetchData()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
