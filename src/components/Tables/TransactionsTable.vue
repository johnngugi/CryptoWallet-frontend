<template>
  <div>
    <md-table v-model="filtered" :table-header-color="tableHeaderColor">
      <template v-slot:md-table-row="{ item }">
        <md-table-row>
          <md-table-cell md-label="ID">{{ item.id }}</md-table-cell>
          <md-table-cell md-label="Type">{{ item.type }}</md-table-cell>
          <md-table-cell md-label="From">{{ item.from }}</md-table-cell>
          <md-table-cell md-label="To">{{ item.to }}</md-table-cell>
          <md-table-cell md-label="Date">{{ item.date }}</md-table-cell>
          <md-table-cell md-label="Amount">{{ item.amount }}</md-table-cell>
        </md-table-row>
      </template>
    </md-table>
  </div>
</template>

<script>
export default {
  name: "TransactionsTable",
  props: {
    tableHeaderColor: {
      type: String,
      default: ""
    },
    transactionType: {
      type: String,
      default: "All"
    },
    currency: {
      type: String,
      default: "All"
    }
  },
  computed: {
    filtered() {
      let filter = {};
      let filtered_data;

      if (this.transactionType !== "All") {
        filter["type"] = this.transactionType;
      }

      if (this.currency !== "All") {
        filter["currency"] = this.currency;
      }

      if (
        !(Object.entries(filter).length === 0 && filter.constructor === Object)
      ) {
        filtered_data = this.users.filter(item => {
          for (let key in filter) {
            if (item[key] === undefined || item[key] != filter[key]) {
              return false;
            }
          }
          return true;
        });
      } else filtered_data = this.users;

      return filtered_data;
    }
  },
  data() {
    return {
      selected: [],
      users: [
        {
          id: 1,
          type: "Sent",
          from: "aaaaaaaaaaaaaaaaaa",
          to: "bbbbbbbbbbbbbb",
          date: "29 Nov 2019",
          amount: 0.7,
          currency: "BTC"
        },
        {
          id: 2,
          type: "Sent",
          from: "aaaaaaaaaaaaaaaaaa",
          to: "bbbbbbbbbbbbbb",
          date: "30 Nov 2019",
          amount: 0.05,
          currency: "ETH"
        },
        {
          id: 3,
          type: "Received",
          from: "bbbbbbbbbbbbbb",
          to: "aaaaaaaaaaaaa",
          date: "31 Nov 2019",
          amount: 0.2,
          currency: "ETH"
        },
        {
          id: 4,
          type: "Sent",
          from: "aaaaaaaaaaaaaaaaaa",
          to: "bbbbbbbbbbbbbb",
          date: "1 Dec 2019",
          amount: 0.05,
          currency: "ETH"
        }
      ]
    };
  }
};
</script>
