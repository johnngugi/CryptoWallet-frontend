import axios from "axios";
// import config from "@/../config";
import config from "@/../config";

let BASE_URL = "http://api.coinlayer.com/api";

const instance = axios.create({ baseURL: BASE_URL });

export default {
    getLiveExchangeRate(symbols) {
        return instance.get("/live", {
            params: {
                access_key: config.COINLAYER_API_KEY,
                symbols: symbols.join()
            }
        })
    }
}
