import React from "react";
import styled from "styled-components";
import { Heading02 } from "../../utils/Heading";
import { ChevronRightIcon } from "@heroicons/react/solid";
import ProgressBar from "../progressBar/ProgressBar";

import mask from "../../images/mask.png";

const Container = styled.main``;

const Content = styled.section`
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.header`
  display: flex;
`;

const Filters = styled.ul`
  display: flex;
  margin-left: 60px;
  align-items: center;
`;

const Filter = styled.li`
  list-style-type: none;
  margin-right: 10px;
  color: #fff;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 15px;
`;

const Pools = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
  margin-top: 40px;
`;

const Pool = styled.section`
  -webkit-box-shadow: 1px 10px 13px 5px rgba(0, 0, 0, 0.08);
  box-shadow: 1px 10px 13px 5px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  padding: 20px;
`;

const ImageWrapper = styled.figure`
  width: 30%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

const PoolImage = styled.img`
  height: 90px;
  width: 90px;
  margin-top: 20px;
`;

const TextContent = styled.article`
  display: flex;
  flex-direction: column;
  width: 70%;
`;

const PoolHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Tag = styled.div`
  border-radius: 50px;
  padding: 2px 8px;
  color: #fff;
  padding: 2px 10px;
  margin-right: 5px;
  font-size: 12px;
`;

const PoolText = styled.p`
  font-size: 14px;
  margin-bottom: 20px;
`;

const TopContent = styled.section`
  display: flex;
  padding-bottom: 40px;
`;

const BottomContent = styled.section`
  display: flex;
  flex-direction: column;
`;

const RaiseAmount = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 80px;
`;

const RaiseHeading = styled.h1`
  font-size: 24px;
  font-weight: 700;
  line-height: 20px;
`;

const RaiseHeadingSmall = styled.h1`
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
`;

const RaiseText = styled.p`
  color: #c0c0c0;
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 10px;
`;

const PoolHeading = styled.h1`
  font-size: 24px;
  font-weight: bold;
  line-height: 30px;
`;

const ShowMore = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #699bf7;
  cursor: pointer;
  margin-top: 80px;
  text-decoration: none;
`;

const IconWrapper = styled.figure`
  height: 20px;
  width: 20px;
  margin-left: 10px;

  svg {
    height: 100%;
    width: 100%;
  }
`;

const Visibility = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const RaiseAmountContent = styled.section`
  display: flex;
`;

const ProgressBarWrapper = styled.div`
  margin-top: 20px;
`;

const BarDataContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

const BarDataText = styled.p`
  color: #fc9114;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
`;

const BarDataBLC = styled.p`
  color: #c0c0c0;
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
`;

const PoolsBlock = () => {
  return (
    <Container>
      <Content>
        <Header>
          <Heading02 id="upcoming_pools">Completed Pools</Heading02>
          <Filters>
            <Filter style={{ backgroundColor: "#A259FF" }}>Public</Filter>
            <Filter style={{ backgroundColor: "#FC9114" }}>Private</Filter>
            <Filter style={{ backgroundColor: "#0FA958" }}>87 - 100 %</Filter>
          </Filters>
        </Header>
        <Pools>
          <Pool>
            <TopContent>
              <ImageWrapper>
                <PoolImage src={mask} alt="Mask" />
              </ImageWrapper>
              <TextContent>
                <Visibility>
                  <Tag style={{ backgroundColor: "#A259FF" }}>Public</Tag>
                </Visibility>
                <PoolHeader>
                  <PoolHeading>Ecovid Mask</PoolHeading>
                  <Tag style={{ backgroundColor: "#FC9114" }}>
                    1 BUSD = 518,55 BLC
                  </Tag>
                </PoolHeader>
                <PoolText>
                  The startup team is working on a technology for recyclable
                  protective masks based on natural nanomaterials.
                </PoolText>
              </TextContent>
            </TopContent>
            <BottomContent>
              <RaiseAmountContent>
                <RaiseAmount>
                  <RaiseText>Total Raise</RaiseText>
                  <RaiseHeading>237499.48 BUSD</RaiseHeading>
                </RaiseAmount>
                <RaiseAmount>
                  <RaiseText>Maximum</RaiseText>
                  <RaiseHeadingSmall>239499.48 BUSD</RaiseHeadingSmall>
                </RaiseAmount>
              </RaiseAmountContent>
              <ProgressBarWrapper>
                <ProgressBar percent={97.21} />
              </ProgressBarWrapper>
              <BarDataContent>
                <BarDataText>97.21%</BarDataText>
                <BarDataBLC>237499.48/ 239499.48 BLC</BarDataBLC>
              </BarDataContent>
            </BottomContent>
          </Pool>
          <Pool>
            <TopContent>
              <ImageWrapper>
                <PoolImage src={mask} alt="Mask" />
              </ImageWrapper>
              <TextContent>
                <Visibility>
                  <Tag style={{ backgroundColor: "#A259FF" }}>Public</Tag>
                </Visibility>
                <PoolHeader>
                  <PoolHeading>Ecovid Mask</PoolHeading>
                  <Tag style={{ backgroundColor: "#FC9114" }}>
                    1 BUSD = 518,55 BLC
                  </Tag>
                </PoolHeader>
                <PoolText>
                  The startup team is working on a technology for recyclable
                  protective masks based on natural nanomaterials.
                </PoolText>
              </TextContent>
            </TopContent>
            <BottomContent>
              <RaiseAmountContent>
                <RaiseAmount>
                  <RaiseText>Total Raise</RaiseText>
                  <RaiseHeading>237499.48 BUSD</RaiseHeading>
                </RaiseAmount>
                <RaiseAmount>
                  <RaiseText>Maximum</RaiseText>
                  <RaiseHeadingSmall>239499.48 BUSD</RaiseHeadingSmall>
                </RaiseAmount>
              </RaiseAmountContent>
              <ProgressBarWrapper>
                <ProgressBar percent={74.8} />
              </ProgressBarWrapper>
              <BarDataContent>
                <BarDataText>74.8%</BarDataText>
                <BarDataBLC>237499.48/ 239499.48 BLC</BarDataBLC>
              </BarDataContent>
            </BottomContent>
          </Pool>
          <Pool>
            <TopContent>
              <ImageWrapper>
                <PoolImage src={mask} alt="Mask" />
              </ImageWrapper>
              <TextContent>
                <Visibility>
                  <Tag style={{ backgroundColor: "#A259FF" }}>Public</Tag>
                </Visibility>
                <PoolHeader>
                  <PoolHeading>Ecovid Mask</PoolHeading>
                  <Tag style={{ backgroundColor: "#FC9114" }}>
                    1 BUSD = 518,55 BLC
                  </Tag>
                </PoolHeader>
                <PoolText>
                  The startup team is working on a technology for recyclable
                  protective masks based on natural nanomaterials.
                </PoolText>
              </TextContent>
            </TopContent>
            <BottomContent>
              <RaiseAmountContent>
                <RaiseAmount>
                  <RaiseText>Total Raise</RaiseText>
                  <RaiseHeading>237499.48 BUSD</RaiseHeading>
                </RaiseAmount>
                <RaiseAmount>
                  <RaiseText>Maximum</RaiseText>
                  <RaiseHeadingSmall>239499.48 BUSD</RaiseHeadingSmall>
                </RaiseAmount>
              </RaiseAmountContent>
              <ProgressBarWrapper>
                <ProgressBar percent={10} />
              </ProgressBarWrapper>
              <BarDataContent>
                <BarDataText>10%</BarDataText>
                <BarDataBLC>237499.48/ 239499.48 BLC</BarDataBLC>
              </BarDataContent>
            </BottomContent>
          </Pool>
          <Pool>
            <TopContent>
              <ImageWrapper>
                <PoolImage src={mask} alt="Mask" />
              </ImageWrapper>
              <TextContent>
                <Visibility>
                  <Tag style={{ backgroundColor: "#A259FF" }}>Public</Tag>
                </Visibility>
                <PoolHeader>
                  <PoolHeading>Ecovid Mask</PoolHeading>
                  <Tag style={{ backgroundColor: "#FC9114" }}>
                    1 BUSD = 518,55 BLC
                  </Tag>
                </PoolHeader>
                <PoolText>
                  The startup team is working on a technology for recyclable
                  protective masks based on natural nanomaterials.
                </PoolText>
              </TextContent>
            </TopContent>
            <BottomContent>
              <RaiseAmountContent>
                <RaiseAmount>
                  <RaiseText>Total Raise</RaiseText>
                  <RaiseHeading>237499.48 BUSD</RaiseHeading>
                </RaiseAmount>
                <RaiseAmount>
                  <RaiseText>Maximum</RaiseText>
                  <RaiseHeadingSmall>239499.48 BUSD</RaiseHeadingSmall>
                </RaiseAmount>
              </RaiseAmountContent>
              <ProgressBarWrapper>
                <ProgressBar percent={42} />
              </ProgressBarWrapper>
              <BarDataContent>
                <BarDataText>42%</BarDataText>
                <BarDataBLC>237499.48/ 239499.48 BLC</BarDataBLC>
              </BarDataContent>
            </BottomContent>
          </Pool>
        </Pools>
        <ShowMore href="#completed_pools">
          <p>Show More</p>
          <IconWrapper>
            <ChevronRightIcon />
          </IconWrapper>
        </ShowMore>
      </Content>
    </Container>
  );
};

export default PoolsBlock;
