<template>
  <div>
    <h2>TS import demo</h2>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import">tutorial</a>
    <p>f1: {{ f1() }}</p>
    <p>f2: {{ f3() }}</p>
    <p>f7: {{ f7() }}</p>
    <p>v1: {{ v1 }}</p>
    <p>v2: {{ v2 }}</p>
    <p>v3: {{ v3 }}</p>
    <p>v3: {{ v3 }}</p>
    <p>v5: {{ v5 }}</p>
    <p>default: {{ default2() }}</p>
  </div>
</template>

<script setup lang="ts">

// named import
import { f1, f3, v1, v2, v3, v5 } from './export.ts'
// named import (renamed)
import {f6 as f7 } from './export.ts'
// default import
import default2 from './export-default.ts'
// side effect import
import './export2.ts'

</script>

<style scoped></style>
