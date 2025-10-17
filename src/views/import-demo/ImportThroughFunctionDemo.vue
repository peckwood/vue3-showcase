<template>
  <div>
    <h2>TS import demo</h2>
    <p>f2: {{ service.f2() }}</p>
    <p>v2: {{ service.v2 }}</p>
  </div>
</template>

<script setup lang="ts">
import exportThroughFunction from './export-through-function.ts'
const {service} = exportThroughFunction()
</script>

<style scoped></style>
