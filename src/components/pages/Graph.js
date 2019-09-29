import React from "react";
import { useCountries } from "../../redux-store/countries";
import { Loader, Dimmer, Message, Container } from "semantic-ui-react";
import Page from "../Page";
import groupBy from "../../utils/groupBy";
import { VictoryBar, VictoryChart, VictoryAxis } from "victory";

let average = array => array.reduce((a, b) => a + b) / array.length;

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

  const dataByRegions = groupBy("region")(countries);
  const population = Object.entries(dataByRegions).map(region => {
    return {
      region: region[0],
      population: average(
        region[1].map(country => country.population / 1000000)
      )
    };
  });

  if (population.length === 0) {
    return (
      <Container style={{ padding: 20 }}>
        <Dimmer active inverted>
          <Loader inverted>Generating graph</Loader>
        </Dimmer>
      </Container>
    );
  }
  return (
    <Page>
      <h4>Population graph</h4>
      <VictoryChart
        domainPadding={15}
        height={300}
        style={{
          parent: { maxWidth: "70%", margin: "0 auto" }
        }}
      >
        <VictoryBar
          style={{
            data: {
              fill: "blue"
            }
          }}
          categories={{
            x: population.map(r => r.region)
          }}
          data={population}
          x="region"
          y="population"
        />
        <VictoryAxis dependentAxis tickFormat={t => `${t} M`} />
        <VictoryAxis
          label="Region"
          style={{
            axisLabel: { fontSize: 20, padding: 30 },
            grid: {
              stroke: "grey"
            },
            ticks: { stroke: "grey", size: 5 },
            tickLabels: { fontSize: 8, padding: 15 }
          }}
        />
      </VictoryChart>
    </Page>
  );
};

export default Graph;
