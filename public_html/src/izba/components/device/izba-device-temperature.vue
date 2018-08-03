<template>
    <div class="izba-device" :style="getStyle">temp</div>
</template>

<script>
    import deviceMixin from '../../mixins/device.js'
    export default {
        mixins:[deviceMixin],
        computed:{
            getStyle:function(){
                var border = {
                    'background-position': '0px ' + this.bgY + 'px'
                };
                return border;
            }
        }
    }
</script>
    
        
