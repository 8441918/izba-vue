<template>
        <div class="izba-device" @click="showPopOver" 
            :style="getStyle"
            >
            <div :id="'popower-'+id">&nbsp;</div>
            <slot name="data"></slot>
            <b-popover :show.sync="show" :target="'popower-'+id" 
                placement='bottom'
                :title="title">
                <slot name="popup"></slot>
            </b-popover>
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
                if (!this.readOnly){
                    this.show=!this.show;
                    this.$emit('onShow', this.show);
                }
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
        }
    }
</script>
