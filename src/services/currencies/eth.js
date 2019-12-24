import Api from "../Api";

export default {
    getBalance() {
        return Api().get("eth/balance");
    }
}