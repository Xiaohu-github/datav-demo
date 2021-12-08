<template>
  <div id="center">
    <div class="down">
      <div class="percent d-flex" style="justify-content:space-between;">
        <div class="item bg-color-black d-flex" style="justify-content: center;align-items:center;flex-direction:column">
          <span class="fs-xl">详细比例</span>
          <div class="d-flex " style="justify-content: center;align-items:center;">
            <ChartRate title="沼渣外运" :id="rate[0].id" :dataValue="rate[0].dataValue" :colorObj="rate[0].colorData" class="chart" />
            <ChartRate title="渗液外排" :id="rate[1].id" :dataValue="rate[1].dataValue" :colorObj="rate[1].colorData" class="chart" />
          </div>
        </div>
        <div class="item bg-color-black d-flex" style="justify-content: center;align-items:center;flex-direction:column">
          <div class="item " style="width:198px">
            <span class="fs-xl text mx-2 mb-1 pl-3">筛上物筛出率</span>
            <dv-water-level-pond :config="water" style="width:200px;height:100px" />
          </div>
        </div>
      </div>
      <div class="item bg-color-black d-flex ml-2" style="width: 65%; flex-direction:column">
        <Board-2 :numberData='numberData' class="bg-color-black" />
        <div class="ranking">
          <span class="fs-xl text mx-2 mb-1 pl-3">沼气消耗量</span>
          <div class="d-flex" style="flex-direction:column">
            <dv-capsule-chart :config="ranking" style="height:160px" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Board2 from "@/components/modules/board2.vue";
import CenterChart from "@/components/echart/center/centerChartRate";
import ChartRate from "@/components/modules/chartRate.vue";
export default {
  components: {
    CenterChart,
    ChartRate,
    Board2,
  },
  data() {
    return {
      numberData: [
        {
          number: {
            number: [105],
            toFixed: 1,
            textAlign: "center",
            content: "{nt} m³/吨",
            style: {
              fontSize: 15,
              fontWeight: "bold",
            },
          },
          text: "吨垃圾产生沼气量",
        },
        {
          number: {
            number: [10853.5],
            toFixed: 1,
            textAlign: "center",
            content: "{nt} m³",
            style: {
              fontSize: 15,
              fill: "#32C5E9",
              fontWeight: "bold",
            },
          },
          text: "沼气预处理损耗量",
        },
        {
          number: {
            number: [30],
            toFixed: 1,
            textAlign: "center",
            content: "{nt} %",
            style: {
              fontSize: 15,
              fill: "#D54EB4",
              fontWeight: "bold",
            },
          },
          text: "沼气预处理损耗率",
        },
      ],
      ranking: {
        data: [
          {
            name: "锅炉",
            value: 2002,
          },
          {
            name: "发电机",
            value: 3003,
          },
          {
            name: "火炬",
            value: 6511,
          },
          {
            name: "其他",
            value: 11003,
          },
        ],
        showValue: true,
        colors: ["#e062ae", "#fb7293", "#e690d1", "#32c5e9", "#96bfff"],
        unit: "m³",
      },
      water: {
        data: [30, 30],
        shape: "roundRect",
        formatter: "{value}%",
        waveNum: 5,
      },
      rate: [
        {
          id: "centerRate1",
          colorData: {
            textStyle: "#D3D6DD",
            series: { color: ["#00bcd44a", "transparent"] },
          },
          dataValue: [
            {
              value: 14340,
              name: "一级脱水沼渣",
              style: {
                color: "#009DFF",
                shadowBlur: 10,
                shadowColor: "#009DFF",
              },
            },
            {
              value: 10000,
              name: "干化沼渣",
              style: {
                color: "#3231B2",
                shadowBlur: 10,
                shadowColor: "#3231B2",
              },
            },
          ],
        },
        {
          id: "centerRate2",
          colorData: {
            textStyle: "#D3D6DD",
            series: { color: ["#00bcd44a", "transparent"] },
          },
          dataValue: [
            {
              value: 10659,
              name: "渗沥原液",
              style: {
                color: "#E2206E",
                shadowBlur: 10,
                shadowColor: "#E2206E",
              },
            },
            {
              value: 16650,
              name: "全场污水",
              style: {
                color: "#8D31EC",
                shadowBlur: 10,
                shadowColor: "#8D31EC",
              },
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
#center {
  display: flex;
  flex-direction: column;
  .up {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .item {
      border-radius: 6px;
      padding-top: 8px;
      margin-top: 8px;
      width: 32%;
      height: 60px;
      .dv-dig-flop {
        width: 150px;
        height: 30px;
      }
    }
  }
  .down {
    padding: 6px 4px;
    padding-bottom: 0;
    width: 100%;
    display: flex;
    // justify-content: space-between;
    .bg-color-black {
      border-radius: 5px;
      .chart {
        display: flex;
        justify-content: center;
      }
    }
    .ranking {
      padding: 5px;
      width: 100%;
    }
    .percent {
      width: 40%;
      display: flex;
      flex-wrap: wrap;
      .item {
        width: 100%;
        height: 130px;
        span {
          margin-top: 8px;
          font-size: 14px;
          display: flex;
          justify-content: center;
        }
      }
    }
  }
}
</style>
