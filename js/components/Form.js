export default {
    template: `
        <div class="row section">
            <div class="col">
                <h2>Form</h2><hr>
                <form class="row">
                    <div class="col-md-4">
                        <input class="form-control"
                            v-model.trim="nameInput" 
                            v-bind:class="nameValid()" 
                            v-on:keydown.enter="nameEnter()" placeholder="用戶"><span style="color:blue">{{nameValidResult}}</span><br>
                    </div>
                    <div class="col-md-8">
                        <p>用戶<b>{{ nameInput }}</b></p>
                    </div>

                    <div class="col-md-2">
                        <input class="form-control" v-model.number="num1" placeholder="加數" v-on:click="selectAll" maxlength="5">
                    </div>
                    <div class="col-md-1">+</div>
                    <div class="col-md-2">
                        <input class="form-control" v-model.number="num2" placeholder="被加數" v-on:click="selectAll" maxlength="5">
                    </div>
                    <div class="col-md-5">
                        <p>={{ subtotal() }}</p>
                    </div>
                    
                    
                    <div class="col-md-8">
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" value="1" id="radio1" v-model="radioChecked">
                            <label class="form-check-label" for="radio1">radio選項1</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" value="2" id="radio2" v-model="radioChecked">
                            <label class="form-check-label" for="radio2">radio選項2</label>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <p>已選擇radiobox：{{ radioChecked }}</p>
                    </div>
    

                    <div class="col-md-8">
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" value="1" id="check1" v-model="checkboxChecked">
                            <label class="form-check-label" for="check1">checkbox選項1</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" value="2" id="check2" v-model="checkboxChecked">
                            <label class="form-check-label" for="check2">checkbox選項2</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" value="3" id="check3" v-model="checkboxChecked">
                            <label class="form-check-label" for="check3">checkbox選項3</label>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <p>已選擇checkbox{{ checkboxChecked }}</p>
                    </div>

                    <div class="col-md-8">
                        <select class="form-select form-select-sm" v-model="selected">
                            <option v-for="(option, index) in selectOptions">{{index}}. {{option}}</option>
                        </select>
                    </div>
                    <div class="col-md-4">
                        <p>已選擇select：{{ selected }}</p>
                    </div>
                </form>
            </div>
        </div>
            `,
    data() {
        return {
            selectOptions: ['選項 1', '選項 2', '選項 3', '選項 4'],
            nameInput: '',
            nameValidResult: '',
            num1: 0,
            num2: 0,
            radioChecked: 1,
            checkboxChecked: [1, 2], //指定陣列值, true=全選, false=取消
            selected: 2
        }
    },
    methods: {
        subtotal: function() {
            let sub = parseInt(this.num1) + parseInt(this.num2);
        
            return `${this.num1} + ${this.num2} = ${sub}` 
        },
        nameValid: function() {
            if (this.nameInput.length < 5) {
                this.nameValidResult = '請輸入6~10字元';
                return 'error';
            } else if (this.nameInput.length > 10) {
                this.nameValidResult = '請輸入10字元以下';
                return 'warning';
            }

            return 'success';
        },
        nameEnter: function() {
            alert('Enter內容：' + this.nameInput);
        },
        selectAll: function(event) {
            console.log('event', event.target);
            event.target.select();
        }
    },
    filters: {
        
    },
    watch: {
        nameInput(newName, oldName) {
            // 非同步認證等等....
            this.nameValidResult = '欄位檢查中...';
        }
    }
}