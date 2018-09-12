/**
 * Общие совйства и методы для компонентов, связанных с устройствами
 */


/**
 * Устройство может быть составным
 * В этом случае devId должен быть объектом, содержащим название и номером порта.
 * При этом currentValue так же должно быть объектом с такими же названиями 
 * устройства и значением для этого устройства. 
 */

export default {
    devTypes:{
        'dimer':{
            ratioX:1,
            iconRow:0
        },
        'display':{
            ratioX:2,   //ширина элемента
            iconRow:0  //строка набора иконок 
            
        },
        'job':{
            ratioX:1,
            iconRow:4
        },
        'light':{
            ratioX:1,
            iconRow:1
        },
        'player':{
            ratioX:1,
            iconRow:2
        }, 
        'rgb':{
            ratioX:1,
            iconRow:0
        },
        'term':{
            ratioX:2,
            iconRow:3
            
        }
    },
    props:{
        devId:{
            type: [Number,Object],
            default:0
        },
        currentValue:{
            type: [Number,Object],
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
        },
        draggable:{
            type:Boolean,
            default: true
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
        _sentValue (dev, val){
            console.log('Device: ', dev, ' sentValue:', val);
        },
        sentValue:function(val){
            if (this.readOnly)
                return;
            if (val===undefined)
                val = this.currentValue;
            if (this.devId instanceof Object){
                for (let id in this.devId)
                    this._sentValue(this.devId[id], val[id]);
            }else
                this._sentValue(this.devId, val);
        }
    }
}

