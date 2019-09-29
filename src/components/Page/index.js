import React, { Fragment } from "react";

export default function Page(props) {
  return (
    <Fragment>
      <div className="appWrapper">{props.children}</div>
    </Fragment>
  );
}
