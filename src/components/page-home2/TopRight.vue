<template>
  <div id="centerRight2">
    <div class="bg-color-black">
      <div class="d-flex">
        <div class="d-flex pt-1 pl-1">
          <span>
            <icon name="chart-pie" class="text-icon"></icon>
          </span>
          <span class="fs-xl text mx-2">药耗指标</span>
          <dv-decoration-3 class="dv-dec-3" />
        </div>
      </div>
      <Board-2 :numberData='numberData' />
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
            number: [15505],
            textAlign: "center",
            content: "{nt}",
            style: {
              fontSize: 18,
              fontWeight: "bold",
            },
          },
          text: "药耗总量",
        },
        {
          number: {
            number: [10853.5],
            textAlign: "center",
            content: "{nt}",
            style: {
              fontSize: 18,
              fill: "#32C5E9",
              fontWeight: "bold",
            },
          },
          text: "垃圾处置",
        },
        {
          number: {
            number: [4651.5],
            textAlign: "center",
            content: "{nt}",
            style: {
              fontSize: 18,
              fill: "#D54EB4",
              fontWeight: "bold",
            },
          },
          text: "沼气预处理",
        },
        {
          number: {
            number: [1550.5],
            textAlign: "center",
            content: "{nt}",
            style: {
              fontSize: 18,
              fontWeight: "bold",
            },
          },
          text: "总药剂单耗",
        },
        {
          number: {
            number: [1085.5],
            textAlign: "center",
            content: "{nt}",
            style: {
              fontSize: 18,
              fill: "#32C5E9",
              fontWeight: "bold",
            },
          },
          text: "垃圾处置",
        },
        {
          number: {
            number: [465],
            textAlign: "center",
            content: "{nt}",
            style: {
              fontSize: 18,
              fill: "#D54EB4",
              fontWeight: "bold",
            },
          },
          text: "沼气预处理",
        },
      ],
      option: {
        series: [
          {
            type: "pie",
            data: [
              { name: "垃圾处置", value: 10853.5, radius: ["50%", "35%"] },
              { name: "沼气预处理", value: 4651.5, radius: ["45%", "35%"] },
            ],
            outsideLabel: {
              labelLineEndLength: 25,
              formatter: "{percent}%\n{name}",
              style: {
                fill: "#fff",
              },
            },
          },
          {
            name: "decoration ring",
            type: "pie",
            data: [{ value: 10, radius: ["55%", "56%"] }],
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
        color: ["#32C5E9", "#D54EB4"],
      },
    };
  },
};
</script>

<style lang="less" scoped>
#centerRight2 {
  padding: 16px;
  height: 100%;
  width: 300px;
  border-radius: 10px;
  .bg-color-black {
    height: calc(100% - 10px);
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
    }
  }
}
.item-box {
  width: 33.3%;
  font-size: 10px;
}
</style>
