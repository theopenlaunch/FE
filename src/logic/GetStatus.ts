const GetStatus: any = async () => new Promise(async (r, _) => {
	try {
		return r(await fetch("https://launchpad.sepezho.com:9967/API/getStatus", {
			method: "GET"
		}).then((e: any) => e.json()))
	} catch (e) {
		console.log(e)
		return r(await GetStatus())
	}
})
export default GetStatus;
