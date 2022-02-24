export default {
    props: [
        'name'
    ],
    template: `<ul>
                    <template v-for="site of siteArray">
                        <li><a v-bind:href="site.href" 
                                v-bind:data-name="site.name" 
                                v-bind:class="site.classObj"
                                v-bind:style="site.styleObj"
                                target="_blank">{{site.name}}</a>
                        </li>
                    </template>
                </ul>
                <p style="text-align:center">Footer {{name}} 版權所有©{{year}}</p>`,
    data() {
        return {
            year: new Date().getFullYear(),
            siteArray: [
                {
                    name: 'Google Search 外連',
                    href: 'https://www.google.com/',
                    logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
                    classObj: {
                        class1: true,
                        class2: true,
                        class3: true
                    },
                    styleObj: {
                        color: 'red',
                        'text-decoration': 'none'
                    }
                },
                {
                    name: 'VueJs 外連',
                    href: 'https://vuejs.org/',
                    logo: '',
                    styleObj: {
                        color: 'green',
                        'text-decoration': 'none'
                    }
                }
            ]
        }
    }
}