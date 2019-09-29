import React from "react";
import { useCountries } from "../../redux-store/countries";
import { Loader, Dimmer, Message, Container } from "semantic-ui-react";
import Table from "../Table";
import Page from "../Page";

const List = () => {
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
      <h4>
        Country information based on Happiness Index, Population, Life
        Expectancy, Media Age and Price for a Big Mac.
      </h4>
      {countries.length > 0 && <Table items={countries} />}
    </Page>
  );
};

export default List;
