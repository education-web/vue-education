<template>
  <div v-html="src"></div>
</template>

<script>
export default {
  name: 'VIcon',
  props: {
    src: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
