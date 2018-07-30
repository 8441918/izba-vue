<template>
    <izba-drag-dev 
        :x="x" :y="y" :w="35" :h="50" :name="name">
        <izba-device-custom :params="propsObject"></izba-device-custom>
    </izba-drag-dev>
</template>

<script>
    import deviceMixin from '../../mixins/device.js'
    import deviceRectMixin from '../../mixins/device-rect.js'    
    import dragMixin from '../../mixins/dragmode.js'    
    import cmpDragDev from './izba-drag-dev.vue'
    import cmpDevCustom from './izba-device-custom.vue'
    export default {
        mixins:[deviceMixin, deviceRectMixin, dragMixin], 
        components: {
            'izba-drag-dev':cmpDragDev,
            'izba-device-custom':cmpDevCustom
        },
        methods:{
        },
        computed:{
            propsObject:function(){
                var o={
                    x: this.x,
                    y: this.y,
                    w: this.w,
                    h: this.h,
                    devId:this.devId,
                    currentValue:this.currentValue,
                    name:this.name,
                    readOnly:((this.dragMode)?true:this.readOnly),
                    devType:this.devType
                };
                console.log (o);
                return o;
            }
        }
    }
</script>

