import HeaderComponent from './components/Header.js';
import FooterComponent from './components/Footer.js';
import BannerComponent from './components/Banner.js';
import FormComponent from './components/Form.js';
import VoteComponent from './components/Vote.js';
import TodoListComponent from './components/TodoList.js';
import EmmitComponent from './components/Emmit.js';

(function() {
    const App = Vue.createApp({
        template: `
                    <div id="header" class="header">
                        <headerComponent v-bind:name="name" v-bind:background="headerBackground"/>
                    </div>
    
                    <emmitComponent 
                            v-bind:parent-name="name" 
                            v-bind:parent-background="headerBackground" 
                            @update="nameUpdate" 
                            @change="backgroundUpdate"/>

                    <bannerComponent />
    
                    <div id="vote" class="block">
                        <voteComponent />
                    </div>
    
                    <div id="form" class="block">
                        <formComponent />
                    </div>
    
                    <div id="todolist" class="block">
                        <todoListComponent />
                    </div>
    
                    <div id="footer" class="footer">
                        <footerComponent v-bind:name="name" />
                    </div>
                `,
        data() {
            return {
                name: '測試網站',
                headerBackground: '#eee'
            }
        },
        methods: {
            upperCase(str) {
                return str.toUpperCase();
            },
            // 接收emit更新事件變更外層元件
            nameUpdate(nameStr) {
                console.log('nameUpdate.nameStr', nameStr);
                this.name = nameStr;
            },
            backgroundUpdate(backgroundStr) {
                console.log('nameUpdate.backgroundStr', backgroundStr);
                this.headerBackground = backgroundStr;
            }
        },
        created() {
            console.log('created', 'Vue初始');
        },
        mounted() {
            console.log('mounted', 'Vue掛載完成');
        },
        updated() {
            console.log('updated', 'Vue更新');
        }
    });
    
    App.component('headerComponent', HeaderComponent)
        .component('footerComponent', FooterComponent)
        .component('bannerComponent', BannerComponent)
        .component('formComponent', FormComponent)
        .component('voteComponent', VoteComponent)
        .component('todoListComponent', TodoListComponent)
        .component('emmitComponent', EmmitComponent);
    
    App.mount('#app');
}());