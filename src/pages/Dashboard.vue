<template>
  <div class="content">
    <div class="md-layout md-alignment-top-left">
      <div
        class="md-layout-item md-medium-size-25 md-xsmall-size-20 md-size-25"
      >
        <md-field>
          <label for="type">Transaction type</label>
          <md-select v-model="transaction_type" name="type" id="type">
            <md-option value="All">All</md-option>
            <md-option value="Sent">Sent</md-option>
            <md-option value="Received">Received</md-option>
          </md-select>
        </md-field>
      </div>
      <div
        class="md-layout-item md-medium-size-25 md-xsmall-size-20 md-size-25"
      >
        <md-field>
          <label for="currency">Currency</label>
          <md-select v-model="currency" name="currency" id="currency">
            <md-option value="All">All</md-option>
            <md-option value="BTC">BTC</md-option>
            <md-option value="ETH">ETH</md-option>
          </md-select>
        </md-field>
      </div>
    </div>
    <div class="md-layout md-alignment-center-center">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-50"
      >
        <stats-card data-background-color="green">
          <template slot="header">
            <md-icon>store</md-icon>
          </template>

          <template slot="content">
            <p class="category">Asset Value</p>
            <h3 class="title">$34,245</h3>
          </template>

          <template slot="footer">
            <div class="stats"><md-icon>date_range</md-icon>All time</div>
          </template>
        </stats-card>
      </div>
    </div>
    <div class="md-layout md-alignment-center-center">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-75"
      >
        <md-card>
          <md-card-header data-background-color="orange">
            <h4 class="title">Transactions</h4>
            <p class="category">Sent and Received</p>
          </md-card-header>
          <md-card-content>
            <transactions-table
              :transaction-type="transaction_type"
              :currency="currency"
              table-header-color="green"
            ></transactions-table>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import { StatsCard, TransactionsTable } from "@/components";

export default {
  components: {
    StatsCard,
    TransactionsTable
  },
  data() {
    return {
      transaction_type: "Sent",
      currency: "BTC"
    };
  }
};
</script>
