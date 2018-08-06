<template>
    <!--<div class="izba-device" :style="getStyle">
        <div class="temperature-value">
            {{currentValue}} &#176;C
        </div>
            
    </div-->
    <izba-popup-panel title="Термостат"  :iconRow="icnRow" :shiftIconX="icnX">
         <div slot="data" class="temperature-value">
            {{currentValue}} &#176;C
        </div>
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
            icnRow:function(){
                return this.iconRow;
            },
            icnX:function(){
                return ((this.currentValue>0)?0:-this.w);
            }
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
    
    
