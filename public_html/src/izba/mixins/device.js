/**
 * Общие совйства и методы для компонентов, связанных с устройствами
 */


export default {
        props:{
            devId:{
                type: Number,
                default:0
            },
            currentValue:{
                type: Number,
                default:-1
            },
            name:{
                type: String,
                default:'Устройство'
            },
            readOnly:{
                type: Boolean,
                default:false
            }
        },
        data:function(){
            return{
                id:'device-'
            };    
        },
        mounted(){
            this.id += this._uid.toString();
        },
        methods:{
            afterRefresh:function(){
            
            },
            refresh:function(){
                this.afterRefresh();
            },
            sentValue:function(val){
                if (this.readOnly)
                    return;
                if (val===undefined)
                    val = this.currentValue;
                console.log('Device: ', this.devId, ' sentValue:', val);
            }
        }
}

