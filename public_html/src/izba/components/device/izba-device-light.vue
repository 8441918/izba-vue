<template>
    <div class="izba-device" @click="click" :style="getStyle"></div>
</template>

<script>
    import deviceMixin from '../../mixins/device.js'
    export default {
        mixins:[deviceMixin], 
        components: {
        },
        methods:{
            clickAction:function(){
                this.currentValue = ((this.currentValue > 0)?0:1);
                return true;
            }
        },
        computed:{
            getStyle:function(){
                var border = {
                    'background-position': ((this.currentValue>0)?0:-35) + 'px ' + this.iconRow + 'px'
                };
                return border;
            }
        }
    }
</script>
   
