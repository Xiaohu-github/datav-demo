<template>
  <div class="top-right-cmp">
    <dv-charts :option="option" style="width: 330px;height:250px;" />
  </div>
</template>

<script>
export default {
  name: "TopRightCmp",
  data() {
    return {
      option: {
        legend: {
          data: [
            {
              name: "收费系统",
              color: "#00baff",
            },
            {
              name: "监控系统",
              color: "#ff5ca9",
            },
            {
              name: "通信系统",
              color: "#3de7c9",
            },
            {
              name: "供配电系统",
              color: "#f5d94e",
            },
          ],
          textStyle: {
            fill: "#fff",
          },
        },
        xAxis: {
          data: ["10/01", "10/02", "10/03", "10/04", "10/05", "10/06", "10/07"],
          axisLine: {
            style: {
              stroke: "#fff",
            },
          },
          axisLabel: {
            style: {
              fill: "#fff",
            },
          },
          axisTick: {
            show: false,
          },
        },
        yAxis: {
          data: "value",
          splitLine: {
            show: false,
          },
          axisLine: {
            style: {
              stroke: "#fff",
            },
          },
          axisLabel: {
            style: {
              fill: "#fff",
            },
          },
          axisTick: {
            show: false,
          },
          min: 0,
          max: 8,
        },
        series: [
          {
            name: "收费系统",
            data: [2.5, 3.5, 6.5, 6.5, 7.5, 6.5, 2.5],
            type: "bar",
            barStyle: {
              fill: "rgba(0, 186, 255, 0.4)",
            },
          },
          {
            name: "监控系统",
            data: [2.5, 3.5, 6.5, 6.5, 7.5, 6.5, 2.5],
            type: "line",
            lineStyle: {
              stroke: "#ff5ca9",
            },
            linePoint: {
              radius: 4,
              style: {
                fill: "#ff5ca9",
                stroke: "transparent",
              },
            },
          },
          {
            name: "通信系统",
            data: [1.3, 2.3, 5.3, 5.3, 6.3, 5.3, 1.3],
            type: "line",
            smooth: true,
            lineArea: {
              show: true,
              gradient: ["rgba(55, 162, 218, 0.6)", "rgba(55, 162, 218, 0)"],
            },
            lineStyle: {
              lineDash: [5, 5],
            },
            linePoint: {
              radius: 4,
              style: {
                fill: "#00db95",
              },
            },
          },
          {
            data: [0.2, 1.2, 4.2, 4.2, 5.2, 4.2, 0.2],
            type: "line",
            name: "供配电系统",
            lineArea: {
              show: true,
              gradient: ["rgba(245, 217, 79, 0.8)", "rgba(245, 217, 79, 0.2)"],
            },
            lineStyle: {
              stroke: "#f5d94e",
            },
            linePoint: {
              radius: 4,
              style: {
                fill: "#f5d94e",
                stroke: "transparent",
              },
            },
          },
        ],
      },
    };
  },
};
</script>

<style lang="less">
.top-right-cmp {
  position: relative;
  box-sizing: border-box;

  .chart-name {
    position: absolute;
    right: 70px;
    text-align: right;
    font-size: 20px;
  }
}
</style>
