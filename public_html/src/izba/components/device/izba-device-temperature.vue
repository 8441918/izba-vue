<template>
    <div class="izba-device" :style="getStyle">
        <div class="temperature-value">
            {{currentValue}} &#176;C
        </div>
            
    </div>
</template>

<script>
    import deviceMixin from '../../mixins/device.js'
    export default {
        mixins:[deviceMixin],
        computed:{
            getStyle:function(){
                var border = {
                    'background-position': ((this.currentValue>0)?0:-this.w) + 'px ' + this.bgY + 'px'
                };
                return border;
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
        background-color: rgba(117, 190, 218, 0.6);
        border-radius: 16px;
        white-space: nowrap;
        padding-left: 0.5em;
        padding-right:0.5em;
        font-weight: bold;
        box-shadow: rgba(0,0,0,.9) 3px 3px 5px;
        
    }
</style>
    
    
