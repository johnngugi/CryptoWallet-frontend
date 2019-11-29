<template>
  <div>
    <md-table v-model="stats" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Asset">{{ item.asset }}</md-table-cell>
        <md-table-cell md-label="Price">{{ item.price }}</md-table-cell>
        <md-table-cell md-label="Change">{{ item.change }}</md-table-cell>
        <md-table-cell md-label="Market Cap">{{
          item.market_cap
        }}</md-table-cell>
        <md-table-cell md-label="Balance">{{ item.balance }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default {
  name: "StatsTable",
  props: {
    tableHeaderColor: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      selected: [],
      stats: [
        {
          asset: "Bitcoin",
          price: "$36,738",
          change: "+2.40%",
          market_cap: "$25B",
          balance: "0 BTC"
        },
        {
          asset: "Etheruem",
          price: "$738",
          change: "+1.05%",
          market_cap: "$16B",
          balance: "0 ETH"
        },
        {
          asset: "Monero",
          price: "$125",
          change: "+1.73%",
          market_cap: "$10B",
          balance: "0 XMR"
        },
        {
          asset: "Litecoin",
          price: "$70",
          change: "+2.89%",
          market_cap: "$1B",
          balance: "0 LTC"
        }
      ]
    };
  }
};
</script>
