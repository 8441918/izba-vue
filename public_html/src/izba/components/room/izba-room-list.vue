
<template>
        <div role="tablist">
            <b-card no-body class="mb-1"
                v-for="(itm,  index) in roomList"
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
    var BreakException = {};
    import listMixin from '../../mixins/list.js'    
    export default {
        name:'izba-room-list',
        components: {
        },
        mixins:[listMixin],
        data:function(){
            return{
                showCollapse:false,
                activeRoom:{id:this.$Izba.currentRoom.id},
                refreshCmd:'room.json'
            };
        },//data
        computed:{
            roomList:function(){
                if (this.$Izba.currentRoom.id === 0)
                    return this.list;
                var lst=[];
                try{
                    this.list.forEach((item)=>{
                        let r = item.room.find((itm)=>itm.id === parseInt(this.activeRoom.id, 10));
                        if (r !== undefined){
                            this.showCollapse  = true;
                            let floor = item;
                            this.onSelectRoom(r);
                            floor.room = [r];
                            lst = [floor];
                            throw BreakException;
                        }
                    });
                }catch(e){
                    if (e !== BreakException) throw e;
                }
                return lst;
            }
        },
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
    
