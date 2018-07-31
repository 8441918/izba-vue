<template>
    <izba-popup-panel title="MediaPlayer" @onShow="showPopup">
        <b-dropdown text="Плейлист" v-model="activeitem.title" class="izba-player-control-playlist">
            <b-dropdown-item v-for="(itm,  index) in list" 
                    :key="index"
                    :active="(index===activeitemidx)"
                    v-on:click="select(index);">
                        {{itm.title}}
            </b-dropdown-item>
        </b-dropdown>
        <b-badge variant="light">{{activeitem.title}}</b-badge>    
        <audio ref="audioplayer" src="mp3/home.mp3" controls autoplay>
            
        </audio>
    </izba-popup-panel>
</template>

<script>
    import deviceMixin from '../../mixins/device.js'
    import cmpPopUp from './izba-popup-panel.vue'
    import listMixin from '../../mixins/list.js'
    export default {
        mixins:[deviceMixin,listMixin], 
        components: {
            'izba-popup-panel':cmpPopUp
        },
        mounted:function(){
            this.audio = this.$refs.audioplayer;
            this.audio.addEventListener('ended', ()=>this.select(true));
            this.audio.addEventListener('pause', ()=>console.log('pause'));
        },
        methods:{
            select:function(next){
                if (this.list.length === 0)
                    return;
                if ((typeof next)==="number")
                    this.activeitemidx = next;
                else
                    this.activeitemidx = this.activeitemidx + ((next)?1:-1);
                if (this.activeitemidx >= this.list.length)
                    this.activeitemidx = 0;
                this.audio.src = this.activeitem.src;
                this.audio.play();
            },
            showPopup:function(show){
                console.log ('showPopup', show);
            }
        },
        computed:{
            activeitem: function (){
                if (this.activeitemidx >= this.list.length || this.activeitemidx < 0)
                    return {};
                return this.list[this.activeitemidx];
            }
        },
        data:function(){
            return{
                audio:undefined,
                refreshCmd:'playlist.json',
                activeitemidx:0
            };
        }
    }
</script>
   

