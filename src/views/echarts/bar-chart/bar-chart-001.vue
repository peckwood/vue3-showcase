<script lang="ts" setup>
import {onMounted} from "vue";
import * as charts from "./charts";
import type { EChartsType } from 'echarts/core'

onMounted(() => {
  const chart1:EChartsType = charts.initChart1();
  chart1.showLoading();
  charts.initChart2();
  setTimeout(() => {
    charts.updateChart1Data([
      { title: 'Matcha Latte', 'value1': 43.3, 'value2': 85.8 },
      { title: 'Milk Tea', 'value1': 83.1, 'value2': 73.4 },
      { title: 'Cheese Cocoa', 'value1': 86.4, 'value2': 65.2 },
      { title: 'Walnut Brownie', 'value1': 72.4, 'value2': 53.9 }
    ]);
    charts.updateChart2Data([
      { title: 'Matcha Latte', 'value1': 43.3, 'value2': 85.8 },
      { title: 'Milk Tea', 'value1': 83.1, 'value2': 73.4 },
      { title: 'Cheese Cocoa', 'value1': 86.4, 'value2': 65.2 },
      { title: 'Walnut Brownie', 'value1': 72.4, 'value2': 53.9 }
    ])
    chart1.hideLoading();
    chart1.dispatchAction({
      type: 'legendUnSelect',
      name: '职工鉴定人数'
    });
  }, 1000)
});
</script>

<template>
    <div class="chart-div">
      <div id="chart1" style="width: 100%;height:250px;"></div>
      <div id="chart2" style="width: 100%;height:250px;"></div>
    </div>
</template>

<style scoped>
.chart-div {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
