<template>
  <div class="content">
    <send-form-dialog
      :showDialog="showDialogSend"
      @showDialog="showDialogSend = $event"
    >
    </send-form-dialog>
    <asset-address-dialog
      :showDialog="showDialogReceive"
      @showDialog="showDialogReceive = $event"
    >
    </asset-address-dialog>
    <div class="md-layout md-alignment-top-left">
      <div
        class="md-layout-item md-medium-size-15 md-xsmall-size-15 md-size-15"
      >
        <md-field>
          <label for="currency">Currency</label>
          <md-select name="currency" id="currency">
            <md-option value="btc">BTC</md-option>
            <md-option value="eth">ETH</md-option>
          </md-select>
        </md-field>
      </div>
    </div>
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
          <h2>20 BTC</h2>
          <h4>$0.15 USD</h4>
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
  components: {
    SendFormDialog,
    AssetAddressDialog
  },
  data() {
    return {
      showDialogSend: false,
      showDialogReceive: false
    };
  }
};
</script>

<style></style>
