
import { PublicKey, TransactionInstruction } from "@solana/web3.js";
import { Connection, clusterApiUrl } from "@solana/web3.js";
import { message } from "antd";
const axios = require("axios").default;
const bs58 = require("bs58");
const { Buffer } = require("buffer");
const web3 = require("@solana/web3.js");

// import TonWeb from "tonweb";

// export const MakeTrx = async (
// 	hexString: string,
// 	projectId: any,
// 	NFTcost: number,
// 	projectWallet: string,
// ) => {
// 	const ton = (window as any).ton;
// 	console.log(NFTcost);
// 	if (ton) {
// 		ton.send("ton_sendTransaction", [
// 			{
// 				to: projectWallet,
// 				value: TonWeb.utils.toNano(0.1),
// 				data: `${hexString}${projectId}`,
// 			},
// 		]);
// 	} else {
// 		alert("Install tonweb!");
// 	}
// };

export const listener = (hexString: any, setIsload: any, projectId: any, projectWallet: string) => {
	alert("Wait trx pending...");
	MintNFTs(projectId, hexString, setIsload);

	// setIsload(true);

	// const fetchFunc = () =>
	// 	fetch(
	// 		`https://testnet.toncenter.com/api/v2/getTransactions?address=${projectWallet}&limit=40&to_lt=0&archival=false`
	// 	)
	// 		.then((e: any) => e.json())
	// 		.then((e: any) => {
	// 			const data = e.result.filter(
	// 				(e: any) => e.in_msg.message === `${hexString}${projectId}`
	// 			);
	// 			if (data[0]) {
	// 				clearInterval(int);
	// 				alert("Done trx!");
	// 				setIsload(false);
	// 				MintNFTs(projectId, hexString, setIsload);
	// 			}
	// 		});

	// fetchFunc();

	// const int = setInterval(() => {
	// 	fetchFunc();
	// }, 10000);
};

const MintNFTs = (projectId: any, hexString: any, setIsload: any) => {
	alert('done')
	// setIsload(true);
	// fetch(`https://launchpad.tonana.org:9967/API/payedIds`, {
	// 	method: "POST",
	// 	headers: { "Content-Type": "application/json" },
	// 	body: JSON.stringify({ invoiceId: hexString+projectId }),
	// })
	// 	.then((e: any) => e.json())
	// 	.then((e: any) => {
	// 		console.log(e);
	// 		if (e.status === "ok") {
	// 			alert("Done minting!");
	// 		} else {
	// 			alert(`Some error here :/`);
	// 		}
	// 		setIsload(false);
	// 	});
};



var connection = new Connection(
	clusterApiUrl(
		"mainnet-beta" as "devnet" | "testnet" | "mainnet-beta"
	)
);


// ,

export const MakeTrx = async (
	hexString: string,
	projectId: any,
	NFTcost: number,
	projectWallet: string,
) => {
  // if (activeBtn) {
    // setIsload(true);
		//@ts-ignore
    const solana = window.solana;

		const response = await solana.connect();
		const SOLwalletKey = response.publicKey.toString()

    let recentBlockhash = await connection.getRecentBlockhash();
    let allocateTransaction = new web3.Transaction({
      recentBlockhash: recentBlockhash.blockhash,
      feePayer: new PublicKey(SOLwalletKey),
    });

    const instructionMessage = await new TransactionInstruction({
      keys: [],
      programId: new PublicKey("MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr"),
      data: Buffer.from(`${hexString}${projectId}`),
    });

    const instructionTransfer = web3.SystemProgram.transfer({
      fromPubkey: new PublicKey(SOLwalletKey),
      toPubkey: new PublicKey(
        projectWallet as string
      ),
      lamports: Number(NFTcost) * 1000000000,
    });
    allocateTransaction.add(instructionMessage).add(instructionTransfer);
    //@ts-ignore
    const { signature } = await window.solana.signAndSendTransaction(
      allocateTransaction
    );
    message.success("Wait BE trx pending...", 2);
    await connection.confirmTransaction(signature);
    const int = setInterval(() => {
      fetch(`https://api.${projectWallet}.solana.com/`, {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          jsonrpc: "2.0",
          id: 1,
          method: "getTransaction",
          params: [signature, "json"],
        }),
      })
        .then((res) => res.json())
        .then(async (res) => {
          if (res.result == null) {
            console.log("res: null ");
            return false;
          }
          const buf = bs58.decode(
            res.result.transaction.message.instructions[0].data.toString(16)
          );
          if (buf.toString() === `${hexString}${projectId}`) {

            axios.post(
              `https://sol.launchpad.tonana.org`
            ).then((e:any)=>{
              clearInterval(int);
              // setIsload(false);
              message.success("Done trx!", 10);
            })

            // const int2 = setInterval(() => {
            //   message.success("Wallet trx pending...", 2);

            //   fetch(
            //     `https://toncenter.com/api/v2/getTransactions?address=${process.env.REACT_APP_BACK_TON_WALLET}&limit=10&to_lt=0&archival=false`
            //   )
            //     .then((e: any) => e.json())
            //     .then((e: any) => {
            //       console.log(e.result);
            //       const data = e.result.filter((e: any) =>
            //         e.out_msgs[0]
            //           ? e.out_msgs[0].message === signature
            //           : false
            //       );
            //       if (data[0]) {
            //         clearInterval(int2);
            //         setIsload(false);
            //         message.success("Done wallet trx, check it!", 10);
            //       }
            //     });
            // }, 10000);
          }
        });
    }, 5000);
};

//  MakeTrx