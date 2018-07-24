<template>
  <div class="my-component"
    @click="onClick"
  >
    {{ fullName }}
  </div>
</template>

<script>
// const STYLE_TYPES = [
//   'big',
//   'small',
//   'medium'
// ]

export default {
  // name: 'MyComponent'
  props: {
    styleType: {
      type: String
      // required: true,
      // default: '',
      // validator: v => STYLE_TYPES.includes(v),
    }
    // someObject: {
    //   type: Object,
    //   default() {
    //     return {};
    //   },
    // }
  },

  // как можно меньше
  data () {
    return {
      // загружены ли данные с бекенда успешно
      loaded: false,

      // загружаются ли сейчас данные
      loading: false,

      someField: '',
      firstName: 'Kek',
      lastName: 'KEKE',
      veryFullName: ''
    }
  },

  // его нужно использовать как можно чаще
  computed: {
    // fullName () {
    //   return `${this.firstName} ${this.lastName}`
    // },
    fullName: {
      get () {
        return `${this.firstName} ${this.lastName}`
      },
      set (value) {
        this.firstName = ''
        this.lastName = ''
      }
    }
  },

  created () {
    setTimeout(() => { this.firstName = 'newName' }, 5000)
  },

  // отслеживает props, data, computed
  // использовать в последнюю очередь для самых продвинутых задач (JS анимация, реагирование на изменение prop)
  watch: {
    fullName (newValue, oldValue) {
      console.log(oldValue)
      console.log(newValue)
      this.veryFullName = `${this.firstName} ${this.lastName}`
    },

    styleType () {
      //
    }
  },

  // меньше в шаблоне, больше тут
  methods: {
    myMethod () {
      console.log(this.fullName)
      this.fullName = ''
    },
    onClick () {
    }
  }
}
</script>

<style scoped>
.my-component {

}
</style>
