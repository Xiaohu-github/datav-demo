<template>
  <div style="width: 250px;height:250px;">
    <dv-charts :option="option" />
  </div>
</template>

<script>
export default {
  name: "chartPie",
  props: {
    option: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style lang="less">
</style>
