<template>
  <div>
    <form class="wap-form" action="">
      <label
        >Name:
        <el-input placeholder="Name" type="text" />
      </label>
      <label
        >Email:
        <input placeholder="Email" type="text" />
      </label>
      <label
        >Phone:
        <el-input placeholder="Phone" type="text" />
      </label>
      <label
        >Date:
        <input type="date" />
      </label>
      <label
        >Time:
        <div class="block">
          <span class="demonstration">Default</span>
          <el-date-picker
            v-model="value1"
            type="datetime"
            placeholder="Select date and time"
          >
          </el-date-picker>
        </div>
      </label>
      <label
        >Person:
        <el-select v-model="value" placeholder="Select">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </label>
      <div>
        <button>Send</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [1, 2, 3, 4],
    }
  },
}
</script>

<style></style>
