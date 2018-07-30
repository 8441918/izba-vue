import component from './izba-device.vue'

const Plugin = {
    install: function(Vue){
        Vue.component('izba-device', component);
    }
};

export default Plugin;

