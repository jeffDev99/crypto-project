const baseURL = "https://api.coingecko.com/api/v3";
const API_KEY = "CG-qwLVRGw3qocqxhAtiMpYK2TE";
const getCoinList = (page, currency) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "x-cg-demo-api-key": API_KEY,
    },
  };
  return { URL: `${baseURL}/coins/markets?vs_currency=${currency}&per_page=10&page=${page}`, options };
};

const searchCoin = (query) => `${baseURL}/search?query=${query}&x_cg_demo_api_key=${API_KEY}`;

const marketChart = (coinID) => `${baseURL}/coins/${coinID}/market_chart?vs_currency=usd&days=7`;
export { getCoinList, searchCoin, marketChart };
