import React, { Fragment } from 'react';

export default function Page(props) {
  return (
    <Fragment>
      <header>
        <h4>
          Country information based on Happiness Index, Population, Life Expectancy, Media Age and
          Price for a Big Mac.
        </h4>
      </header>
      <div className="appWrapper">{props.children}</div>
    </Fragment>
  );
}
