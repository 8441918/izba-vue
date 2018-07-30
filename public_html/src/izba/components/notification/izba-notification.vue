<template>
    <div class="izba-notification">
        <izba-notification-item 
            v-for="(itm,  index) in list"
            :devId="index"
            :key="index"
        >
        </izba-notification-item>
    </div>
</template>


<script>
    import notifItem from './izba-notification-item.vue'
    import listMixin from '../../mixins/list.js'
    export default {
        name:'izba-notification',
        components: {
            'izba-notification-item':notifItem
        },
        mixins:[listMixin],
        data:function(){
            return{
                refreshCmd:'notifications.json'
            };
        },//data
        methods:{
        }
    };
</script>
    
<style scoped>
    .izba-notification{
        position:absolute;
        padding: 10px;
        top:0px;
        right:0px;
        max-height: 100%;
        overflow-y: scroll;
        overflow-x: hidden;
    }    
    
</style>
