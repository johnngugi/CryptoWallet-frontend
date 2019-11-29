<template>
  <div class="content">
    <div class="md-layout md-alignment-top-left">
      <div
        class="md-layout-item md-medium-size-25 md-xsmall-size-20 md-size-25"
      >
        <md-field>
          <label for="type">Transaction type</label>
          <md-select v-model="type" name="type" id="type">
            <md-option value="sent">Sent</md-option>
            <md-option value="received">Received</md-option>
          </md-select>
        </md-field>
      </div>
      <div
        class="md-layout-item md-medium-size-25 md-xsmall-size-20 md-size-25"
      >
        <md-field>
          <label for="currency">Currency</label>
          <md-select v-model="currency" name="currency" id="currency">
            <md-option value="all">All</md-option>
            <md-option value="btc">BTC</md-option>
            <md-option value="eth">ETH</md-option>
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
            <ordered-table table-header-color="orange"></ordered-table>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import { StatsCard, OrderedTable } from "@/components";

export default {
  components: {
    StatsCard,
    OrderedTable
  },
  data() {
    return {
      dailySalesChart: {
        data: {
          labels: ["M", "T", "W", "T", "F", "S", "S"],
          series: [[12, 17, 7, 17, 23, 18, 38]]
        },
        options: {
          lineSmooth: this.$Chartist.Interpolation.cardinal({
            tension: 0
          }),
          low: 0,
          high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
        }
      },
      dataCompletedTasksChart: {
        data: {
          labels: ["12am", "3pm", "6pm", "9pm", "12pm", "3am", "6am", "9am"],
          series: [[230, 750, 450, 300, 280, 240, 200, 190]]
        },

        options: {
          lineSmooth: this.$Chartist.Interpolation.cardinal({
            tension: 0
          }),
          low: 0,
          high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
        }
      },
      emailsSubscriptionChart: {
        data: {
          labels: [
            "Ja",
            "Fe",
            "Ma",
            "Ap",
            "Mai",
            "Ju",
            "Jul",
            "Au",
            "Se",
            "Oc",
            "No",
            "De"
          ],
          series: [[542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]]
        },
        options: {
          axisX: {
            showGrid: false
          },
          low: 0,
          high: 1000,
          chartPadding: {
            top: 0,
            right: 5,
            bottom: 0,
            left: 0
          }
        },
        responsiveOptions: [
          [
            "screen and (max-width: 640px)",
            {
              seriesBarDistance: 5,
              axisX: {
                labelInterpolationFnc: function(value) {
                  return value[0];
                }
              }
            }
          ]
        ]
      }
    };
  }
};
</script>
