import React, { Component } from "react";
import Container from "@material-ui/core/Container";
export class ResultComponent extends Component {
  render() {
    let { result } = this.props;
    return <div>{result}</div>;
  }
}

export default ResultComponent;
