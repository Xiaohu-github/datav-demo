<template>
  <div id="center">
    <div class="down">
      <div class="ranking bg-color-black">
        <span class="fs-xl text mx-2 mb-1 pl-3">月度垃圾接收处理量排行榜</span>
        <dv-scroll-ranking-board class="dv-scr-rank-board mt-1" :config="ranking" />
      </div>
      <div class="percent">
        <div class="item bg-color-black">
          <span>自用电量</span>
          <CenterChart :id="rate[0].id" :tips="rate[0].tips" :colorObj="rate[0].colorData" class="chart" />
        </div>
        <div class="item bg-color-black">
          <span>并网销售</span>
          <CenterChart :id="rate[1].id" :tips="rate[1].tips" :colorObj="rate[1].colorData" class="chart" />
        </div>
        <div class="water bg-color-black">
          <span style="font-size: 14px;">筛上物筛出率</span>
          <dv-water-level-pond class="dv-wa-le-po" :config="water" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CenterChart from "@/components/echart/center/centerChartRate";

export default {
  data() {
    return {
      ranking: {
        data: [
          {
            name: "一月",
            value: 11152,
          },
          {
            name: "二月",
            value: 12254,
          },
          {
            name: "三月",
            value: 12364,
          },
          {
            name: "四月",
            value: 22154,
          },
          {
            name: "五月",
            value: 22364,
          },
          {
            name: "六月",
            value: 23364,
          },
          {
            name: "七月",
            value: 12352,
          },
          {
            name: "八月",
            value: 13064,
          },
          {
            name: "九月",
            value: 12563,
          },
          {
            name: "十月",
            value: 11263,
          },
          {
            name: "十一月",
            value: 11511,
          },
          {
            name: "十二月",
            value: 12353,
          },
        ],
        carousel: "single",
        unit: "吨",
      },
      water: {
        data: [30, 30],
        shape: "roundRect",
        formatter: "{value}%",
        waveNum: 5,
      },
      progress: {
        value: 66,
        lineDash: [10, 2],
      },
      // 通过率和达标率的组件复用数据
      rate: [
        {
          id: "centerRate1",
          tips: 60,
          colorData: {
            textStyle: "#3fc0fb",
            series: {
              color: ["#00bcd44a", "transparent"],
              dataColor: {
                normal: "#03a9f4",
                shadowColor: "#97e2f5",
              },
            },
          },
        },
        {
          id: "centerRate2",
          tips: 40,
          colorData: {
            textStyle: "#67e0e3",
            series: {
              color: ["#faf3a378", "transparent"],
              dataColor: {
                normal: "#ff9800",
                shadowColor: "#fcebad",
              },
            },
          },
        },
      ],
    };
  },
  components: {
    CenterChart,
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
      height: 70px;
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
    justify-content: space-between;
    .bg-color-black {
      border-radius: 5px;
      .chart {
        display: flex;
        justify-content: center;
      }
    }
    .ranking {
      padding: 10px;
      width: 59%;
      .dv-scr-rank-board {
        height: 225px;
      }
    }
    .percent {
      width: 40%;
      display: flex;
      flex-wrap: wrap;
      .item {
        width: 50%;
        height: 130px;
        span {
          margin-top: 8px;
          font-size: 14px;
          display: flex;
          justify-content: center;
        }
      }
      .water {
        width: 100%;
        .dv-wa-le-po {
          width: 99%;
          height: 100px;
        }
        .dv-water-pond-level canvas {
          margin: 8px;
          width: calc(100% - 16px);
          height: calc(100% - 16px);
          box-sizing: border-box;
        }
      }
    }
  }
}
</style>
