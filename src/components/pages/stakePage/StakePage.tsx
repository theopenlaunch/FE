import React, { useState } from "react";
import * as Styled from "./StakePage.Styled";
import { Heading01 } from "../../../utils/Heading";

const StakePage = () => {
  const [activeTag, setActiveTag] = useState<number>(0);
  const [activeDay, setActiveDay] = useState<number>(0);

  return (
    <Styled.Container>
      <Styled.Content>
        <Styled.TextWrapper>
          <Heading01>
            <span style={{ color: "#FC9114" }}>Stake</span> or{" "}
            <span style={{ color: "#FC9114" }}>farm</span> your{" "}
            <span style={{ color: "#eee600" }}>$TONANA</span> to join{" "}
            <span style={{ color: "#FC9114" }}>whitelists</span>
          </Heading01>
        </Styled.TextWrapper>
        <Styled.Form>
          <Styled.Tags>
            <Styled.Tag
              activeTag={activeTag}
              index={0}
              onClick={() => setActiveTag(0)}
            >
              <p>Public</p>
            </Styled.Tag>
            <Styled.Tag
              activeTag={activeTag}
              index={1}
              onClick={() => setActiveTag(1)}
            >
              <p>Farm</p>
            </Styled.Tag>
            <Styled.Tag
              activeTag={activeTag}
              index={2}
              onClick={() => setActiveTag(2)}
            >
              <p>Close</p>
            </Styled.Tag>
          </Styled.Tags>
          <h1>Lock duration</h1>
          <Styled.Days>
            <Styled.Day
              activeDay={activeDay}
              index={0}
              onClick={() => setActiveDay(0)}
            >
              <p>7 days</p>
            </Styled.Day>
            <Styled.Day
              activeDay={activeDay}
              index={1}
              onClick={() => setActiveDay(1)}
            >
              <p>14 days</p>
            </Styled.Day>
            <Styled.Day
              activeDay={activeDay}
              index={2}
              onClick={() => setActiveDay(2)}
            >
              <p>30 days</p>
            </Styled.Day>
            <Styled.Day
              activeDay={activeDay}
              index={3}
              onClick={() => setActiveDay(3)}
            >
              <p>60 days</p>
            </Styled.Day>
          </Styled.Days>
          <Styled.Info>
            <p>Your staked amount: 0 SFUND</p>
            <p>APY Rate: 0%</p>
            <p>Maturity Date: </p>
          </Styled.Info>
          <Styled.Balance>Balance : 0.000 SFUND</Styled.Balance>
          <Styled.Button type="submit">Approve</Styled.Button>
        </Styled.Form>
      </Styled.Content>
    </Styled.Container>
  );
};

export default StakePage;
