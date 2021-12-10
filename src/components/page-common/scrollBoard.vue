<template>
  <div class="bottom-right-table-3">
    <dv-scroll-board :config="config" style="height:367px" />
  </div>
</template>

<script>
export default {
  name: "BottomRightTable3",
  data() {
    return {
      config: {
        header: ["名称", "用量", "金额", "单耗"],
        data: [
          ["氢氧化钠", "100吨", "10万", "5元/吨"],
          ["次氯酸钠", "100吨", "20万", "5元/吨"],
          ["植物原液", "100吨", "30万", "5元/吨"],
          ["PAM", "100吨", "40万", "50元/吨"],
          ["PAC", "100吨", "50万", "1000元/吨"],
          ["碳酸钠", "100吨", "60万", "1000元/吨"],
          ["催化剂", "100吨", "70万", "1000元/吨"],
          ["水质软化剂", "100kg", "8万", "10元/吨"],
          ["其他", " ", "50万", "1000元/吨"],
        ],
        columnWidth: [90, 60, 50],
        align: ["center"],
        headerBGC: "rgba(19, 25, 47, 0.6)",
        oddRowBGC: "rgba(30, 69, 135, 0.6)",
        evenRowBGC: "rgba(19, 25, 47, 0.6)",
      },
    };
  },
};
</script>

<style lang="less">
.bottom-right-table-3 {
  width: 300px;
  height: 100%;
  margin: 0 -5px;

  .border-box-content {
    padding: 20px;
    box-sizing: border-box;
  }

  .table-name {
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;

    img {
      width: 40px;
      height: 40px;
      margin-right: 5px;
    }
  }

  .dv-scroll-board {
    height: calc(~"100% - 60px");
  }
}
</style>
