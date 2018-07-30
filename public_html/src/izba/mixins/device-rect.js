/**
 * Размеры, пложение и тип устройства
 */
export default {
    props:{
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
            default:'display',
            validator:function(val){
                return ['display', 'light', 'player'].indexOf(val) !== -1;
            }
        }
    }
}

