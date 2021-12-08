<template>
  <div id="centerRight2">
    <div class="bg-color-black">
      <div class="d-flex">
        <div class="d-flex pt-1 pl-1">
          <span>
            <icon name="chart-pie" class="text-icon"></icon>
          </span>
          <span class="fs-xl text mx-2">沼气发电指标</span>
          <dv-decoration-3 class="dv-dec-3" />
        </div>
      </div>
      <Board-2 :numberData='numberData' width="32%" />
      <div class="d-flex jc-center">
        <Chart-pie :option='option' />
      </div>
    </div>
  </div>
</template>

<script>
import Board2 from "@/components/modules/board2.vue";
import ChartPie from "@/components/modules/chartPie.vue";

export default {
  components: {
    Board2,
    ChartPie,
  },
  data() {
    return {
      numberData: [
        {
          number: {
            number: [15],
            toFixed: 1,
            textAlign: "center",
            content: "{nt}",
            style: {
              fontSize: 18,
              fontWeight: "bold",
            },
          },
          text: "沼气发电量",
        },
        {
          number: {
            number: [1144],
            toFixed: 1,
            textAlign: "center",
            content: "{nt}",
            style: {
              fontSize: 18,
              fill: "#03a9f4",
              fontWeight: "bold",
            },
          },
          text: "自用电量",
        },
        {
          number: {
            number: [361],
            toFixed: 1,
            textAlign: "center",
            content: "{nt}",
            style: {
              fontSize: 18,
              fill: "#ff9800",
              fontWeight: "bold",
            },
          },
          text: "并网销售",
        },
      ],
      option: {
        series: [
          {
            type: "pie",
            data: [
              { name: "自用电量", value: 60, radius: ["30%", "40%"] },
              { name: "并网销售", value: 40, radius: ["32%", "45%"] },
            ],
            outsideLabel: {
              labelLineEndLength: 10,
              formatter: "{percent}%\n{name}",
              style: {
                fill: "#fff",
              },
            },
          },
          {
            name: "decoration ring",
            type: "pie",
            data: [{ value: 10, radius: ["50%", "56%"] }],
            outsideLabel: {
              show: false,
            },
            pieStyle: {
              fill: "rgba(255, 255, 255, 0.2)",
            },
          },
          {
            name: "decoration ring",
            type: "pie",
            data: [{ value: 10, radius: ["60%", "66%"] }],
            outsideLabel: {
              show: false,
            },
            pieStyle: {
              fill: "rgba(255, 255, 255, 0.2)",
            },
          },
        ],
        color: ["#03a9f4", "#ff9800"],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
$box-width: 100%;
$box-height: 100%;

#centerRight2 {
  padding: 16px;
  height: $box-height;
  width: $box-width;
  border-radius: 10px;
  .bg-color-black {
    height: calc($box-height - 10px);
    border-radius: 10px;
    .dv-dec-3 {
      position: relative;
      width: 100px;
      height: 20px;
      top: -3px;
    }
  }
  .text {
    color: #c3cbde;
  }
  .body-box {
    border-radius: 10px;
    overflow: hidden;
    .dv-cap-chart {
      width: 100%;
      height: calc($box-height - 0px);
    }
  }
}
.item-box {
  width: 33.3%;
  font-size: 10px;
}
</style>
