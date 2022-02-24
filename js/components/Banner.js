export default {
    template: `<div class="row section">
                <h2>Tab test</h2><hr>
                <div class="col">
                    
                    <h4>使用v-on:click script</h4>
                    <div class="btn-group btn-group-sm" role="group" aria-label="使用v-on:click script">
                    <template v-for="(banner, idx) in banners">
                        <button type="button" 
                                v-bind:class="['btn', 'btn-outline-primary', {active: (idx === currentBanner)}]"
                                v-on:click.prevent="changeBannerHandleById(idx, $event)">{{ banner.id }}</button>
                    </template>
                    </div>

                    <h4>使用v-on:click dataset控制</h4>
                    <div class="btn-group btn-group-sm" role="group" aria-label="使用v-on:click script">
                    <template v-for="(banner, idx) in banners">
                        <button type="button"
                                v-bind:class="['btn', 'btn-outline-secondary', {active: (idx === currentBanner)}]"
                                v-on:click="changeBannerHandle" 
                                v-bind:data-index="idx">{{ banner.id }}</button>
                    </template>
                    </div>

                    <div style="width:450px;display: block">
                        <template v-for="(banner, idx) of banners">
                            <div v-show="currentBanner == idx">
                                <img class="img-thumbnail rounded" v-bind:src="banner.imageUrl" />
                                <p>{{ banner.title }}</p>
                            </div>
                        </template>
                    </div>
                </div>
            </div>
                `,
    data() {
        return {
            currentBanner: 1,
            banners: [
                {
                    id: 1,
                    title: '第1張圖 ^u^',
                    imageUrl: './images/300x300_01.jpeg',
                    show: true,
                },
                {
                    id: 2,
                    title: '第2張圖 @_@',
                    imageUrl: './images/300x300_02.jpeg',
                    show: false,
                },
                {
                    id: 3,
                    title: '第3張圖 Ａ＿Ａ',
                    imageUrl: './images/300x300_03.jpeg',
                    show: false,
                }
            ]
        }
    },
    methods: {
        // 自行帶入dom event
        changeBannerHandleById: function(idx, event) {
            console.log('$event', event);
            this.currentBanner = idx;
        },
        // 不帶參數時，會自動帶入dom event
        changeBannerHandle: function(event) {
            let newIndex = parseInt(event.target.dataset.index);
            console.log('dataset', newIndex);
            this.currentBanner = newIndex;
        }
    }
}