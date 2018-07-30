import iPlayer from './izba-mediaplayer.vue'

const Plugin = {
    install: function(Vue){
        Vue.component('izba-mediaplayer', iPlayer);
    }
};

export default Plugin;


