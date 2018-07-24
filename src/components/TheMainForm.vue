<template>
  <div :class="$style.root">
    <div :class="$style.inputBox">
      <label for="first-name">First Name</label>
      <input
        id="first-name"
        ref="firstName"
        type="text"
        v-model="firstName"
        v-focus
      />
    </div>

    <div :class="$style.inputBox">
      <label for="last-name">Last Name</label>
      <input
        id="last-name"
        type="text"
        v-model="lastName"
        v-focus
      />
    </div>

    <div :class="$style.inputBox">
      <label for="age">Age</label>
      <input
        id="age"
        type="text"
        v-model.number="age"
      />
    </div>

    <div :class="$style.inputBox">
    </div>
  </div>
</template>

<script>
import focus from '@/directives/focus'

export default {
  name: 'TheMainForm',

  created () {
    console.log('created')
  },

  // mounted () {
  //   this.$nextTick(() => {
  //     // DOM
  //   })
  //   console.log('mounted')
  // },

  async mounted () {
    await this.$nextTick()
    // const el = this.$refs.firstName
    // el.focus()
  },

  beforeDestroy () {
    console.log('beforeDestroy')
  },

  directives: { focus },

  data () {
    return {
      firstName: '',
      lastName: '',
      age: ''
    }
  }
}
</script>

<style module>
.root {
  padding: 20px;
  display: flex;
  flex-flow: column;
  align-items: flex-end;
  justify-content: center;
}

.inputBox {
  margin-bottom: 15px;
}
</style>
