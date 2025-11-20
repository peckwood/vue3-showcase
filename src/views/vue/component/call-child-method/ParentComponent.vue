<script setup lang="ts">

import ChildComponent from '@/views/vue/component/call-child-method/ChildComponent.vue'
import { ref } from 'vue'

const childRef = ref();
console.log('childRef.value', childRef.value)

// the following line will produce "Cannot read properties of undefined" because vue is not mounted yet
// childRef.value.childFunction1();

function callChild(){
  childRef.value.childFunction2();
  childRef.value.childFunction1();
}
</script>

<template>
<div>
  <p>parent</p>
  <button @click="callChild">Call child</button>
  <child-component ref="childRef"></child-component>
  <h3>parent</h3>
  <ol>
    <li>import ref from vue</li>
    <li>create ref, not :ref</li>
    <li>call method with .value</li>
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
