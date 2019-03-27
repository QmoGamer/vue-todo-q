<template>
  <div class="tab-content">
     <div class="form-group col-md-4">
      <label for="inputState">State</label>
      <select id="inputState" class="form-control" v-model="value">
        <option value="Select1">Select1</option>
        <option value="Select2">Select2</option>
      </select>
    </div>
    <p>{{ value }}</p>
  </div>
</template>

<script>
export default {
  name: 'TabSelect',
  data(){
    return {
      value: 'Select2'
    }
  } 
}
</script>

<style scoped>
.tab-content, p {
  margin-top: 20px;
}

.form-group {
  margin:  0 auto;
}
</style>
