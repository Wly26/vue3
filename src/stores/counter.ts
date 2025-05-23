import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCountStore = defineStore("count", {
  // actions里面放置的是一个一个的方法，用于响应组件中的“动作”
  actions: {
    increment(value: number) {
      // console.log('increment被调用了', value)
      console.log(this.sum);
      if (this.sum < 90) {
        // 修改数据（this是当前的store）
        // this.sum += value
        this.sum = value + this.sum;
      }
    },
    decrement(value: number) {
      // console.log('decrement被调了', value)
      if (this.sum > 10) {
        this.sum = this.sum - value;
      }
    },
  },
  // 真正存储数据的地方
  state() {
    return {
      sum: 26,
      school:'atguigu'
    };
  },
  getters: {
    bigSum: (state) => state.sum * 10,
    upperSchool(): string {
      return this.school.toUpperCase();
    },
  },
});
