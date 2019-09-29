import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { fetchData } from "../../redux-store/countries";
import List from "../pages/List";
import Graph from "../pages/Graph";

const Header = () => {
  return (
    <header>
      <Link to="/">List</Link>
      <Link to="/population">Population graph</Link>
    </header>
  );
};

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <Router>
      <Route component={Header} />
      <Switch>
        <Route path="/" exact component={List} />
        <Route path="/population" exact component={Graph} />
      </Switch>
    </Router>
  );
};

export default App;
