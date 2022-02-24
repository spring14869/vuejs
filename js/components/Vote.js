export default {
    template: `
    <div class="row section">
        <div class="col">
            <h2>Vote</h2><hr>
            <h3>Vote test <small>左鍵 + 1，右鍵 - 1</small></h3>
            <hr>
            <template v-for="(val, idx) in adultPerson()">
                <div class="card vote-box" style="width: 200px;">
                    <div class="card-header">{{val.name}}</div>
                    <div class="card-body">
                        <h5 class="card-title"><span>{{val.vote}}</span></h5>
                        <p class="card-text">
                            <span>Age: {{val.age}} </span>
                            <span v-if="val.gender == 'M'">男</span>
                            <span v-else-if="val.gender == 'F'">女</span>
                        </p>
                        <button class="btn btn-sm btn-primary"
                            v-on:click="counter(val.id)" 
                            v-on:click.right.prevent="deCounter(val.id)">Vote </button>
                    </div>
                </div>
            </template>
            <p style="font-size:20px">總票數：{{total}}</p>
        </div>
    </div>
                `,
    data() {
        return {
            persons: [
                {
                    id: 1,
                    name: 'John',
                    gender: 'M',
                    age: 24,
                    height: 176,
                    vote: 0
                },
                {
                    id: 2,
                    name: 'Annie',
                    gender: 'F',
                    age: 30,
                    vote: 0
                },
                {
                    id: 3,
                    name: 'Ella',
                    gender: 'F',
                    age: 27,
                    vote: 0
                },
                {
                    id: 4,
                    name: 'Kenny',
                    gender: 'M',
                    age: 17,
                    vote: 0
                },
                {
                    id: 5,
                    name: 'Kiki',
                    gender: 'F',
                    age: 18,
                    vote: 0
                },
            ],
            total: 0
        }
    },
    methods: {
        counter: function(personId) {
            this.persons.forEach((person) => {
                if (person.id == personId) {
                    person.vote += 1; 
                    this.total++;
                    return true;
                }
            });
        },
        // 滑鼠右鍵觸發
        deCounter: function(personId) {

            this.persons.forEach((person) => {
                if (person.id == personId) {
                    if (person.vote <= 0) {
                        return false;
                    }
                    person.vote -= 1; 
                    this.total--;
                    return true;
                }
            });
        },
        adultPerson: function() {
            return this.persons.filter(person => person.age >= 18);
        }
    }
}