import component from './izba-notification.vue'

const Plugin = {
    install: function(Vue){
        Vue.component('izba-notification', component);
    }
};

export default Plugin;

