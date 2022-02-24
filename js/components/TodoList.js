export default {
    template: `
    <div class="row section">
        <h3>ToDoList</h3><hr>
        <div class="col">
            <div class="input-group mb-3">
                <input type="text" 
                        class="form-control"
                        v-model="todoInput" 
                        v-on:compositionstart="todoInputComposition = true"
                        v-on:compositionend="todoInputComposition = false"
                        v-on:keydown.enter="addTodoHandle" 
                        placeholder="enter to add"/>
                <button class="btn btn-outline-secondary" type="button" v-on:click="addTodoHandle">新增</button>
            </div>
            
            <ul class="list-group">
            <template v-for="(item, idx) in todo">
                <li class="list-group-item">
                    <div class="form-check">
                        <label><input type="checkbox" v-model="item.checked" >&emsp;{{item.job}}</label>
                        &emsp;<button class="btn btn-sm btn-outline-danger" v-on:click="removeTodo(idx)">remove</button>
                    </div>
                </li>
            </template>
            </ul>
        </div>
    </div>`,
    data() {
        return {
            todoInput: '',
            todoInputComposition: false, //避免中文輸入法enter判斷
            todo: [
                {
                    job: '9:30 打電話給Mark',
                    checked: true
                },
                {
                    job: '10:45 與Jack開會',
                    checked: false
                },
                {
                    job: '打掃房間',
                    checked: false
                }
            ],
        }
    },
    methods: {
        addTodoHandle: function () {
            if (this.todoInputComposition) {
                return false;
            }
            if (this.todoInput.length <= 0) {
                alert('請輸入');
                return false;
            }

            console.log('enter', this.todoInput);
            this.todo.push({
                job: this.todoInput,
                checked: true
            });
            this.todoInput = '';
        },
        removeTodo: function (idx) {
            this.todo.splice(idx, 1);
        }
    }
}