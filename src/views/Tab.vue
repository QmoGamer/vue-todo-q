<template>
  <div>
    <div class="tab nav nav-pills">
      <div class="nav-item">
        <span 
          class="nav-link" 
          :class="view === 'TabRadio' ? 'active' : ''" 
          @click="selectTab('TabRadio')"
        >Radio</span>
      </div>
      <div class="nav-item">
        <span 
          class="nav-link" 
          :class="view === 'TabSelect' ? 'active' : ''" 
          @click="selectTab('TabSelect')"
        >Select</span>
      </div>
    </div>
    <keep-alive>
      <component :is="view"></component>
    </keep-alive>
  </div>
</template>

<script>
import TabRadio from '@/components/tab/TabRadio.vue'
import TabSelect from '@/components/tab/TabSelect.vue'

export default {
  name: 'Tab',
  data() {
    return {
      view: 'TabRadio'
    }
  },
  components: {
    TabRadio,
    TabSelect,
  },
  methods: {
    selectTab(value) {
      this.view = value
    }
  }
}
</script>

<style scoped>
.tab {
  display: flex;
  justify-content: center;
}
</style>
