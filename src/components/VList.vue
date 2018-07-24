<template>
  <transition-group
    name="people"

    in-out
    class="v-list"
  >
    <Person
      v-for="p in people"
      :key="p.id"
      v-bind="p"
    />
  </transition-group>
</template>

<script>
import Person from '@/components/Person'

export default {
  name: 'VList',
  components: {Person},
  props: {
    people: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped lang="scss">
.v-list {
  display: flex;
  flex-flow: row wrap;
}

$transition-time: 0.3s;

.people-enter-active, .people-leave-active {
  transition: all $transition-time;
}

.people-leave-active {
  position: absolute;
}

.people-enter, .people-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.people-move {
  transition: all $transition-time;
}

</style>
