import axios from 'axios'
import * as components from './components'

const IzbaPlugin = {
    install:function(Vue, options){
        if (Vue.Izba !== undefined)
            return;
        var roomId = 0;
        var bus = new Vue({});
        bus.$on('selectRoom', (room)=>{
            roomId = room.id;
        });
        //регистрация компонентов
        for (let plugin in components){
            Vue.use (components[plugin]);
        }
        
        
        var url = function(cmd){
            var path = ((options !== undefined && options.izbaServer !== undefined)?options.izbaServer:'rest/')+ cmd;
            path += '?roomid=' + roomId;
            return path;
        };
        
        Vue.prototype.$Izba = {
            easyGet:function (cmd){
                return new Promise((resolve, reject)=>{
                    axios.get(url(cmd))
                        .then(resp=>resolve(resp.data.items))
                        .catch(e=>reject(e));
                });
            },
            getBus:function(){
                return bus;
            }
            
        };
    }
};

export default IzbaPlugin


