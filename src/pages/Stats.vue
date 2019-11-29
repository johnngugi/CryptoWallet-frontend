<template>
  <div class="content">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">Stats</h4>
            <p class="category">Market Trends</p>
          </md-card-header>
          <md-card-content>
            <stats-table table-header-color="green"></stats-table>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import { StatsTable } from "@/components";
export default {
  components: {
    StatsTable
  }
};
</script>

<style></style>
