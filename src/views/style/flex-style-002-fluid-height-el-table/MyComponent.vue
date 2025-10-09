<script lang="ts" setup>
import { ref } from 'vue'

const now = new Date()
const tableData = ref([])
for (let i = 0; i < 23; i++) {
  tableData.value.push({
    date: '2016-05-03',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  })
}
const deleteRow = (index: number) => {
  tableData.value.splice(index, 1)
}
const onAddItem = () => {
  now.setDate(now.getDate() + 1)
  tableData.value.push({
    date: '20221122',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  })
}
</script>

<template>
  <div class="simple-page">
    <div class="simple-page-top">
      <el-button class="mt-4" style="width: 100%" height="30px" @click="onAddItem">
        Add Item
      </el-button>
    </div>
    <div class="simple-page-content">
      <div class="content-section">
        <el-table :data="tableData" style="width: 100%" max-height="100%">
          <el-table-column fixed prop="date" label="Date" width="150" />
          <el-table-column prop="name" label="Name" width="120" />
          <el-table-column prop="state" label="State" width="120" />
          <el-table-column prop="city" label="City" width="120" />
          <el-table-column prop="address" label="Address" width="600" />
          <el-table-column prop="zip" label="Zip" width="120" />
          <el-table-column fixed="right" label="Operations" min-width="120">
            <template #default="scope">
              <el-button link type="primary" size="small" @click.prevent="deleteRow(scope.$index)">
                Remove
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.simple-page {
  height: 100vh;
  display: flex;
  flex-direction: column;
  outline: 1px solid black;

  &-top {
    padding: 10px;
    background-color: ivory;
    height: 200px;
    flex-shrink: 0;
    outline: 3px solid lightpink;
  }

  &-content {
    flex: 1;
    padding: 10px;
    overflow: hidden;
    outline: 3px solid lightblue;

    .content-section {
      height: 100%;
      display: flex;
      flex-direction: column;
    }
  }
}
</style>
