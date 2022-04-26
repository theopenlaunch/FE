import { message } from "antd";
import TonWeb from "tonweb";

export const MakeTrx = async (
	setIsload: any,
	hexString: any,
	projectId: any,
	NFTcost: number
) => {
	const ton = (window as any).ton;
	if (ton) {
		ton.send("ton_sendTransaction", [
			{
				to: process.env.REACT_APP_BACK_TON_WALLET,
				value: TonWeb.utils.toNano(1 * NFTcost),
				data: `${hexString}${projectId}`,
			},
		]);
	} else {
		message.error("Install tonweb!", 10);
	}
};

export const listener = (hexString: any, setIsload: any, projectId: any) => {
	message.success("Wait trx pending...", 2);
	setIsload(true);

	const fff = () =>
		fetch(
			`https://testnet.toncenter.com/api/v2/getTransactions?address=${process.env.REACT_APP_BACK_TON_WALLET}&limit=40&to_lt=0&archival=false`
		)
			.then((e: any) => e.json())
			.then((e: any) => {
				console.log(e);
				console.log(`${hexString}${projectId}`);
				const data = e.result.filter(
					(e: any) => e.in_msg.message === `${hexString}${projectId}`
				);
				if (data[0]) {
					console.log(data[0].transaction_id.hash);
					clearInterval(int);
					message.success("Done trx!", 10);
					setIsload(false);
					MintNFTs(projectId, hexString, setIsload);
				}
			});
	fff();
	const int = setInterval(() => {
		fff();
	}, 10000);
};

const MintNFTs = (projectId: any, hexString: any, setIsload: any) => {
	setIsload(true);

	fetch(`https://launchpad.tonana.org:9967/API/payedIds`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ invoiceId: hexString+projectId }),
	})
		.then((e: any) => e.json())
		.then((e: any) => {
			console.log(e);

			if (e.status === "ok") {
				message.success("Done minting!", 10);
				setIsload(false);

				// e.nfthashes.forEach((element: any) => {
				// // message.success(`NFT #${element.id} hash: ${element.hash}`, 10);
				// });
			} else {
				message.error(`Some error here :/`, 10);
			}
		});
};
