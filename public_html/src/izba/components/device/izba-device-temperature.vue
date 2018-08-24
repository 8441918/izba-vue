<template>
    <izba-popup-panel title="Термостат"  :iconRow="iconRow" :shiftIconX="icnX" :readOnly="readOnly">
        <div slot="data" class="temperature-value">
            {{currentValue}} &#176;C
        </div>
        <h1 slot="popup">
            <b-button @click="changeThresh(false)">-</b-button>
            <b-badge>{{threshVal}}</b-badge>
            <b-button @click="changeThresh(true)">+</b-button>
        </h1>
    </izba-popup-panel>
</template>

<script>
    import deviceMixin from '../../mixins/device.js'
    import cmpPopUp from './izba-popup-panel.vue'
    export default {
        mixins:[deviceMixin],
        components: {
            'izba-popup-panel':cmpPopUp
        },
        computed:{
            icnX:function(){
                return ((this.currentValue>0)?0:-this.w);
            },
            threshVal:function(){
                if (this.readOnly)
                    return 0;
                return this.thresh + 23;
            }
        },
        methods:{
            changeThresh:function(up){
                if (up){
                    if (this.thresh < 10)
                        this.thresh++;
                }
                else{
                    console.log ('minus');
                    if (this.thresh > -10)
                        this.thresh--;
                }
                return this.thresh;;
            }
        },
        data:function(){
            return{
                thresh:0
            };
        }
    }
</script>
    
<style scoped>
    .temperature-value{
        position:absolute;
        right: 0px;
        top:0px;
        min-width:50%;
        height:50%;
        text-align: center;
        background-color: rgba(117, 190, 218, 0.8);
        border-radius: 16px;
        white-space: nowrap;
        padding-left: 0.5em;
        padding-right:0.5em;
        font-weight: bold;
        box-shadow: rgba(0,0,0,.9) 3px 3px 5px;
        
    }
</style>
    
    
