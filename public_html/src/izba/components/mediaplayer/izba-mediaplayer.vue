<template>
    <div class="izba-player">
        <div class="izba-player-control">
            <b-dropdown text="Плейлист" v-model="activeitem.title" class="izba-player-control-playlist">
                <b-dropdown-item v-for="(itm,  index) in list" 
                    :key="index"
                    :active="(index===activeitemidx)"
                    v-on:click="select(index);">
                        {{itm.title}}
                </b-dropdown-item>
            </b-dropdown>
            <b-button-group>
                <b-button v-on:click="refresh()" class="refresh">Обновить</b-button>
                <b-button v-on:click="select(false)"class="prev">Назад</b-button>
                <b-button class="play" v-on:click="switchPlayback()" 
                        :variant="playback.variant"
                        v-bind:class="{paused:(paused===true)}">
                    {{playback.text}}
                    <b-badge variant="light">{{activeitem.title}}</b-badge>
                </b-button>
                <b-button v-on:click="select(true)" class="next">Вперед</b-button>
                
            </b-button-group>
            <br/>
            <vue-slider ref="slider" tooltip="false" 
                        v-model="currentvalue" 
                v-on:callback="moveslider()">
            </vue-slider>
        </div>
    </div>
</template>

<script>
    import vueSlider from 'vue-slider-component'
    import listMixin from '../../mixins/list.js'
    export default {
        name:'izba-mediaplayer',
        mixins:[listMixin],
        components: {
            vueSlider
        },

        data:function(){
            return{
                refreshCmd:'playlist.json',
                audio: new Audio(),
                activeitemidx:0,
                showlist:true,
                currentvalue:0,
                paused:true
            };
        },//data
        computed: {
            activeitem: function (){
                if (this.activeitemidx >= this.list.length || this.activeitemidx < 0)
                    return {};
                return this.list[this.activeitemidx];
            },
            playback:function(){
                return {
                    text:((this.paused)?'Пуск':'Пауза'),
                    variant:((this.paused)?'primary':'warning')
                };
            }
        },//computed
        created(){
            this.audio.addEventListener('ended', ()=>this.select(true));
            this.audio.addEventListener('timeupdate', ()=>{
                var time = Math.round(this.audio.currentTime);
                var commonTime = Math.round(this.audio.duration);
                this.currentvalue = Math.round(time/commonTime * 100);
            });
        },
        methods:{
            afterRefresh:function(){
                return this.loadTrack();
            },
            loadTrack:function(){
                this.audio.src = this.activeitem.src;
                return true;
            },
            moveslider:function(){
                this.audio.currentTime=
                    Math.round(this.audio.duration * (this.currentvalue / 100));
            },
            playCurrent:function(){
                this.paused = false;
                this.audio.play();
            },
            /**
             * Выбирает номер трека из списка воспроизведения
             * @param {Int|Boolean} next если boolean, то перемещается по списку. Иначе обращается по номеру
             * @returns {undefined}
             */
            select:function(next){
                if (this.list.length === 0)
                    return;
                if ((typeof next)==="number")
                    this.activeitemidx = next;
                else
                    this.activeitemidx = ((this.activeitemidx === -1)?0:this.activeitemidx + ((next)?1:-1));
            
                if (this.activeitemidx >= this.list.length)
                    this.activeitemidx = 0;
                if (this.activeitemidx < 0)
                    this.activeitemidx = this.list.length - 1;         
                if (this.loadTrack()===true)
                    this.playCurrent();
            },
            switchPlayback:function(){
                this.paused = !this.paused;
                if (this.paused)
                    return this.audio.pause();
                this.playCurrent();
            }
        }
    }
</script>

<style scoped>
    @media (max-width:800px) {
        .izba-player-control-playlist {
            display: none;
        }
    }
</style>