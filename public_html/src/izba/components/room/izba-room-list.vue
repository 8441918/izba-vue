
<template>
    <div role="tablist">
        <b-card no-body class="mb-1"
            v-for="(itm,  index) in list"
            :key="index">
            <b-card-header header-tag="header" class="p-1" role="tab">
                <b-btn block href="#" v-b-toggle = "'floor-'+itm.id" variant="info">
                    {{itm.name}}
                </b-btn>
            </b-card-header>
            <b-collapse v-bind:id="'floor-'+itm.id" accordion="my-accordion" role="tabpanel">
                <b-card-body>
                    <b-button block v-for="(room, roomIdx) in itm.room"
                            :variant="activeRoom.id==room.id?'primary':'secondary'"
                            :key="roomIdx" 
                            @click="onSelectRoom(room)">
                        {{room.name}}
                    </b-button>
                </b-card-body>
            </b-collapse>
        </b-card>
    </div>
</template>





<script>
    import listMixin from '../../mixins/list.js'    
    export default {
        name:'izba-room-list',
        components: {
        },
        mixins:[listMixin],
        data:function(){
            return{
                activeRoom:{id:0},
                refreshCmd:'room.json'
            };
        },//data
        methods:{
            afterRefresh:function(){
            },
            onSelectRoom:function(room){
                this.activeRoom = room;
                this.$Izba.getBus().$emit('selectRoom', {room:room});
            }
        }
    };
</script>
    
