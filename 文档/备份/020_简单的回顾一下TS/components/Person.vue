<template>
  <div class="person">
    ???
  </div>
</template>

<script lang="ts" setup name="Person">
//定义数据的规范
import { type PersonInter, type Persons } from '../types'

// let person:PersonInter = {id:'asyud7asfd01',name:'张三',age:60}

// personList1是符合规范的数组
let personList1: Array<PersonInter> = [
  { id: 'asyud7asfd01', name: '张三', age: 60 },
  { id: 'asyud7asfd02', name: '李四', age: 18 },
  { id: 'asyud7asfd03', name: '王五', age: 5 }
]
let personList: Persons = [
  { id: 'asyud7asfd01', name: '张三', age: 60 },
  { id: 'asyud7asfd02', name: '李四', age: 18 },
  { id: 'asyud7asfd03', name: '王五', age: 5 }
]

</script>

<style scoped>
.person {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}

button {
  margin: 0 5px;
}

li {
  font-size: 20px;
}
</style>