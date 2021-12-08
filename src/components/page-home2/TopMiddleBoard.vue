<template>
  <dv-border-box-6 :reverse="true" :color="['#2252A1', '#00ACE5']" style="padding-bottom: 10px;">
    <div style="width:100%;height:145px;">
      <Board :item='digitalFlopData' />
    </div>
  </dv-border-box-6>
</template>

<script>
import Board from "@/components/modules/board.vue";
export default {
  name: "MiddleBoard",
  components: {
    Board,
  },
  data() {
    return {
      digitalFlopData: [],
    };
  },
  methods: {
    createData() {
      const { randomExtend } = this;
      this.digitalFlopData = [
        {
          title: "垃圾接收处理量",
          number: {
            number: [randomExtend(20000, 30000)],
            content: "{nt}",
            textAlign: "right",
            style: {
              fill: "#00ACE5",
              fontWeight: "bold",
            },
          },
          unit: "吨",
        },
        {
          title: "厌氧消化处置量",
          number: {
            number: [randomExtend(20000, 30000)],
            content: "{nt}",
            textAlign: "right",
            style: {
              fill: "#00ACE5",
              fontWeight: "bold",
            },
          },
          unit: "吨",
        },
        {
          title: "筛上物外运量",
          number: {
            number: [randomExtend(20000, 30000)],
            content: "{nt}",
            textAlign: "right",
            style: {
              fill: "#00ACE5",
              fontWeight: "bold",
            },
          },
          unit: "吨",
        },
        {
          title: "沼渣外运量",
          number: {
            number: [randomExtend(20000, 30000)],
            content: "{nt}",
            textAlign: "right",
            style: {
              fill: "#00ACE5",
              fontWeight: "bold",
            },
          },
          unit: "吨",
        },
        {
          title: "垃圾渗液外排量",
          number: {
            number: [randomExtend(20000, 30000)],
            content: "{nt}",
            textAlign: "right",
            style: {
              fill: "#00ACE5",
              fontWeight: "bold",
            },
          },
          unit: "吨",
        },
        {
          title: "厌氧产沼量",
          number: {
            number: [randomExtend(20000, 30000)],
            content: "{nt}",
            textAlign: "right",
            style: {
              fill: "#00ACE5",
              fontWeight: "bold",
            },
          },
          unit: "m³",
        },
      ];
    },
    randomExtend(minNum, maxNum) {
      if (arguments.length === 1) {
        return parseInt(Math.random() * minNum + 1, 10);
      } else {
        return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
      }
    },
  },
  mounted() {
    const { createData } = this;
    createData();
    setInterval(createData, 30000);
  },
};
</script>

<style lang="less">
.digital-flop-F {
  position: relative;
  height: 100%;
  flex: 1;
  flex-shrink: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(19, 25, 47, 0.6);
  border-radius: 10px;

  .dv-decoration-10 {
    position: absolute;
    width: 90%;
    left: 2.5%;
    height: 5px;
    bottom: 0px;
  }

  .digital-flop-item {
    margin-top: 10px;
    width: 18%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-left: 2px solid rgb(6, 30, 93);
    border-right: 2px solid rgb(6, 30, 93);
  }

  .digital-flop-title {
    font-size: 14px;
  }

  .digital-flop {
    display: flex;
  }

  .unit {
    margin-left: 5px;
    display: flex;
    align-items: flex-end;
    box-sizing: border-box;
    padding-bottom: 13px;
  }
}
</style>
