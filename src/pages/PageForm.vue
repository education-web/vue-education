<template>
  <div :class="$style.root">
    <TheMainForm v-if="componentDisplayed"/>
  </div>
</template>

<script>
import TheMainForm from '@/components/TheMainForm'

export default {
  name: 'PageForm',
  data () {
    return {
      componentDisplayed: true
    }
  },
  created () {
    // setTimeout(() => { this.componentDisplayed = false }, 6000)
  },
  components: { TheMainForm }
}
</script>

<style module>
.root {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
