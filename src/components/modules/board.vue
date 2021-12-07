<template>
  <div class="up">
    <div class="bg-color-black item">
      <p class="ml-3 colorBlue fw-b fs-xl">{{ item.title }}</p>
      <div>
        <dv-digital-flop class="dv-dig-flop ml-1 mt-2 pl-3" :config="item.number" />
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
      default: [],
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
</style>
