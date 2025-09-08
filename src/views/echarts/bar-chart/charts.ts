import * as echarts from "echarts";
import type { EChartsType } from 'echarts/core'

let chart1:EChartsType = null;
const initChart1 = () => {
    chart1 = echarts.init(document.getElementById('chart1'));
    chart1.setOption({
        title: {
            x: 'center',
            y: 'bottom',
            text: '各县区慢性病鉴定备案',
        },
        xAxis: {type: 'category'},
        yAxis: {},
        legend: {},//空的也得有, 不然根部不会显示
        tooltip: {},
        series: [
            {
                type: 'bar',
                name: '职工鉴定人数',
            },
            {
                type: 'bar',
                name: '居民鉴定人数',
            }
        ]
    });
    return chart1;
}
const updateChart1Data = (data: Array<any>) => {
    chart1.setOption({
        dataset: {
            dimensions: ['title', 'value1', 'value2'],
            source: data
        },
    });
}

let chart2:any = null;
const initChart2 = () => {
    chart2 = echarts.init(document.getElementById('chart2'));
    chart2.setOption({
        title: {
            x: 'center',
            y: 'bottom',
            text: '各县区慢性病登记备案',
        },
        xAxis: {type: 'category'},
        yAxis: {},
        legend: {},//空的也得有, 不然根部不会显示
        tooltip: {},
        series: [
            {
                type: 'bar',
                name: '职工登记人数',
            },
            {
                type: 'bar',
                name: '居民登记人数',
            }
        ]
    });
}
const updateChart2Data = (data: Array<any>) => {
    chart2.setOption({
        dataset: {
            dimensions: ['title', 'value1', 'value2'],
            source: data
        },
    });
}
export {
    initChart1, updateChart1Data, initChart2, updateChart2Data
};
