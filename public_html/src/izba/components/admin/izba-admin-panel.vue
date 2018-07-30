<template>
    <div>
        <b-button :pressed.sync="dragToggle" @click="dragMode" variant="outline-primary">Позиция</b-button>
    </div>
</template>

<script>
    export default {
        components: {
        },
        //mixins:[listMixin],
        data:function(){
            return{
                dragToggle:false
            };
        },
        methods:{
            dragMode:function(){
                this.$Izba.getBus().$emit('dragMode', this.dragToggle);
            }
        }
    }
</script>

