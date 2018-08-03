/**
 * Общие совйства и методы для компонентов, связанных с устройствами
 */


export default {
    devTypes:{
        'display':{
            ratioX:2,
            iconRow:0
        },
        'light':{
            ratioX:1,
            iconRow:1
        },
        'player':{
            ratioX:1,
            iconRow:2
        }, 
        'term':{
            ratioX:2,
            iconRow:3
        }
    },
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
        },
        iconRow:{
            type: Number,
            default:0
        },
        x:{
            type:Number,
            default:0
        },
        y:{
            type:Number,
            default: 0
        },
        w:{
            type:Number,
            default:50
        },
        h:{
            type:Number,
            default: 50
        },
        devType:{
            type:String,
            default:'display'
        }
            
    },
    data:function(){
        return{
            id:'device-',
            bgY: (-this.h) * this.iconRow
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

