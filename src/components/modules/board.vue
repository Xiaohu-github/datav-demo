<template>
  <div class="up">
    <div class="bg-color-black item" v-bind:style="{width:width}" v-for="item in item" :key="item.title">
      <p class="ml-3 colorText fw-b fs-xl">{{ item.title }}</p>
      <div class="d-flex" style="width:85%;  ">
        <dv-digital-flop class="dv-dig-flop  mt-2 pl-3" :config="item.number" />
        <div class="unit">{{ item.unit }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "board",
  props: {
    item: {
      type: Object,
      default() {
        return [];
      },
    },
    width: {
      type: String,
      default() {
        return "32%";
      },
    },
  },
  components: {},
};
</script>

<style lang="scss" scoped>
.up {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  .item {
    border-radius: 6px;
    padding-top: 6px;
    margin-top: 8px;
    width: 32%;
    height: 65px;
    .dv-dig-flop {
      width: 150px;
      height: 30px;
    }
    .unit {
      margin-left: 5px;
      display: flex;
      align-items: flex-end;
      padding-bottom: 5px;
    }
  }
}
</style>
