import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

import "./App.css";
import ResultComponent from "./Components/ResultComponent";
const style = theme => ({
  root: {
    margin: "auto",

    [theme.breakpoints.only("xs")]: {
      margin: 0,
      padding: 0
    },
    [theme.breakpoints.only("sm")]: {
      margin: 0,
      padding: 0
    }
  },
  displayClass: {
    backgroundColor: "blue",
    margin: "auto",
    color: "white"
  },
  typography: {
    textAlign: "right",
    marginTop: "13vh",
    overflowWrap: "break-word",
    paddingRight: "20px",
    paddingBottom: "15px"
  },
  keyContainer: {
    margin: 0,
    backgroundColor: "#d5d5d5"
  },
  keyItem: {
    backgroundColor: "#d9dde2",
    textAlign: "center",
    display: "grid",
    fontSize: "25px",
    alignContent: "center",
    "&:hover": {
      backgroundColor: "#e1e5ea"
    }
  },
  operator: {
    backgroundColor: "#c2cace",
    textAlign: "center",
    fontSize: "25px",
    alignContent: "center",
    display: "grid",
    "&:hover": {
      backgroundColor: "#c1c4c9"
    }
  },
  equalItem: {
    backgroundColor: "#23842f",
    textAlign: "center",
    alignContent: "center",
    display: "grid",
    fontSize: "25px",
    color: "white",
    "&:hover": {
      backgroundColor: "#2fb740"
    }
  }
});
class App extends Component {
  classes = this.props.classes;
  constructor(props) {
    super(props);

    this.state = {
      result: "0"
    };
  }

  display = button => {
    if (this.state.result == "0") {
      this.state.result = " ";
    }
    this.setState({
      result: this.state.result + button.target.id
    });
  };

  calculate = () => {
    var saveResults;
    saveResults = this.state.result;
    this.setState({
      result: eval(saveResults)
    });
  };
  clear = () => {
    this.setState({
      result: "0"
    });
  };
  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    });
  };
  displayFunc = this.display;

  buttonName = [
    { name: "C", onClick: this.clear, classname: this.classes.operator },
    {
      name: "/",
      onClick: this.displayFunc,
      classname: this.classes.operator
    },
    {
      name: "*",
      onClick: this.displayFunc,
      classname: this.classes.operator
    },
    {
      name: "CE",
      onClick: this.backspace,
      classname: this.classes.operator
    },
    {
      name: "7",
      onClick: this.displayFunc,
      classname: this.classes.keyItem
    },
    {
      name: "8",
      onClick: this.displayFunc,
      classname: this.classes.keyItem
    },
    {
      name: "9",
      onClick: this.displayFunc,
      classname: this.classes.keyItem
    },
    {
      name: "+",
      onClick: this.displayFunc,
      classname: this.classes.operator
    },
    {
      name: "4",
      onClick: this.displayFunc,
      classname: this.classes.keyItem
    },
    {
      name: "5",
      onClick: this.displayFunc,
      classname: this.classes.keyItem
    },
    {
      name: "6",
      onClick: this.displayFunc,
      classname: this.classes.keyItem
    },
    {
      name: "-",
      onClick: this.displayFunc,
      classname: this.classes.operator
    },
    {
      name: "1",
      onClick: this.displayFunc,
      classname: this.classes.keyItem
    },
    {
      name: "2",
      onClick: this.displayFunc,
      classname: this.classes.keyItem
    },
    {
      name: "3",
      onClick: this.displayFunc,
      classname: this.classes.keyItem
    },

    {
      name: ".",
      onClick: this.displayFunc,
      classname: this.classes.operator
    },
    {
      name: "0",
      onClick: this.displayFunc,
      classname: this.classes.keyItem
    },

    {
      name: "(",
      onClick: this.displayFunc,
      classname: this.classes.operator
    },
    {
      name: ")",
      onClick: this.displayFunc,
      classname: this.classes.operator
    },
    {
      name: "=",
      onClick: this.calculate,
      classname: this.classes.equalItem
    }
  ];
  render() {
    //const { styles } = this.props;
    return (
      <Container className={this.classes.root + " root"}>
        <Grid container fixed justify="center">
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            lg={3}
            xl={3}
            className={this.classes.displayClass}
          >
            <Typography variant="h3" className={this.classes.typography}>
              <ResultComponent result={this.state.result} />
            </Typography>
          </Grid>
        </Grid>

        <Grid
          item={true}
          container
          fixed
          xs={12}
          sm={12}
          md={4}
          lg={3}
          xl={3}
          justify="center"
          className={this.classes.keyContainer}
        >
          {this.buttonName.map(fun => (
            <Grid
              item
              className={fun.classname}
              xs={3}
              id={fun.name}
              onClick={fun.onClick}
            >
              {fun.name}
            </Grid>
          ))}
        </Grid>
      </Container>
    );
  }
}

export default withStyles(style)(App);
