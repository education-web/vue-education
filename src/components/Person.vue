<template>
  <div class="person">
    <div class="person-stat">{{ name }}</div>
    <div class="person-stat">{{ age }}</div>
    <div class="person-stat">{{ sex }}</div>
  </div>
</template>

<script>
// import { TweenLite } from 'gsap/TweenLite'

export default {
  name: 'Person',
  props: ['name', 'age', 'sex'],
  data () {
    return {
      tweenedAge: 0
    }
  },
  watch: {
    age (age) {
      console.log(age)
    }
  }
}
</script>

<style scoped>
.person {
  background: lightblue;
  border-radius: 5px;
  margin: 10px;
  padding: 5px;
}

.person-stat {
  margin: 10px 5px;
}
</style>
