<template>
  <div id="centerRight2">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
        <span>
          <icon name="chart-line" class="text-icon"></icon>
        </span>
        <span class="fs-xl text mx-2">系统电耗</span>
        <dv-decoration-3 class="dv-dec-3" />
      </div>
      <div class="d-flex ai-center flex-column body-box">
        <dv-capsule-chart class="dv-cap-chart" :config="config" />
        <!-- <centerRight2Chart1 /> -->
      </div>
    </div>
  </div>
</template>

<script>
import centerRight2Chart1 from "@/components/echart/centerRight/centerRightChart";

export default {
  data() {
    return {
      config: {
        data: [
          {
            name: "预处理",
            value: 167,
          },

          {
            name: "厌氧",
            value: 67,
            unit: "度",
          },
          {
            name: "脱水",
            value: 123,
          },
          {
            name: "干化",
            value: 55,
          },
          {
            name: "除臭",
            value: 98,
          },
          {
            name: "沼气预处理",
            value: 125,
          },
          {
            name: "沼气存储",
            value: 138,
          },
          {
            name: "锅炉发电",
            value: 128,
          },
          {
            name: "污水处理",
            value: 126,
          },

          {
            name: "其他用量",
            value: 236,
          },
        ],
      },
    };
  },
  components: { centerRight2Chart1 },
};
</script>

<style lang="scss" scoped>
#centerRight2 {
  $box-width: 100%;
  $box-height: 100%;
  padding: 5px;
  height: $box-height;
  width: $box-width;
  border-radius: 5px;
  .bg-color-black {
    padding: 5px;
    height: $box-height;
    width: $box-width;
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
</style>
