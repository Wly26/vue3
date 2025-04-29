<template>
  <h3>ux交互特效：</h3>
  <p>
    共享数据：
    <p>
      <router-link to="/pinia">pinia</router-link>
    </p>
  </p>
  <p>
    组件通信： 
    <p><router-link active-class="active" class="list-group-item" to="/props">1. props</router-link></p>
    <p><router-link active-class="active" class="list-group-item" to="/event">2. 自定义事件</router-link></p>
    <p><router-link active-class="active" class="list-group-item" to="/mitt">3. mitt</router-link></p>
    <p><router-link active-class="active" class="list-group-item" to="/model">4. v-model</router-link></p>
    <p><router-link active-class="active" class="list-group-item" to="/attrs">5. $attrs</router-link></p>
    <p><router-link active-class="active" class="list-group-item" to="/ref-parent">6. <span class="small">$refs、$parent</span></router-link></p>
    <p><router-link active-class="active" class="list-group-item" to="/provide-inject">7. provide、inject</router-link></p>
    <p><router-link active-class="active" class="list-group-item" to="/pinia">8. pinia</router-link></p>
    <p><router-link active-class="active" class="list-group-item" to="/slot">9. slot</router-link></p>
  </p>
</template>

<script setup lang="ts" name="home">
import { RouterLink } from 'vue-router'
</script>

<style scoped></style>
