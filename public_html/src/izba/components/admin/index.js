import component from './izba-admin-panel.vue'


const Plugin = {
    install: function(Vue){
        Vue.component('izba-admin-panel', component);
    }
};

export default Plugin;