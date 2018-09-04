<template>
    <div id="app">
        <b-container>
            <b-row>
                <b-col sm="*">
                    <div class="mediumFrame">
                        <izba-room-list></izba-room-list>
                    </div>
                </b-col>
                <b-col class="roomFrame">
                    <izba-room-view></izba-room-view>
                    <izba-notification></izba-notification>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <izba-mediaplayer></izba-mediaplayer>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <izba-admin-panel></izba-admin-panel>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data () {
            return {
                msg: 'Привет, я главное приложение'
            };
        }
    }
</script>

<style scoped>
    #app{
        width: 950px;
        margin: 0 auto;
    }
    .col{
        border: 1px solid; 
        border-radius: 8px;
        padding: 8px;
        margin: 8px;
    }
    .mediumFrame{
        height:400px;
        overflow-y: scroll;
    }
    .roomFrame{
        position:relative;
        
    }
</style>

