<template>
  <div>
    <send-form-dialog
      :showDialog="showDialogSend"
      @showDialog="showDialogSend = $event"
    ></send-form-dialog>
    <asset-address-dialog
      :showDialog="showDialogReceive"
      @showDialog="showDialogReceive = $event"
    ></asset-address-dialog>
    <div class="md-layout">
      <div class="md-layout-item md-size-20">
        <h1>Balance</h1>
      </div>
    </div>
    <div class="md-layout md-alignment-center-center">
      <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-50 md-size-50"
      >
        <div class="text-center">
          <h2>{{ currencyDisplayed }}</h2>
          <h4>{{ fiatValueDisplayed }}</h4>
          <div>
            <md-button
              class="md-dense md-primary"
              style="margin-right:2%;"
              @click="showDialogSend = !showDialogSend"
              >Send</md-button
            >
            <md-button
              @click="showDialogReceive = !showDialogReceive"
              class="md-dense md-primary"
              style="margin-left:2%;"
              >Receive</md-button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { SendFormDialog, AssetAddressDialog } from "@/components";
export default {
  name: "WalletBalance",
  props: {
    currency: {
      type: String,
      default: "BTC"
    }
  },
  components: {
    SendFormDialog,
    AssetAddressDialog
  },
  data() {
    return {
      showDialogSend: false,
      showDialogReceive: false,
      currencyBalance: 20,
      fiatCurrencyType: "USD",
      fiatCurrencySymbol: "$",
      fiatCurrencyValue: 0.15,
      currencyDisplayed: null,
      fiatValueDisplayed: null
    };
  },
  mounted() {
    this.fiatCurrencyValue = 100;
    this.currencyBalance = 20;
    this.currencyDisplayed = `${this.currencyBalance} ${this.currency}`;
    this.fiatValueDisplayed = `${this.fiatCurrencySymbol}${
      this.fiatCurrencyValue
    } ${this.fiatCurrencyType}`;
  },
  watch: {
    currency() {
      // Just for demo
      if (this.currency === "ETH") {
        this.currencyBalance = 5;
        this.fiatCurrencyValue = 20;
      } else {
        this.currencyBalance = 20;
        this.fiatCurrencyValue = 100;
      }
      this.currencyDisplayed = `${this.currencyBalance} ${this.currency}`;
      this.fiatValueDisplayed = `${this.fiatCurrencySymbol}${
        this.fiatCurrencyValue
      } ${this.fiatCurrencyType}`;
    }
  }
};
</script>

<style></style>
