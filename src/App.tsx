import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as Styled from "./GlobalStyles";

import Layout from "./components/layout/Layout";
import HomePage from "./components/pages/HomePage";

const App = () => {
  return (
    <Styled.Container>
      <Router>
        <Switch>
          <Layout>
            <Route exact path="/">
              <HomePage />
            </Route>
          </Layout>
        </Switch>
      </Router>
    </Styled.Container>
  );
};

export default App;
