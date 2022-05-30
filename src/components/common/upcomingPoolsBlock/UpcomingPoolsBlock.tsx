import React, { useEffect, useState } from "react";
import { Heading02 } from "../../../utils/Heading";
import { ChevronRightIcon } from "@heroicons/react/solid";
import * as Styled from "./UpcomingPoolsBlock.Styled";
import * as dayjs from "dayjs";
import GetStatus from "../../../logic/GetStatus";

var relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);

const UpcomingPoolsBlock = () => {
  const [bigArr, setBigArr] = useState({ status: [] });

  useEffect(() => {
    (async () => {
      setBigArr(await GetStatus());
    })();
  }, []);

  return (
    <Styled.Container>
      <Styled.Content>
        <Styled.Header>
          <Heading02 id="upcoming_pools">Upcoming Pools</Heading02>
          <Styled.Filters>
            <Styled.Filter style={{ backgroundColor: "#A259FF" }}>
              Public
            </Styled.Filter>
            <Styled.Filter style={{ border: "1px solid #000", color: "#000" }}>
              Private
            </Styled.Filter>
            <Styled.Filter style={{ backgroundColor: "#FF004C" }}>
              0 - 5 days
            </Styled.Filter>
          </Styled.Filters>
        </Styled.Header>
        <Styled.Pools>
          {bigArr.status.map((e: any) =>
            e ? (
              <Styled.Pool>
                <Styled.ImageWrapper>
                  <Styled.PoolImage src={e.Picture} alt="Eclipse" />
                </Styled.ImageWrapper>
                <Styled.TextContent>
                  <Styled.PoolHeader>
                    <Styled.PoolHeading>{e.Title}</Styled.PoolHeading>
                    <Styled.Tags>
                      <Styled.Tag style={{ backgroundColor: "#A259FF" }}>
                        Public
                      </Styled.Tag>
                      <Styled.Tag style={{ backgroundColor: "#FF004D" }}>
                        {e.EndDate === 10
                          ? "none"
                          : //@ts-ignore
                            dayjs().to(dayjs(Number(e.EndDate)))}
                        {/* dayjs(Number(e.EndDate)).format('MM/YYYY') */}
                      </Styled.Tag>
                    </Styled.Tags>
                  </Styled.PoolHeader>
                  <Styled.PoolText>
                    {e.Description.length > 200
                      ? e.Description.slice(0, 200) + "..."
                      : e.Description}
                  </Styled.PoolText>
                  <Styled.Allocation>
                    <Styled.AllocationAmount>
                      <Styled.AllocationText>Rised (TON)</Styled.AllocationText>
                      <Styled.AllocationHeading>
                        {e.Rised}
                      </Styled.AllocationHeading>
                    </Styled.AllocationAmount>
                    <Styled.AllocationAmount>
                      <Styled.AllocationText>
                        Maximum (TON)
                      </Styled.AllocationText>
                      <Styled.AllocationHeading>
                        {e.Max}
                      </Styled.AllocationHeading>
                    </Styled.AllocationAmount>
                  </Styled.Allocation>
                </Styled.TextContent>
              </Styled.Pool>
            ) : null
          )}
        </Styled.Pools>
        <Styled.ShowMore href="#completed_pools">
          <p>Show More</p>
          <Styled.IconWrapper>
            <ChevronRightIcon />
          </Styled.IconWrapper>
        </Styled.ShowMore>
      </Styled.Content>
    </Styled.Container>
  );
};

export default UpcomingPoolsBlock;
