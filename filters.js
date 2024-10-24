import { ref } from 'vue'
export default {
    template: `
        <div class="filters" aria-label="Filters">
            <button class="btn" :class="show.offense ? 'active' : 'inactive'" @click="toggleShow('offense')">
                Offense
                <span v-if="show.offense" aria-label="Visible, select to hide">✓</span>
                <span v-else aria-label="Hidden, select to show">X</span>
            </button>
            <button class="btn" :class="show.defense ? 'active' : 'inactive'" @click="toggleShow('defense')">
                Defense
                <span v-if="show.defense" aria-label="Visible, select to hide">✓</span>
                <span v-else aria-label="Hidden, select to show">X</span>
            </button>
            <button class="btn" :class="show.qb ? 'active' : 'inactive'" @click="toggleShow('qb')">
                QB
                <span v-if="show.qb" aria-label="Visible, select to hide">✓</span>
                <span v-else aria-label="Hidden, select to show">X</span>
            </button>
            <button class="btn" :class="show.rb ? 'active' : 'inactive'" @click="toggleShow('rb')">
                RB
                <span v-if="show.rb" aria-label="Visible, select to hide">✓</span>
                <span v-else aria-label="Hidden, select to show">X</span>
            </button>
            <button class="btn" :class="show.wr ? 'active' : 'inactive'" @click="toggleShow('wr')">
                WR
                <span v-if="show.wr" aria-label="Visible, select to hide">✓</span>
                <span v-else aria-label="Hidden, select to show">X</span>
            </button>
            <button class="btn" :class="show.te ? 'active' : 'inactive'" @click="toggleShow('te')">
                TE
                <span v-if="show.te" aria-label="Visible, select to hide">✓</span>
                <span v-else aria-label="Hidden, select to show">X</span>
            </button>
            <button class="btn" :class="show.k ? 'active' : 'inactive'" @click="toggleShow('k')">
                K
                <span v-if="show.k" aria-label="Visible, select to hide">✓</span>
                <span v-else aria-label="Hidden, select to show">X</span>
            </button>
            <button class="btn" :class="show.dl ? 'active' : 'inactive'" @click="toggleShow('dl')">
                DL
                <span v-if="show.dl" aria-label="Visible, select to hide">✓</span>
                <span v-else aria-label="Hidden, select to show">X</span>
            </button>
            <button class="btn" :class="show.lb ? 'active' : 'inactive'" @click="toggleShow('lb')">
                LB
                <span v-if="show.lb" aria-label="Visible, select to hide">✓</span>
                <span v-else aria-label="Hidden, select to show">X</span>
            </button>
            <button class="btn" :class="show.db ? 'active' : 'inactive'" @click="toggleShow('db')">
                DB
                <span v-if="show.db" aria-label="Visible, select to hide">✓</span>
                <span v-else aria-label="Hidden, select to show">X</span>
            </button>
        </div>
    `,
    props: [
      'show',
    ],
    methods: {
        toggleShow(property) {
            this.$emit('toggleShow', property)
        },
    },
    data() {
        return {
        }
    },
}