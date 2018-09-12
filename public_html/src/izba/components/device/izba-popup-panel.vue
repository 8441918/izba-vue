<template>
        <div class="izba-device" @click.stop="showPopOver" 
            :style="getStyle"
            >
            <div :id="'popower-'+id">&nbsp;</div>
            <slot name="data"></slot>
            <b-popover v-if="!modal" :show.sync="show" :target="'popower-'+id" 
                placement='bottom'
                :title="title">
                <slot name="popup"></slot>
            </b-popover>
            <b-modal v-if="modal" v-model="show">
                <slot name="popup"></slot>
            </b-modal>
        </div>
</template>

<script>
    import deviceMixin from '../../mixins/device.js'
    export default {
        mixins:[deviceMixin], 
        props:{
            title:{
                type:String,
                default:''
            },
            shiftIconX:{
                type:Number,
                default:0
            },
            modal:{
                type:Boolean,
                default:false
            }
        },
        components: {
        },
        methods:{
            clickAction:function(){
                this.currentValue = ((this.currentValue > 0)?0:1);
                return true;
            },
            showPopOver:function(){
                if (this.readOnly)
                    return;
                this.show=!this.show;
                this.$emit('onShow', this.show);
            }
        },
        computed:{
            getStyle:function(){
                var border = {
                    'background-position': this.shiftIconX + 'px ' + this.bgY + 'px'
                };
                return border;
            }
        },
        data:function(){
            return{
                show:false
            };
        },
        beforeDestroy:function(){
            this._onClickRoomView && this.$Izba.getBus().$off('clickRoomView', this._onClickRoomView);
        },
        mounted:function(){
            this._onClickRoomView = ()=>{
                if (!this.modal)
                    this.show = false;
                    this.$emit('onShow', this.show);
            };
            this.$Izba.getBus().$on('clickRoomView', this._onClickRoomView);
        }
    }
</script>
