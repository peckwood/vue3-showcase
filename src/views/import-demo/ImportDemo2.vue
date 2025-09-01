<template>
  <div>
    <h2>I imported everything from export-all.ts</h2>
    <p>f1: {{ exportAll.f1() }}</p>
    <p>f2: {{ exportAll.f3() }}</p>
    <p>v1: {{ exportAll.v1 }}</p>
    <p>v2: {{ exportAll.v2 }}</p>
    <p>v3: {{ exportAll.v3 }}</p>
    <p>v3: {{ exportAll.v3 }}</p>
    <p>v5: {{ exportAll.v5 }}</p>

    <h2>I imported everything from exports2.ts</h2>
    <p>f1: {{ export2.f1_2() }}</p>
  </div>
</template>

<script setup lang="ts">
// namespace import
import * as exportAll from './export-all.ts'
// side effect import
import './export2'
</script>

<style scoped></style>
