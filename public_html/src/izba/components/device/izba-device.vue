<template>
    <izba-drag-dev 
        :x="x" :y="y" :w="width" :h="height" :name="name" :draggable="draggable">
        <izba-device-custom :params="propsObject"></izba-device-custom>
    </izba-drag-dev>
</template>

<script>
    
    import deviceMixin from '../../mixins/device.js'
    import dragMixin from '../../mixins/dragmode.js'    
    import cmpDragDev from './izba-drag-dev.vue'
    import cmpDevCustom from './izba-device-custom.vue'
    
    const devInfo = function(type){
        var d = deviceMixin.devTypes[type];
        if (d===undefined)
            d = {
                ratioX:1,
                iconRow:0
            };
        console.log (type, d);
        return d;
    };
    export default {
        mixins:[deviceMixin, dragMixin], 
        components: {
            'izba-drag-dev':cmpDragDev,
            'izba-device-custom':cmpDevCustom
        },
        data:function(){
            var di = devInfo(this.devType);
            return{
                width:35*di.ratioX,
                height:50,
                icnRow:di.iconRow
            };
        },
        computed:{
            propsObject:function(){
                console.log (this.name, 'draggable:',this.drag);
                var o={
                    x: this.x,
                    y: this.y,
                    w: this.width,
                    h: this.height,
                    devId:this.devId,
                    draggable:this.draggable,
                    currentValue:this.currentValue,
                    name:this.name,
                    readOnly:((this.dragMode)?true:this.readOnly),
                    devType:this.devType,
                    iconRow:this.icnRow
                };
                return o;
            }
        }
    }
</script>

