<template>
    <!--
        В мобильных браузерах (по крайней мере в анлроиде 4,0),
        элемиенты управления, пмещенные во внутрь draggable-resizable,
        не обрабатывается событие click. 
        Пришлось сделать эту замену.
    -->
    <div :style="getContainerStyle" :id="'container-'+id">
        <vue-draggable-resizable 
            v-if="getDragMode"
            :id="id"
            :w="w" :h="h" :minw="10" :minh="10"
            :x="currentX" :y="currentY"
            :parent="true" 
            :draggable="dragMode"
            :resizable="false"
            :style="getStyle"
            @dragging="onDrag"
            @dragstop="onDragStop">
                <slot></slot>
                <b-tooltip :target="id"  placement="top">
                    {{name}}
                    <p>
                        X: {{ currentX }} / Y: {{ currentY }}
                    </p>
                </b-tooltip>
        </vue-draggable-resizable>
        <template v-else>
            <slot></slot>
            <b-tooltip :target="'container-'+id"  placement="top">
                <p>
                    {{name}}
                </p>
            </b-tooltip>
        </template>
    </div>
</template>

<script>
    import VDR from 'vue-draggable-resizable'
    import deviceMixin from '../../mixins/device.js'
    import dragDeveMixin from '../../mixins/dragmode.js'
    
    export default {
        mixins:[deviceMixin, dragDeveMixin],    
        components: {
            'vue-draggable-resizable':VDR
        },
        
        data:function(){
            return{
                currentX:this.x,
                currentY:this.y
            };
        },//data
        computed:{
            getDragMode:function(){
                return this.dragMode && this.draggable;
            },
            getStyle:function(){
                var border = {
                    border:((this.getDragMode)?'1px solid':'0px')
                };
                return border;
            },
            getContainerStyle:function(){
                if (this.getDragMode)
                    return{
                        position:'absolute',
                        top:'0px',
                        left:'0px',
                        width:'100%',
                        height:'100%'
                        //'z-index':'0'
                    };
                return{
                    position:'absolute',
                    width:this.w + 'px',
                    height:this.h + 'px',
                    top:this.currentY + 'px',
                    left:this.currentX + 'px'
                };
            }
        },
        methods:{
            onDrag:function(x,y){
                this.currentX = x;
                this.currentY = y;
            },
            onDragStop:function(x,y){
                console.log (this.id, 'stop:', x, y);
            }
        }
    };
</script>
