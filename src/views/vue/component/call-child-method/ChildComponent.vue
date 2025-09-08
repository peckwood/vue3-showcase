<template>
  <p>child</p>
</template>

<script setup lang="ts">
  function childFunction1(){
    console.log('childFunction1')
  }
  const childFunction2 = () => {
    console.log('childFunction2')
  }
  defineExpose({childFunction1, childFunction2})
</script>



<style scoped>

</style>
