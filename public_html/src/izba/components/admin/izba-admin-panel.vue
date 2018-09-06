<template>
    <div>
        <b-button :pressed.sync="dragToggle" @click="chDragMode" variant="outline-primary">Позиция</b-button>
        <span v-if="dragMode">
            Прямая ссылка на комнату: 
            <a :href="link"> 
                {{link}}
            </a>
        </span>
    </div>
</template>

<script>
    import dragDevMixin from '../../mixins/dragmode.js'
    export default {
        components: {
        },
        computed:{
            link:function(){
                return this.$Izba.currentRoom.url;
            }
        },
        mixins:[dragDevMixin],
        data:function(){
            return{
                dragToggle:false
            };
        },
        methods:{
            chDragMode:function(){
                this.$Izba.getBus().$emit('dragMode', this.dragToggle);
            }
        }
    }
</script>

