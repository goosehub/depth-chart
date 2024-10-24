import { ref } from 'vue'
export default {
    template: `
    <section class="root_section" :class="darkMode ? 'dark_mode' : ''">
        <div class="navigation">
            <button class="btn" @click="toggleDarkMode()">
                Switch to {{darkMode ? 'Light' : 'Dark'}} Mode
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
        <div v-if="currentTeam">
            <div class="team_info">
                <img class="team_logo" :src="'images/' + currentTeam.image + '.gif'" :alt="currentTeam.fullName"/>
                <h2 class="team_name">{{currentTeam.fullName}} Depth Chart</h2>
                <div class="team_selection_parent">
                    <label class="team_select_label">Team:</label>
                    <select class="team_select" v-model="currentTeam" aria-label="Select Team">
                        <option v-for="team in teamInfo" :value="team">
                            {{team.fullName}}
                        </option>
                    </select>
                </div>
            </div>
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
        </div>
        <test></test>
    </section>
    `,
    methods: {
        toggleDarkMode() {
            this.darkMode = !this.darkMode
        },
        toggleShow(property) {
            this.show[property] = !this.show[property]
        },
        sortPosition(position, direction) {
            position.sortingDirection = direction
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
    mounted() {
        this.currentTeam = this.teamInfo.cardinals
    },
    data() {
        return {
            currentTeam: null,
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
            teamInfo: {
                cardinals: {
                    fullName: 'Arizona Cardinals',
                    cityName: 'Arizona',
                    teamName: 'Cardinals',
                    image: 'cardinals',
                },
                falcons: {
                    fullName: 'Atlanta Falcons',
                    cityName: 'Atlanta',
                    teamName: 'Falcons',
                    image: 'falcons',
                },
                ravens: {
                    fullName: 'Baltimore Ravens',
                    cityName: 'Baltimore',
                    teamName: 'Ravens',
                    image: 'ravens',
                },
                bills: {
                    fullName: 'Buffalo Bills',
                    cityName: 'Buffalo',
                    teamName: 'Bills',
                    image: 'bills',
                },
                panthers: {
                    fullName: 'Carolina Panthers',
                    cityName: 'Carolina',
                    teamName: 'Panthers',
                    image: 'panthers',
                },
                bears: {
                    fullName: 'Chicago Bears',
                    cityName: 'Chicago',
                    teamName: 'Bears',
                    image: 'bears',
                },
                bengals: {
                    fullName: 'Cincinnati Bengals',
                    cityName: 'Cincinnati',
                    teamName: 'Bengals',
                    image: 'bengals',
                },
                browns: {
                    fullName: 'Cleveland Browns',
                    cityName: 'Cleveland',
                    teamName: 'Browns',
                    image: 'browns',
                },
                cowboys: {
                    fullName: 'Dallas Cowboys',
                    cityName: 'Dallas',
                    teamName: 'Cowboys',
                    image: 'cowboys',
                },
                broncos: {
                    fullName: 'Denver Broncos',
                    cityName: 'Denver',
                    teamName: 'Broncos',
                    image: 'broncos',
                },
                lions: {
                    fullName: 'Detroit Lions',
                    cityName: 'Detroit',
                    teamName: 'Lions',
                    image: 'lions',
                },
                packers: {
                    fullName: 'Green Bay Packers',
                    cityName: 'Green Bay',
                    teamName: 'Packers',
                    image: 'packers',
                },
                texans: {
                    fullName: 'Houston Texans',
                    cityName: 'Houston',
                    teamName: 'Texans',
                    image: 'texans',
                },
                colts: {
                    fullName: 'Indianapolis Colts',
                    cityName: 'Indianapolis',
                    teamName: 'Colts',
                    image: 'colts',
                },
                jaguars: {
                    fullName: 'Jacksonville Jaguars',
                    cityName: 'Jacksonville',
                    teamName: 'Jaguars',
                    image: 'jaguars',
                },
                chiefs: {
                    fullName: 'Kansas City Chiefs',
                    cityName: 'Kansas City',
                    teamName: 'Chiefs',
                    image: 'chiefs',
                },
                raiders: {
                    fullName: 'Las Vegas Raiders',
                    cityName: 'Las Vegas',
                    teamName: 'Raiders',
                    image: 'raiders',
                },
                chargers: {
                    fullName: 'Los Angeles Chargers',
                    cityName: 'Los Angeles',
                    teamName: 'Chargers',
                    image: 'chargers',
                },
                rams: {
                    fullName: 'Los Angeles Rams',
                    cityName: 'Los Angeles',
                    teamName: 'Rams',
                    image: 'rams',
                },
                dolphins: {
                    fullName: 'Miami Dolphins',
                    cityName: 'Miami',
                    teamName: 'Dolphins',
                    image: 'dolphins',
                },
                vikings: {
                    fullName: 'Minnesota Vikings',
                    cityName: 'Minnesota',
                    teamName: 'Vikings',
                    image: 'vikings',
                },
                patriots: {
                    fullName: 'New England Patriots',
                    cityName: 'New England',
                    teamName: 'Patriots',
                    image: 'patriots',
                },
                saints: {
                    fullName: 'New Orleans Saints',
                    cityName: 'New Orleans',
                    teamName: 'Saints',
                    image: 'saints',
                },
                giants: {
                    fullName: 'New York Giants',
                    cityName: 'New York',
                    teamName: 'Giants',
                    image: 'giants',
                },
                jets: {
                    fullName: 'New York Jets',
                    cityName: 'New York',
                    teamName: 'Jets',
                    image: 'jets',
                },
                eagles: {
                    fullName: 'Philadelphia Eagles',
                    cityName: 'Philadelphia',
                    teamName: 'Eagles',
                    image: 'eagles',
                },
                steelers: {
                    fullName: 'Pittsburgh Steelers',
                    cityName: 'Pittsburgh',
                    teamName: 'Steelers',
                    image: 'steelers',
                },
                fortyniners: {
                    fullName: 'San Francisco 49ers',
                    cityName: 'San Francisco',
                    teamName: '49ers',
                    image: 'fortyniners',
                },
                seahawks: {
                    fullName: 'Seattle Seahawks',
                    cityName: 'Seattle',
                    teamName: 'Seahawks',
                    image: 'seahawks',
                },
                buccaneers: {
                    fullName: 'Tampa Bay Buccaneers',
                    cityName: 'Tampa Bay',
                    teamName: 'Buccaneers',
                    image: 'buccaneers',
                },
                titans: {
                    fullName: 'Tennessee Titans',
                    cityName: 'Tennessee',
                    teamName: 'Titans',
                    image: 'titans',
                },
                commanders: {
                    fullName: 'Washington Commanders',
                    cityName: 'Washington',
                    teamName: 'Commanders',
                    image: 'commanders',
                },
            }
        }
    },
}