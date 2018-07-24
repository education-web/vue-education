<template>
  <div class="page-list">
    <VTabs
      :tabs="['All', 'Male', 'Female', 'Other']"
      :active-tab.sync="activeFilter"
    />

    <VTabs
      :tabs="['Age', 'Sex', 'Name']"
      :active-tab.sync="sortBy"
    />
    <VList :people="filteredPeople"/>
  </div>
</template>

<script>
import { people } from '@/storage'
import VTabs from '@/components/VTabs'
import VList from '@/components/VList'

export default {
  name: 'PageList',

  data () {
    return {
      activeFilter: 'All',
      sortBy: 'Name',
      people: []
      // filteredPeople: []
    }
  },

  created () {
    console.log('before')
    this.people = people().sort((p1, p2) => p1.age - p2.age)
    // this.filteredPeople = this.people
    console.log('after')
  },

  computed: {
    sortFunction () {
      switch (this.sortBy) {
        case 'Age':
          return (p1, p2) => p1.age - p2.age
        case 'Sex':
          return (p1, p2) => p1.sex.localeCompare(p2.sex)
        case 'Name':
          return (p1, p2) => p1.name.localeCompare(p2.name)
      }
    },

    filteredPeople () {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      const sorted = [...this.people].sort(this.sortFunction)
      if (this.activeFilter === 'All') {
        return sorted
      } else {
        return sorted.filter(p => p.sex === this.activeFilter)
      }
    }
  },

  // watch: {
  //   sortBy (s) {
  //     this.filteredPeople = [...this.people].sort(this.sortFunction)
  //   }
  // },

  methods: {
    mymethod (v) {
      console.log(v)
    }
  },

  components: { VList, VTabs }
}
</script>

<style scoped lang="scss">
.page-list {
  display: flex;
  flex-flow: column;
  > * {
    margin: 10px;
  }
}
</style>
