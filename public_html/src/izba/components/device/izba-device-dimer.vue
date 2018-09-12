<template>
    <izba-popup-panel :title="name" :iconRow="iconRow" :readOnly="readOnly">
        <div slot="data" class="rgb-display" :style="getColor">
            <p>{{currentValue}}</p>
        </div>
        <div slot="popup">
            bla-bla-bla
            
        </div>
    </izba-popup-panel>
</template>

<script>
    import cmpPopUp from './izba-popup-panel.vue'
    import clr from './izba-color-tool.js'
    import deviceMixin from '../../mixins/device.js'
    
    export default {
        mixins:[deviceMixin],
        components: {
            'izba-popup-panel':cmpPopUp
        },
        computed:{
            getColor:function(){
                var v = clr.item (this.currentValue, this.currentValue,this.currentValue);
                return clr.style(v);
            }
           
        },
        methods:{
        }
    }
    
</script>

<style scoped lang="scss">
    @import './izba-color-style.scss';
    p{
        padding-top: 25%;
    }
</style>