import React from "react";
import styled from "styled-components";

import IntroductionBlock from "../common/IntroductionBlock";
import UpcomingPoolsBlock from "../common/UpcomingPoolsBlock";
import CompletedPoolsBlock from "../common/CompletedPoolsBlock";

const Container = styled.main`
  background-color: #fafafa;
  min-height: 100vh;
  width: 100%;
`;

const HomePage = () => {
  return (
    <Container>
      <IntroductionBlock />
      <UpcomingPoolsBlock />
      <CompletedPoolsBlock />
    </Container>
  );
};

export default HomePage;
