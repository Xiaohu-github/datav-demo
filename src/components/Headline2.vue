<template>
  <div id="top-header">
    <dv-decoration-8 class="header-left-decoration" :color="['#2252A1', '#00ACE5']" />
    <dv-decoration-5 class="header-center-decoration" :color="['#2252A1', '#00ACE5']" />
    <dv-decoration-8 class="header-right-decoration" :color="['#2252A1', '#00ACE5']" :reverse="true" />
    <div class="center-title">{{title}}</div>
    <div class="header-toolbar">
      <div class="d-flex flex-div">
        <div class="left-logo"> <img src="@/assets/logo-bai.png" style="width: 110px;"></div>
        <div class="right-bar d-flex">
          <span class="text">{{ dateYear }} {{ dateWeek }} {{ dateDay }}</span>
          <a :title="isFullscreen?'退出全屏':'全屏'" class="button" @click="screen">
            <icon v-if="!isFullscreen" name="expand-alt" class="icon"></icon>
            <icon v-else name="compress-alt" class="icon"></icon>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import screenfull from "screenfull";
import { formatTime } from "../utils/index.js";

export default {
  name: "TopHeader",
  props: {
    title: {
      type: String,
      default() {
        return "上海卓太环保测试";
      },
    },
  },
  data() {
    return {
      timing: null,
      loading: true,
      dateDay: null,
      dateYear: null,
      dateWeek: null,
      weekday: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
      isFullscreen: false,
    };
  },
  mounted() {
    this.timeFn();
  },
  beforeDestroy () {
    clearInterval(this.timing)
  },
  methods: {
    timeFn() {
      this.timing = setInterval(() => {
        this.dateDay = formatTime(new Date(), "HH: mm: ss");
        this.dateYear = formatTime(new Date(), "yyyy-MM-dd");
        this.dateWeek = this.weekday[new Date().getDay()];
      }, 1000);
    },
    screen() {
      // 如果不允许进入全屏，发出不允许提示
      if (!screenfull.enabled) {
        alert("您的浏览器不能全屏");
        return false;
      }
      screenfull.toggle();
      this.isFullscreen = !this.isFullscreen;
      return true;
    },
  },
};
</script>

<style lang="less">
#top-header {
  position: relative;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  flex-shrink: 0;

  .header-toolbar {
    position: absolute;
    z-index: 999;
    width: 100%;

    .flex-div {
      padding: 7px 50px 0px 45px;
      align-items: center;
      justify-content: space-between;

      .right-bar {
        align-items: center;
        width: 250px;
        justify-content: space-between;
        color: #e0e1e5;

        .text {
          font-weight: bold;
        }
        .button {
          height: 30px;
          width: 35px;
          color: #e0e1e5;
          padding: 2px;
          .icon {
            width: 100%;
            height: 100%;
          }
        }
        .button :hover {
          color: #00ace5;
        }
      }
    }
  }
  .header-center-decoration {
    width: 40%;
    height: 60px;
    margin-top: 30px;
  }
  .header-left-decoration,
  .header-right-decoration {
    width: 25%;
    height: 60px;
    margin-top: 12px;
  }
  .center-title {
    position: absolute;
    font-size: 28px;
    font-weight: bold;
    left: 50%;
    top: 15px;
    transform: translateX(-50%);
  }
}
</style>
