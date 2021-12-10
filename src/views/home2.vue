<template>
  <div id="view">
    <dv-full-screen-container>
      <dv-loading v-if="loading">Loading...</dv-loading>
      <div v-else class="host-body">
        <Headline :title="title" />
        <div class="main-content">
          <div class="mc-top">
            <div class="top-left">
              <dv-border-box-12>
                <Top-left />
              </dv-border-box-12>
            </div>
            <div class="top-left">
              <dv-border-box-12>
                <Top-left2 />
              </dv-border-box-12>
            </div>
            <div class="top-middle">
              <div>
                <TopMiddleBoard />
                <TopMiddleBottom />
              </div>
            </div>
            <div class="top-right">
              <dv-border-box-12>
                <Top-right />
              </dv-border-box-12>
            </div>
            <div class="top-right">
              <dv-border-box-12>
                <Top-right-2 />
              </dv-border-box-12>
            </div>
          </div>

          <div class="mc-down">
            <div class="top-right">
              <dv-border-box-12>
                <Bottom-right />
              </dv-border-box-12>
            </div>
            <div class="top-right">
              <dv-border-box-12>
                <Bottom-left />
              </dv-border-box-12>
            </div>
          </div>

        </div>
      </div>
    </dv-full-screen-container>
  </div>
</template>

<script>
import Headline from "@/components/page-common/Headline.vue";
import TopMiddleBoard from "@/components/page-home2/TopMiddleBoard.vue";
import TopMiddleBottom from "@/components/page-home2/TopMiddleBottom.vue";

import TopLeft from "@/components/page-home2/TopLeft.vue";
import TopLeft2 from "@/components/page-home2/TopLeft2.vue";

import TopRight from "@/components/page-home2/TopRight.vue";
import TopRight2 from "@/components/page-home2/TopRight2.vue";

import CenterRight2 from "@/components/page-home/CenterRight2.vue";
import BottomLeft from "@/components/page-home/BottomLeft.vue";
import BottomRight from "@/components/page-home/BottomRight.vue";

export default {
  name: "Home",
  components: {
    Headline,
    TopMiddleBoard,
    TopLeft,
    TopMiddleBottom,
    CenterRight2,
    BottomLeft,
    BottomRight,
    TopLeft2,
    TopRight,
    TopRight2,
  },
  data() {
    return {
      loading: true,
      title: "青岛洁宝厨余垃圾处理运营统计",
    };
  },
  mounted() {
    this.cancelLoading();
  },
  methods: {
    cancelLoading() {
      setTimeout(() => {
        this.loading = false;
      }, 500);
    },
  },
};
</script>
<style  lang="less">
#view {
  width: 100%;
  height: 100%;
  background-color: #030409;
  color: #fff;
  #dv-full-screen-container {
    background-image: url("../assets/bg.png");
    background-size: 100% 100%;
    .main-content {
      height: calc(~"100% - 80px");
      display: flex;
      flex-direction: column;
      justify-content: center;
      .mc-top {
        display: flex;
        justify-content: space-between;
        padding: 10px;
        width: 100%;
      }
      .mc-down {
        box-sizing: border-box;
        padding: 0px 10px 10px 10px;
        display: grid;
        grid-template-columns: 6fr 6fr;
        .top-left .top-right {
          width: 100%;
        }
      }
    }
  }
}
</style>
