<template>
    <div>
        <izba-device-light v-if="params.devType==='light'" v-bind="params"></izba-device-light>
        <izba-device-player v-if="params.devType==='player'" v-bind="params"></izba-device-player>
    </div>
</template>

<script>
    import cmpLight from './izba-device-light.vue'
    import cmpPlayer from './izba-device-player.vue'
    export default {
        props:{
            params:{
                type:Object,
                required:true
            }
        },
        components: {
            'izba-device-light':cmpLight,
            'izba-device-player':cmpPlayer
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
        width: 35px;
        height:50px;
        z-index: 1000;
    }
    .izba-device-container{
        position:absolute;
        top:0px;
        left:0px;
        width:100%;
        height:100%;
    }
</style>
