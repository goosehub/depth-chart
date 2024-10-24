import { ref } from 'vue'
export default {
  setup() {
  },
  data() {
    return {
      max: 3,
    }
  },
  template: `
  <div v-for="i in max">
    <p>Number {{i}}</p>
  </div>
  `
}