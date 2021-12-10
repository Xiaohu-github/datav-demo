<template>
  <div id="centerLeft1">
    <div class="bg-color-black">
      <div class="d-flex">
        <div class="d-flex pt-1 pl-1">
          <span>
            <icon name="chart-line" class="text-icon"></icon>
          </span>
          <span class="fs-xl text mx-2">能耗指标</span>
          <dv-decoration-3 class="dv-dec-3" />
        </div>
      </div>
      <Board-2 :numberData='numberData' width="24%" />
      <div class="d-flex">
        <dv-scroll-ranking-board :config="ranking" class="mt-5" style="height:220px" />
      </div>
    </div>
  </div>
</template>

<script>
import Board2 from "@/components/modules/board2.vue";
import Charts from "@/components/modules/charts.vue";
export default {
  components: {
    Board2,
    Charts,
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
              fill: "#03a9f4",
              fontWeight: "bold",
            },
          },
          text: "水用量(m³)",
        },

        {
          number: {
            number: [15],
            toFixed: 1,
            textAlign: "center",
            content: "{nt}",
            style: {
              fontSize: 18,
              fill: "#03a9f4",
              fontWeight: "bold",
            },
          },
          text: "水用量(元)",
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
          text: "水单耗(m³/吨)",
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
          text: "水单耗(元/吨)",
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
          text: "电耗总量(度)",
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
          text: "电单耗(度/吨)",
        },
        {
          number: {
            number: [36],
            toFixed: 1,
            textAlign: "center",
            content: "{nt}",
            style: {
              fontSize: 18,
              fill: "#ff9800",
              fontWeight: "bold",
            },
          },
          text: "柴油用量(升)",
        },
        {
          number: {
            number: [10],
            toFixed: 1,
            textAlign: "center",
            content: "{nt}",
            style: {
              fontSize: 18,
              fill: "#ff9800",
              fontWeight: "bold",
            },
          },
          text: "柴油单耗(升/吨)",
        },
      ],
      ranking: {
        data: [
          {
            name: "预处理",
            value: 2002,
          },
          {
            name: "厌氧",
            value: 3003,
          },
          {
            name: "脱水",
            value: 3511,
          },
          {
            name: "干化",
            value: 2511,
          },
          {
            name: "除臭",
            value: 3511,
          },
          {
            name: "沼气预处理",
            value: 1511,
          },

          {
            name: "沼气存储",
            value: 2503,
          },
          {
            name: "锅炉发电",
            value: 2113,
          },
          {
            name: "污水处理",
            value: 1993,
          },
          {
            name: "其他用电",
            value: 1003,
          },
        ],
        showValue: true,
        colors: ["#e062ae", "#fb7293", "#e690d1", "#32c5e9", "#96bfff"],
        unit: "度",
      },
    };
  },

  mounted() {
    this.changeTiming();
  },
  methods: {
    changeTiming() {
      setInterval(() => {
        this.changeNumber();
      }, 3000);
    },
    changeNumber() {
      this.numberData.forEach((item, index) => {
        item.number.number[0] += ++index;
        item.number = { ...item.number };
      });
      this.ranking.data.forEach((item, index) => {
        item.value += ++index;
        item = { ...item };
      });
    },
  },
};
</script>

<style lang="less" scoped>
#centerLeft1 {
  padding: 16px;
  height: 100%;
  width: 380px;
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
  .bottom-data {
    display: flex;
    margin-top: 5px;
    .item-box {
      font-size: 10px;
      float: left;
      width: 33.3%;
      color: #fff;
      .dv-digital-flop {
        width: 200px;
        height: 30px;
      }
      p {
        text-align: center;
      }
    }
  }
}
</style>
