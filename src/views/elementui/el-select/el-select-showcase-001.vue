<template>
  <div style="padding: 20px; max-width: 600px;">
    <h3>El-Select Manual Value Demo</h3>

    <div style="margin-bottom: 20px;">
      <el-button @click="reset">Reset</el-button>
      <el-button type="primary" @click="forceSetValue">
        Force Set "Hidden Item" (ID: 999)
      </el-button>
    </div>

    <el-select
      v-model="currentValue"
      filterable
      remote
      reserve-keyword
      placeholder="Type to search..."
      :remote-method="remoteMethod"
      :loading="loading"
      style="width: 100%"
      @change="handleChange"
    >
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>

    <div style="margin-top: 20px; background: #f4f4f4; padding: 10px; border-radius: 4px;">
      <p><strong>Current Value (v-model):</strong> {{ currentValue }}</p>
      <p><strong>Current Label (derived):</strong> {{ currentLabel }}</p>
      <p><strong>Options Count:</strong> {{ options.length }}</p>
      <p><strong>Options Data:</strong> {{ options }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface ListItem {
  value: string
  label: string
}

const options = ref<ListItem[]>([])
const currentValue = ref<string>('')
const currentLabel = ref<string>('')
const loading = ref(false)

// 1. Simulate a standard Remote Search
const remoteMethod = (query: string) => {
  if (query) {
    loading.value = true
    setTimeout(() => {
      loading.value = false
      options.value = [
        { value: '1', label: 'Apple' },
        { value: '2', label: 'Banana' },
        { value: '3', label: 'Cherry' },
      ].filter((item) => {
        return item.label.toLowerCase().includes(query.toLowerCase())
      })
    }, 200)
  } else {
    options.value = []
  }
}

// 2. THE SOLUTION: Function to set a value that doesn't exist in the list yet
const forceSetValue = () => {
  const targetValue = '999'
  const targetLabel = 'Hidden Manual Item'

  // A. Check if it already exists to avoid duplicates
  const exists = options.value.some(opt => opt.value === targetValue)

  // B. If it doesn't exist, we MUST manually inject it into options
  if (!exists) {
    // You can either push it, or replace the whole array depending on your UX needs
    // Here we push it so it becomes valid immediately
    options.value.push({ value: targetValue, label: targetLabel })
  }

  // C. Now we can safely set the model value
  currentValue.value = targetValue

  // D. Update our local label tracker (since v-model:label isn't standard)
  currentLabel.value = targetLabel
}

const handleChange = (val: string) => {
  const found = options.value.find(item => item.value === val)
  currentLabel.value = found ? found.label : ''
}

const reset = () => {
  currentValue.value = ''
  currentLabel.value = ''
  options.value = []
}
</script>
