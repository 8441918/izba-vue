<template>
        <b-alert
            class="izba-notification-item"
            fade
            dismissible
            :show="visible"
            @dismissed="dismissed()">
            {{name}}
        </b-alert>
</template>


<script>
    import deviceMixin from '../../mixins/device.js'
    export default {
        name:'izba-notification-item',
        mixins:[deviceMixin],
        data(){
            return{
                visible:true
            };
        },
        methods:{
            alert:function(i){
                this.visible = !this.visible;
            },
            dismissed:function(){
                this.sentValue(false);
            }
        }
        
    };
</script>
    
<style scoped>
    .izba-notification-item{
        box-shadow: rgba(0,0,0,.9) 3px 3px 5px;
        opacity: 0.7;
    } 
</style>