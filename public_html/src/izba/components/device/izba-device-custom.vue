<template>
    <div class="izba-device-container">
        <izba-device-light v-if="params.devType==='light'" v-bind="params"></izba-device-light>
        <izba-device-player v-if="params.devType==='player'" v-bind="params"></izba-device-player>
        <izba-device-rgb v-if="params.devType==='rgb'" v-bind="params"></izba-device-rgb>
        <izba-device-temperature v-if="params.devType==='term'" v-bind="params"></izba-device-temperature>
    </div>
</template>

<script>
    import cmpLight from './izba-device-light.vue'
    import cmpPlayer from './izba-device-player.vue'
    import cmpRgb from './izba-device-rgb.vue'
    import cmpTemp from './izba-device-temperature.vue'
    
    export default {
        props:{
            params:{
                type:Object,
                required:true
            }
        },
        components: {
            'izba-device-light':cmpLight,
            'izba-device-player':cmpPlayer,
            'izba-device-rgb':cmpRgb,
            'izba-device-temperature':cmpTemp
        },
        computed:{
            
        },
        data:function(){
            return{
            };
        }
    }
</script>
   
<style scoped>
    .izba-device{
        position:absolute;
        background-image: url('../../../assets/device.png');
        background-repeat: no-repeat;
        width:100%;
        height:100%;
        z-index: 1000;
        cursor:pointer;
    }
    .izba-device-container{
        width:100%;
        height:100%;    
    }
</style>
