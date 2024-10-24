import { ref } from 'vue'
export default {
    template: `
    <section class="root_section" :class="darkMode ? 'dark_mode' : ''">
        <div class="heading">
            <h1 class="depth_chart_header">Team Depth Charts</h1>
            <div class="blur"></div>
        </div>
        <div v-if="currentTeam">
            <div class="team_selection_parent">
                <img class="team_logo" :src="'images/' + currentTeam.image + '.gif'" :alt="currentTeam.fullName"/>
                <h2 class="team_name">{{currentTeam.fullName}}</h2>
                <select class="team_select" v-model="currentTeam">
                    <option v-for="team in teamInfo" :value="team">
                        {{team.fullName}}
                    </option>
                </select>
            </div>
            <div class="filters">
                <button class="btn" :class="showOffense ? 'active' : 'inactive'" @click="showOffense = !showOffense">
                    Offense
                </button>
                <button class="btn" :class="showDefense ? 'active' : 'inactive'" @click="showDefense = !showDefense">
                    Defense
                </button>
            </div>
            <div class="positions">
                <div class="position" v-for="position in positions">
                    <span v-if="(position.type === 'offense' && showOffense) || (position.type === 'defense' && showDefense)">
                        <p class="position_acronym" :style="'background-color: ' + position.color">{{position.acronym}}</p>
                        <div class="position_player" v-for="player in position.players">
                            <p class="player_name">{{player}}</p>
                        </div>
                    </span>
                </div>
            </div>
        </div>
        <test></test>
        <button class="btn" @click="toggleDarkMode()">
            Switch to {{darkMode ? 'Light' : 'Dark'}} Mode
        </button>
        <a href="https://github.com/goosehub/depth-chart" target="_blank" aria-label="Github Link">
            <button class="btn">
                View On Github
            </button>
        </a>
    </section>
    `,
    methods: {
        toggleDarkMode() {
            this.darkMode = !this.darkMode
        },
        foobar() {

        },
    },
    mounted() {
        this.currentTeam = this.teamInfo.cardinals
    },
    data() {
        return {
            currentTeam: null,
            darkMode: false,
            showOffense: true,
            showDefense: true,
            positions: {
                qb: {
                    acronym: 'QB',
                    color: '#00ff00',
                    type: 'offense',
                    players: ['Tom Brady', 'Dan Marino'],
                },
                rb: {
                    acronym: 'RB',
                    color: '#ff0000',
                    type: 'offense',
                    players: ['Barry Sanders', 'Gale Sayers', 'Jim Taylor'],
                },
                lwr: {
                    acronym: 'LWR',
                    color: '#0000ff',
                    type: 'offense',
                    players: ['Jerry Rice', 'Marvin Harrison'],
                },
                rwr: {
                    acronym: 'RWR',
                    color: '#0000ff',
                    type: 'offense',
                    players: ['Raymond Berry', 'Cliff Branch'],
                },
                swr: {
                    acronym: 'SWR',
                    color: '#0000ff',
                    type: 'offense',
                    players: ['Cris Carter', 'Calvin Johnson'],
                },
                te: {
                    acronym: 'TE',
                    color: '#00ffff',
                    type: 'offense',
                    players: ['Mike Ditka', 'Shannon Sharpe'],
                },
                k: {
                    acronym: 'K',
                    color: '#ffbbbb',
                    type: 'defense',
                    players: ['Morten Andersen'],
                },
                lb: {
                    acronym: 'LB',
                    color: '#666666',
                    type: 'defense',
                    players: ['Ray Lewis', 'Bobby Bell', 'Dick Butkus', 'Sam Huff', 'Chuck Howley'],
                },
                cb: {
                    acronym: 'CB',
                    color: '#888888',
                    type: 'defense',
                    players: ['Champ Bailey', 'Ronde Barber', 'Willie Brown'],
                },
                s: {
                    acronym: 'S',
                    color: '#888888',
                    type: 'defense',
                    players: ['Troy Polamalu', 'Ed Reed'],
                },
                de: {
                    acronym: 'DE',
                    color: '#444444',
                    type: 'defense',
                    players: ['Willie Davis', 'Dwight Freeney', 'Doug Atkins'],
                },
                dt: {
                    acronym: 'DT',
                    color: '#444444',
                    type: 'defense',
                    players: ['Art Donovan', 'Curley Culp'],
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