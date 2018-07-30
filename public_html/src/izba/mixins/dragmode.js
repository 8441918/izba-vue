/**
 * Устройства, которые могут иметь произвольное расположение
 */
export default {
    data:function(){
        return{
            dragMode: false
        };
    },
    mounted:function(){
        this._onDragMode = (drag)=>{
            this.dragMode = drag;
        };
        this.$Izba.getBus().$on('dragMode', this._onDragMode);
    },
    beforeDestroy:function(){
        this._onDragMode && this.$Izba.getBus().$off('dragMode', this._onDragMode);
    }
}
