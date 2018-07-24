<template>
  <div class="user-input">
    <input
      :value="value"
      @input="$emit('input', $event.target.value)"
      placeholder="Search..."
    >
  </div>
</template>

<script>
export default {
  name: 'UserInput',
  props: {
    value: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.user-input {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
}
</style>
