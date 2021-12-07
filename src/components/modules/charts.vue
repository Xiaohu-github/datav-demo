<template>
  <div class="top-middle-cmp">
    <dv-charts :option="option" style="width: 330px;height:250px;" />
  </div>
</template>

<script>
export default {
  name: "TopMiddleCmp",
  data() {
    return {
      option: {
        legend: {
          data: [
            {
              name: "电耗总量",
              color: "#FF9800",
            },
            {
              name: "自来水用量",
              color: "#00ACE5",
            },
          ],
          textStyle: {
            fill: "#C3CBDE",
          },
        },
        xAxis: {
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
          axisLine: {
            style: {
              stroke: "#C3CBDE",
            },
          },
          axisLabel: {
            style: {
              fill: "#C3CBDE",
            },
          },
          axisTick: {
            show: false,
          },
        },
        yAxis: [
          {
            name: "电耗总量",
            data: "value",
            nameTextStyle: {
              fill: "#FF9800",
              fontSize: 10,
            },
            splitLine: {
              show: false,
            },
            axisLine: {
              style: {
                stroke: "#C3CBDE",
              },
            },
            axisLabel: {
              style: {
                fill: "#FF9800",
              },
            },
          },
          {
            name: "自来水用量",
            data: "value",
            position: "right",
            max: 2000,
            nameTextStyle: {
              fill: "#00ACE5",
              fontSize: 10,
            },
            axisLine: {
              style: {
                stroke: "#C3CBDE",
              },
            },
            axisLabel: {
              style: {
                fill: "#00ACE5",
              },
            },
            splitLine: {
              show: false,
            },
          },
        ],
        series: [
          {
            name: "自来水用量",
            data: [1000, 1200, 900, 1500, 900, 1200, 1000],
            type: "line",
            smooth: true,
            lineArea: {
              show: true,
              gradient: ["rgba(0, 172, 229, 1)"],
            },
            linePoint: {
              style: {
                stroke: "rgba(0, 172, 229)",
              },
            },
            yAxisIndex: 1,
          },
          {
            name: "电耗总量",
            data: [1500, 1700, 1400, 2000, 1400, 1700, 1500],
            type: "bar",
            gradient: {
              color: ["rgba(255, 152, 0, 0.5)", "rgb(255, 152, 0)"],
              local: true,
            },
          },
        ],
      },
    };
  },
};
</script>

<style lang="less">
.top-middle-cmp {
  position: relative;
  box-sizing: border-box;
}
</style>
