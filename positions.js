import { ref } from 'vue'
export default {
    template: `
        <div class="positions">
            <div class="position" v-for="position in filteredPositions">
                <p class="position_acronym" :style="'background-color: ' + position.color">
                    {{position.acronym}}
                    <span class="sort_btn" :class="position.sortingDirection > 0 ? 'active' : ''" @click="sortPosition(position, 1)" aria-label="Sort ascending">
                        ▲
                    </span>
                    <span class="sort_btn" :class="position.sortingDirection < 0 ? 'active' : ''" @click="sortPosition(position, -1)" aria-label="Sort descending">
                        ▼
                    </span>
                </p>
                <div class="position_player" v-for="player in position.players">
                    <p class="player_name">{{player}}</p>
                </div>
            </div>
        </div>
    `,
    props: [
      'filteredPositions',
    ],
    methods: {
        sortPosition(position, direction) {
            position.sortingDirection = direction
        },
    },
    data() {
        return {
        }
    },
}