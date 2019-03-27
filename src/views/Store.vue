<template>
  <div>
    <ul class="list-group col-md-4">
      <li class="list-group-item" v-for="(item, index) in numberList" :key="index">{{ item }}</li>
      <li class="list-group-item active">Total: {{ total | dollar }}</li>
    </ul>
    <button class="btn btn-success" @click="getNewNumberList()">更新</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Store',
  computed: {
    ...mapGetters({
      numberList: 'numberList',
      total: 'total'
    })
  },
  methods: {
    ...mapActions({
      getNewNumberList: 'getNewNumberList'
    })
  },
  filters: {
    dollar(value) {
      return `$${value.toLocaleString()}`
    }
  }
}
</script>

<style scoped>
.list-group {
  margin: 0 auto;
}

.btn.btn-success {
  margin-top: 20px;
}
</style>
