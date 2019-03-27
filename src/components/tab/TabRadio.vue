<template>
  <div class="tab-content">
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" v-model="value">
      <label class="form-check-label" for="inlineRadio1">1</label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" v-model="value">
      <label class="form-check-label" for="inlineRadio2">2</label>
    </div>
    <p>{{ value }}</p>
  </div>
</template>

<script>
export default {
  name: 'TabRadio',
  data() {
    return {
      value: 'option1',
    }
  }
}
</script>

<style scoped>
.tab-content, p {
  margin-top: 20px;
}

.form-check-input {
  margin-top: -5px;
}
</style>
