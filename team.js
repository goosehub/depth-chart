import { ref } from 'vue'
export default {
    template: `
        <div class="team_info" v-if="currentTeam">
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
    `,
    mounted() {
        this.currentTeam = this.teamInfo.cardinals
    },
    data() {
        return {
            currentTeam: null,
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
            },
        }
    },
}