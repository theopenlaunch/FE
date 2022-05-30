import React from "react";
import * as Styled from "./HomePage.Styled";

import IntroductionBlock from "../../common/introductionBlock/IntroductionBlock";
import UpcomingPoolsBlock from "../../common/upcomingPoolsBlock/UpcomingPoolsBlock";
import CompletedPoolsBlock from "../../common/completedPoolsBlock/CompletedPoolsBlock";

const HomePage = () => {
  return (
    <Styled.Container>
      <IntroductionBlock />
      <UpcomingPoolsBlock />
      <CompletedPoolsBlock />
    </Styled.Container>
  );
};

export default HomePage;
