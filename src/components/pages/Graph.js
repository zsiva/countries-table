import React from "react";
import { useCountries } from "../../redux-store/countries";
import { Loader, Dimmer, Message, Container } from "semantic-ui-react";
import Page from "../Page";

const Graph = () => {
  const countries = useCountries();

  if (countries.loading) {
    return (
      <Dimmer active inverted>
        <Loader inverted>Fetching countries</Loader>
      </Dimmer>
    );
  }
  if (countries.error) {
    return (
      <Page>
        <Container>
          <Message negative>
            <Message.Header>
              There has been an error, try again later.
            </Message.Header>
          </Message>
        </Container>
      </Page>
    );
  }
  return (
    <Page>
      <h4>Population graph</h4>
    </Page>
  );
};

export default Graph;
