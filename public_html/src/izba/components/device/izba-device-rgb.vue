<template>
     <izba-popup-panel title="RGB-лента" :iconRow="iconRow" :readOnly="readOnly">
        <div slot="data" class="rgb-display" :style="getColor">
        </div>
        <div slot="popup">
            <ul>
                <li v-for="(itm,  index) in list"
                    class="rgbItem"
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
    var v =(x)=>(x===undefined)?0:x;
    var style=(c)=>{
        return{
            'background-color':'RGB(' + v(c.r) + ','+ v(c.g)+','+ v(c.b)+ ')',
            'color':'RGB(' + (255-v(c.r)) + ','+ (255-v(c.g))+','+ (255-v(c.b))+ ')'
        };
    };
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
                return style(this.currentValue);
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
                return style(val);
            }
        },
        data:function(){
            return{
                refreshCmd:'rgbpreset.json',
                itemIndex:0,
                cValue:{
                    r:v(this.currentValue.r),
                    g:v(this.currentValue.g),
                    b:v(this.currentValue.b)        
                }
            };
        }
    }
</script>

<style scoped>
    .rgb-display{
        position:absolute;
        right: 0px;
        top:0px;
        width:100%;
        height:100%;
        border-radius: 100px;
        background-color: black;
        border: 1px solid black;
        box-shadow: rgba(0,0,0,.9) 3px 3px 5px;
    }
    .rgbItem{
        border: 1px solid black;
        border-radius: 100px;
        display: inline-block;
        margin-right: 5px;
        padding: 3px; 
        overflow: hidden; 
        text-overflow: ellipsis; 
        text-align: center;
        vertical-align: middle;
        width: 32px;
        height: 32px;
    }
</style>
    

