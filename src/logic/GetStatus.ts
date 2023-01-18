const GetStatus = async () =>
	await fetch("https://launchpad.sepezho.com:9967/API/getStatus", {
		method: "GET"
	}).then((e: any) => e.json());

export default GetStatus;
