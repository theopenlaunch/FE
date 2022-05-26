import React from "react";
import styled from "styled-components";
import { Heading02 } from "../../utils/Heading";
import { ChevronRightIcon } from "@heroicons/react/solid";

import eclipse from "../../images/eclipse.png";

const Container = styled.main``;

const Content = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding-bottom: 80px;

  @media only screen and (max-width: 1200px) {
    padding: 40px;
  }
`;

const Header = styled.header`
  display: flex;

  @media only screen and (max-width: 740px) {
    flex-direction: column;
  }
`;

const Filters = styled.ul`
  display: flex;
  margin-left: 60px;
  align-items: center;

  @media only screen and (max-width: 740px) {
    margin-left: 0;
  }
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

  @media only screen and (max-width: 740px) {
    margin-top: 20px;
    font-size: 14px;
  }
`;

const Pools = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
  margin-top: 40px;

  @media only screen and (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`;

const Pool = styled.section`
  -webkit-box-shadow: 1px 10px 13px 5px rgba(0, 0, 0, 0.08);
  box-shadow: 1px 10px 13px 5px rgba(0, 0, 0, 0.08);
  display: flex;
  border-radius: 20px;
  padding: 20px;

  @media only screen and (max-width: 700px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ImageWrapper = styled.figure`
  width: 30%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;

  @media only screen and (max-width: 900px) {
    padding: 0 10px;
  }

  @media only screen and (max-width: 400px) {
    width: 100%;
  }
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

  @media only screen and (max-width: 700px) {
    width: 100%;
  }
`;

const PoolHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  @media only screen and (max-width: 900px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

const Tags = styled.section`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  width: 50%;

  @media only screen and (max-width: 900px) {
    width: 100%;
    align-items: center;
    justify-content: flex-start;
    margin-top: 10px;
  }
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

const Allocation = styled.section`
  display: flex;
  align-items: center;
`;

const AllocationAmount = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
`;

const AllocationHeading = styled.h1`
  font-size: 24px;
  font-weight: 700;
  line-height: 20px;
`;

const AllocationText = styled.p`
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

  @media only screen and (max-width: 400px) {
    font-size: 14px;
  }
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

const PoolsBlock = () => {
  return (
    <Container>
      <Content>
        <Header>
          <Heading02 id="upcoming_pools">Upcoming Pools</Heading02>
          <Filters>
            <Filter style={{ backgroundColor: "#A259FF" }}>Public</Filter>
            <Filter style={{ border: "1px solid #000", color: "#000" }}>
              Private
            </Filter>
            <Filter style={{ backgroundColor: "#FF004C" }}>0 - 5 days</Filter>
          </Filters>
        </Header>
        <Pools>
          <Pool>
            <ImageWrapper>
              <PoolImage src={eclipse} alt="Eclipse" />
            </ImageWrapper>
            <TextContent>
              <PoolHeader>
                <PoolHeading>Orb Aerospace</PoolHeading>
                <Tags>
                  <Tag style={{ backgroundColor: "#A259FF" }}>Private</Tag>
                  <Tag style={{ backgroundColor: "#FF004D" }}>in 0 days</Tag>
                </Tags>
              </PoolHeader>
              <PoolText>
                Orb Aerospace is a place where the brightest and most passionate
                individuals in aerospace have the flexibility to do their best
                work with the common goal of democratizing aviation.
              </PoolText>
              <Allocation>
                <AllocationAmount>
                  <AllocationText>Min Allocation</AllocationText>
                  <AllocationHeading>TBA</AllocationHeading>
                </AllocationAmount>
                <AllocationAmount>
                  <AllocationText>Maximum</AllocationText>
                  <AllocationHeading>TBA</AllocationHeading>
                </AllocationAmount>
              </Allocation>
            </TextContent>
          </Pool>
          <Pool>
            <ImageWrapper>
              <PoolImage src={eclipse} alt="Eclipse" />
            </ImageWrapper>
            <TextContent>
              <PoolHeader>
                <PoolHeading>Orb Aerospace</PoolHeading>
                <Tags>
                  <Tag style={{ backgroundColor: "#A259FF" }}>Private</Tag>
                  <Tag style={{ backgroundColor: "#FF004D" }}>in 0 days</Tag>
                </Tags>
              </PoolHeader>
              <PoolText>
                Orb Aerospace is a place where the brightest and most passionate
                individuals in aerospace have the flexibility to do their best
                work with the common goal of democratizing aviation.
              </PoolText>
              <Allocation>
                <AllocationAmount>
                  <AllocationText>Min Allocation</AllocationText>
                  <AllocationHeading>TBA</AllocationHeading>
                </AllocationAmount>
                <AllocationAmount>
                  <AllocationText>Maximum</AllocationText>
                  <AllocationHeading>TBA</AllocationHeading>
                </AllocationAmount>
              </Allocation>
            </TextContent>
          </Pool>
          <Pool>
            <ImageWrapper>
              <PoolImage src={eclipse} alt="Eclipse" />
            </ImageWrapper>
            <TextContent>
              <PoolHeader>
                <PoolHeading>Orb Aerospace</PoolHeading>
                <Tags>
                  <Tag style={{ backgroundColor: "#A259FF" }}>Private</Tag>
                  <Tag style={{ backgroundColor: "#FF004D" }}>in 0 days</Tag>
                </Tags>
              </PoolHeader>
              <PoolText>
                Orb Aerospace is a place where the brightest and most passionate
                individuals in aerospace have the flexibility to do their best
                work with the common goal of democratizing aviation.
              </PoolText>
              <Allocation>
                <AllocationAmount>
                  <AllocationText>Min Allocation</AllocationText>
                  <AllocationHeading>TBA</AllocationHeading>
                </AllocationAmount>
                <AllocationAmount>
                  <AllocationText>Maximum</AllocationText>
                  <AllocationHeading>TBA</AllocationHeading>
                </AllocationAmount>
              </Allocation>
            </TextContent>
          </Pool>
          <Pool>
            <ImageWrapper>
              <PoolImage src={eclipse} alt="Eclipse" />
            </ImageWrapper>
            <TextContent>
              <PoolHeader>
                <PoolHeading>Orb Aerospace</PoolHeading>
                <Tags>
                  <Tag style={{ backgroundColor: "#A259FF" }}>Private</Tag>
                  <Tag style={{ backgroundColor: "#FF004D" }}>in 0 days</Tag>
                </Tags>
              </PoolHeader>
              <PoolText>
                Orb Aerospace is a place where the brightest and most passionate
                individuals in aerospace have the flexibility to do their best
                work with the common goal of democratizing aviation.
              </PoolText>
              <Allocation>
                <AllocationAmount>
                  <AllocationText>Min Allocation</AllocationText>
                  <AllocationHeading>TBA</AllocationHeading>
                </AllocationAmount>
                <AllocationAmount>
                  <AllocationText>Maximum</AllocationText>
                  <AllocationHeading>TBA</AllocationHeading>
                </AllocationAmount>
              </Allocation>
            </TextContent>
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
