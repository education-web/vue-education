import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

// eslint-disable-next-line no-unused-vars
// const newComponent = new Vue({
//   router,
//   render: h => h(App),
//   created () {
//     console.log('new-created')
//   },
//   mounted () {
//     console.log('new-mounted')
//   }
// })
//
// newComponent.$mount('#app')
