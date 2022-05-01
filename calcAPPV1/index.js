const apiURL = 
    "https://api-mainnet.magiceden.io/rpc/getAggregatedCollectionMetrics";

async function fetchData(url) {
    const response = await fetch(url);
    let data = await response.json();
    return data;
}