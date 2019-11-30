<template>
  <div class="content">
    <div class="md-layout md-alignment-top-left">
      <div
        class="md-layout-item md-medium-size-15 md-xsmall-size-15 md-size-15"
      >
        <md-field>
          <label for="currency">Currency</label>
          <md-select v-model="currency" name="currency" id="currency">
            <md-option value="BTC">BTC</md-option>
            <md-option value="ETH">ETH</md-option>
          </md-select>
        </md-field>
      </div>
    </div>
    <wallet-balance :currency="currency"></wallet-balance>
  </div>
</template>

<script>
import { WalletBalance } from "@/components";

export default {
  components: {
    WalletBalance
  },
  data() {
    return {
      currency: "BTC"
    };
  }
};
</script>

<style></style>
