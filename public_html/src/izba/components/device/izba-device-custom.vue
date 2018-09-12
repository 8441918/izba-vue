<template>
    <div class="izba-device-container">
        <izba-device-job v-if="params.devType==='job'" v-bind="params"></izba-device-job>
        <izba-device-light v-else-if="params.devType==='light'" v-bind="params"></izba-device-light>
        <izba-device-player v-else-if="params.devType==='player'" v-bind="params"></izba-device-player>
        <izba-device-rgb v-else-if="params.devType==='rgb'" v-bind="params"></izba-device-rgb>
        <izba-device-temperature v-else-if="params.devType==='term'" v-bind="params"></izba-device-temperature>
        <izba-device-dimer v-else-if="params.devType==='dimer'" v-bind="params"></izba-device-dimer>
        <izba-device-empty v-else v-bind="params"></izba-device-empty>
        
    </div>
</template>

<script>
    import cmpDimer from './izba-device-dimer.vue'
    import cmpEmpty from './izba-device-empty.vue'
    import cmpJob from './izba-device-job.vue'
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
            'izba-device-dimer':cmpDimer,
            'izba-device-empty':cmpEmpty,
            'izba-device-job':cmpJob,
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
