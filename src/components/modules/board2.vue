<template>
  <div class="bottom-data">
    <dv-border-box-6 :color="['#2252A1', '#00ACE5']">
      <div class="d-flex" style="width: 99%; flex-wrap: wrap; margin-left: 2%;">
        <div class="mt-2 item-box" v-bind:style="{width:width}" v-for="(item, index) in numberData" :key="index">
          <p class="text"> {{ item.text }} </p>
          <dv-digital-flop class="dv-digital-flop" :config="item.number" />
          <div class="unit">{{ item.unit }}</div>
        </div>
      </div>
    </dv-border-box-6>
  </div>
</template>

<script>
export default {
  name: "board2",
  components: {},
  props: {
    numberData: {
      type: Object,
      default() {
        return [];
      },
    },
    width: {
      type: String,
      default() {
        return "33.3%";
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.bottom-data {
  display: flex;
  justify-content: center;
  margin-top: 5px;
  .item-box {
    font-size: 10px;
    .text {
      color: #c3cbde;
    }
    p {
      text-align: center;
    }
    .dv-digital-flop {
      height: 30px;
    }
  }
}
.unit {
  margin-left: 5px;
  display: flex;
  align-items: flex-end;
  box-sizing: border-box;
  // padding-bottom: 13px;
}
</style>
