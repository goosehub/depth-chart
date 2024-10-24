import { ref } from 'vue'
export default {
    template: `
    <div v-for="i in max">
        <p>Number {{i}}</p>
    </div>
    `,
    setup() {
    },
    data() {
        return {
            max: 1,
        }
    },
}