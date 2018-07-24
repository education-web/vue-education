<template>
  <div>
    <!--<VIcon src="~@/assets/my-icon.svg"/>-->
    <UserInput
      @input="$emit('input', $event)"
    />
  </div>
</template>

<script>
import VIcon from '@/components/VIcon'
import UserInput from '@/components/UserInput'

export default {
  name: 'AnotherApp',
  data () {
    return {
      searchQuery: ''
    }
  },
  methods: {
    myMethod () {
      this.$root.searchQuery = this.searchQuery
    }
  },
  components: {
    VIcon,
    UserInput
  }
}
</script>

<style scoped>

</style>
