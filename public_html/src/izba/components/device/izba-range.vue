<template>
    <div>
        <h1>
            <b-button @click="change(-1)">-</b-button>
            <b-badge>{{currentVal}}</b-badge>
            <b-button @click="change(1)">+</b-button>
        </h1>
        <div v-if="speedButton >0">
            <b-button v-for="(btn, idx) in speedButtons"
                      :key="index"
                      @click="set(btn.val)">
                {{btn.val}}
            </b-button>
            
        </div>
    </div>
</template>

<script>
    export default {
            props:{
                delta:{
                    type:Number,
                    default:0
                },
                initValue:{
                    type:Number,
                    default:0
                },
                maxValue:{
                    type:Number,
                    default:255
                },
                minValue:{
                    type:Number,
                    default:0
                },
                /**
                 * Количество кнопок быстрого перехода
                 */
                speedButton:{
                    type:Number,
                    default:0
                }
            },
            computed:{
                speedButtons:function(){
                    var btns = [];
                    var btnCnt = parseInt(this.speedButton, 10);
                    if (btnCnt >0){
                        var step = Math.floor ((parseInt(this.maxValue, 10) - parseInt(this.minValue, 10)) / btnCnt);
                        for (let i=0; i <= btnCnt;i++)
                            btns.push({val:parseInt(this.minValue, 10) + step * i});
                    }
                    return btns;   
                }
            },
            data:function(){
                return{
                    currentVal:parseInt(this.initValue, 10)+parseInt(this.delta, 10)
                };
            },
            methods:{
                change:function(d){
                    var v = this.currentVal + d;
                    if (v <= this.maxValue && v >= this.minValue){
                        this.currentVal = v;
                        this.$emit('onChange', this.currentVal, this.currentVal - parseInt(this.initValue, 10));
                    }
                },
                set:function(val){
                    console.log ('set', val);
                    var v = parseInt(val, 10);
                    if (v <= this.maxValue && v >= this.minValue){
                        this.currentVal = v;
                        this.$emit('onChange', this.currentVal, this.currentVal - parseInt(this.initValue, 10));
                    }
                }
                
            }
         
    }
</script>
    

