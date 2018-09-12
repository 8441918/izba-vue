<template>
     <izba-popup-panel title="RGB-лента" :iconRow="iconRow" :readOnly="readOnly">
        <div slot="data" class="rgb-display" :style="getColor">
        </div>
        <div slot="popup">
            <ul>
                <li v-for="(itm,  index) in list"
                    class="rgb-item"
                    :key="index"
                    :style="getColorItem(itm)"
                    @click="changeValue(itm)"
                >
                {{itm.name}}
                </li>
            </ul>
            
        </div>
    </izba-popup-panel>
</template>

<script>
    import clr from './izba-color-tool.js'
    import deviceMixin from '../../mixins/device.js'
    import listMixin from '../../mixins/list.js'
    import cmpPopUp from './izba-popup-panel.vue'
    export default {
        mixins:[deviceMixin, listMixin],
        components: {
            'izba-popup-panel':cmpPopUp
        },
        computed:{
            activeItem:function(){
                
            },
            getColor:function(){
                return clr.style(this.currentValue);
            }
           
        },
        methods:{
            afterRefresh:function(){
                this.list.push({
                    "name":"ON",
                    "r":255,
                    "g":255,
                    "b":255
                });
                this.list.push({
                    "name":"Off",
                    "r":0,
                    "g":0,
                    "b":0
                });
            },
            changeValue:function(val){
                this.currentValue = val;
                this.sentValue();
            },
            mouseDown:function(){
                console.log('mouse down');
            },
            getColorItem:function(vv){
                var val = (vv===undefined)?this.currentValue:vv;
                return clr.style(val);
            }
        },
        data:function(){
            return{
                refreshCmd:'rgbpreset.json'
            };
        }
    }
</script>
<style scoped lang="scss">
    @import './izba-color-style.scss';
</style>
   

