/**
 * общие свойства и методы комполнентов, связанных со списками
 */


export default {
        data(){
            return{
                list:[]
            };
        },
        created(){
            this.refresh();
        },
        methods:{
            /**
             * Действия, выполняемые после обновления
             * @returns {undefined}
             */
            afterRefresh:function(){
            },
            /**
             * Обновление списка с сервера
             * @returns {undefined}
             */
            refresh:function(){
                if (this.refreshCmd ===undefined)
                    return;
                this.$Izba.easyGet(this.refreshCmd)
                    .then((data)=>{
                        this.list = data; 
                        this.afterRefresh();
                    })
                    .catch(()=> this.list = []);
            }
        }
        
}
