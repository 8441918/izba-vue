<template>
    <izba-popup-panel :title="'Сценарий: ' + name" :iconRow="iconRow" 
        :shiftIconX="shiftIconX" :readOnly="readOnly">
        <!--div slot="data"></div-->
        <div slot="popup">
            <b-button :id="'job-'+id" @click="change()">{{ctrlCaption}}</b-button>
            <b-button variant="success" @click="sentValue(2)">Выполнить</b-button>
        </div>
    </izba-popup-panel>
    
</template>

<script>
    import deviceMixin from '../../mixins/device.js'
    import cmpPopUp from './izba-popup-panel.vue'
    export default {
        mixins:[deviceMixin],
        components: {
            'izba-popup-panel':cmpPopUp
        },
        computed:{
            ctrlCaption:function(){
                return ((this.currentValue===0)?'Остановлен':'Активирован');
            },
            shiftIconX:function(){
                return ((this.currentValue>0)?0:-this.w);
            }
        },
        methods:{
            change:function(){
                this.currentValue = ((this.currentValue>0)?0:1);
                this.sentValue();
            }
        }
    }
</script>