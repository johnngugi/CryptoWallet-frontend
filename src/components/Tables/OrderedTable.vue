<template>
  <div>
    <md-table v-model="users" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="ID">{{ item.id }}</md-table-cell>
        <md-table-cell md-label="Type">{{ item.type }}</md-table-cell>
        <md-table-cell md-label="From">{{ item.from }}</md-table-cell>
        <md-table-cell md-label="To">{{ item.to }}</md-table-cell>
        <md-table-cell md-label="Date">{{ item.date }}</md-table-cell>
        <md-table-cell md-label="Amount">{{ item.amount }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default {
  name: "ordered-table",
  props: {
    tableHeaderColor: {
      type: String,
      default: ""
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
          amount: 0.7
        },
        {
          id: 2,
          type: "Sent",
          from: "aaaaaaaaaaaaaaaaaa",
          to: "bbbbbbbbbbbbbb",
          date: "30 Nov 2019",
          amount: 0.05
        },
        {
          id: 3,
          type: "Received",
          from: "bbbbbbbbbbbbbb",
          to: "aaaaaaaaaaaaa",
          date: "31 Nov 2019",
          amount: 0.2
        }
      ]
    };
  }
};
</script>
