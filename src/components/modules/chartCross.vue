<template>
  <div style="padding:10px">
    <Echart :options="options" :id="id" style=" width: 360px;height:250px;"></Echart>
  </div>
</template>

<script>
import Echart from "@/common/echart";
import { getDaysArray } from "@/utils/index.js";
export default {
  data() {
    return {
      options: {},
      dataArray: [],
      xData: [],
      lineData: [
        5000, 5500, 6500, 7500, 8500, 9900, 12500, 14000, 21500, 23200, 24450,
        25250, 33300, 4600, 18092, 20728, 24045, 28348, 32808, 36097, 39867,
        44715, 48444, 50415, 36097, 39867, 44715, 48444, 50415, 50061, 32677,
        49521, 32808, 4600, 44715, 48444, 50415, 56061, 62677, 59521, 67560,
        18092, 20728, 24045, 28348, 32808, 36097, 39867, 5000, 5500, 6500, 7500,
        8500, 9900, 22500, 14000, 21500, 8500, 9900, 12500, 14000, 21500, 23200,
        24450, 25250, 7500,
      ],
    };
  },
  components: {
    Echart,
  },
  props: {
    id: {
      type: String,
      required: true,
      default: "chartRate",
    },
    title: {
      type: String,
      default() {
        return "aaa";
      },
    },
  },
  watch: {
    dataValue: {
      handler(newData) {
        let timer = getDaysArray(30);
        this.xData = timer;
        timer.forEach((item, index) => {
          this.dataArray.push(this.lineData[index]);
        });
        this.options = {
          tooltip: {
            trigger: "item",
            axisPointer: {
              type: "cross",
            },
          },
          xAxis: [
            {
              type: "category",
              nameTextStyle: {
                color: "#fff",
                fontWeight: "bold",
                fontSize: 17,
              },
              data: this.xData,
            },
          ],
          yAxis: [
            {
              type: "value",
              nameTextStyle: {
                fill: "#FF9800",
                fontSize: 10,
              },
              splitLine: {
                show: false,
              },
              axisLine: {
                style: {
                  stroke: "#C3CBDE",
                },
              },
              axisLabel: {
                style: {
                  fill: "#FF9800",
                },
              },
            },
          ],
          series: [
            {
              name: "垃圾处理量",
              type: "scatter",
              symbolSize: 10,
              data: this.dataArray,
            },
          ],
        };
        console.log("coni", this.options);
      },
      immediate: true,
      deep: true,
    },
  },
  mounted() {
    // this.setData();
  },
  methods: {
    // setData() {
    //   let timer = getDaysArray(30);
    //   timer.forEach((item, index) => {
    //     let array = [item, this.cdata.lineData[index]];
    //     this.date.push(array);
    //   });
    // },
  },
};
</script>

<style lang="scss" scoped>
</style>
