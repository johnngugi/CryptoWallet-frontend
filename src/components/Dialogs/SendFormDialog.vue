<template>
  <div class="content">
    <div class="md-layout">
      <md-dialog :md-active.sync="showDialog" @md-closed="toggle(false)">
        <md-dialog-content>
          <md-dialog-title>Send crypto</md-dialog-title>
          <div class="md-layout">
            <div class="md-layout-item md-size-100">
              <md-field maxlength="5">
                <label>Address</label>
                <md-input
                  v-model="address"
                  placeholder="Send to BTC address"
                ></md-input>
              </md-field>
            </div>
            <div class="md-layout-item md-size-100">
              <md-field>
                <label>Amount</label>
                <md-input v-model="amount" type="number"></md-input>
                <span class="md-suffix" style="margin-left: 2%;">BTC</span>
              </md-field>
              <p>1000 USD</p>
            </div>
          </div>
          <md-dialog-actions>
            <md-button class="md-primary" @click="toggle(false)"
              >Close</md-button
            >
            <md-button class="md-primary" @click="toggle(false)"
              >Send</md-button
            >
          </md-dialog-actions>
        </md-dialog-content>
      </md-dialog>
    </div>
  </div>
</template>

<script>
export default {
  name: "SendFormDialog",
  props: {
    showDialog: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    toggle(value) {
      this.showDialog = value;
      this.$emit("showDialog", this.showDialog);
    }
  },
  data() {
    return {
      address: "0x8ed1BfB56Aa778eC6CC6575a445290448e6DB97e",
      amount: null,

    }
  }
};
</script>

<style lang="scss" scoped>
.md-dialog {
  max-width: 768px;
}
</style>
