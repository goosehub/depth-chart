import { ref } from 'vue'
export default {
    template: `
        <div class="navigation">
            <button class="btn" @click="toggleDarkMode()">
                Switch to {{$parent.darkMode ? 'Light' : 'Dark'}} Mode
            </button>
            <a href="https://github.com/goosehub/depth-chart" target="_blank" aria-label="Link to Github">
                <button class="btn">
                    View On Github
                </button>
            </a>
            <a class="cory" href="https://gooseweb.io/resume/" target="_blank" aria-label="Link to Resume">
                <button class="btn">
                    By Cory Long
                </button>
            </a>
        </div>
    `,
    methods: {
        toggleDarkMode() {
            this.$parent.darkMode = !this.$parent.darkMode
        },
    },
    data() {
        return {
        }
    },
}