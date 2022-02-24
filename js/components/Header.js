export default {
    props: [
        'name',
        'background'
    ],
    data() {
        return {
            author: 'Marley Chang',
            description: '說明文字1234',
            logoSrc: './images/logo.png'
        }
    },
    template: `<div class="row">
                    <div class="col">
                        <nav class="nav" v-bind:style="displayBackground">
                            <img v-bind:src="logoSrc" class="logo" />    
                            <a class="nav-link" disabled>{{ name }}</a>
                            <a class="nav-link">{{ helloUser }}</a>
                        </nav>
                        <p>{{ descriptionUpper }}</p>
                    </div>
                </div>`,
    computed: {
        descriptionUpper: function() {
            return this.description.toUpperCase();
        },
        displayBackground: function() {
            return 'background-color:' + this.background;
        },
        helloUser: {
            get() {
                return 'Hello~' + this.author
            },
            set(newValue) {
                this.author = newValue + ' 改了唷'
            }
        }
    }
}