<!-- src/views/About.vue -->
<template>
  <div>
    <span>{{ msg }}</span>
    <button @click="changeMsg">Change Msg</button>
    <span>{{ state.message }}</span>
    <button @click="changeMessage">Change Message</button>

    <br />
    <h2>当前求和为：{{ sum }} 放大倍后{{ bigSum }}</h2>
    <button @click="changeSum">点我sum+1</button>

    <br />

    <div>
      <h2>当前求和为：{{ countStore.sum }}</h2>
      <select v-model.number="n">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <button @click="add">加</button>
      <button @click="minus">减</button>
    </div>

    <br />
    {{ upperSchool }}
  </div>
</template>

<script setup lang="ts" name="about">
import { ref, reactive, watch } from 'vue'
import { useCountStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'
let msg = ref('Hello World')
function changeMsg() {
  msg.value = 'Hello Vue2'
}
let state = reactive({
  message: 'Hello World',
})
function changeMessage() {
  state.message = 'Hello Vue3'
}
let sum = ref(0)
function changeSum() {
  sum.value++
}
watch(sum, (newValue, oldValue) => {
  console.log(newValue, oldValue)
  if (newValue > 10) {
    sum.value = 0
  }
})

const countStore = useCountStore()
const { bigSum, upperSchool } = storeToRefs(countStore) 

// 数据
let n = ref(1) // 用户选择的数字
// 方法
function add() {
  console.log(n.value)
  // 第一种修改方式
  // countStore.sum += 1

  // 第二种修改方式
  /* countStore.$patch({
      sum:888,
      school:'尚硅谷',
      address:'北京'
    }) */

  // 第三种修改方式
  countStore.increment(n.value)
}
function minus() {
  countStore.decrement(n.value)
}
//  订阅：监听state里面的数据变化
countStore.$subscribe((mutate, state) => {
  console.log('talkStore里面保存的数据发生了变化', mutate, state)
  //存入浏览器本地
  localStorage.setItem('talkList', JSON.stringify('talkList') as string) 
})
</script>

<style scoped></style>
