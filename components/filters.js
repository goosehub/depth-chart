import { ref } from 'vue'
export default {
    template: `
        <div class="filters" aria-label="Filters">
            <button class="btn" :class="show.offense ? 'active' : 'inactive'" @click="toggleShow('offense', 'offense')">
                Offense
                <span class="show_toggle" v-if="show.offense" aria-label="Visible, select to hide">✓</span>
                <span class="show_toggle" v-else aria-label="Hidden, select to show">-</span>
            </button>
            <button class="btn" :class="show.defense ? 'active' : 'inactive'" @click="toggleShow('defense', 'defense')">
                Defense
                <span class="show_toggle" v-if="show.defense" aria-label="Visible, select to hide">✓</span>
                <span class="show_toggle" v-else aria-label="Hidden, select to show">-</span>
            </button>
            <button class="btn" :class="show.qb ? 'active' : 'inactive'" @click="toggleShow('qb', 'offense')">
                QB
                <span class="show_toggle" v-if="show.qb" aria-label="Visible, select to hide">✓</span>
                <span class="show_toggle" v-else aria-label="Hidden, select to show">-</span>
            </button>
            <button class="btn" :class="show.rb ? 'active' : 'inactive'" @click="toggleShow('rb', 'offense')">
                RB
                <span class="show_toggle" v-if="show.rb" aria-label="Visible, select to hide">✓</span>
                <span class="show_toggle" v-else aria-label="Hidden, select to show">-</span>
            </button>
            <button class="btn" :class="show.wr ? 'active' : 'inactive'" @click="toggleShow('wr', 'offense')">
                WR
                <span class="show_toggle" v-if="show.wr" aria-label="Visible, select to hide">✓</span>
                <span class="show_toggle" v-else aria-label="Hidden, select to show">-</span>
            </button>
            <button class="btn" :class="show.te ? 'active' : 'inactive'" @click="toggleShow('te', 'offense')">
                TE
                <span class="show_toggle" v-if="show.te" aria-label="Visible, select to hide">✓</span>
                <span class="show_toggle" v-else aria-label="Hidden, select to show">-</span>
            </button>
            <button class="btn" :class="show.k ? 'active' : 'inactive'" @click="toggleShow('k', 'defense')">
                K
                <span class="show_toggle" v-if="show.k" aria-label="Visible, select to hide">✓</span>
                <span class="show_toggle" v-else aria-label="Hidden, select to show">-</span>
            </button>
            <button class="btn" :class="show.dl ? 'active' : 'inactive'" @click="toggleShow('dl', 'defense')">
                DL
                <span class="show_toggle" v-if="show.dl" aria-label="Visible, select to hide">✓</span>
                <span class="show_toggle" v-else aria-label="Hidden, select to show">-</span>
            </button>
            <button class="btn" :class="show.lb ? 'active' : 'inactive'" @click="toggleShow('lb', 'defense')">
                LB
                <span class="show_toggle" v-if="show.lb" aria-label="Visible, select to hide">✓</span>
                <span class="show_toggle" v-else aria-label="Hidden, select to show">-</span>
            </button>
            <button class="btn" :class="show.db ? 'active' : 'inactive'" @click="toggleShow('db', 'defense')">
                DB
                <span class="show_toggle" v-if="show.db" aria-label="Visible, select to hide">✓</span>
                <span class="show_toggle" v-else aria-label="Hidden, select to show">-</span>
            </button>
        </div>
    `,
    props: [
      'show',
    ],
    methods: {
        toggleShow(property, side) {
            this.$emit('toggleShow', {property: property, side: side})
        },
    },
    data() {
        return {
        }
    },
}