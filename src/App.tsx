import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as Styled from "./GlobalStyles";

import Layout from "./components/layout/Layout";
import HomePage from "./components/pages/homePage/HomePage";
import StakePage from "./components/pages/stakePage/StakePage";
import SwapPage from "./components/pages/swapPage/SwapPage";
import SignUpForm from "./components/pages/signUp/SignUpForm";
import SignInForm from "./components/pages/signIn/SignInForm";

const App = () => {
  return (
    <Styled.Container>
      <Router>
        <Switch>
          <Layout>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/signup">
              <SignUpForm />
            </Route>
            <Route exact path="/signin">
              <SignInForm/>
            </Route>
            {/* <Route exact path="/staking_farming">
              <StakePage />
            </Route>
            <Route exact path="/swap">
              <SwapPage />
            </Route> */}
          </Layout>
        </Switch>
      </Router>
    </Styled.Container>
  );
};

export default App;
