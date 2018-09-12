<template>
    <div  :style="bgStyle" class="izba-room-view" @click="onClick">
        <izba-device v-for="(itm, index) in list" :key="index" v-bind="itm"></izba-device>
    </div>
</template>

<script>
    import listMixin from '../../mixins/list.js'    
    
    export default {
        name:'izba-room-view',
        components: {
        },
        mixins:[listMixin],
        data:function(){
            return{
                refreshCmd:'device.json',
                currentRoom:{id:0, image:'undefined.jpg'}
            };
        },//data
        computed:{
            bgStyle:function(){
                var url = (this.currentRoom.image!==undefined && this.currentRoom.image!=='')?this.currentRoom.image:'undefined.jpg';
                url = 'url("./images/room/'+url+'")';
                console.log(url, this.currentRoom);
                return{
                    'background-image':url,
                    'background-position':'0% 0%',
                    'background-repeat':'no-repeat'
                };
            }
        },
        beforeDestroy:function(){
            this._onSelectRoom && this.$Izba.getBus().$off('selectRoom', this._onSelectRoom);
        },
        mounted:function(){
            this._onSelectRoom = (room)=>{
                this.currentRoom = room.room;
                this.refresh();
            };
            this.$Izba.getBus().$on('selectRoom', this._onSelectRoom);
        },
        methods:{
            onClick:function(){
                console.log ('roomView click');
                this.$Izba.getBus().$emit('clickRoomView');
            }
        }
    };
</script>
<style scoped>    
    .izba-room-view{
        position:relative;
        width:100%;
        height:400px;
        border: 1px solid blue;
    }
</style>