<template>
  <div id="data-view">
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
              <Digital-flop />
              <Test />
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
import Headline from "@/components/Headline2.vue";
import DigitalFlop from "@/components/DigitalFlop.vue";
import TopLeft from "@/components/TopLeft.vue";
import TopLeft2 from "@/components/TopLeft2.vue";
import Test from "@/components/Test.vue";
import CenterRight2 from "@/components/CenterRight2.vue";
import BottomLeft from "@/components/BottomLeft.vue";
import BottomRight from "@/components/BottomRight.vue";
import TopRight from "@/components/TopRight.vue";
import TopRight2 from "@/components/TopRight2.vue";

export default {
  name: "Home",
  components: {
    Headline,
    DigitalFlop,
    TopLeft,
    Test,
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
<style lang="less">
#data-view {
  width: 100%;
  height: 100%;
  background-color: #030409;
  color: #fff;

  #dv-full-screen-container {
    background-image: url("../assets/bg.png");
    background-size: 100% 100%;
    box-shadow: 0 0 3px blue;
    display: flex;
    flex-direction: column;

    .main-content {
      height: calc(~"100% - 80px");
      flex: 1;
      display: flex;
      flex-direction: column;
      .mc-top {
        box-sizing: border-box;
        padding: 10px;
        display: grid;
        grid-template-columns: 1fr 3fr 8fr 3fr 3fr;
        .top-left .top-right {
          width: 90%;
        }
        .top-middle {
          width: 100%;
        }
      }
      .mc-down {
        box-sizing: border-box;
        padding: 10px;
        display: grid;
        grid-template-columns: 6fr 6fr;
        .top-left .top-right {
          width: 90%;
        }
      }
    }
  }
}
</style>
