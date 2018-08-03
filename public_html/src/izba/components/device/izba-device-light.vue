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
            click:function(){
                if (this.readOnly){
                    return;
                }
                this.currentValue = ((this.currentValue > 0)?0:1);
                this.sentValue();
            }
        },
        computed:{
            getStyle:function(){
                var border = {
                    'background-position': ((this.currentValue>0)?0:-35) + 'px ' + this.bgY+ 'px'
                };
                return border;
            }
        }
    }
</script>
   
