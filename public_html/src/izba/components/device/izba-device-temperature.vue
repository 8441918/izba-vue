<template>
    <izba-popup-panel title="Термостат"  :iconRow="iconRow" :shiftIconX="icnX" :readOnly="readOnly">
        <div slot="data" class="temperature-value">
            {{currentValue}} &#176;C
        </div>
        <div slot="popup">
            <izba-range 
                speedButton="2"
                initValue="23" minValue="13" maxValue="33" 
                delta="-10"
                @onChange="onChange">
            </izba-range>
        </div>
    </izba-popup-panel>
</template>

<script>
    import deviceMixin from '../../mixins/device.js'
    import cmpPopUp from './izba-popup-panel.vue'
    
    import cmpRange from './izba-range.vue'
    
    export default {
        mixins:[deviceMixin],
        components: {
            'izba-popup-panel':cmpPopUp,
            'izba-range':cmpRange
        },
        computed:{
            icnX:function(){
                return ((this.currentValue>0)?0:-this.w);
            }
        },
        methods:{
            onChange:function(v,d){
                console.log (v,d);
            }
        },
        data:function(){
            return{
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
    
    
