<template>
  <div class="content">
    <div class="md-layout md-alignment-center-center">
      <md-dialog :md-active.sync="showDialog" @md-closed="toggle(false)">
        <md-dialog-content>
          <md-dialog-title>Receive crypto</md-dialog-title>
          <div class="md-layout">
            <div class="md-layout-item md-size-100">
              <h2>Your BTC address</h2>
            </div>
            <div class="md-layout-item md-size-100">
              <md-field>
                <md-input v-model="address" readonly></md-input>
                <md-icon>file_copy</md-icon>
              </md-field>
            </div>
          </div>
        </md-dialog-content>
      </md-dialog>
    </div>
  </div>
</template>

<script>
export default {
  name: "AssetAdressDialog",
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
      address: "0x8ed1BfB56Aa778eC6CC6575a445290448e6DB97e"
    }
  }
};
</script>

<style></style>
