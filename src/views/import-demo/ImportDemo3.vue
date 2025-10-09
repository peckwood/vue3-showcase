<template>
  <div>
    <h2>I imported everything from export-all.ts</h2>
    <p>f1: {{ exportAll.f1() }}</p>
    <p>f2: {{ exportAll.f2() }}</p>
    <p>v1: {{ exportAll.v1 }}</p>
    <p>v2: {{ exportAll.v2 }}</p>
    <p>v3: {{ exportAll.v3 }}</p>
  </div>
</template>

<script setup lang="ts">
// namespace import
import * as exportAll from './export-all-2.ts'
</script>

<style scoped></style>
