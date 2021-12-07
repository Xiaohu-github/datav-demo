<template>
  <div class="main-header">
    <div class="mh-left">
      <dv-decoration-10 class="dec-10" />
    </div>
    <div class="mh-middle">
      {{title}}
    </div>
    <div class="mh-right">

      <dv-decoration-10 class="dec-10 rotate-Y-180" />
    </div>
  </div>
</template>
<script>
export default {
  name: "headline",
  props: {
    title: {
      type: String,
      default() {
        return "上海卓太环保测试";
      },
    },
  },
};
</script>
<style scoped lang="scss">
.main-header {
  height: 38px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  .mh-middle {
    font-size: 30px;
  }

  .mh-left,
  .mh-right {
    width: 450px;
    .dec-10 {
      width: 90%;
      height: 5px;
    }
  }
}
.rotate-Y-180 {
  transform: rotateY(180deg);
}
</style>
