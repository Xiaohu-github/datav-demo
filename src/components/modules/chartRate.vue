<template>
  <div>
    <Echart :options="options" :id="id" height="100px" width="100px"></Echart>
  </div>
</template>

<script>
import Echart from "@/common/echart";
export default {
  data() {
    return {
      options: {},
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
    dataValue: {
      type: Number,
      required: true,
      default: 50,
    },
    title: {
      type: String,
      default() {
        return "aaa";
      },
    },
    colorObj: {
      type: Object,
      default: function () {
        return {
          textStyle: "#3fc0fb",
          series: {
            color: ["#00bcd44a", "transparent"],
            dataColor: {
              normal: "#03a9f4",
              shadowColor: "#97e2f5",
            },
          },
        };
      },
    },
  },
  watch: {
    dataValue: {
      handler(newData) {
        const { colorObj } = this;
        const dataArray = [];
        newData.forEach((item, index) => {
          console.log(item);
          this.$set(dataArray, index, {
            value: item.value,
            name: item.name,
            itemStyle: {
              normal: {
                color: item.style.color,
                shadowBlur: item.style.shadowBlur,
                shadowColor: item.style.shadowColor,
              },
            },
          });
        });

        this.options = {
          tooltip: {
            trigger: "item",
          },
          title: {
            text: this.title,
            x: "center",
            y: "center",
            textStyle: {
              color: colorObj.textStyle,
              fontSize: 15,
            },
          },
          series: [
            {
              type: "pie",
              radius: ["75%", "80%"],
              center: ["50%", "50%"],
              hoverAnimation: true,
              color: colorObj.series.color,
              label: {
                show: false,
                position: "center",
              },
              emphasis: {
                label: {
                  show: false,
                  fontSize: "15",
                  fontWeight: "bold",
                },
              },
              data: dataArray,
            },
          ],
        };
      },
      immediate: true,
      deep: true,
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
