import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../../actions';
import { Loader, Dimmer, Message, Container } from 'semantic-ui-react';
import Table from '../Table';
import Detail from '../Detail';
import Page from '../Page';

class App extends Component {
  state = {
    selectedCountry: {},
  };

  componentDidMount() {
    this.props.fetchData();
  }

  onSelect = name => {
    const selected = this.props.items.find(it => it.name === name);
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
      return (
        <Page>
          <Container>
            <Message negative>
              <Message.Header>There has been an error, try again later.</Message.Header>
            </Message>
          </Container>
        </Page>
      );
    }
    return (
      <Page>
        <Fragment>
          {Object.keys(this.state.selectedCountry).length === 0 ? (
            <p>Please select a country from the list</p>
          ) : (
            <Detail {...this.state.selectedCountry} />
          )}
          <h4>List of countries </h4>

          {this.props.items.length > 0 && (
            <Table items={this.props.items} onSelect={this.onSelect} />
          )}
        </Fragment>
      </Page>
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
