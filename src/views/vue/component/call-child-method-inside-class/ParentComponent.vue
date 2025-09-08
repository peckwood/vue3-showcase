<script setup lang="ts">

import ChildComponent from '@/views/vue/component/call-child-method/ChildComponent.vue'
import { ref } from 'vue'


class MyClass{
  childRef = ref();

// the following line will produce "Cannot read properties of undefined" because vue is not mounted yet
// childRef.value.childFunction1();
  callChild(){
    this.childRef.value.childFunction1();
    this.childRef.value.childFunction2();
  }
}
// must be after initialization
const myClass = new MyClass();

</script>

<template>
<div>
  <h2>call child method inside class</h2>
  <p>parent</p>
  <button @click="myClass.callChild">Call child</button>
  <child-component :ref="myClass.childRef"></child-component>
  <h3>parent</h3>
  <ol>
    <li>import ref from vue</li>
    <li>create ref, not :ref</li>
    <li>call method with .value</li>
    <li>special: create instance variable AFTER class initialization</li>
    <li>special: use instance variable to access variable and call methods</li>
    <li>special: use this.ref instead of ref</li>
  </ol>
  <h3>child</h3>
  <ol>
    <li>define method</li>
    <li>defineExpose them</li>
  </ol>
</div>
</template>

<style scoped>

</style>
