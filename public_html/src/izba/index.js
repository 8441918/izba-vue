import axios from 'axios'
import * as components from './components'
import IzbaUrl from './utils/izba-url'


const IzbaPlugin = {
    install:function(Vue, options){
        var urlObj = IzbaUrl();
        if (Vue.Izba !== undefined)
            return;
        var roomId = ((urlObj.url.params['roomid']!==undefined)?urlObj.url.params['roomid']:0);
        var bus = new Vue({});
        bus.$on('selectRoom', (room)=>{
            roomId = room.room.id;
        });
        //регистрация компонентов
        for (let plugin in components){
            Vue.use (components[plugin]);
        }
        
        
        var url = function(cmd){
            var d = new Date();
            var path = ((options !== undefined && options.izbaServer !== undefined)?options.izbaServer:'rest/')+ cmd;
            path += '?roomid=' + roomId;
            path += '&msec=' + d.getTime();
            return path;
        };
        
        Vue.prototype.$Izba = {
            currentRoom:{
                id:roomId,
                url:urlObj.build([{name:'roomid', value:roomId}])
            },
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


