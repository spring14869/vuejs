export default {
    template: `<div class="row section">
                <h2>EMMIT test</h2><hr>
                <div class="col">
                    <p>變更外層元件：{{parentName}}</p>
                    <button class="btn btn-outline-info" v-on:click="changeHeaderHandler">emmit click</button>

                    <p>變更外層背景：{{parentBackground}}</p>
                    <button class="btn btn-outline-info" v-on:click="changeBackgroundHandler">background click</button>
                </div>
            </div>`,
    data() {
        return {
            name: this.parentName,
            background: this.parentBackground,
            backgrounds: [
                '#ffe6e6',
                '#e6ccff',
                '#ffe6b3',
                '#ccffe6',
                '#cce6ff'
            ]
        }
    },
    props: [
        'parentName',
        'parentBackground'
    ],
    methods: {
        changeHeaderHandler: function() { 
            this.name = '改變後的sitename';
            console.log('changeHeaderHandle.click', this.name);

            //觸發外層事件
            this.$emit('update', this.name); 
        },
        changeBackgroundHandler: function() {
            let max = this.backgrounds.length;
            let random = Math.floor(Math.random() * max);
            this.background = this.backgrounds[random];

             //觸發外層事件
             this.$emit('change', this.background);
        }
    }
}