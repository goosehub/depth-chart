import { ref } from 'vue'
export default {
    template: `
        <div class="navigation">
            <button class="btn" @click="toggleDarkMode()">
                Switch to {{darkMode ? 'Light' : 'Dark'}} Mode
            </button>
            <a href="https://github.com/goosehub/depth-chart" target="_blank" aria-label="Link to Github">
                <button class="btn" tabindex="-1">
                    View On Github
                </button>
            </a>
            <a class="cory" href="https://gooseweb.io/resume/" target="_blank" aria-label="Link to Resume">
                <button class="btn" tabindex="-1">
                    By Cory Long
                </button>
            </a>
        </div>
    `,
    props: [
      'darkMode',
    ],
    methods: {
        toggleDarkMode() {
            this.$emit('toggleDarkMode')
        },
    },
    data() {
        return {
        }
    },
}