import React from "react";
import { Heading02, Heading03 } from "../../../utils/Heading";
import { ChevronRightIcon } from "@heroicons/react/solid";
import ProgressBar from "../../progressBar/ProgressBar";
import * as Styled from "./CompletedPoolsBlock.Styled";

import mask from "../../../images/mask.png";

const PoolsBlock = (props: any) => {
	return (
		<Styled.Container>
			<Styled.Content>
				<Styled.Header>
					<Heading02 id="upcoming_pools">Completed Pools</Heading02>

					<Styled.Filters>
						<Styled.Filter style={{ backgroundColor: "#A259FF" }}>
							Public
						</Styled.Filter>
						<Styled.Filter style={{ backgroundColor: "#FC9114" }}>
							Private
						</Styled.Filter>
						<Styled.Filter style={{ backgroundColor: "#0FA958" }}>
							87 - 100 %
						</Styled.Filter>
					</Styled.Filters>
				</Styled.Header>
				<Styled.Pools>
					{/* <Styled.Pool>
            <Styled.TopContent>
              <Styled.ImageWrapper>
                <Styled.PoolImage src={mask} alt="Mask" />
              </Styled.ImageWrapper>
              <Styled.TextContent>
                <Styled.Visibility>
                  <Styled.Tag style={{ backgroundColor: "#A259FF" }}>
                    Public
                  </Styled.Tag>
                </Styled.Visibility>
                <Styled.PoolHeader>
                  <Styled.PoolHeading>Ecovid Mask</Styled.PoolHeading>
                  <Styled.Tag style={{ backgroundColor: "#FC9114" }}>
                    1 BUSD = 518,55 BLC
                  </Styled.Tag>
                </Styled.PoolHeader>
                <Styled.PoolText>
                  The startup team is working on a technology for recyclable
                  protective masks based on natural nanomaterials.
                </Styled.PoolText>
              </Styled.TextContent>
            </Styled.TopContent>
            <Styled.BottomContent>
              <Styled.RaiseAmountContent>
                <Styled.RaiseAmount>
                  <Styled.RaiseText>Total Raise</Styled.RaiseText>
                  <Styled.RaiseHeading>237499.48 BUSD</Styled.RaiseHeading>
                </Styled.RaiseAmount>
                <Styled.RaiseAmount>
                  <Styled.RaiseText>Maximum</Styled.RaiseText>
                  <Styled.RaiseHeadingSmall>
                    239499.48 BUSD
                  </Styled.RaiseHeadingSmall>
                </Styled.RaiseAmount>
              </Styled.RaiseAmountContent>
              <Styled.ProgressBarWrapper>
                <ProgressBar percent={97.21} />
              </Styled.ProgressBarWrapper>
              <Styled.BarDataContent>
                <Styled.BarDataText>97.21%</Styled.BarDataText>
                <Styled.BarDataBLC>237499.48/ 239499.48 BLC</Styled.BarDataBLC>
              </Styled.BarDataContent>
            </Styled.BottomContent>
          </Styled.Pool> */}
					<Heading03 style={{ margin: "auto" }}>
						There are no completed projects yet
					</Heading03>
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

export default PoolsBlock;
