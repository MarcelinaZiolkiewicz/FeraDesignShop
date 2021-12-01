import * as React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "../view/Home";
import About from "../view/About";
import ProductPage from "../view/ProductPage";

function ContentSelector() {
  return (
    <main>
      <Switch>
        {/*<Route*/}
        {/*    path='/contact'*/}
        {/*    component={Contact}*/}
        {/*/>*/}
        {/*<Route*/}
        {/*    path='/shop'*/}
        {/*    component={Shop}*/}
        {/*/>*/}
        <Route path="/product/:id" component={ProductPage} />
        <Route path="/humans" component={About} />
        <Route path="/" component={Home} />
        <Redirect from="*" to="/" />
      </Switch>
    </main>
  );
}

export default ContentSelector;
