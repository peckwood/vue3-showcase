<script lang="ts" setup></script>

<template>
  <div class="simple-page">
    <div class="simple-page-top" style="background-color: ivory; height: 200px">top</div>
    <div class="simple-page-content">
      <div style="background-color: darkgrey; height: 200px">a</div>
      <div style="background-color: ivory; height: 600px">b</div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.simple-page {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  outline: 1px solid black;
  //overflow: auto;

  &-top {
    padding: 10px;
    min-height: 90px;
    background: #fff;
    outline: 1px solid lightpink;
  }

  &-content {
    flex: 1;
    background: #fff;
    //如果内容太长, 自身会产生滚动条
    //overflow: scroll;

    //如果内容太长, 自身也会变长
    overflow: visible; //默认
    padding: 10px;
    margin: 0 0 0 0;
    outline: 1px solid lightblue;
  }

  &-bottom {
    padding: 0 20px;
    height: 55px;
    background: #fff;
  }
}
</style>
