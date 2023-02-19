import React, { useEffect, useState } from "react";
import * as Styled from "./HomePage.Styled";
import GetStatus from "../../../logic/GetStatus";
import TonWeb from "tonweb";
import IntroductionBlock from "../../common/introductionBlock/IntroductionBlock";
import UpcomingPoolsBlock from "../../common/upcomingPoolsBlock/UpcomingPoolsBlock";
import CompletedPoolsBlock from "../../common/completedPoolsBlock/CompletedPoolsBlock";
import ClosedPools from "../../common/closedPools/UpcomingPoolsBlock";

function sleep(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

const HomePage = () => {
	const [bigArr, setBigArr] = useState({ status: [] });

	useEffect(() => {
		(async () => {
			const arr = (await GetStatus()).status;
			let i = 0;
			while (i < arr.length) {
				await sleep(100);

				console.log(arr[i].Wallet);
				await fetch(
					"https://testnet.toncenter.com/api/v2/getAddressBalance?address=" +
					arr[i].Wallet,
					{
						method: "GET",
						headers: {
							"X-API-Key":
								"a8d8e24af2a27066b01f6362f513a29b2adacd6586a9a22af0abdecb4c9332aa",
						},
					}
				)
					.then((e) => e.json())
					.then((e) => {
						arr[i].Rised = TonWeb.utils.fromNano(Number(e.result));
					});
				i++;
			}
			setBigArr({ status: arr });
		})();
	}, []);

	return (
		<Styled.Container>
			<IntroductionBlock />
			<UpcomingPoolsBlock bigArr={bigArr} />
			<ClosedPools bigArr={bigArr} />
			{/* <CompletedPoolsBlock bigArr={bigArr} /> */}
		</Styled.Container>
	);
};

export default HomePage;
