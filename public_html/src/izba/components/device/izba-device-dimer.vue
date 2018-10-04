<template>
    <izba-popup-panel :title="name" :iconRow="iconRow" :readOnly="readOnly">
        <div slot="data" class="rgb-display" :style="getColor">
            <p>{{currentValue}}</p>
        </div>
        <div slot="popup">
            <izba-range 
                speedButton="2"
                :initValue="currentValue" minValue="0" maxValue="255" 
                delta="0"
                @onChange="onChange">
            </izba-range>
            
        </div>
    </izba-popup-panel>
</template>

<script>
    import cmpPopUp from './izba-popup-panel.vue'
    import cmpRange from './izba-range.vue'
    import clr from './izba-color-tool.js'
    import deviceMixin from '../../mixins/device.js'
    
    export default {
        mixins:[deviceMixin],
        components: {
            'izba-popup-panel':cmpPopUp,
            'izba-range':cmpRange
        },
        computed:{
            getColor:function(){
                var v = clr.item (this.currentValue, this.currentValue,this.currentValue);
                return clr.style(v);
            }
           
        },
        methods:{
            onChange:function(v){
                this.currentValue=v;
            }
        }
    }
    
</script>

<style scoped lang="scss">
    @import './izba-color-style.scss';
    p{
        padding-top: 25%;
    }
</style>