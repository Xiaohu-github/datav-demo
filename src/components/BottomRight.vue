<template>
  <div id="bottomRight">
    <div class="bg-color-black">
      <div class="d-flex">
        <div class="d-flex pt-1 pl-1">
          <span>
            <icon name="chart-area" class="text-icon"></icon>
          </span>
          <span class="fs-xl text mx-2">最近一周垃圾接收处理统计图</span>
          <dv-decoration-3 class="dv-dec-3" />
        </div>

        <div class="d-flex">
          <div class="decoration2">
            <dv-decoration-2 :reverse="true" style="width:5px;height:6rem;" />
          </div>
        </div>
      </div>
      <div>
        <BottomRightChart />
      </div>
    </div>
  </div>
</template>

<script>
import BottomRightChart from "@/components/echart/bottom/bottomRightChart";
export default {
  components: {
    BottomRightChart,
  },
};
</script>

<style lang="scss" class>
$box-height: 520px;
$box-width: 100%;
#bottomRight {
  padding: 14px 16px;
  height: $box-height;
  width: $box-width;
  border-radius: 5px;
  .bg-color-black {
    height: $box-height - 30px;
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
  //下滑线动态
  .decoration2 {
    position: absolute;
    right: 0.125rem;
  }
  .chart-box {
    margin-top: 16px;
    width: 170px;
    height: 170px;
    .active-ring-name {
      padding-top: 10px;
    }
  }
}
</style>
