import React, { useState } from "react";
import * as Styled from "./SwapPage.Styled";
import { Heading01 } from "../../../utils/Heading";

const SwapPage = () => {
  const [activeTag, setActiveTag] = useState<number>(0);
  const [ton, setTon] = useState<number>(0);

  const RATIO = 50;

  return (
    <Styled.Container>
      <Styled.Content>
        <Styled.TextWrapper>
          <Heading01>
            <span style={{ color: "#FC9114" }}>Swap</span> your TON on SOL
          </Heading01>
        </Styled.TextWrapper>
        <Styled.Form>
          <Styled.Tags>
            <Styled.Tag
              activeTag={activeTag}
              index={0}
              onClick={() => setActiveTag(0)}
            >
              <p>Swap</p>
            </Styled.Tag>
            <Styled.Tag
              activeTag={activeTag}
              index={1}
              onClick={() => setActiveTag(1)}
            >
              <p>PRE-IDO</p>
            </Styled.Tag>
            <Styled.Tag
              activeTag={activeTag}
              index={2}
              onClick={() => setActiveTag(2)}
            >
              <p>ICO</p>
            </Styled.Tag>
          </Styled.Tags>
          <h1>Exchange your TON to SOL</h1>
          <Styled.Inputs>
            <Styled.ModifiedInput>
              <Styled.Input
                type="number"
                min={0}
                value={ton}
                onChange={(e) => setTon(Number(e.target.value))}
              />
              <p>TON</p>
            </Styled.ModifiedInput>
            <Styled.ModifiedInput>
              <Styled.Input
                type="number"
                min={0}
                disabled
                value={ton * RATIO}
              />
              <p>SOL</p>
            </Styled.ModifiedInput>
          </Styled.Inputs>
          <Styled.Info>
            <p>
              Fee Rate: <Styled.HighlightedText>2,5%</Styled.HighlightedText>
            </p>
            <p>
              <Styled.HighlightedText>
                TON Balance : 12.42993
              </Styled.HighlightedText>
            </p>
            <p>
              <Styled.HighlightedText>
                SOL Balance : 0.129922
              </Styled.HighlightedText>
            </p>
          </Styled.Info>
          <Styled.Button type="submit">Swap</Styled.Button>
        </Styled.Form>
      </Styled.Content>
    </Styled.Container>
  );
};

export default SwapPage;
