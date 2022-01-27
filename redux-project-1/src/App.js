import React from "react";
import { Fragment } from "react";

import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";

const App = () => {
  return (
    <Fragment>
      <Header />
      <Auth />
      <Counter />
    </Fragment>
  );
};

export default App;
