import TonWeb from "tonweb";

export const MakeTrx = async (
	hexString: string,
	projectId: any,
	NFTcost: number,
	projectWallet: string,
) => {
	const ton = (window as any).ton;
	console.log(NFTcost);
	console.log({
		to: projectWallet,
		value: TonWeb.utils.toNano(NFTcost),
		data: `${hexString}${projectId}`,
	},
	)
	if (ton) {
		ton.send("ton_sendTransaction", [
			{
				to: projectWallet,
				value: TonWeb.utils.toNano(NFTcost).toString(),
				data: `${hexString}${projectId}`,
			},
		]);
	} else {
		alert("Install tonweb!");
	}
};

export const listener = (hexString: any, setIsload: any, projectId: any, projectWallet: string) => {
	alert("Wait trx pending...");
	setIsload(true);

	const fetchFunc = () =>
		fetch(
			`https://testnet.toncenter.com/api/v2/getTransactions?address=${projectWallet}&limit=40&to_lt=0&archival=false`
		)
			.then((e: any) => e.json())
			.then((e: any) => {
				const data = e.result.filter(
					(e: any) => e.in_msg.message === `${hexString}${projectId}`
				);
				if (data[0]) {
					clearInterval(int);
					alert("Done trx!");
					setIsload(false);
					MintNFTs(projectId, hexString, setIsload);
				}
			});

	fetchFunc();

	const int = setInterval(() => {
		fetchFunc();
	}, 10000);
};

const MintNFTs = (projectId: any, hexString: any, setIsload: any) => {
	setIsload(true);
	fetch(`https://launchpad.sepezho.com:9967/API/payedIds`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ invoiceId: hexString + projectId }),
	})
		.then((e: any) => e.json())
		.then((e: any) => {
			console.log(e);
			if (e.status === "ok") {
				alert("Your NFT will be minted within 5min!");
			} else {
				alert(`Some error here :/`);
			}
			setIsload(false);
		});
};
