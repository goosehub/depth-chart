import { ref } from 'vue'
export default {
    template: `
    <section class="root_section" :class="darkMode ? 'dark_mode' : ''">
        <navigation></navigation>
        <team></team>
        <filters :show="show"></filters>
        <positions :filteredPositions="filteredPositions"></positions>
    </section>
    `,
    methods: {
        toggleDarkMode() {
            this.darkMode = !this.darkMode
        },
        showPosition(position, show) {
            if (position.side === 'offense' && !show.offense) {
                return false
            }
            if (position.side === 'defense' && !show.defense) {
                return false
            }
            if (position.group === 'qb' && !show.qb) {
                return false;
            }
            if (position.group === 'rb' && !show.rb) {
                return false;
            }
            if (position.group === 'wr' && !show.wr) {
                return false;
            }
            if (position.group === 'te' && !show.te) {
                return false;
            }
            if (position.group === 'k' && !show.k) {
                return false;
            }
            if (position.group === 'dl' && !show.dl) {
                return false;
            }
            if (position.group === 'lb' && !show.lb) {
                return false;
            }
            if (position.group === 'db' && !show.db) {
                return false;
            }
            return true
        },
        filterObject(object, condition) {
            Object.filter = (obj, predicate) => 
                Object.keys(obj)
                    .filter( key => predicate(obj[key]) )
                    .reduce( (res, key) => (res[key] = obj[key], res), {} );

            return Object.filter(object, condition)
        },
        checkSorted(arr, sortingDirection) {
            for (let i = 0; i < arr.length - 1; i++) {
                if (sortingDirection > 0 && arr[i] > arr[i + 1]) {
                    return false;
                }
                if (sortingDirection < 0 && arr[i] < arr[i + 1]) {
                    return false;
                }
            }
            return true;
        },
    },
    computed: {
        filteredPositions() {
            let self = this
            let positions = this.positions
            Object.keys(positions).map(function(key, index) {
              let position = positions[key]
              if (position.sortingDirection > 0 && !self.checkSorted(position.players, position.sortingDirection)) {
                  position.players = position.players.sort()
              }
              else if (position.sortingDirection < 0 && !self.checkSorted(position.players, position.sortingDirection)) {
                  position.players = position.players.sort().reverse()
              }
              positions[key] = position
            })
            return this.filterObject(this.positions, position => this.showPosition(position, this.show))
        },
    },
    data() {
        return {
            darkMode: false,
            show: {
                offense: true,
                defense: true,
                qb: true,
                rb: true,
                wr: true,
                te: true,
                k: true,
                dl: true,
                lb: true,
                db: true,
            },
            positions: {
                qb: {
                    acronym: 'QB',
                    color: '#00ff00',
                    side: 'offense',
                    group: 'qb',
                    players: ['Trevor Lawrence', 'Dan Marino'],
                    sortingDirection: 0,
                },
                rb: {
                    acronym: 'RB',
                    color: '#ff0000',
                    side: 'offense',
                    group: 'rb',
                    players: ['Barry Sanders', 'Gale Sayers', 'Tank Bigsby'],
                    sortingDirection: 0,
                },
                lwr: {
                    acronym: 'LWR',
                    color: '#0000ff',
                    side: 'offense',
                    group: 'wr',
                    players: ['Jerry Rice', 'Marvin Harrison'],
                    sortingDirection: 0,
                },
                rwr: {
                    acronym: 'RWR',
                    color: '#0000ff',
                    side: 'offense',
                    group: 'wr',
                    players: ['Raymond Berry', 'Cliff Branch', 'Jimmy Smith'],
                    sortingDirection: 0,
                },
                swr: {
                    acronym: 'SWR',
                    color: '#0000ff',
                    side: 'offense',
                    group: 'wr',
                    players: ['Cris Carter', 'Calvin Johnson'],
                    sortingDirection: 0,
                },
                te: {
                    acronym: 'TE',
                    color: '#00ffff',
                    side: 'offense',
                    group: 'te',
                    players: ['Mike Ditka', 'Shannon Sharpe'],
                    sortingDirection: 0,
                },
                k: {
                    acronym: 'K',
                    color: '#ffbbbb',
                    side: 'defense',
                    group: 'k',
                    players: ['Morten Andersen'],
                    sortingDirection: 0,
                },
                lb: {
                    acronym: 'LB',
                    color: '#666666',
                    side: 'defense',
                    group: 'lb',
                    players: ['Ray Lewis', 'Bobby Bell', 'Dick Butkus', 'Sam Huff', 'Chuck Howley'],
                    sortingDirection: 0,
                },
                cb: {
                    acronym: 'CB',
                    color: '#888888',
                    side: 'defense',
                    group: 'db',
                    players: ['Champ Bailey', 'Ronde Barber', 'Willie Brown', 'Jalen Ramsey'],
                    sortingDirection: 0,
                },
                s: {
                    acronym: 'S',
                    color: '#888888',
                    side: 'defense',
                    group: 'db',
                    players: ['Troy Polamalu', 'Ed Reed'],
                    sortingDirection: 0,
                },
                de: {
                    acronym: 'DE',
                    color: '#444444',
                    side: 'defense',
                    group: 'dl',
                    players: ['Willie Davis', 'Dwight Freeney', 'Doug Atkins', 'Josh Hines-Allen'],
                    sortingDirection: 0,
                },
                dt: {
                    acronym: 'DT',
                    color: '#444444',
                    side: 'defense',
                    group: 'dl',
                    players: ['Art Donovan', 'Curley Culp'],
                    sortingDirection: 0,
                },
            },
        }
    },
}