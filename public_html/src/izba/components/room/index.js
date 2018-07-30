import component from './izba-room-list.vue'
import cmpRoomView from './izba-room-view.vue'

const Plugin = {
    install: function(Vue){
        Vue.component('izba-room-list', component);
        Vue.component('izba-room-view', cmpRoomView);
    }
};

export default Plugin;

